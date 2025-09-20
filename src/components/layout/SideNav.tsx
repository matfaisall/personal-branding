"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React from "react";

export default function SideNav() {
  const items = ["DIGITAL MARKETING", "DESIGNING", "DEVELOPMENT"];

  const ref = React.useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const x = useTransform(scrollY, [0, 600], [0, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="absolute left-8 top-1/2 -translate-y-1/2 z-40 hidden md:block"
    >
      {items.map((item) => (
        <div key={item} className="mb-12">
          <div className="writing-vertical text-xs text-gray-600 tracking-widest hover:text-orange-500 transition-colors cursor-pointer">
            {item}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
