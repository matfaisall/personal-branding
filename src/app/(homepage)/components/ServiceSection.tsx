'use client';

import { motion } from 'motion/react';

import TitleSection from '@/elements/title-section';
import React from 'react';
import { services } from '@/constant/section/services';

const ServiceSection = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = scrollContainerRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container!.scrollLeft += e.deltaY;
      }
    };

    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="container-fluid h-full w-full p-8">
      <TitleSection title="services" />

      {/* content */}
      <div className="grid grid-cols-12 gap-4 p-0 lg:p-8">
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
                S
              </span>
            </div>
          </motion.div>
        </div>

        {/* right side'/ */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative col-span-12 lg:col-span-8"
        >
          {/* Scroll Navigation Buttons */}
          <div className="absolute -top-12 right-0 z-10 hidden gap-4 lg:flex">
            <button
              onClick={scrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition-colors duration-300 hover:border-orange-500 hover:text-orange-500"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition-colors duration-300 hover:border-orange-500 hover:text-orange-500"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex gap-8 overflow-x-auto overflow-y-hidden pb-4 lg:gap-12 lg:pb-0"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              overflowY: 'hidden',
            }}
            // onWheel={(e) => {
            //   // Prevent vertical scrolling on wheel event
            //   if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            //     e.preventDefault();
            //     if (scrollContainerRef.current) {
            //       scrollContainerRef.current.scrollLeft += e.deltaY;
            //     }
            //   }
            // }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="w-80 flex-none space-y-6 lg:w-96"
              >
                {/* Service Title */}
                <h3 className="text-2xl leading-tight font-light lg:text-3xl xl:text-4xl">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="max-w-sm text-sm leading-relaxed font-light text-gray-300 lg:text-base">
                  {service.description}
                </p>

                {/* Know More Link */}
                {/* <div className="relative inline-block">
                  <motion.a
                    href="#"
                    className="group relative inline-block text-base font-light tracking-wide text-white transition-colors duration-300 hover:text-orange-500 lg:text-lg"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    Know More
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                </div> */}
              </motion.div>
            ))}
          </div>

          {/* Fade Effect for Right Edge */}
          <div className="pointer-events-none absolute top-0 right-0 hidden h-full w-12 bg-gradient-to-l from-black to-transparent lg:block"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSection;
