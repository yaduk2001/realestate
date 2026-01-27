
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import Section from '@/components/Section';
import styles from './FeaturedCarousel.module.css';

interface CarouselProps {
    properties: Array<React.ComponentProps<typeof PropertyCard>>;
}


export default function FeaturedCarousel({ properties }: CarouselProps) {
    // Duplicate properties to create seamless loop
    const duplicatedProperties = [...properties, ...properties];

    return (
        <section className={`${styles.sectionContainer} ${styles.lightBg}`}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <h2 style={{ fontSize: '2.75rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                        <span className="text-gradient-gold">Featured Properties</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--muted)', fontWeight: 500 }}>
                        Highlights from our premium collection
                    </p>
                </div>
            </div>

            {/* Slider OUTSIDE the container for full width */}
            <div className={styles.outerBorderLayer}>
                <div className={styles.carouselWrapper}>
                    <div className={styles.trackContainer}>
                        <motion.div
                            className={styles.track}
                            animate={{
                                x: ["0%", "-50%"]
                            }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 80, // Slower speed
                            }}
                        >
                            {duplicatedProperties.map((prop, index) => (
                                <div
                                    key={index}
                                    className={styles.slide}
                                >
                                    <PropertyCard {...prop} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

