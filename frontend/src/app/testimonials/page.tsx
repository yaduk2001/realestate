"use client";

import { useState, useEffect } from "react";
import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
    // Background images for slideshow
    const backgroundImages = [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <main style={{
            paddingTop: '80px',
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
            minHeight: '100vh'
        }}>
            {/* Premium Header Section with Image Slideshow */}
            <div style={{
                position: 'relative',
                padding: '6rem 2rem',
                textAlign: 'center',
                overflow: 'hidden',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Background Image Slideshow */}
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: currentImageIndex === index ? 1 : 0,
                            transition: 'opacity 1.5s ease-in-out',
                            zIndex: 0
                        }}
                    />
                ))}

                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(51, 65, 85, 0.85) 100%)',
                    zIndex: 1
                }}></div>

                {/* Decorative Elements */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 2
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '150px',
                    height: '150px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                    zIndex: 2
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                    {/* Rating Stars */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginBottom: '1.5rem'
                    }}>
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={28}
                                fill="#f59e0b"
                                color="#f59e0b"
                                style={{
                                    animation: `starPulse 2s ease-in-out ${i * 0.1}s infinite`
                                }}
                            />
                        ))}
                    </div>

                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: 700,
                        color: 'white',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        textShadow: '0 2px 20px rgba(0,0,0,0.2)'
                    }}>
                        Client Testimonials
                    </h1>
                    <p style={{
                        fontSize: '1.3rem',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        What our happy customers say about us
                    </p>

                    {/* Stats */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '4rem',
                        marginTop: '3rem'
                    }}>
                        <div>
                            <div style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                color: '#f59e0b',
                                marginBottom: '0.25rem'
                            }}>2000+</div>
                            <div style={{ color: 'rgba(255,255,255,0.7)' }}>Happy Clients</div>
                        </div>
                        <div>
                            <div style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                color: '#f59e0b',
                                marginBottom: '0.25rem'
                            }}>4.9/5</div>
                            <div style={{ color: 'rgba(255,255,255,0.7)' }}>Average Rating</div>
                        </div>
                        <div>
                            <div style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                color: '#f59e0b',
                                marginBottom: '0.25rem'
                            }}>500+</div>
                            <div style={{ color: 'rgba(255,255,255,0.7)' }}>5-Star Reviews</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid-cols-3">
                        <TestimonialCard
                            quote="Detailed-oriented, professional, and incredibly helpful. They found me the perfect home in record time."
                            author="Rahul Sharma"
                            role="Software Engineer"
                            image="https://randomuser.me/api/portraits/men/32.jpg"
                        />
                        <TestimonialCard
                            quote="The transparency in their process is unmatched. I felt secure and well-informed throughout the deal."
                            author="Priya Patel"
                            role="Entrepreneur"
                            image="https://randomuser.me/api/portraits/women/44.jpg"
                        />
                        <TestimonialCard
                            quote="Excellent investment advice. The property I bought through XYZ Properties has already appreciated by 20%!"
                            author="Vikram Singh"
                            role="Investor"
                            image="https://randomuser.me/api/portraits/men/85.jpg"
                        />
                        <TestimonialCard
                            quote="Outstanding service from start to finish. They made the entire property buying process smooth and stress-free."
                            author="Anjali Mehta"
                            role="Doctor"
                            image="https://randomuser.me/api/portraits/women/68.jpg"
                        />
                        <TestimonialCard
                            quote="Their market knowledge is exceptional. Found me a great commercial space at the perfect location."
                            author="Arjun Kapoor"
                            role="Business Owner"
                            image="https://randomuser.me/api/portraits/men/54.jpg"
                        />
                        <TestimonialCard
                            quote="Best real estate experience I've ever had. Professional, responsive, and genuinely care about their clients."
                            author="Sneha Reddy"
                            role="Architect"
                            image="https://randomuser.me/api/portraits/women/29.jpg"
                        />
                    </div>
                </div>
            </div>

            {/* Trust Badges Section */}
            <div style={{
                background: 'white',
                padding: '4rem 2rem',
                borderTop: '1px solid #e2e8f0'
            }}>
                <div className="container">
                    <h3 style={{
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        color: 'var(--muted)',
                        marginBottom: '2rem',
                        fontWeight: 600
                    }}>
                        Trusted by Leading Organizations
                    </h3>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '3rem',
                        flexWrap: 'wrap',
                        opacity: 0.6
                    }}>
                        {['Times of India', 'Economic Times', 'Hindu Business', 'Forbes India', 'Mint'].map((brand, i) => (
                            <div key={i} style={{
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                color: '#64748b',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes starPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            `}</style>
        </main>
    );
}
