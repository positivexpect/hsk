'use client';

import dynamic from 'next/dynamic';

const AnimatedHome = dynamic(() => import('@/components/AnimatedHome'), {
  ssr: false
});

export default function ClientHome() {
  return <AnimatedHome />;
}
