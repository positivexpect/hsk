import AnimatedMenu from '@/components/AnimatedMenu';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Menu - Authentic Puerto Rican Dishes",
  description: "Explore our menu of authentic Puerto Rican dishes, from traditional mofongo and rice bowls to empanadas and tembleque. Available for dine-in, food truck events, and catering.",
  openGraph: {
    title: "Hit The Spot Kitchen Menu - Puerto Rican Cuisine",
    description: "Browse our selection of authentic Puerto Rican dishes, featuring traditional favorites and modern interpretations."
  }
};

export default function Menu() {
  return <AnimatedMenu />;
}
