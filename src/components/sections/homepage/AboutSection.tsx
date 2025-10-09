'use client';
import React from 'react';

import { motion } from 'motion/react';
import TitleSection from '@/elements/title-section';

const AboutSection = () => {
  return (
    <section className="container-fluid h-full w-full overflow-hidden p-8">
      {/* title for section */}
      <TitleSection title="about us" withUnderline />

      <div className="grid grid-cols-12 p-0 lg:p-8">
        <div className="col-span-12 md:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <span className="text-outline text-[12rem] leading-none select-none lg:text-[16rem] xl:text-[20rem]">
                G
              </span>
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col items-start gap-8">
              <h1 className="text-4xl font-semibold">I create web experiences that matter.</h1>
              <div className="relative">
                <p className="max-w-3xl text-lg leading-relaxed font-light tracking-wide text-gray-100 lg:text-xl">
                  Frontend developer with a passion for clean code and beautiful interfaces. I build
                  web applications that not only look great but also perform exceptionally.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#contact"
                  className="group relative inline-block text-lg font-light tracking-wide text-white transition-colors duration-300 hover:text-orange-500"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  Contact Us
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
