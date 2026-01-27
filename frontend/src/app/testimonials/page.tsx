import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <Section id="testimonials" title="Client Testimonials" subtitle="What our happy customers say about us">
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
                </div>
            </Section>
        </main>
    );
}
