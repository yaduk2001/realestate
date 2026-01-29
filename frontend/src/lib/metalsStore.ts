import fs from 'fs/promises';
import path from 'path';

// Define the shape of our stored data
export interface MetalRate {
    date: string;       // ISO Date string YYYY-MM-DD
    timeSlot: 'morning' | 'evening'; // 9AM or 7PM
    timestamp: string;  // ISO Full timestamp
    rates: Record<string, number>; // metal -> price
}

const DATA_FILE = path.join(process.cwd(), 'data', 'metals_history.json');

// Ensure data directory exists (double check in code)
async function ensureFile() {
    try {
        await fs.access(DATA_FILE);
    } catch {
        const dir = path.dirname(DATA_FILE);
        try {
            await fs.access(dir);
        } catch {
            await fs.mkdir(dir, { recursive: true });
        }
        await fs.writeFile(DATA_FILE, JSON.stringify([]));
    }
}

export async function getMetalsHistory(): Promise<MetalRate[]> {
    await ensureFile();
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    try {
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

export async function addMetalRate(rate: MetalRate) {
    const history = await getMetalsHistory();
    // We add to the beginning or end? Let's add to end.
    history.push(rate);
    await fs.writeFile(DATA_FILE, JSON.stringify(history, null, 2));
}

export async function getLatestStoredRate(): Promise<MetalRate | null> {
    const history = await getMetalsHistory();
    if (history.length === 0) return null;
    return history[history.length - 1];
}
