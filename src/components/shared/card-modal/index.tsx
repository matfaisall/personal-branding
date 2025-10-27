'use client';
import React from 'react';
import { motion, type Easing } from 'motion/react';
import { X } from 'lucide-react';
import { CardListInterface } from '@/types/certificate';
import Image from 'next/image';

interface CardModalProps {
  feature: CardListInterface;
  onClose: () => void;
}

const SMOOTH_EASE: Easing = [0.25, 0.1, 0.25, 1];

const CardModal = React.memo<CardModalProps>(({ feature, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-black/95"
        style={{ backdropFilter: 'blur(8px)' }}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-0 sm:items-center sm:p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${feature.id}`}
      >
        <motion.div
          className="relative min-h-screen w-full overflow-visible rounded-none border-0 bg-[#1a1a1a] p-4 shadow-2xl will-change-transform sm:min-h-0 sm:max-w-xl sm:rounded-2xl sm:border sm:border-white/5 sm:p-6 md:max-w-2xl md:p-8 lg:max-w-4xl lg:p-10"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20,
          }}
          transition={{
            duration: 0.25,
            ease: SMOOTH_EASE,
          }}
        >
          <button
            onClick={onClose}
            className="sticky top-4 right-4 z-10 ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a] shadow-lg backdrop-blur-sm transition-all duration-200 hover:rotate-90 hover:border-white/20 hover:bg-white/10 sm:absolute sm:top-6 sm:right-6"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>

          {/* Image Container - FULLY RESPONSIVE */}
          <motion.div
            className="relative mb-4 w-full overflow-hidden rounded-lg bg-[#0d0d0d] sm:mb-6 sm:rounded-xl md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="relative w-full" style={{ aspectRatio: '3 / 2' }}>
              {feature.imageSrc !== '' ? (
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="h-full w-full object-contain p-2 sm:p-0"
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
            </div>
          </motion.div>

          <motion.div
            className="mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            <h2
              id={`modal-title-${feature.id}`}
              className="text-2xl leading-tight font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-2xl"
            >
              {feature.title}
            </h2>
          </motion.div>

          {/* Content - Responsive spacing */}
          {feature.fullContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="space-y-4 text-left sm:space-y-6"
            >
              {feature.fullContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-[#8b8b8b] sm:text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              {/* Testimonial - Responsive */}
              <div className="space-y-3 py-4 text-center sm:space-y-4 sm:py-6 md:space-y-6 md:py-8">
                <blockquote className="text-base leading-relaxed font-medium text-balance text-white sm:text-lg md:text-xl">
                  {`"${feature.fullContent.testimonial}"`}
                </blockquote>
                <div className="text-sm font-medium text-[#666666] sm:text-base md:text-lg">
                  {feature.fullContent.company}
                </div>
              </div>
            </motion.div>
          )}

          {/* Safe area spacing untuk mobile dengan notch */}
          <div className="h-safe-bottom sm:hidden" />
        </motion.div>
      </div>
    </>
  );
});

CardModal.displayName = 'CardModal';

export default CardModal;
