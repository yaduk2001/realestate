'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const images = [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=2074&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2073&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop'
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Background Slider */}
            <AnimatePresence mode='wait'>
                <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt="Hero Background"
                    className={styles.bgImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                />
            </AnimatePresence>

            <div className={styles.overlay} />

            {/* Content */}
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className={styles.badge}>Welcome to XYZ Properties</span>
                    <h1 className={styles.title}>
                        Building Trust. <br />
                        <span style={{ color: 'var(--accent)' }}>Delivering Value.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Your trusted partner in residential and commercial real estate.
                        From luxury homes to prime commercial spaces, we help you find the perfect property.
                    </p>

                    <div className={styles.buttons}>
                        <Link href="#properties" className={`btn ${styles.heroBtnPrimary}`}>
                            Explore Properties <ArrowRight size={18} />
                        </Link>
                        <Link href="#contact" className={`btn ${styles.heroBtnOutline}`}>
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
