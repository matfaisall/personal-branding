'use client';

import React from 'react';
import { motion, useScroll, useTransform, type Variants, type Easing } from 'motion/react';
import { Send } from 'lucide-react';
import { ConfirmDownloadDialogs } from '@/components/shared/dialogs/ConfirmDownloadDialogs';
import { Button } from '@/components/ui/button';
import { socialMediaLinks } from '@/constant/nav-menu/socialmedia-links';

import Link from 'next/link';
const SMOOTH_EASE: Easing = [0.22, 0.61, 0.36, 1];

export default function ContactFooterAnimated() {
  const { scrollYProgress } = useScroll();
  const largeTextX = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const largeTextOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.025, 0.04, 0.025]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: SMOOTH_EASE,
      },
    },
  };

  const labelVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: SMOOTH_EASE,
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

  return (
    <div className="w-full">
      {/* Main Contact Section */}
      <motion.section
        className="container-fluid relative py-20 md:py-32 lg:py-40"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Side - Label */}
          <motion.div className="lg:col-span-6" variants={labelVariants}>
            <motion.h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Contact</motion.h1>
          </motion.div>

          {/* Right Side - Main Content */}
          <div className="lg:col-span-6">
            {/* Heading */}
            <motion.div className="mb-12 md:mb-16" variants={itemVariants}>
              <motion.h1
                className="mb-3 text-2xl leading-[1.1] font-semibold tracking-tight md:text-5xl lg:text-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: SMOOTH_EASE }}
              >
                Ready to start something great?
              </motion.h1>
              <motion.p
                className="text-2xl leading-[1.1] font-semibold tracking-tight text-gray-500 md:text-4xl lg:text-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: SMOOTH_EASE }}
              >
                Lets make it happen.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonsContainerVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                {/* download cta */}
                <ConfirmDownloadDialogs
                  triggerLabel="Download CV"
                  filePath="/cv/muhammad-faisal'scv.pdf"
                  fileName="muhammad-faisal'scv.pdf"
                />
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  // size="default"
                  variant="ghost"
                  className="text-md flex cursor-pointer items-center gap-4 px-4 py-3 font-medium transition-all duration-300 hover:text-orange-500"
                  onClick={() => (window.location.href = 'mailto:muh.faisal572@gmail.com')}
                >
                  Get in Touch{' '}
                  <span>
                    <Send strokeWidth={1.25} size={12} />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Divider Line */}
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: SMOOTH_EASE }}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-60" />
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="w-full py-10 lg:py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: SMOOTH_EASE }}
      >
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Copyright */}
          <motion.p
            className="text-sm font-light text-gray-500 lg:text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            © 2025. Developed and Designed by Muhammad Faisal.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-wrap items-center justify-center gap-4"
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
            {socialMediaLinks.map((sosmed, index) => (
              <motion.div
                key={sosmed.id}
                variants={socialItemVariants}
                className="flex items-center gap-2"
              >
                {index > 0 && (
                  <motion.span
                    variants={dotVariants}
                    className="h-1 w-1 rounded-full bg-orange-500"
                  />
                )}
                <Link href={sosmed.url} target="_blank" rel="noopener noreferrer">
                  <motion.span
                    whileHover={{
                      color: '#ffffff',
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer text-sm font-medium text-gray-400 uppercase transition-colors hover:text-white"
                  >
                    {sosmed.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.footer>

      <motion.div
        className="relative overflow-hidden border-t border-gray-900 bg-[#0a0a0a] py-16 md:py-20 lg:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="relative" style={{ x: largeTextX }}>
          <motion.h3
            className="text-center text-6xl font-bold tracking-tighter whitespace-nowrap text-white lowercase select-none sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[15rem]"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              opacity: largeTextOpacity,
            }}
            initial={{ x: '5%' }}
            whileInView={{ x: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: SMOOTH_EASE }}
          >
            lets work together
          </motion.h3>
        </motion.div>

        {/* Fade Gradient on Edges */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #0a0a0a 0%, transparent 20%, transparent 80%, #0a0a0a 100%)',
          }}
        />
      </motion.div>

      {/* Animated Background Gradient Orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-gray-800/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-gray-800/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
