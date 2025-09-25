'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { AnimatePresence, motion, type Variants } from 'motion/react';

const ContactUsSection = () => {
  const socialLinks = ['LINKEDIN', 'GITHUB', 'INSTAGRAM', 'DRIBBBLE'];
  const year = new Date().getFullYear();

  // 🎭 ANIMATION VARIANTS
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const lineDrawVariants: Variants = {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  };

  const logoVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.8,
      },
    },
    hover: {
      rotate: 8,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 1.2,
      },
    },
  };

  const descriptionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 1.5,
      },
    },
  };

  const buttonsContainerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 1.8,
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const footerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 2.2,
      },
    },
  };

  const socialCardVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 2.5,
      },
    },
  };

  const socialItemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const dotVariants: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="container-fluid relative h-full p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex h-full items-center justify-center bg-black/40 p-4">
        <motion.div variants={fadeUpVariants} className="h-full w-full text-center">
          {/* 🎯 HEADER SECTION WITH LOGO */}
          <motion.div className="mb-8 flex items-center justify-center" variants={fadeUpVariants}>
            {/* Left Line */}
            <motion.div
              className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"
              variants={lineDrawVariants}
              style={{ originX: 1 }}
            />

            {/* Logo */}
            <motion.div variants={logoVariants} whileHover="hover" className="mx-8 cursor-pointer">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/60 shadow-2xl backdrop-blur-sm">
                <motion.div
                  className="relative -skew-x-12 transform text-3xl font-bold text-gray-900"
                  whileHover={{
                    rotate: 15,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="drop-shadow-sm">F</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Line */}
            <motion.div
              className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"
              variants={lineDrawVariants}
              style={{ originX: 0 }}
            />
          </motion.div>

          {/* 🎯 MAIN CONTENT */}
          <motion.h1
            variants={titleVariants}
            className="mb-6 text-5xl font-bold tracking-tight md:text-6xl"
            whileHover={{
              scale: 1.02,
              textShadow: '0 0 20px rgba(255,255,255,0.5)',
              transition: { duration: 0.3 },
            }}
          >
            Muhammad Faisal
          </motion.h1>

          <motion.p
            variants={descriptionVariants}
            className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600 md:text-2xl"
            whileHover={{
              color: '#374151',
              scale: 1.01,
              transition: { duration: 0.3 },
            }}
          >
            Got an idea or project in mind? Lets create something amazing together!
          </motion.p>

          {/* 🎯 BUTTONS */}
          <motion.div variants={buttonsContainerVariants} className="flex justify-center gap-4">
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                size="lg"
                className="px-8 py-3 text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Download CV
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* 🎯 FOOTER SECTION */}
          <motion.div
            variants={footerVariants}
            className="mt-24 flex flex-col items-center justify-between gap-8 md:flex-row"
          >
            {/* Copyright */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <p className="text-base font-medium text-gray-500">
                © {year}. Developed and Designed by Muhammad Faisal
              </p>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              variants={socialCardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
              className="rounded-xl bg-gray-900/90 px-6 py-4 backdrop-blur-md"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex items-center gap-6"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link}
                      variants={socialItemVariants}
                      className="flex items-center gap-2"
                    >
                      {index > 0 && (
                        <motion.span
                          variants={dotVariants}
                          className="h-1 w-1 rounded-full bg-orange-500"
                        />
                      )}
                      <motion.span
                        whileHover={{
                          color: '#ffffff',
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.2 }}
                        className="cursor-pointer text-sm font-medium text-gray-400 transition-colors hover:text-white"
                      >
                        {link}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUsSection;
