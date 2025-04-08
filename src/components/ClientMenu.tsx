'use client';

import dynamic from 'next/dynamic';

const AnimatedMenu = dynamic(() => import('@/components/AnimatedMenu'), {
  ssr: false
});

export default function ClientMenu() {
  return <AnimatedMenu />;
}
