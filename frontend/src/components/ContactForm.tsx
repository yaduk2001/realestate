"use client";
import styles from './ContactForm.module.css';

export default function ContactForm() {
    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.group}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" className={styles.input} placeholder="John Doe" />
            </div>

            <div className={styles.group}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
            </div>

            <div className={styles.group}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input type="tel" id="phone" className={styles.input} placeholder="+91 98765 43210" />
            </div>

            <div className={styles.group}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" className={styles.textarea} placeholder="I am interested in..." />
            </div>

            <button type="submit" className={styles.submitBtn}>
                Send Message
            </button>
        </form>
    );
}
