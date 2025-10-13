'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react';

export default function SideNav() {
  const items = ['WEB DISIGN', 'UI/UX DESIGN', 'FRONTEND DEVELOPMENT'];

  const ref = React.useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const x = useTransform(scrollY, [0, 600], [0, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="absolute top-1/2 left-8 z-40 hidden -translate-y-1/2 md:block"
    >
      {items.map((item) => (
        <div key={item} className="mb-12">
          <div className="writing-vertical cursor-pointer text-xs tracking-widest text-gray-600 transition-colors hover:text-orange-500">
            {item}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
