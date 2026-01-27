
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <Section id="contact" title="Get In Touch" subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible." bg="light">
                <div className={styles.contactGrid}>
                    {/* Contact Info Cards */}
                    <div className={styles.infoSection}>
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

                    {/* Contact Form */}
                    <div className={styles.formSection}>
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </main>
    );
}
