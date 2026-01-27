import styles from './Section.module.css';

interface SectionProps {
    id?: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    children: React.ReactNode;
    bg?: 'light' | 'gray' | 'dark';
    className?: string;
}

export default function Section({ id, title, subtitle, children, bg = 'light', className = '' }: SectionProps) {
    return (
        <section id={id} className={`${styles.section} ${styles[bg]} ${className}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
                {children}
            </div>
        </section>
    );
}
