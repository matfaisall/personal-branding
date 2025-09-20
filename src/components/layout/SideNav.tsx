"use client";

import { motion } from "motion/react";

export default function SideNav() {
  const items = ["DIGITAL MARKETING", "DESIGNING", "DEVELOPMENT"];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden md:block"
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
