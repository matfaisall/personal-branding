'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactUsSection } from '@/components/sections/homepage';

import Image from 'next/image';

import { pageVariants } from './motion.page';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { works, categories } from '@/constant/data/about/works';

// ==================== Main Component ====================
const WorksPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const filteredProjects =
    activeCategory === 'all' ? works : works.filter((work) => work.category === activeCategory);

  return (
    <div className="min-h-svh overflow-hidden dark:bg-black dark:text-white">
      <section className="container-fluid relative mt-12 flex w-full flex-col justify-center px-4 sm:px-6 sm:py-20">
        {/* text work */}
        <motion.div
          className="mb-12 flex flex-col gap-2"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Works
          </motion.h1>
          <motion.p
            className="text-base font-medium sm:text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Explore my work across different technologies
          </motion.p>
        </motion.div>

        {/* ini tabs  */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 flex justify-center"
          >
            <div className="inline-flex gap-1 rounded-lg border-1 border-gray-600 p-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-md px-6 py-2 font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-gray-400 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Portfolio Cards */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Image */}
                <div className="group relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Button
                      variant="outline"
                      className="cursor-pointer hover:bg-orange-500"
                      onClick={() => {}}
                    >
                      View Project
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500">{project.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-xl text-gray-400">No projects found in this category</p>
          </motion.div>
        )}
      </section>

      <ContactUsSection />
    </div>
  );
};

export default WorksPage;
