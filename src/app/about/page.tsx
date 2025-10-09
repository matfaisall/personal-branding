'use client';

import React from 'react';
import { motion } from 'motion/react';

import Image from 'next/image';
import StatusIndicator from '@/components/shared/status-indicator';

import { techStackFromLeft, techStackFromRight } from '@/constant/tech-stack';
import InfiniteScrollCarousel from '@/components/shared/infinite-scroll';

const AboutPage = () => {
  return (
    <div className="min-h-dvh overflow-hidden dark:bg-black dark:text-white">
      {/* Hero Section */}
      <section className="container-fluid relative mt-32 h-full w-full p-6">
        <div className="flex flex-col gap-16">
          <motion.div
            className="flex items-start justify-between"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Muhammad Faisal</h1>
              <p className="font-md">Frontend Developer</p>
            </div>

            <StatusIndicator />
          </motion.div>

          <div className="grid grid-cols-12 gap-10 p-0">
            <motion.div
              className="col-span-12 md:col-span-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="h-94 w-full overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src="/images/me.png"
                  alt="Muhammad Faisal"
                  width={224}
                  height={224}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>
            <div className="col-span-12 md:col-span-8">
              <motion.h2
                className="mb-6 text-2xl font-bold text-white"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Hi hi hi, Hello...
              </motion.h2>
              <div className="space-y-4 leading-relaxed text-slate-300">
                <motion.p
                  className="text-[1.16rem]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  I’m a Front End Developer passionate about creating clean, responsive, and
                  engaging web experiences. I focus on turning design concepts into intuitive
                  interfaces using technologies like React.js, Next.js, TypeScript, and Tailwind
                  CSS.
                </motion.p>
                <motion.p
                  className="text-[1.16rem]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Always eager to learn new technologies and contribute to teams by creating
                  innovative and effective web solutions. I have experience working on various
                  projects including Electronic Data Capture systems, Loan Origination Systems, and
                  Property management platforms.
                </motion.p>
                <motion.p
                  className="text-[1.16rem]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  I’m driven by curiosity and a love for continuous learning — always exploring new
                  tools, frameworks, and best practices to stay current in the evolving web
                  landscape.
                </motion.p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <InfiniteScrollCarousel items={techStackFromRight} direction="left" duration={25} />
            <InfiniteScrollCarousel items={techStackFromLeft} direction="right" duration={20} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
