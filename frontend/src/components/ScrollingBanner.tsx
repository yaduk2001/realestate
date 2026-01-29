'use client';
import { useEffect, useState } from 'react';

interface MetalRates {
    [key: string]: number;
}

interface ApiResponse {
    current?: {
        rates: MetalRates;
        timestamp: string;
    };
    error?: string;
    warning?: string;
}

export default function ScrollingBanner() {
    const [rates, setRates] = useState<MetalRates | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string>('');

    useEffect(() => {
        fetch('/api/metals')
            .then((res) => res.json())
            .then((data: ApiResponse) => {
                if (data.current && data.current.rates) {
                    setRates(data.current.rates);
                    if (data.current.timestamp) {
                        const date = new Date(data.current.timestamp);
                        setLastUpdated(date.toLocaleString('en-IN', {
                            dateStyle: 'medium',
                            timeStyle: 'short'
                        }));
                    }
                } else if (data.error) {
                    setError(data.error);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to fetch rates', err);
                setError('Failed to load rates');
                setLoading(false);
            });
    }, []);

    const USD_TO_INR = 84.50;

    const formatINR = (val: number) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val * USD_TO_INR);

    // Don't show anything while loading
    if (loading) {
        return (
            <section style={{
                background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
                padding: '2rem 0',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
            }}>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>Loading market rates...</span>
            </section>
        );
    }

    // Don't show if error or no rates
    if (error || !rates) {
        return null;
    }

    const items = [
        { label: 'Gold', value: rates.gold || rates.XAU },
        { label: 'Silver', value: rates.silver || rates.XAG },
        { label: 'Platinum', value: rates.platinum || rates.XPT },
        { label: 'Palladium', value: rates.palladium || rates.XPD },
    ].filter(item => item.value);

    if (items.length === 0) return null;

    return (
        <section style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
            padding: '2rem 0',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
            {/* Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '1.5rem'
            }}>
                <span style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.9)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                }}>
                    Live Market Rates {lastUpdated && `• Last Updated: ${lastUpdated}`}
                </span>
            </div>

            {/* Rates Grid */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3rem',
                flexWrap: 'wrap',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 1rem'
            }}>
                {items.map((item, i) => (
                    <div key={i} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span style={{
                            color: '#fbbf24',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>
                            {item.label}
                        </span>
                        <span style={{
                            color: 'white',
                            fontSize: '1.75rem',
                            fontWeight: 300,
                            fontFamily: 'monospace'
                        }}>
                            {formatINR(item.value)}
                        </span>
                        <span style={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '0.75rem'
                        }}>
                            per troy oz
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
