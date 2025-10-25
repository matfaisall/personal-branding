// animations.ts - File untuk semua konfigurasi animasi

import { Variants } from 'motion/react';

// Animation variants untuk header
export const headerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const headerTitleVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.4 },
  },
};

export const headerSubtitleVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.5 },
  },
};

export const statusIndicatorVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.6,
    },
  },
};

// Animation variants untuk section content
export const sectionFadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

// Animation variants untuk cards (certificates)
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export const cardHoverVariants = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

// Animation variants untuk navigation
export const navVariants: Variants = {
  scrolled: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(12px)',
    transition: { duration: 0.3 },
  },
  top: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(0px)',
    transition: { duration: 0.3 },
  },
};

// Function untuk generate stagger animation dengan custom delay
export const createStaggerVariants = (staggerDelay: number = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

// Viewport configuration untuk lazy animation
export const defaultViewport = {
  once: true,
  margin: '-50px',
  amount: 0.3,
};
