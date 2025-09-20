"use client";

import { motion, type Variants } from "motion/react";

export default function HeroSection() {
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-dvh flex items-center justify-center px-8 md:px-16 lg:px-20 z-20">
      <motion.div
        className="max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-6xl lg:text-7xl xl:text-7xl font-light leading-tight mb-8"
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
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light"
        >
          <span className="text-white">Hand-Coded Perfection</span>
          <span className="text-gleamy-gray-600 text-orange-500">.</span>
          <br />
          <span className="text-white">&beyond</span>
        </motion.h2>
      </motion.div>
    </section>
  );
}
