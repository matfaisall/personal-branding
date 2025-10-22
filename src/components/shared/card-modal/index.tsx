'use client';
import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { CardListInterface } from '@/types/certificate';
import { SPRING_CONFIG } from '../card';

interface CardModalProps {
  feature: CardListInterface;
  onClose: () => void;
}

const CardModal = React.memo<CardModalProps>(({ feature, onClose }) => {
  // Prevent scroll on mount
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-40 bg-[#0d0d0d]/95"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-16 pb-0"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${feature.id}`}
      >
        <motion.div
          layoutId={`feature-${feature.id}`}
          className="relative h-full w-full max-w-3xl overflow-y-auto rounded-t-2xl border-t border-[#2a2a2a] bg-[#1a1a1a] p-12 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          transition={SPRING_CONFIG}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
        >
          {/* Close button with animation */}
          <motion.button
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={onClose}
            className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#404040] transition-colors hover:rotate-90 hover:border-[#555555]"
            aria-label="Close modal"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-4 w-4 text-[#8b8b8b]" />
          </motion.button>

          {/* Image with scale animation */}
          <motion.div
            layoutId={`illustration-${feature.id}`}
            className="relative mb-8 flex h-90 w-full items-center justify-center overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={feature.imageSrc}
              alt={feature.imageAlt}
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </motion.div>

          {/* Title with slide animation */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h2
              id={`modal-title-${feature.id}`}
              layoutId={`title-${feature.id}`}
              className="text-4xl leading-tight font-semibold tracking-tight lg:text-5xl"
              transition={SPRING_CONFIG}
            >
              {feature.title}
            </motion.h2>
          </motion.div>

          {/* Content with stagger animation */}
          {feature.fullContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-2xl space-y-8 text-left"
            >
              {feature.fullContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg leading-relaxed text-pretty text-[#8b8b8b]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.5,
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div
                className="space-y-6 py-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6 + feature.fullContent.paragraphs.length * 0.1,
                  duration: 0.5,
                }}
              >
                <blockquote className="text-xl leading-relaxed font-medium text-balance text-white">
                  {`"${feature.fullContent.testimonial}"`}
                </blockquote>
                <div className="flex justify-center">
                  <div className="text-lg font-medium text-[#666666]">
                    {feature.fullContent.company}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
});

CardModal.displayName = 'CardModal';

export default CardModal;
