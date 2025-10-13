import { type Variants } from 'motion/react';

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

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -50,
    transition: {
      duration: 0.3,
    },
  },
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export const buttonVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
      delay: 0.1,
    },
  },
};

export const tabVariants: Variants = {
  inactive: {
    scale: 1,
    transition: { duration: 0.2 },
  },
  active: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  },
};
