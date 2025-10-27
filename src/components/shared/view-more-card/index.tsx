import { motion, type Easing } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ViewMoreCardProps {
  index?: number;
}

const SMOOTH_EASE: Easing = [0.25, 0.1, 0.25, 1];

const ViewMoreCard: React.FC<ViewMoreCardProps> = ({ index = 0 }) => {
  return (
    <motion.div
      className="group relative mx-auto flex h-full w-full flex-col items-center justify-center rounded-xl bg-[#1a1a1a]/50 p-6 backdrop-blur-sm will-change-transform hover:bg-[#1f1f1f]/60 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: SMOOTH_EASE }}
      whileHover={{ y: -4 }}
      style={{ minHeight: '400px' }}
    >
      <div className="space-y-6 text-center">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Want to See More?</h3>
          <p className="mx-auto max-w-xs text-sm text-zinc-400">
            Check out my complete collection of projects and works
          </p>
        </div>

        <Link href="/works">
          <Button variant="outline" className="hover:cursor-pointer">
            View All Works
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ViewMoreCard;
