import { type Variants } from 'motion/react';

// ==================== Animation Variants ====================
export const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

export const imageContainerVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      duration: 0.8,
    },
  },
};

export const imageVariants: Variants = {
  initial: { scale: 1.1, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.02,
    // rotate: 2,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

export const contentVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      delay: custom * 0.15,
    },
  }),
};

export const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: custom * 0.1,
    },
  }),
};

export const carouselVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 20,
      delay: custom * 0.2,
    },
  }),
};

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 25,
      duration: 0.8,
    },
  },
};

export const educationItemVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      delay: custom * 0.15,
    },
  }),
};
