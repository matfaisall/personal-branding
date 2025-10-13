import React from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { MenuOverlayProps } from '@/types/menu.types';
import { CircleX } from 'lucide-react';
import Link from 'next/link';
import { socialMediaLinks } from '@/constant/nav-menu/socialmedia-links';
import { navigationMenu } from '@/constant/nav-menu/navigation-menu';
import { usePathname } from 'next/navigation';

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = React.useState<boolean>(true);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socialCardVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 2.5,
      },
    },
  };

  const socialItemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const dotVariants: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

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
                {navigationMenu.map((menu) => {
                  console.log('menu', menu.href);
                  return (
                    <motion.li
                      key={menu.id}
                      initial={{ opacity: 0, x: menu.timeOrder % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + menu.timeOrder * 0.1 }}
                    >
                      <Link
                        href={menu.href}
                        className={`${pathname === menu.href ? 'text-orange-500 underline' : 'text-white'} block text-4xl leading-tight font-light transition-colors hover:text-orange-500 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none md:text-8xl lg:text-6xl`}
                      >
                        {menu.title}
                      </Link>
                    </motion.li>
                  );
                })}
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
              {/* Social Links Card */}
              <motion.div
                variants={socialCardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
                className="order-1 rounded-xl bg-black py-4 backdrop-blur-md lg:order-2"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex flex-wrap items-center justify-center gap-4"
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
                </AnimatePresence>
              </motion.div>

              <motion.p
                whileHover={{ scale: 1.01 }}
                className="flex max-w-md justify-center text-base text-white md:justify-start md:text-lg"
              >
                Have any project in mind?
                <motion.span className="cursor-pointer font-bold transition-colors hover:text-orange-500">
                  {'  '} Lets work together.
                </motion.span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
