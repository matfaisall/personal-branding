// SectionComponents.tsx - Komponen section yang di-refactor

import React, { memo } from 'react';
import { motion, m } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import {
  staggerContainerVariants,
  staggerItemVariants,
  cardVariants,
  cardHoverVariants,
  defaultViewport,
} from './animations';

// Types
interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Certificate {
  name: string;
  issuer?: string;
  years: string;
  url: string;
}

// Reusable Section Header Component
const SectionHeader = memo(({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="col-span-12 md:col-span-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="text-gray-400">{subtitle}</p>
  </div>
));

// Reusable Timeline Item Component
const TimelineItem = memo(
  ({
    title,
    subtitle,
    period,
    description,
    index,
  }: {
    title: string;
    subtitle: string;
    period: string;
    description: string;
    index: number;
  }) => (
    <m.div
      className="border-l-2 border-gray-200 pl-6"
      variants={staggerItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay: index * 0.1 }}
    >
      <div className="relative">
        <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          <span className="text-sm text-gray-500">{period}</span>
        </div>
        <p className="leading-relaxed text-gray-700">{description}</p>
      </div>
    </m.div>
  ),
);

// About Section Component
export const AboutSection = memo(() => (
  <motion.div
    className="grid grid-cols-12 gap-8 lg:gap-20"
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    variants={staggerContainerVariants}
  >
    <SectionHeader
      title="About Me"
      subtitle="Who I am behind the code - passionate, curious, and always learning"
    />
    <motion.div className="col-span-12 md:col-span-6" variants={staggerItemVariants}>
      <p className="text-light text-md mb-4 leading-8 text-gray-400">
        I`m a passionate frontend developer with a strong focus on creating intuitive, performant,
        and accessible web applications. With expertise in modern JavaScript frameworks and a keen
        eye for design, I bridge the gap between technical implementation and user experience.
      </p>
      <p className="text-light text-md leading-8 text-gray-400">
        My journey in web development started with a curiosity about how websites work, which
        evolved into a deep appreciation for clean code, responsive design, and the latest web
        technologies. I believe in writing maintainable code and staying updated with industry best
        practices.
      </p>
    </motion.div>
  </motion.div>
));

// Education Section Component
export const EducationSection = memo(({ data }: { data: Education[] }) => (
  <div className="grid grid-cols-12 gap-8 lg:gap-20">
    <SectionHeader title="Educations" subtitle="Where my passion for web development began" />
    <div className="col-span-12 md:col-span-6">
      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainerVariants}
      >
        {data.map((edu, index) => (
          <TimelineItem
            key={index}
            title={edu.degree}
            subtitle={edu.institution}
            period={edu.period}
            description={edu.description}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  </div>
));

// Experience Section Component
export const ExperienceSection = memo(({ data }: { data: Experience[] }) => (
  <div className="grid grid-cols-12 gap-8 lg:gap-20">
    <SectionHeader title="Experiences" subtitle="Building products that matter" />
    <div className="col-span-12 md:col-span-6">
      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainerVariants}
      >
        {data.map((exp, index) => (
          <TimelineItem
            key={index}
            title={exp.title}
            subtitle={exp.company}
            period={exp.period}
            description={exp.description}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  </div>
));

// Certificate Section Component
export const CertificateSection = memo(({ data }: { data: Certificate[] }) => (
  <div className="grid grid-cols-12 gap-8 md:gap-20">
    <SectionHeader title="Certificates" subtitle="Continuous learning and skill development" />
    <div className="col-span-12 md:col-span-6">
      <div className="space-y-2">
        {data.map((certificate, index) => (
          <motion.a
            key={index}
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={{ delay: index * 0.1 }}
            whileHover={cardHoverVariants}
            className="group mb-2 block rounded-lg border border-gray-800 bg-black/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-black/50"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 line-clamp-2 text-base font-medium text-gray-100 transition-colors group-hover:text-white">
                  {certificate.name}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-orange-500">{certificate.issuer}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400">{certificate.years.trim()}</span>
                </div>
              </div>
              <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-gray-500 transition-colors group-hover:text-orange-500" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
));
