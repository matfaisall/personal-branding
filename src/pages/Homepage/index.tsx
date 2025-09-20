"use client";

import { motion } from "motion/react";

import React from "react";
import Header from "@/components/layout/Header";
import SideNav from "@/components/layout/SideNav";
import MarqueeSection from "@/components/layout/Marquee";
import HeroSection from "@/components/layout/HeroSection";
import RotatingCircleText from "@/assets/icons/RotatingCircleText";

import { Play } from "lucide-react";

const Homepage = () => {
  return (
    <div className="relative min-h-svh">
      <Header />
      <SideNav />
      <MarqueeSection />
      <HeroSection />

      {/* Badges */}
      <RotatingCircleText />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-20 right-10 z-30"
      >
        <div className="relative w-24 h-24 rounded-full border border-gleamy-gray-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-gleamy-gray-500 uppercase tracking-wider">
              Watch
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -bottom-1 -right-1 w-8 h-8 bg-gleamy-orange rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs">
              <Play size={16} />
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;
