'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { ConfirmDownloadDialogs } from '@/components/shared/dialogs/ConfirmDownloadDialogs';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  SMOOTH_EASE,
  containerVariants,
  itemVariants,
  labelVariants,
  buttonsContainerVariants,
  buttonVariants,
} from './footer.motion';

import CopyRightAndSocMed from '@/components/shared/copyright';

export const ContactFooter = () => {
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
            <motion.h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Contact Us</motion.h1>
          </motion.div>

          {/* Right Side - Main Content */}
          <div className="lg:col-span-6">
            {/* Heading */}
            <motion.div
              className="mb-12 text-center md:mb-16 lg:text-start"
              variants={itemVariants}
            >
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
              className="flex items-center justify-center gap-4 lg:justify-start"
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

      {/* Copyright and social media */}
      <CopyRightAndSocMed />

      <motion.div
        className="relative overflow-hidden border-t border-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full pt-8">
          <motion.div
            className="w-full px-4"
            initial={{ y: '-20' }}
            whileInView={{ y: '0' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: SMOOTH_EASE }}
          >
            <Image
              src="/images/footer-wording.svg"
              alt="Let's Work Together"
              width={1920}
              height={400}
              className="h-auto w-full opacity-30"
              priority
              quality={100}
            />
          </motion.div>
        </div>

        {/* Fade Gradient on Edges */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #0a0a0a 0%, transparent 5%, transparent 95%, #0a0a0a 100%)',
          }}
        />
      </motion.div>
    </div>
  );
};
