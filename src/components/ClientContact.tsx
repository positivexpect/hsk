'use client';

import dynamic from 'next/dynamic';

const AnimatedContact = dynamic(() => import('@/components/AnimatedContact'), {
  ssr: false
});

export default function ClientContact() {
  return <AnimatedContact />;
}
