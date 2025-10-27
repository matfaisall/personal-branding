'use client';

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import React from 'react';
import { motion, type Variants } from 'motion/react';

type TitleSectionProps = {
  title: string;
  desc?: string;
};

const motionTitleSection: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const motionDescSection: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const TitleSection = ({ title, desc = 'Know more about me' }: TitleSectionProps) => {
  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <motion.div variants={motionTitleSection} initial="hidden" animate="visible">
          <AnimatedShinyText className="mx-0 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {title}
          </AnimatedShinyText>
        </motion.div>

        <motion.div variants={motionDescSection} initial="hidden" animate="visible">
          <AnimatedShinyText className="mx-0 text-sm font-medium sm:text-lg">
            {desc}
          </AnimatedShinyText>
        </motion.div>
      </div>
    </>
  );
};

export default TitleSection;
