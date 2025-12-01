'use client';

import { motion, AnimatePresence } from 'motion/react';
import React from 'react';
import MenuIcon from '@/assets/icons/MenuButton.svg';
import Image from 'next/image';
import MenuOverlay from './MenuOverlay';
import { socialMediaLinks } from '@/constant/nav-menu/socialmedia-links';

import { usePathname } from 'next/navigation';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { FLEXBOX } from '@/lib/designs';

const NavigationBar = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = React.useState(true);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // close menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Detect screen width (client-side)
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 right-0 left-0 z-50 ${FLEXBOX.between} bg-black p-6`}
      >
        <AnimatePresence>
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              // className="flex items-center gap-8"
            >
              <div className="flex gap-4 text-sm text-gray-500">
                <TooltipProvider delayDuration={200}>
                  {socialMediaLinks.map((sosmed, i) => (
                    <span key={sosmed.id} className="flex items-center gap-2">
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

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link href={sosmed.url} target="_blank" rel="noopener noreferrer">
                            <motion.span
                              whileHover={{ color: '#ffffff' }}
                              transition={{ duration: 0.2 }}
                              className="cursor-pointer transition-colors"
                            >
                              {sosmed.alias}
                            </motion.span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent className="border border-gray-700 p-2">
                          <p className="text-gray-400">{sosmed.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </span>
                  ))}
                </TooltipProvider>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          key={isMobile ? 'logo-mobile' : 'logo-desktop'}
          initial={{ opacity: 0, x: isMobile ? -30 : 0, y: isMobile ? 0 : -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-xl font-light tracking-wider text-white md:hidden md:text-3xl"
        >
          <Link href="/">Faisal</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className="flex items-center gap-4"
          onClick={toggleMenu}
        >
          <AnimatePresence mode="wait">
            <button className="flex cursor-pointer items-center bg-transparent text-sm tracking-wider text-white uppercase hover:bg-transparent">
              <span>Menu</span>
              <Image src={MenuIcon} alt="Menu Icon" width={20} height={20} />
            </button>
          </AnimatePresence>
        </motion.div>
      </motion.nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default NavigationBar;
