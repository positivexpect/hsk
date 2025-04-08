import AnimatedContact from '@/components/AnimatedContact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Hit The Spot Kitchen for catering, private chef services, or food truck bookings in Fredericksburg, VA. We'd love to bring authentic Puerto Rican cuisine to your event!",
  openGraph: {
    title: "Contact Hit The Spot Kitchen",
    description: "Get in touch with us for authentic Puerto Rican catering, private chef services, and food truck events in Fredericksburg, VA."
  }
};

export default function Contact() {
  return <AnimatedContact />;
}
