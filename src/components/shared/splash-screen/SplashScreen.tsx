'use client';

import { motion } from 'motion/react';
import { useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

export default function SplashScreen({ onComplete, duration = 2500 }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="x-[9999] fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Abstract Background Objects */}

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Logo Text */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
          }}
          className="text-5xl font-bold text-transparent [-webkit-text-stroke:1px_white]"
        >
          Welcome to my Portfolio
        </motion.h1>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-[2rem] flex justify-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
              className="h-2 w-2 rounded-[50%] bg-white/60"
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-md absolute bottom-[4rem] font-light tracking-tighter text-white/70"
      >
        Loading experience...
      </motion.p>
    </motion.div>
  );
}
