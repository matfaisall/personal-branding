'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { PortfolioItem } from '@/types/mainpage/section/portfolio.types';
import GithubIcon from '@/assets/icons/light-github-icon.svg';
import { Link } from 'lucide-react';

export const PortfolioCard = ({
  item,
  index,
  onClick,
}: {
  item: PortfolioItem;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-zinc-700">
        <div className="md:aspect=[4/3] relative aspect-[6/4] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute top-4 right-4 left-4">
              <div className="flex justify-between">
                <button className="h-6 rounded bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
                  UI/UX Design
                </button>

                <div className="flex gap-2">
                  <button
                    className="relative h-6 w-6 cursor-pointer overflow-hidden rounded bg-white"
                    onClick={() => console.log('hello world')}
                  >
                    <Image src={GithubIcon} alt="github icon" fill className="h-full w-full" />
                  </button>
                  <button
                    className="relative h-6 w-6 cursor-pointer overflow-hidden rounded bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('hello world');
                    }}
                  >
                    <Link strokeWidth={2} size={20} className="h-fll w-full p-1" color="black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-orange-500">
            {item.title}
          </h3>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="text-sm font-medium tracking-wider text-orange-500">
              {item.category}
            </span>
          </div>

          {item.description && (
            <p className="mb-4 line-clamp-2 text-sm text-zinc-400">{item.description}</p>
          )}

          {/* Tech Stack Preview */}
          {item.technologies && (
            <div className="flex flex-wrap gap-1">
              {item.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-400">
                  {tech}
                </span>
              ))}
              {item.technologies.length > 3 && (
                <span className="text-xs text-zinc-500">+{item.technologies.length - 3} more</span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
