import AnimatedHome from '@/components/AnimatedHome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Welcome to Hit The Spot Kitchen - Authentic Puerto Rican Cuisine",
  description: "Hit The Spot Kitchen brings authentic Puerto Rican cuisine to Fredericksburg, VA. Experience our food truck, restaurant, and private chef services featuring traditional family recipes.",
  openGraph: {
    title: "Hit The Spot Kitchen - Puerto Rican Cuisine in Fredericksburg",
    description: "Experience authentic Puerto Rican cuisine at Hit The Spot Kitchen. Food truck, restaurant, and private chef services in Fredericksburg, VA."
  }
};

export default function Home() {
  return <AnimatedHome />;
}
