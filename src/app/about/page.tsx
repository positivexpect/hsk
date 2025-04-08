
import ClientAbout from '@/components/ClientAbout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Our Puerto Rican Food Journey",
  description: "Learn about Hit The Spot Kitchen's journey, our commitment to authentic Puerto Rican cuisine, and our passion for sharing traditional flavors with Fredericksburg, VA.",
  openGraph: {
    title: "About Hit The Spot Kitchen - Our Story",
    description: "Discover the story behind Hit The Spot Kitchen and our mission to bring authentic Puerto Rican cuisine to Fredericksburg, VA."
  }
};

export default function About() {
  return <ClientAbout />;
}
