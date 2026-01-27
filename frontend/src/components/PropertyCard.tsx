import Link from 'next/link';
import { MapPin, BedDouble, Bath, Square, ArrowRight } from 'lucide-react';
import styles from './PropertyCard.module.css';

interface PropertyCardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    description: string;
    beds: number;
    baths: number;
    area: string;
    type: string;
}

export default function PropertyCard({
    image, title, location, price, description, beds, baths, area, type
}: PropertyCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} />
                <div className={styles.overlay} />
            </div>

            <span className={styles.badge}>{type}</span>

            <div className={styles.content}>
                <div className={styles.topInfo}>
                    <div className={styles.price}>{price}</div>
                    <div className={styles.location}>
                        <MapPin size={14} /> {location}
                    </div>
                </div>

                <h3 className={styles.title}>{title}</h3>

                <div className={styles.divider} />

                <div className={styles.details}>
                    <div className={styles.features}>
                        <span className={styles.feature}><BedDouble size={16} /> {beds}</span>
                        <span className={styles.feature}><Bath size={16} /> {baths}</span>
                        <span className={styles.feature}><Square size={16} /> {area}</span>
                    </div>

                    <Link href="#" className={styles.viewBtn}>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
