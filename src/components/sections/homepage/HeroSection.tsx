'use client';

import { motion, type Variants } from 'motion/react';

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative z-20 flex min-h-dvh items-center justify-center px-8 md:px-16 lg:px-20">
      <motion.div
        className="w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="mb-8 text-3xl leading-tight font-light md:text-6xl lg:text-7xl xl:text-7xl"
        >
          <span className="text-white">Interface</span>
          <span className="text-gleamy-gray-600 text-orange-500">.</span>
          <span className="text-gleamy-gray-500">Experience</span>
          {/* <span className="text-gleamy-gray-600 text-orange-500">.</span> */}
          {/* <span className="text-gleamy-gray-400">Experience</span>
          <span className="text-gleamy-gray-600">.</span> */}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-4xl font-light md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="text-white">Hand-Coded Perfection</span>
          <span className="text-gleamy-gray-600 text-orange-500">.</span>
          <br />
          <span className="text-white">&beyond</span>
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default HeroSection;
