
"use client";
import { useState } from 'react';
import Section from "@/components/Section";
import PropertyCard from "@/components/PropertyCard";
import { Search, Filter, Home, Building2, TrendingUp, Key } from 'lucide-react';

// Data moved to a constant for filtering
const allProperties = [
    {
        image: "https://images.unsplash.com/photo-1613490493576-2f045a129208?q=80&w=1974&auto=format&fit=crop",
        type: "For Sale",
        price: "₹ 2.5 Cr",
        title: "Luxury Villa - Azure",
        location: "Whitefield, Bangalore",
        description: "4BHK Premium Villa with private pool, landscaped gardens, and smart home automation.",
        beds: 4, baths: 4, area: "3,200 sqft",
        category: "Sale"
    },
    {
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        type: "For Rent",
        price: "₹ 1.2 L / mo",
        title: "Skyline Heights Apartment",
        location: "Financial District, Hyderabad",
        description: "Fully furnished 3BHK apartment with panoramic city views and club house amenities.",
        beds: 3, baths: 3, area: "2,100 sqft",
        category: "Rent"
    },
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        type: "Commercial",
        price: "₹ 8.5 Cr",
        title: "Tech Park Office Space",
        location: "Cyber City, Gurgaon",
        description: "Grade A office space suitable for MNCs, with ample parking and metro connectivity.",
        beds: 0, baths: 2, area: "5,000 sqft",
        category: "Commercial"
    },
    {
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
        type: "For Sale",
        price: "₹ 4.2 Cr",
        title: "Green Valley Estate",
        location: "Lonavala, Maharashtra",
        description: "Exclusive weekend home with mountain view, large deck and organic garden.",
        beds: 5, baths: 5, area: "4,500 sqft",
        category: "Sale"
    },
    {
        image: "https://images.unsplash.com/photo-1628624747186-a941947775b5?q=80&w=2069&auto=format&fit=crop",
        type: "For Sale",
        price: "₹ 95 L",
        title: "Urban Smart Home",
        location: "Hinjewadi, Pune",
        description: "Compact 2BHK smart home near IT park, ideal for young professionals.",
        beds: 2, baths: 2, area: "1,150 sqft",
        category: "Sale"
    },
    {
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
        type: "Investment",
        price: "₹ 1.8 Cr",
        title: "Sunrise Plots",
        location: "New Airport Road, Bangalore",
        description: "Gated community plots with excellent infrastructure and future appreciation.",
        beds: 0, baths: 0, area: "1,500 sqft",
        category: "Investment"
    },
    // Adding more items for "fuller" feel
    {
        image: "https://images.unsplash.com/photo-1600596542815-2a4d9f0152ba?q=80&w=2075&auto=format&fit=crop",
        type: "For Sale",
        price: "₹ 5.5 Cr",
        title: "Palm Jumeirah Villa",
        location: "Kochi, Kerala",
        description: "Waterfront luxury villa with private jetty and infinity pool.",
        beds: 5, baths: 6, area: "4,200 sqft",
        category: "Sale"
    },
    {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        type: "For Rent",
        price: "₹ 85 K / mo",
        title: "Garden City Condo",
        location: "Mysore Road, Bangalore",
        description: "2BHK garden facing condo with access to golf course.",
        beds: 2, baths: 2, area: "1,350 sqft",
        category: "Rent"
    },
    {
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        type: "For Sale",
        price: "₹ 3.1 Cr",
        title: "Penthouse Suit",
        location: "Marine Drive, Mumbai",
        description: "Sea-facing penthouse with premium interiors and private elevator.",
        beds: 3, baths: 3, area: "2,800 sqft",
        category: "Sale"
    },
];

const categories = [
    { id: 'All', label: 'All Properties', icon: <Home size={18} /> },
    { id: 'Sale', label: 'For Sale', icon: <Key size={18} /> },
    { id: 'Rent', label: 'For Rent', icon: <Building2 size={18} /> },
    { id: 'Commercial', label: 'Commercial', icon: <Building2 size={18} /> },
    { id: 'Investment', label: 'Investment', icon: <TrendingUp size={18} /> },
];

export default function PropertiesPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProperties = allProperties.filter(property => {
        const matchesCategory = activeCategory === 'All' || property.category === activeCategory;
        const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            property.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main style={{ paddingTop: '100px', paddingBottom: '4rem', background: '#f8fafc' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>

                {/* Page Header */}
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h1 className="text-gradient-gold" style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
                        Find Your Perfect Space
                    </h1>
                    <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Browse our exclusive collection of premium properties tailored to your lifestyle and investment goals.
                    </p>
                </div>

                {/* Filters & Search */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.25)', // Very transparent liquid glass
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    padding: '1.5rem',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
                    marginBottom: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '100px',
                                    border: activeCategory === cat.id ? '1px solid var(--accent)' : '1px solid rgba(100, 100, 100, 0.2)',
                                    background: activeCategory === cat.id ? 'var(--accent)' : 'rgba(255, 255, 255, 0.4)',
                                    color: activeCategory === cat.id ? 'white' : 'var(--primary)',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    fontSize: '0.95rem'
                                }}
                            >
                                {cat.icon}
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ position: 'relative', maxWidth: '600px', width: '100%', margin: '0 auto' }}>
                        <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                        <input
                            type="text"
                            placeholder="Search by location, property name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(100, 100, 100, 0.2)',
                                background: 'rgba(255, 255, 255, 0.4)',
                                color: 'var(--primary)',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Results Grid */}
                {filteredProperties.length > 0 ? (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
                        {filteredProperties.map((prop, index) => (
                            <PropertyCard key={index} {...prop} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--muted)' }}>
                        <Filter size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                        <h3>No properties found</h3>
                        <p>Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
