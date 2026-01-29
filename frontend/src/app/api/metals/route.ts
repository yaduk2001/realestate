import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

// Define the shape of our stored data
export interface MetalRate {
    date: string;
    timeSlot: 'morning' | 'evening';
    timestamp: string;
    rates: Record<string, number>;
}

const CACHE_KEY = 'metals_current';
const HISTORY_KEY = 'metals_history';

// Initialize Redis client (uses Vercel's Upstash integration env vars)
function getRedisClient() {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;

    if (!url || !token) {
        return null;
    }

    return new Redis({ url, token });
}

export async function GET() {
    try {
        const NOW = new Date();
        const hour = NOW.getHours();

        // Determine target date and time slot
        let targetDate: Date;
        let targetSlot: 'morning' | 'evening';

        if (hour < 9) {
            // Before 9 AM - show yesterday's evening data
            const yesterday = new Date(NOW);
            yesterday.setDate(NOW.getDate() - 1);
            targetDate = yesterday;
            targetSlot = 'evening';
        } else if (hour >= 9 && hour < 19) {
            // Between 9 AM and 7 PM - show today's morning data
            targetDate = NOW;
            targetSlot = 'morning';
        } else {
            // After 7 PM - show today's evening data
            targetDate = NOW;
            targetSlot = 'evening';
        }

        const dateStr = targetDate.toISOString().split('T')[0];

        // Try to get cached data from Upstash Redis
        let cachedRate: MetalRate | null = null;
        let history: MetalRate[] = [];
        const redis = getRedisClient();

        if (redis) {
            try {
                cachedRate = await redis.get<MetalRate>(CACHE_KEY);
                history = await redis.get<MetalRate[]>(HISTORY_KEY) || [];
            } catch (redisError) {
                console.log('Redis error:', redisError);
            }
        } else {
            console.log('Redis not configured (missing KV_REST_API_URL or KV_REST_API_TOKEN)');
        }

        // Check if we have valid cached data for current slot
        if (cachedRate && cachedRate.date === dateStr && cachedRate.timeSlot === targetSlot) {
            return NextResponse.json({
                current: cachedRate,
                history: history.slice(0, 14) // Last 7 days (14 entries)
            });
        }

        // Need to fetch new data
        const apiKey = process.env.METALS_DEV_API_KEY;

        if (!apiKey) {
            // No API key - return cached data if available
            if (cachedRate) {
                return NextResponse.json({
                    current: cachedRate,
                    history: history.slice(0, 14),
                    warning: 'API key not configured, showing last known rates'
                });
            }
            return NextResponse.json({ error: 'No API key and no cached data available' }, { status: 500 });
        }

        // Fetch from API
        const apiUrl = `https://api.metals.dev/v1/latest?api_key=${apiKey}&currency=USD&unit=toz`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            console.error(`Metals API Failed: ${response.status}`);

            // Return cached data if API fails
            if (cachedRate) {
                return NextResponse.json({
                    current: cachedRate,
                    history: history.slice(0, 14),
                    warning: 'API unavailable, showing last known rates'
                });
            }
            return NextResponse.json({ error: 'API failed and no cached data' }, { status: 500 });
        }

        const data = await response.json();

        // Create new rate entry
        const newRate: MetalRate = {
            date: dateStr,
            timeSlot: targetSlot,
            timestamp: NOW.toISOString(),
            rates: data.metals
        };

        // Save to Upstash Redis
        if (redis) {
            try {
                await redis.set(CACHE_KEY, newRate);

                // Add to history if not duplicate
                const existingIndex = history.findIndex(r => r.date === dateStr && r.timeSlot === targetSlot);
                if (existingIndex === -1) {
                    history.unshift(newRate);
                    // Keep only last 30 entries
                    if (history.length > 30) {
                        history = history.slice(0, 30);
                    }
                    await redis.set(HISTORY_KEY, history);
                }
            } catch (redisError) {
                console.log('Failed to save to Redis:', redisError);
            }
        }

        return NextResponse.json({
            current: newRate,
            history: history.slice(0, 14)
        });

    } catch (error) {
        console.error('Metals API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
