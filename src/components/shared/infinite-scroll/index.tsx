'use client';
import React from 'react';

import { motion, useReducedMotion } from 'framer-motion';
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

const InfiniteScrollForSkills: React.FC<InfiniteScrollCarouselProps> = ({
  items,
  direction = 'left',
  duration = 25,
  className,
  showGradient = true,
}) => {
  const [width, setWidth] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const duplicatedItems = React.useMemo(() => [...items, ...items], [items]);

  React.useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth / 2;
        setWidth(scrollWidth);
      }
    };

    calculateWidth();

    // debaunced resize observer

    let timeoutId: NodeJS.Timeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateWidth, 150);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
    };
  }, [items]);

  // Animation configuration based on direction
  const animationConfig = React.useMemo(
    () => ({
      x: direction === 'left' ? [0, -width] : [-width, 0],
    }),
    [direction, width],
  );

  // Jika user prefer reduced motion, disable animation
  const transitionConfig = React.useMemo(
    () => ({
      x: {
        repeat: Infinity,
        repeatType: 'loop' as const,
        duration: shouldReduceMotion ? duration * 3 : duration,
        ease: 'linear' as const,
      },
    }),
    [duration, shouldReduceMotion],
  );

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="relative">
        {/* Gradient Overlays */}
        {showGradient && (
          <>
            <div
              className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-black to-transparent sm:w-20"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-black to-transparent sm:w-20"
              aria-hidden="true"
            />
          </>
        )}

        {/* Scrolling Content */}
        {/* <motion.div
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
        </motion.div> */}

        <motion.div
          ref={containerRef}
          className="flex gap-2 lg:gap-4"
          animate={width > 0 && !shouldReduceMotion ? animationConfig : {}}
          transition={transitionConfig}
          style={{
            willChange: 'transform',
          }}
        >
          {duplicatedItems.map((item, index) => (
            <TechStackItem key={`${item.name}-${index}`} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// component for tech stack items
const TechStackItem = React.memo<{ item: TechStack; index: number }>(({ item, index }) => {
  return (
    <Button
      size="lg"
      variant="ghost"
      className="group flex shrink-0 cursor-pointer items-center gap-1 rounded-md border border-gray-400 bg-transparent transition-all duration-300 hover:scale-105 hover:border-gray-300 hover:bg-gray-800/50"
      tabIndex={index < 10 ? 0 : -1} // Only first set is keyboard accessible
      aria-label={`${item.name} technology`}
    >
      <div className="relative h-[42px] w-[42px]">
        <Image
          src={item.icon}
          alt={`${item.name} icon`}
          width={42}
          height={42}
          className="object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          loading="lazy"
          quality={75}
        />
      </div>
      <span className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
        {item.name}
      </span>
    </Button>
  );
});

TechStackItem.displayName = 'TechStackItem';

export default InfiniteScrollForSkills;
