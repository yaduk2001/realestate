import { Quote } from 'lucide-react';
import styles from './Features.module.css';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    image?: string;
}

export default function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
    return (
        <div className={styles.testimonialCard}>
            <Quote size={40} className={styles.quoteIcon} />
            <p className={styles.testimonialText}>"{quote}"</p>
            <div className={styles.client}>
                {image && <img src={image} alt={author} className={styles.avatar} />}
                <div className={styles.clientInfo}>
                    <h4>{author}</h4>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    );
}
