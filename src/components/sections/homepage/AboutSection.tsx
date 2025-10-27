'use client';
import React from 'react';

import { motion } from 'motion/react';
import TitleSection from '@/elements/title-section';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="container-fluid h-full w-full overflow-hidden p-8">
      <TitleSection title="About me" desc="Know more about me" />

      <div className="grid grid-cols-12 p-0 lg:p-8">
        <div className="col-span-12 hidden md:col-span-4 md:block">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <Image
                src="/images/purpose-built.png"
                alt="Build Something Image"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex h-full items-center justify-center space-y-8"
          >
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-semibold">I`m a Frontend Developer </h1>
              <div className="relative">
                <p className="max-w-3xl text-lg leading-relaxed font-light tracking-wide text-gray-100 lg:text-xl">
                  who enjoys turning ideas into interactive web experiences. I care about writing
                  clean, maintainable code and designing interfaces that feel simple and intuitive.
                  Every project is a chance to learn, grow, and create something meaningful.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
