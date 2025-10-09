'use client';
import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface TechStack {
  name: string;
  icon: string;
  color: string;
  hexColor: string;
  category?: 'design' | 'development' | 'tools' | 'framework' | 'language';
}

interface InfiniteScrollCarouselProps {
  items: TechStack[];
  direction?: 'left' | 'right';
  duration?: number;
  className?: string;
  showGradient?: boolean;
}

const InfiniteScrollForSkills = ({
  items,
  direction = 'left',
  duration = 25,
  className,
  showGradient = true,
}: InfiniteScrollCarouselProps) => {
  const [width, setWidth] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const duplicatedItems = [...items, ...items];

  React.useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth / 2;
      setWidth(scrollWidth);
    }
  }, [items]);

  // Animation configuration based on direction
  const animationConfig = {
    x: direction === 'left' ? [0, -width] : [-width, 0],
  };

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="relative">
        {/* Gradient Overlays */}
        {showGradient && (
          <>
            <div className="absolute top-0 bottom-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent sm:w-20" />
            <div className="absolute top-0 right-0 bottom-0 z-10 w-12 bg-gradient-to-l from-black to-transparent sm:w-20" />
          </>
        )}

        {/* Scrolling Content */}
        <motion.div
          ref={containerRef}
          className="flex gap-2 lg:gap-4"
          animate={width > 0 ? animationConfig : {}}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: duration,
              ease: 'linear',
            },
          }}
        >
          {duplicatedItems.map((item, index) => (
            <Button
              key={`${item.name}-${index}`}
              size="lg"
              variant="ghost"
              className="flex shrink-0 cursor-pointer items-center gap-1 rounded-md border border-gray-400 bg-transparent transition-colors hover:bg-gray-800/50"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={42}
                height={42}
                // className="object-contain"
                className="object-contain opacity-70 grayscale transition-opacity hover:opacity-100"
              />
              <p className={`text-sm font-medium text-gray-400`}>{item.name}</p>
            </Button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollForSkills;
