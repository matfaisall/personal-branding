import React from 'react';
import { motion, type Easing } from 'motion/react';
import { socialMediaLinks } from '@/constant/nav-menu/socialmedia-links';
import Link from 'next/link';
import { socialItemVariants, dotVariants } from './copyright.motion';

const SMOOTH_EASE: Easing = [0.22, 0.61, 0.36, 1];
const CopyRightAndSocMed = () => {
  return (
    <motion.footer
      className="w-full py-10 lg:py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2, ease: SMOOTH_EASE }}
    >
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        {/* Social Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex flex-wrap items-center justify-center gap-4 md:order-2"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {socialMediaLinks.map((sosmed, index) => (
            <motion.div
              key={sosmed.id}
              variants={socialItemVariants}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <motion.span
                  variants={dotVariants}
                  className="h-1 w-1 rounded-full bg-orange-500"
                />
              )}
              <Link href={sosmed.url} target="_blank" rel="noopener noreferrer">
                <motion.span
                  whileHover={{
                    color: '#ffffff',
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer text-sm font-medium text-gray-400 uppercase transition-colors hover:text-white"
                >
                  {sosmed.name}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {/* Copyright */}
        <motion.p
          className="text-sm font-light text-gray-500 md:text-lg lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          © 2025. Developed and Designed by matfaisall.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default CopyRightAndSocMed;
