
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import Stats from "@/components/Stats";
import Section from "@/components/Section";
import WhyUs from "@/components/WhyUs";
import styles from "./Home.module.css";

const moreProperties = [
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
    type: "Investment",
    price: "₹ 1.8 Cr",
    title: "Sunrise Plots",
    location: "New Airport Road, Bangalore",
    description: "Gated community plots with excellent infrastructure and future appreciation.",
    beds: 0, baths: 0, area: "1,500 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-2a4d9f0152ba?q=80&w=2075&auto=format&fit=crop",
    type: "For Sale",
    price: "₹ 5.5 Cr",
    title: "Palm Jumeirah Villa",
    location: "Kochi, Kerala",
    description: "Waterfront luxury villa with private jetty and infinity pool.",
    beds: 5, baths: 6, area: "4,200 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    type: "For Rent",
    price: "₹ 85 K / mo",
    title: "Garden City Condo",
    location: "Mysore Road, Bangalore",
    description: "2BHK garden facing condo with access to golf course.",
    beds: 2, baths: 2, area: "1,350 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    type: "For Sale",
    price: "₹ 3.1 Cr",
    title: "Penthouse Suit",
    location: "Marine Drive, Mumbai",
    description: "Sea-facing penthouse with premium interiors and private elevator.",
    beds: 3, baths: 3, area: "2,800 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=2074&auto=format&fit=crop",
    type: "Investment",
    price: "₹ 45 L",
    title: "Eco Valley Plots",
    location: "Wayanad, Kerala",
    description: "Hillside plots perfect for vacation homes and resorts.",
    beds: 0, baths: 0, area: "5,000 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop",
    type: "For Sale",
    price: "₹ 1.5 Cr",
    title: "Suburban Family Home",
    location: "Tambaram, Chennai",
    description: "Spacious independent house with double car parking.",
    beds: 3, baths: 3, area: "1,900 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
    type: "Commercial",
    price: "₹ 12 Cr",
    title: "Downtown Retail Space",
    location: "MG Road, Bangalore",
    description: "High footfall retail showroom space in the heart of the city.",
    beds: 0, baths: 1, area: "3,000 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    type: "For Sale",
    price: "₹ 7.2 Cr",
    title: "Colonial Bungalow",
    location: "Ooty, Tamil Nadu",
    description: "Heritage property with colonial architecture and tea gardens.",
    beds: 6, baths: 6, area: "6,500 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop",
    type: "For Rent",
    price: "₹ 2.5 L / mo",
    title: "Expat Haven Villa",
    location: "Jubilee Hills, Hyderabad",
    description: "Ultra-luxury rental for expats with extensive security features.",
    beds: 4, baths: 5, area: "4,000 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    type: "For Sale",
    price: "₹ 1.9 Cr",
    title: "River View Apartment",
    location: "Aluva, Kochi",
    description: "3BHK apartment overlooking the Periyar river.",
    beds: 3, baths: 3, area: "1,750 sqft"
  }
];

const featuredProperties = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-2f045a129208?q=80&w=1974&auto=format&fit=crop",
    type: "For Sale",
    price: "₹ 2.5 Cr",
    title: "Luxury Villa - Azure",
    location: "Whitefield, Bangalore",
    description: "4BHK Premium Villa with private pool, landscaped gardens, and smart home automation.",
    beds: 4, baths: 4, area: "3,200 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    type: "For Rent",
    price: "₹ 1.2 L / mo",
    title: "Skyline Heights Apartment",
    location: "Financial District, Hyderabad",
    description: "Fully furnished 3BHK apartment with panoramic city views and club house amenities.",
    beds: 3, baths: 3, area: "2,100 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    type: "Commercial",
    price: "₹ 8.5 Cr",
    title: "Tech Park Office Space",
    location: "Cyber City, Gurgaon",
    description: "Grade A office space suitable for MNCs, with ample parking and metro connectivity.",
    beds: 0, baths: 2, area: "5,000 sqft"
  },
  {
    image: "https://images.unsplash.com/photo-1628624747186-a941947775b5?q=80&w=2069&auto=format&fit=crop",
    type: "For Sale",
    price: "₹ 95 L",
    title: "Urban Smart Home",
    location: "Hinjewadi, Pune",
    description: "Compact 2BHK smart home near IT park, ideal for young professionals.",
    beds: 2, baths: 2, area: "1,150 sqft"
  },
  ...moreProperties
];

export default function Home_Page() {
  return (
    <main>
      <Hero />
      <Stats />

      {/* Short About Preview */}
      <Section title="Who We Are" bg="light">
        <div className={styles.gridSection}>
          <div className={styles.textColumn}>
            <h3 className={`${styles.heading} text-gradient-tri`}>
              Your Gateway to Premium Real Estate
            </h3>
            <p className={styles.paragraph}>
              XYZ Properties is more than just a real estate agency; we are your partners in finding the perfect space that aligns with your dreams and lifestyle. With over a decade of excellence, we bring you the finest selection of homes and commercial spaces.
            </p>
            <Link href="/about" className={styles.readMore}>
              Read Our Story <ArrowRight size={20} />
            </Link>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Corporate Office"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </Section>

      <FeaturedCarousel properties={featuredProperties} />

      {/* Why Us Section */}
      <Section title="Why Choose Us" bg="gray">
        <div className={styles.gridSection}>
          <div>
            <WhyUs />
          </div>
          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974&auto=format&fit=crop"
              alt="Team Meeting"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className="text-gradient-gold" style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Ready to calculate your future?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem', opacity: 0.9, color: 'var(--muted)' }}>
            Let us help you find the property that matches your ambition. Schedule a consultation with our experts today.
          </p>
          <Link href="/contact" className="btn" style={{ background: 'var(--gradient-gold)', color: 'white', border: 'none', padding: '1rem 2.8rem', fontSize: '1.1rem', fontWeight: '600', boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)' }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}
