import { ShieldCheck, TrendingUp, Users, Award } from 'lucide-react';
import styles from './Features.module.css';

export default function WhyUs() {
    const features = [
        { icon: <ShieldCheck size={28} />, title: 'Trust & Transparency', desc: 'We prioritize honesty and clarity in every transaction, ensuring you have complete peace of mind.' },
        { icon: <Award size={28} />, title: 'Excellence in Service', desc: 'Over 10 years of experience delivering premium real estate solutions to satisfied clients.' },
        { icon: <TrendingUp size={28} />, title: 'Verified Properties', desc: 'Every property listed undergoes a rigorous verification process to ensure legal compliance.' },
        { icon: <Users size={28} />, title: 'Customer-Centric', desc: 'Your needs come first. We dedicatedly work to find the perfect match for your requirements.' },
    ];

    return (
        <div className={styles.whyGrid}>
            {features.map((feature, index) => (
                <div key={index} className={styles.whyItem}>
                    <div className={styles.whyIconBox}>{feature.icon}</div>
                    <div className={styles.whyContent}>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
