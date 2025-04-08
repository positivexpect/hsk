'use client';

import dynamic from 'next/dynamic';

const AnimatedEvents = dynamic(() => import('@/components/AnimatedEvents'), {
  ssr: false
});

export default function ClientEvents() {
  return <AnimatedEvents />;
}
