'use client';

import React from 'react';
import { motion } from 'motion/react';

type TitleSectionProps = {
  title: string;
  withUnderline?: boolean;
};

const TitleSection = ({ title, withUnderline }: TitleSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h1 className="text-4xl font-bold tracking-[0.2em] text-gray-300 uppercase">{title}</h1>
      {withUnderline && <div className="mt-2 h-[2px] w-12 rounded bg-orange-500"></div>}
    </motion.div>
  );
};

export default TitleSection;
