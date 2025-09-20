"use client";

import { motion, AnimatePresence } from "motion/react";
import { Search, Menu } from "lucide-react";
import React from "react";

export default function Header() {
  const languages = ["FB", "IN", "DR", "BE"];

  const [isMobile, setIsMobile] = React.useState(true);

  // Detect screen width (client-side)
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-8"
    >
      <AnimatePresence>
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-8"
          >
            <div className="flex gap-4 text-sm text-gray-500">
              {languages.map((lang, i) => (
                <span key={lang} className="flex items-center gap-2">
                  {i > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-orange-500"
                    >
                      •
                    </motion.span>
                  )}
                  <motion.span
                    whileHover={{ color: "#ffffff" }}
                    transition={{ duration: 0.2 }}
                    className="transition-colors cursor-pointer"
                  >
                    {lang}
                  </motion.span>
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={isMobile ? "logo-mobile" : "logo-desktop"}
        initial={{ opacity: 0, x: isMobile ? -30 : 0, y: isMobile ? 0 : -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-light text-white tracking-wider sm:absolute sm:left-1/2 sm:-translate-x-1/2"
      >
        matfaisall
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        className="flex items-center gap-6"
      >
        <button className="text-gray-400 hover:text-white transition-colors">
          <Search size={20} />
        </button>
        <button className="flex items-center gap-2 text-white uppercase text-sm tracking-wider">
          <span>Menu</span>
          <Menu size={20} />
        </button>
      </motion.div>

      {/* <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Search size={20} />
        </button>
        <button className="flex items-center gap-2 text-white uppercase text-sm tracking-wider">
          <span>Menu</span>
          <Menu size={20} />
        </button>
      </div> */}
    </motion.header>
  );
}
