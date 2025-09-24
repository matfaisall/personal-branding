'use client';

import { Button } from '@/components/ui/button';
// import TitleSection from '@/elements/title-section';
import React from 'react';
import { motion, type Variants } from 'motion/react';

const ContactUsSection = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
  };

  const logoVariants: Variants = {
    hover: {
      rotate: 5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div className="container-fluid h-full p-8">
      {/* <TitleSection title="contact" /> */}

      <div className="flex h-full items-center justify-center bg-black/40 p-4">
        <motion.div variants={itemVariants} className="mb-12 h-full w-full text-center">
          {/* Logo dengan garis horizontal */}
          <div className="mb-8 flex items-center justify-center">
            <div className="h-px flex-1 bg-gray-300"></div>
            <motion.div variants={logoVariants} whileHover="hover" className="mx-8 cursor-pointer">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/50 shadow-lg">
                <div className="relative -skew-x-12 transform text-3xl font-bold text-gray-900">
                  <span></span>
                </div>
              </div>
            </motion.div>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <motion.h1 variants={itemVariants} className="mb-4 text-4xl font-semibold md:text-5xl">
            Muhammad Faisal
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            Got an idea or project in mind? Lets create something amazing together!
          </motion.p>

          <motion.div>
            <div className="mt-6 flex justify-center gap-2">
              <Button>download cv</Button>
              <Button>Get in Touch</Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsSection;
