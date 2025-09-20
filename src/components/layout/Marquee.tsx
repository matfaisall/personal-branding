"use client";

import { motion, type Variants } from "motion/react";

const marqueeData = [
  {
    items: ["CREATIVE DESIGN", "BRANDING", "UI/UX", "MARKETING"],
    speed: 30,
    direction: "left",
    position: "top-[15%]",
    opacity: 0.1,
  },
  {
    items: ["MOTION", "ANIMATION", "DEVELOPMENT", "STRATEGY"],
    speed: 25,
    direction: "right",
    position: "top-[30%]",
    opacity: 0.08,
  },
  {
    items: ["PRODUCT DESIGN", "CONSULTING", "SEO", "CONTENT"],
    speed: 35,
    direction: "left",
    position: "top-[45%]",
    opacity: 0.06,
  },
  {
    items: ["WEB DEVELOPMENT", "APP DESIGN", "ILLUSTRATION", "3D DESIGN"],
    speed: 28,
    direction: "right",
    position: "top-[60%]",
    opacity: 0.08,
  },
  {
    items: ["PHOTOGRAPHY", "VIDEO PRODUCTION", "SOCIAL MEDIA", "COPYWRITING"],
    speed: 32,
    direction: "left",
    position: "top-[75%]",
    opacity: 0.07,
  },
  {
    items: ["RESEARCH", "PROTOTYPING", "TESTING", "OPTIMIZATION"],
    speed: 30,
    direction: "right",
    position: "bottom-[10%]",
    opacity: 0.09,
  },
];

function MarqueeStrip({
  data,
  index,
}: {
  data: (typeof marqueeData)[0];
  index: number;
}) {
  const animationVariants: Variants = {
    animate: {
      x: data.direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: data.speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      className={`absolute whitespace-nowrap ${data.position}`}
      style={{ opacity: data.opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: data.opacity }}
      transition={{ delay: index * 0.2, duration: 1 }}
    >
      <motion.div
        className="flex"
        variants={animationVariants}
        animate="animate"
      >
        {/* First set */}
        <div className="flex gap-12 px-12">
          {data.items.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4">
              <span className="w-2 h-2 bg-gleamy-orange rounded-full animate-pulse" />
              <span className="text-white/90 text-sm md:text-base lg:text-xl tracking-[0.3em] uppercase font-extralight">
                {item}
              </span>
            </span>
          ))}
        </div>
        {/* Duplicate for loop */}
        <div className="flex gap-12 px-12">
          {data.items.map((item, i) => (
            <span key={`dup-${i}`} className="inline-flex items-center gap-4">
              <span className="w-2 h-2 bg-gleamy-orange rounded-full animate-pulse" />
              <span className="text-white/90 text-sm md:text-base lg:text-xl tracking-[0.3em] uppercase font-extralight">
                {item}
              </span>
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MarqueeSection() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {marqueeData.map((data, index) => (
        <MarqueeStrip key={index} data={data} index={index} />
      ))}
    </div>
  );
}
