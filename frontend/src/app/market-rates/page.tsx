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
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{usd}</span>
                <span style={{ fontSize: '0.8em', color: 'var(--muted)' }}>{inr}</span>
            </div>
        );
    };

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>Previous Market Rates</h1>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>Loading market data...</div>
            ) : history.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>No historical data available yet.</div>
            ) : (
                <div style={{ overflowX: 'auto' }}>
                    <table className={styles.tableDisplay}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time Slot</th>
                                <th>Gold (XAU)</th>
                                <th>Silver (XAG)</th>
                                <th>Platinum (XPT)</th>
                                <th>Palladium (XPD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((item, idx) => (
                                <tr key={idx}>
                                    <td style={{ fontWeight: 500 }}>{formatDate(item.date)}</td>
                                    <td>
                                        <span className={`${styles.badge} ${item.timeSlot === 'morning' ? styles.badgeMorning : styles.badgeEvening}`}>
                                            {item.timeSlot === 'morning' ? '9 AM' : '7 PM'}
                                        </span>
                                    </td>
                                    <td style={{ fontFamily: 'monospace', color: 'var(--primary)', fontWeight: 'bold' }}>
                                        {item.rates.gold ? formatPrice(item.rates.gold) : item.rates.XAU ? formatPrice(item.rates.XAU) : '-'}
                                    </td>
                                    <td style={{ fontFamily: 'monospace' }}>
                                        {item.rates.silver ? formatPrice(item.rates.silver) : item.rates.XAG ? formatPrice(item.rates.XAG) : '-'}
                                    </td>
                                    <td style={{ fontFamily: 'monospace' }}>
                                        {item.rates.platinum ? formatPrice(item.rates.platinum) : item.rates.XPT ? formatPrice(item.rates.XPT) : '-'}
                                    </td>
                                    <td style={{ fontFamily: 'monospace' }}>
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
