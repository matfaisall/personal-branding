'use client';

import { motion } from 'motion/react';

const ScrollIndicator = () => {
  return (
    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
    >
      <div className="flex h-10 w-6 justify-center rounded-full border-2 border-orange-500">
        <div className="mt-2 h-3 w-1 rounded-full bg-orange-500" />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
