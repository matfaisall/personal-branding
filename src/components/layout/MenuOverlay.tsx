import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuOverlayProps } from '@/types/menu.types';
import { CircleX } from 'lucide-react';
import Link from 'next/link';
import { navigationMenu } from '@/constant/nav-menu/navigation-menu';
import { usePathname } from 'next/navigation';
import CopyRightAndSocMed from '../shared/copyright';

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
                  // console.log('menu', menu.href);
                  return (
                    <motion.li
                      key={menu.id}
                      initial={{ opacity: 0, x: menu.timeOrder % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + menu.timeOrder * 0.1 }}
                    >
                      <Link
                        href={menu.href}
                        className={`${pathname === menu.href ? 'text-orange-500' : 'text-white'} block text-4xl leading-tight font-light transition-colors hover:text-orange-500 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none md:text-8xl lg:text-6xl`}
                      >
                        {menu.title}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute right-8 bottom-8 left-8"
          >
            {/* copyright and social media */}
            <CopyRightAndSocMed paddingYSM="0" paddingYLG="0" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
