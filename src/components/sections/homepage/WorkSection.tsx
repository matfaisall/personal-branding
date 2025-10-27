'use client';

import React from 'react';
import TitleSection from '@/elements/title-section';
import { motion } from 'motion/react';
import Image from 'next/image';
import { LIST_WORKS } from '@/constant/work';
import CardComp from '@/components/shared/card';
import ViewMoreCard from '@/components/shared/view-more-card';

const WorkSection = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="container-fluid h-full p-8">
      <TitleSection title="Works" desc="Explore my work across different technologies" />

      <div className="lg:p8 grid grid-cols-12 p-0">
        {/* left side */}
        <div className="col-span-12 hidden md:col-span-4 md:block">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex h-full items-center justify-center"
          >
            <div className="relative">
              <Image
                src="/images/move-fast.png"
                alt="Build Something Image"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* right side */}
        <div className="col-span-12 md:col-span-8">
          <div className="relative">
            {/* Scroll Hint Overlay */}
            <div className="absolute top-2 right-0 z-20 rounded-lg border border-zinc-700 bg-black/20 px-3 py-2 backdrop-blur-sm md:right-2">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <div className="flex gap-1">
                  <div className="h-1 w-1 animate-pulse rounded-full bg-orange-500"></div>
                  <div
                    className="h-1 w-1 animate-pulse rounded-full bg-orange-500"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div
                    className="h-1 w-1 animate-pulse rounded-full bg-orange-500"
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
                <span> →</span>
              </div>
            </div>

            <div
              ref={scrollContainerRef}
              className="scrollbar-visible cursor-grab overflow-x-auto py-8 pb-2 active:cursor-grabbing"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                {LIST_WORKS.map((list, index) => (
                  <motion.div
                    key={list.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="w-72 flex-shrink-0 md:w-80"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <CardComp
                      feature={list}
                      onClick={() => {}}
                      showExpandButton={false}
                      index={index}
                    />
                  </motion.div>
                ))}
                {/* card for view more */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: LIST_WORKS.length * 0.1,
                  }}
                  className="w-74 flex-shrink-0 md:w-78"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <ViewMoreCard index={LIST_WORKS.length} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
