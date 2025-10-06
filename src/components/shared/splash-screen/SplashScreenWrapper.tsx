'use client';

import dynamic from 'next/dynamic';
import { AnimatePresence } from 'motion/react';
import { useSplash } from '@/hooks/useSplash';

const SplashScreen = dynamic(() => import('.'), {
  ssr: false,
});

export default function SplashWrapper({ children }: { children: React.ReactNode }) {
  const { isVisible, hideSplash } = useSplash();

  return (
    <>
      <AnimatePresence mode="wait">
        {isVisible && <SplashScreen onComplete={hideSplash} />}
      </AnimatePresence>

      <div style={{ display: isVisible ? 'none' : 'block' }}>{children}</div>
    </>
  );
}
