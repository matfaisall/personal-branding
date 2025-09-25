import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuOverlayProps } from '@/constant/section/menuoverlay';
import { CircleX } from 'lucide-react';
import Link from 'next/link';

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const languages = ['LINKEDIN', 'GITHUB', 'INSTAGRAM', 'DRIBBBLE'];
  const [isMobile, setIsMobile] = React.useState<boolean>(true);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[60] bg-black"
        >
          {/* Navigation Bar in Overlay */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-between p-6"
          >
            {/* Logo */}
            <motion.div
              key={isMobile ? 'logo-mobile' : 'logo-desktop'}
              initial={{ opacity: 0, x: isMobile ? -30 : 0, y: isMobile ? 0 : -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-xl font-light tracking-wider text-white md:text-3xl"
            >
              faisal
            </motion.div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="flex cursor-pointer items-center gap-2 bg-transparent text-sm tracking-wider text-white uppercase transition-colors hover:bg-transparent hover:text-gray-300"
            >
              <span>Close</span>
              <CircleX size={20} />
            </motion.button>
          </motion.nav>

          {/* Main Content */}
          <div className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-8">
            {/* Main Title */}

            <motion.nav
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16 text-center"
              role="navigation"
              aria-label="Main menu"
            >
              <ul className="list-none space-y-4 md:space-y-6">
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Link
                    href="/about"
                    className="block text-4xl leading-tight font-light text-white transition-colors hover:text-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none md:text-8xl lg:text-6xl"
                  >
                    About Us
                  </Link>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link
                    href="/services"
                    className="block text-4xl leading-tight font-light text-white transition-colors hover:text-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none md:text-8xl lg:text-6xl"
                  >
                    Services
                  </Link>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Link
                    href="/portfolio"
                    className="block text-4xl leading-tight font-light text-white transition-colors hover:text-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none md:text-8xl lg:text-6xl"
                  >
                    Portfolio
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Link
                    href="/sertificate"
                    className="block text-4xl leading-tight font-light text-white transition-colors hover:text-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none md:text-8xl lg:text-6xl"
                  >
                    Sertificate
                  </Link>
                </motion.li>
              </ul>
            </motion.nav>

            {/* Menu Items */}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute right-8 bottom-8 left-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <motion.p
                whileHover={{ scale: 1.01 }}
                className="flex max-w-md justify-center text-base text-white md:justify-start md:text-lg"
              >
                Have any project in mind?
                <motion.span className="cursor-pointer font-bold transition-colors hover:text-orange-500">
                  {'  '} Lets work together.
                </motion.span>
              </motion.p>

              {/* Badge/Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="max-w-lg rounded-lg bg-gray-900 p-4"
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="flex items-center gap-8"
                  >
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
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
                            whileHover={{ color: '#ffffff' }}
                            transition={{ duration: 0.2 }}
                            className="cursor-pointer transition-colors"
                          >
                            {lang}
                          </motion.span>
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
