import AnimatedEvents from '@/components/AnimatedEvents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Events & Services - Food Truck & Private Chef",
  description: "Book Hit The Spot Kitchen for your next event! We offer food truck services, private chef experiences, and catering throughout Fredericksburg, VA and surrounding areas.",
  openGraph: {
    title: "Hit The Spot Kitchen Events & Services",
    description: "From food truck events to private chef experiences, bring authentic Puerto Rican cuisine to your next gathering."
  }
};

export default function Events() {
  return <AnimatedEvents />;
}
