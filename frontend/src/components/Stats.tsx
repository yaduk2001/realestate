
import styles from './Stats.module.css';

const stats = [
    { label: "Happy Families", value: "500+" },
    { label: "Properties Sold", value: "₹200Cr+" },
    { label: "Years Experience", value: "12+" },
    { label: "Cities Covered", value: "8" }
];

export default function Stats() {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <h3 className={styles.value}>{stat.value}</h3>
                            <p className={styles.label}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
