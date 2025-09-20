"use client";

import { motion } from "framer-motion";
import React from "react";

export default function RotatingCircleText() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.9 }}
      className="absolute top-32 left-20 w-24 h-24 rounded-full border border-orange-500 md:flex items-center justify-center z-30 hidden"
    >
      {/* SVG Teks Melingkar */}
      <motion.svg
        className="absolute w-full h-full"
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
           m -90, 0
           a 90,90 0 1,0 180,0
           a 90,90 0 1,0 -180,0"
          />
        </defs>
        <text fill="white" fontSize="16" letterSpacing="4">
          <textPath xlinkHref="#circlePath">
            Creative - Problem Solving - Branding - Experience -
          </textPath>
        </text>
      </motion.svg>

      <span className="relative z-10 text-3xl font-light text-gray-500">
        MF
      </span>
    </motion.div>
  );
}
