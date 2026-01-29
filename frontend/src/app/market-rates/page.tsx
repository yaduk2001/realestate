'use client';

import { useEffect, useState } from 'react';
import styles from './MarketRates.module.css';

interface MetalRate {
    date: string;
    timeSlot: 'morning' | 'evening';
    timestamp: string;
    rates: Record<string, number>;
}

export default function MarketRatesPage() {
    const [history, setHistory] = useState<MetalRate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/metals')
            .then((res) => res.json())
            .then((data) => {
                if (data.history) {
                    setHistory(data.history);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const USD_TO_INR = 84.50;

    const formatPrice = (price: number) => {
        const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
        const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price * USD_TO_INR);
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{usd}</span>
                <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>{inr}</span>
            </div>
        );
    };

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>Previous Market Rates</h1>
            <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2rem' }}>
                Historical precious metal prices updated daily at 9 AM & 7 PM
            </p>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '3rem' }}>Loading market data...</div>
            ) : history.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem' }}>No historical data available yet.</div>
            ) : (
                <div style={{ overflowX: 'auto' }}>
                    <table className={styles.tableDisplay}>
                        <thead>
                            <tr>
                                <th style={{ padding: '1.25rem 1.5rem' }}>Date</th>
                                <th style={{ padding: '1.25rem 1.5rem' }}>Gold (XAU)</th>
                                <th style={{ padding: '1.25rem 1.5rem' }}>Silver (XAG)</th>
                                <th style={{ padding: '1.25rem 1.5rem' }}>Platinum (XPT)</th>
                                <th style={{ padding: '1.25rem 1.5rem' }}>Palladium (XPD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((item, idx) => (
                                <tr key={idx}>
                                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 500, fontSize: '1rem' }}>
                                        {formatDate(item.date)}
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', fontFamily: 'monospace' }}>
                                        {item.rates.gold ? formatPrice(item.rates.gold) : item.rates.XAU ? formatPrice(item.rates.XAU) : '-'}
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', fontFamily: 'monospace' }}>
                                        {item.rates.silver ? formatPrice(item.rates.silver) : item.rates.XAG ? formatPrice(item.rates.XAG) : '-'}
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', fontFamily: 'monospace' }}>
                                        {item.rates.platinum ? formatPrice(item.rates.platinum) : item.rates.XPT ? formatPrice(item.rates.XPT) : '-'}
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', fontFamily: 'monospace' }}>
                                        {item.rates.palladium ? formatPrice(item.rates.palladium) : item.rates.XPD ? formatPrice(item.rates.XPD) : '-'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}
