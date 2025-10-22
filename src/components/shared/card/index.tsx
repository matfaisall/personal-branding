'use client';
import React from 'react';
import { CardListInterface } from '@/types/certificate';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

export const SPRING_CONFIG = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
  duration: 1.2,
};

interface CardProps {
  feature: CardListInterface;
  onClick?: () => void;
  showExpandButton?: boolean;
  index?: number;
}

const CardComp = React.memo<CardProps>(
  ({ feature, onClick, showExpandButton = true, index = 0 }) => {
    return (
      <motion.div
        layoutId={`feature-${feature.id}`}
        className="group relative mx-auto flex h-full max-w-full cursor-pointer flex-col rounded-4xl border border-[rgba(255,255,255,0.03)] bg-[#1a1a1a]/50 p-2 transition-all duration-300 hover:bg-[#1f1f1f]/60 md:p-6"
        onClick={onClick}
        transition={SPRING_CONFIG}
        role="button"
        aria-label={`Open ${feature.title} details`}
        tabIndex={0}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        {showExpandButton && (
          <motion.button
            className="absolute right-6 bottom-6 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-orange-500 transition-colors"
            aria-label="Expand feature"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: index * 0.1 + 0.4,
                duration: 0.4,
                type: 'spring',
                stiffness: 200,
              },
            }}
            whileHover={{
              scale: 1.1,
              rotate: 90,
              transition: { duration: 0.3 },
            }}
          >
            <Plus className="size-4 text-orange-500" />
          </motion.button>
        )}

        {/* Container gambar dengan aspect ratio fixed */}
        <motion.div
          layoutId={`illustration-${feature.id}`}
          className="relative w-full flex-shrink-0 overflow-hidden rounded-2xl"
          style={{ aspectRatio: '3 / 2' }} // Force aspect ratio 2:1 (landscape)
          // initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: index * 0.1 + 0.2,
              duration: 0.5,
            },
          }}
        >
          <img
            src={feature.imageSrc}
            alt={feature.imageAlt}
            className="absolute inset-0 h-full w-full rounded-2xl object-cover object-center"
            loading={feature.id === 1 ? 'eager' : 'lazy'}
          />
        </motion.div>

        {/* Title area */}
        <div className="mt-6 flex flex-grow items-start">
          <motion.h3
            layoutId={`title-${feature.id}`}
            className="text-xl leading-tight font-medium text-balance"
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: index * 0.1 + 0.3,
                duration: 0.5,
              },
            }}
          >
            {feature.title}
          </motion.h3>
        </div>
      </motion.div>
    );
  },
);

CardComp.displayName = 'CardComp';

export default CardComp;
