import { ArrowRight } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.learnMore}>
                    Learn More <ArrowRight size={16} />
                </div>
            </div>
        </div>
    );
}
