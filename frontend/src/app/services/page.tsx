import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { Home, Building, Map, Users, TrendingUp, Scale } from "lucide-react";

export default function ServicesPage() {
    return (
        <main style={{
            paddingTop: '80px',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #fce7f3 100%)',
            minHeight: '100vh'
        }}>
            <Section id="services" title="Our Services" subtitle="Comprehensive real estate solutions tailored to your needs" bg="light">
                <div className="grid-cols-3">
                    <ServiceCard icon={<Home size={28} />} title="Residential Sales" description="Find your dream home from our portfolio of luxury apartments, villas, and gated communities." />
                    <ServiceCard icon={<Building size={28} />} title="Commercial Leasing" description="Premium office spaces and retail outlets in prime business districts." />
                    <ServiceCard icon={<Map size={28} />} title="Land & Plots" description="Verified land parcels and plots with high appreciation potential." />
                    <ServiceCard icon={<Users size={28} />} title="Property Consultation" description="Expert advice on buying, selling, and property management." />
                    <ServiceCard icon={<TrendingUp size={28} />} title="Investment Advisory" description="Data-driven insights to help you make smart investment decisions." />
                    <ServiceCard icon={<Scale size={28} />} title="Legal Assistance" description="Complete legal support and documentation for hassle-free transactions." />
                </div>
            </Section>
        </main>
    );
}
