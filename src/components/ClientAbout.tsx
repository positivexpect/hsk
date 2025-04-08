'use client';

import dynamic from 'next/dynamic';

const AnimatedAbout = dynamic(() => import('@/components/AnimatedAbout'), {
  ssr: false
});

export default function ClientAbout() {
  return <AnimatedAbout />;
}
