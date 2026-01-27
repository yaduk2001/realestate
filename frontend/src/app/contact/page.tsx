
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <main className={styles.main}>
            {/* Hero Section with 3D Building */}
            <div style={{
                position: 'relative',
                height: '350px',
                marginBottom: '4rem',
                overflow: 'hidden'
            }}>
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                    alt="Modern Office Building"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.6)'
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
                        Get In Touch
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        opacity: 0.95,
                        maxWidth: '600px',
                        margin: '0 auto',
                        textShadow: '0 1px 5px rgba(0,0,0,0.3)'
                    }}>
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </div>

            <div style={{ padding: '0 0 6rem 0' }}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Contact Info Cards */}
                        <div className={styles.infoSection}>
                            {/* 3D Building Image */}
                            <div style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                marginBottom: '2rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                                    alt="Office Building"
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            <h3 className={styles.infoTitle}>
                                Ready to start your journey?
                            </h3>
                            <p className={styles.infoDescription}>
                                Whether you're buying, selling, or just have a few questions, our team is here to assist you.
                                Reach out to us today to schedule a consultation.
                            </p>

                            <div className={styles.singleContactPanel}>
                                <div className={styles.contactItem}>
                                    <div className={styles.iconWrapper}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h5 className={styles.cardTitle}>Visit Us</h5>
                                        <p className={styles.cardText}>XYZ Towers, Business District, Financial City, India</p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.iconWrapper}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h5 className={styles.cardTitle}>Call Us</h5>
                                        <p className={styles.cardText}>+91 91234 56789<br />+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.iconWrapper}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h5 className={styles.cardTitle}>Email Us</h5>
                                        <p className={styles.cardText}>info@xyzproperties.com<br />support@xyzproperties.com</p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.iconWrapper}>
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h5 className={styles.cardTitle}>Office Hours</h5>
                                        <p className={styles.cardText}>Monday - Saturday: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form with Building Background */}
                        <div className={styles.formSection}>
                            <ContactForm />

                            {/* Additional 3D Building Image */}
                            <div style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                marginTop: '2rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
                                    alt="Luxury Building"
                                    style={{
                                        width: '100%',
                                        height: '250px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
