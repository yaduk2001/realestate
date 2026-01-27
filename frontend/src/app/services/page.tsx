import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { Home, Building, Map, Users, TrendingUp, Scale } from "lucide-react";

export default function ServicesPage() {
    return (
        <main style={{
            paddingTop: '80px',
            background: '#ffffff',
            minHeight: '100vh',
            position: 'relative'
        }}>
            {/* Hero Section with 3D Building */}
            <div style={{
                position: 'relative',
                height: '400px',
                marginBottom: '4rem',
                overflow: 'hidden',
                borderRadius: '0 0 48px 48px'
            }}>
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Architecture"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.7)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    width: '100%',
                    padding: '0 2rem'
                }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        Our Services
                    </h1>
                    <p style={{
                        fontSize: '1.3rem',
                        opacity: 0.95,
                        textShadow: '0 1px 5px rgba(0,0,0,0.3)'
                    }}>
                        Comprehensive real estate solutions tailored to your needs
                    </p>
                </div>
            </div>

            <Section id="services" title="" subtitle="" bg="light">
                <div className="grid-cols-3">
                    <ServiceCard icon={<Home size={28} />} title="Residential Sales" description="Find your dream home from our portfolio of luxury apartments, villas, and gated communities." />
                    <ServiceCard icon={<Building size={28} />} title="Commercial Leasing" description="Premium office spaces and retail outlets in prime business districts." />
                    <ServiceCard icon={<Map size={28} />} title="Land & Plots" description="Verified land parcels and plots with high appreciation potential." />
                    <ServiceCard icon={<Users size={28} />} title="Property Consultation" description="Expert advice on buying, selling, and property management." />
                    <ServiceCard icon={<TrendingUp size={28} />} title="Investment Advisory" description="Data-driven insights to help you make smart investment decisions." />
                    <ServiceCard icon={<Scale size={28} />} title="Legal Assistance" description="Complete legal support and documentation for hassle-free transactions." />
                </div>
            </Section>

            {/* 3D Building Showcase Section */}
            <div style={{
                padding: '6rem 0',
                background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
            }}>
                <div className="container">
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        textAlign: 'center',
                        marginBottom: '3rem',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--primary)'
                    }}>
                        Premium Properties Portfolio
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '2rem'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
                            alt="Modern Building"
                            style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover',
                                borderRadius: '24px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop"
                            alt="Luxury Tower"
                            style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover',
                                borderRadius: '24px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
