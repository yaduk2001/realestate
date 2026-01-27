
"use client";
import Section from "@/components/Section";
import styles from './About.module.css';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

export default function AboutPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            {/* Hero Story */}
            <Section id="about" title="Our Story">
                <div className={styles.storyGrid}>
                    <div className={styles.contentCol}>
                        <h3 className={`${styles.subHeading} text-gradient-royal`}>
                            Redefining Real Estate Standards
                        </h3>
                        <p className={styles.paragraph}>
                            At XYZ Properties, we believe that real estate is more than just buying and selling properties—it's about building dreams and securing futures.
                            With a rich legacy rooted in trust and integrity, we have established ourselves as a market leader in India's dynamic real estate landscape.
                        </p>
                        <p className={styles.paragraph}>
                            Our commitment to transparency and customer satisfaction sets us apart. Whether you are looking for a luxury home, a commercial investment,
                            or a strategic plot, our expert team is dedicated to guiding you every step of the way. We leverage data-driven insights and deep market knowledge to deliver value that stands the test of time.
                        </p>

                        <div className={styles.statsRow}>
                            <div className={styles.stat}>
                                <span className={styles.statNum}>10+</span>
                                <span className={styles.statLabel}>Years</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNum}>500+</span>
                                <span className={styles.statLabel}>Projects</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNum}>2k+</span>
                                <span className={styles.statLabel}>Clients</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageCol}>
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                            alt="Modern Office"
                            className={styles.heroImage}
                        />
                        <div className={styles.imgBadge}>
                            <Award size={24} color="var(--accent)" />
                            <span>Award Winning Agency</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Mission/Vision/Values */}
            <Section title="Our Core Values" bg="gray">
                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <div className={styles.iconBox}><Target size={28} /></div>
                        <h4>Our Mission</h4>
                        <p>To provide world-class real estate solutions that create lasting value for our clients through innovation and excellence.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.iconBox}><Eye size={28} /></div>
                        <h4>Our Vision</h4>
                        <p>To be the most trusted and preferred real estate partner in the region, known for our unwavering commitment to quality.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.iconBox}><Heart size={28} /></div>
                        <h4>Our Values</h4>
                        <p>Integrity, Transparency, Excellence, and Customer-Centricity are the pillars upon which our organization is built.</p>
                    </div>
                </div>
            </Section>

            {/* Leadership Section */}
            <Section title="Meet The Leadership">
                <div className={styles.teamGrid}>
                    <div className={styles.teamCard}>
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&h=800&auto=format&fit=crop&crop=faces" alt="CEO" />
                        <div className={styles.teamInfo}>
                            <h5>Rajesh Kumar</h5>
                            <span>Founder & CEO</span>
                        </div>
                    </div>
                    <div className={styles.teamCard}>
                        <img src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&h=800&auto=format&fit=crop&crop=faces" alt="COO" />
                        <div className={styles.teamInfo}>
                            <h5>Priya Desai</h5>
                            <span>Chief Operations Officer</span>
                        </div>
                    </div>
                    <div className={styles.teamCard}>
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&h=800&auto=format&fit=crop&crop=faces" alt="Head of Sales" />
                        <div className={styles.teamInfo}>
                            <h5>Amit Singh</h5>
                            <span>Head of Sales</span>
                        </div>
                    </div>
                    <div className={styles.teamCard}>
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&h=800&auto=format&fit=crop&crop=faces" alt="Head of Marketing" />
                        <div className={styles.teamInfo}>
                            <h5>Sneha Kapoor</h5>
                            <span>Head of Marketing</span>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
