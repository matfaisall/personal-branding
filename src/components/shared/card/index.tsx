'use client';
import React from 'react';
import { CardListInterface } from '@/types/certificate';
import { motion, type Easing } from 'motion/react';
import { Plus } from 'lucide-react';
import Image from 'next/image';

const SMOOTH_EASE: Easing = [0.25, 0.1, 0.25, 1];

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
        className="group relative mx-auto flex h-full w-full cursor-pointer flex-col rounded-2xl border border-white/[0.01] bg-[#1a1a1a]/50 p-2 backdrop-blur-sm will-change-transform hover:bg-[#1f1f1f]/60 md:p-4"
        onClick={onClick}
        role="button"
        aria-label={`Open ${feature.title} details`}
        tabIndex={0}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: index * 0.03,
          ease: SMOOTH_EASE,
        }}
        whileHover={{
          y: -4,
        }}
        whileTap={{ scale: 0.98 }}
      >
        {showExpandButton && (
          <motion.button
            className="absolute right-4 bottom-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-orange-500/60 bg-orange-500/5 backdrop-blur-sm transition-all duration-200 hover:border-orange-500 hover:bg-orange-500/10 md:right-6 md:bottom-6"
            aria-label="Expand feature"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.03 + 0.15,
              duration: 0.25,
              ease: SMOOTH_EASE,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 90,
            }}
          >
            <Plus className="h-5 w-5 text-orange-500" />
          </motion.button>
        )}

        {/* Image Container */}
        <div
          className="relative w-full flex-shrink-0 overflow-hidden rounded-xl bg-[#0d0d0d]"
          style={{ aspectRatio: '3 / 2' }}
        >
          {feature.imageSrc !== '' ? (
            <Image
              src={feature.imageSrc}
              alt={feature.imageAlt}
              fill
              sizes="(max-width: 768px) 288px, 320px"
              className="rounded-xl object-cover object-center transition-transform duration-300 group-hover:scale-105"
              priority={index < 3}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <Image
                src="/images/image-not-found.png"
                alt="Image not found"
                width={60}
                height={60}
                className="opacity-50"
              />
              <p className="font-base mt-2 text-orange-100">Image not found</p>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-black opacity-30"></div>
        </div>

        {/* Title */}
        <div className="mt-4 flex min-h-[60px] flex-grow items-start md:mt-6">
          <h3 className="line-clamp-2 text-lg leading-snug font-medium text-balance md:text-xl">
            {feature.title}
          </h3>
        </div>
      </motion.div>
    );
  },
);

CardComp.displayName = 'CardComp';

export default CardComp;
