import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Building2, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand */}
                    <div>
                        <div className={styles.brandLogo}>
                            <Building2 className="text-accent" />
                            <span>XYZ Properties</span>
                        </div>
                        <p className={styles.brandDesc}>
                            Building Trust. Delivering Value. Your trusted partner in residential and commercial real estate since 2015.
                        </p>
                        <div className={styles.socials}>
                            <Link href="#" className={styles.socialLink}><Facebook size={20} /></Link>
                            <Link href="#" className={styles.socialLink}><Instagram size={20} /></Link>
                            <Link href="#" className={styles.socialLink}><Twitter size={20} /></Link>
                            <Link href="#" className={styles.socialLink}><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className={styles.heading}>Quick Links</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}><Link href="/" className={styles.link}>Home</Link></li>
                            <li className={styles.linkItem}><Link href="#about" className={styles.link}>About Us</Link></li>
                            <li className={styles.linkItem}><Link href="#services" className={styles.link}>Services</Link></li>
                            <li className={styles.linkItem}><Link href="#properties" className={styles.link}>Properties</Link></li>
                            <li className={styles.linkItem}><Link href="#contact" className={styles.link}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className={styles.heading}>Services</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}><Link href="#" className={styles.link}>Residential Properties</Link></li>
                            <li className={styles.linkItem}><Link href="#" className={styles.link}>Commercial Spaces</Link></li>
                            <li className={styles.linkItem}><Link href="#" className={styles.link}>Land & Plots</Link></li>
                            <li className={styles.linkItem}><Link href="#" className={styles.link}>Property Consultation</Link></li>
                            <li className={styles.linkItem}><Link href="#" className={styles.link}>Investment Advisory</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className={styles.heading}>Contact Us</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}>
                                <div className={styles.contactItem}>
                                    <MapPin size={16} className={styles.iconWrapper} />
                                    <span>XYZ Towers, Business District, India</span>
                                </div>
                            </li>
                            <li className={styles.linkItem}>
                                <div className={styles.contactItem}>
                                    <Phone size={16} className={styles.iconWrapper} />
                                    <span>+91 91234 56789</span>
                                </div>
                            </li>
                            <li className={styles.linkItem}>
                                <div className={styles.contactItem}>
                                    <Mail size={16} className={styles.iconWrapper} />
                                    <span>contact@xyzproperties.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} XYZ Properties. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className={styles.link}>Privacy Policy</Link>
                        <Link href="#" className={styles.link}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
