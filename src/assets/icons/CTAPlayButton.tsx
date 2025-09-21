'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const CTAPlayButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute right-10 bottom-20 z-30"
    >
      <div className="border-gleamy-gray-800 relative h-24 w-24 rounded-full border">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gleamy-gray-500 text-xs tracking-wider uppercase">Watch</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gleamy-orange absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full"
        >
          <span className="text-xs text-white">
            <Play size={16} />
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CTAPlayButton;
