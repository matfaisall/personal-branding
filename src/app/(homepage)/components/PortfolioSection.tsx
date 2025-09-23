'use client';

import React from 'react';
import TitleSection from '@/elements/title-section';
import { portfolioItems } from '@/constant/section/portfolio';
import { PortfolioCard } from './shared/PortfolioCard';
import { motion } from 'motion/react';
import { AllPortfolioItems, PortfolioItem } from '@/types/mainpage/section/portfolio';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const allItems: AllPortfolioItems[] = [...portfolioItems, { id: 'view-more', isViewMore: true }];

  const isPortfolioItem = (item: AllPortfolioItems): item is PortfolioItem => {
    return !('isViewMore' in item);
  };

  return (
    <div className="container-fluid h-full p-8">
      <TitleSection title="portfolio" />

      <div className="lg:p8 grid grid-cols-12 p-0">
        {/* left side */}
        <div className="col-span-12 md:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <span className="text-outline text-[12rem] leading-none select-none lg:text-[14rem] xl:text-[16rem]">
                P
              </span>
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
                <span>Scroll →</span>
              </div>
            </div>

            <motion.div
              ref={scrollContainerRef}
              className="scrollbar-visible cursor-grab overflow-x-auto py-8 pb-2 active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              whileDrag={{ cursor: 'grabbing' }}
              style={{
                scrollSnapType: 'x mandatory',
              }}
            >
              <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                {allItems.map((item: AllPortfolioItems, index: number) => {
                  // if (isViewMoreItem(item)) {
                  //   return (
                  //     <motion.div
                  //       key={item.id}
                  //       initial={{ opacity: 0, x: 50 }}
                  //       animate={{ opacity: 1, x: 0 }}
                  //       transition={{ duration: 0.5, delay: index * 0.1 }}
                  //       className="flex w-80 flex-shrink-0"
                  //       style={{ scrollSnapAlign: 'start' }}
                  //     >
                  //       <ViewMoreCard />
                  //     </motion.div>
                  //   );
                  // }

                  if (isPortfolioItem(item)) {
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          // scale: { duration: 0.3 },
                        }}
                        className="w-72 flex-shrink-0 md:w-80"
                        style={{ scrollSnapAlign: 'start' }}
                      >
                        <div className={`transition-all duration-300`}>
                          <PortfolioCard
                            item={item}
                            index={index}
                            onClick={() => console.log('hihi')}
                          />
                        </div>
                      </motion.div>
                    );
                  }

                  return null;
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* button view more project */}

      <div className="mt-6 flex justify-center">
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 10px rgba(249, 115, 22, 0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="rounded-md"
        >
          <Button className="cursor-pointer overflow-hidden border border-orange-500 bg-black/40 text-orange-500">
            View More Projects
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioSection;
