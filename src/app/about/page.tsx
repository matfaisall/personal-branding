'use client';

import React from 'react';
import { motion, useReducedMotion, useInView } from 'motion/react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import StatusIndicator from '@/components/shared/status-indicator';
import InfiniteScrollCarousel from '@/components/shared/infinite-scroll';
import { techStackFromLeft, techStackFromRight } from '@/constant/tech-stack';

import {
  pageVariants,
  headerVariants,
  imageContainerVariants,
  imageVariants,
  contentVariants,
  paragraphVariants,
  carouselVariants,
  sectionVariants,
  educationItemVariants,
} from './motion.page';

// ==================== Bio Data ====================
const BIO_PARAGRAPHS = [
  "I'm a Front End Developer passionate about creating clean, responsive, and engaging web experiences. I focus on turning design concepts into intuitive interfaces using technologies like React.js, Next.js, TypeScript, and Tailwind CSS.",
  'Always eager to learn new technologies and contribute to teams by creating innovative and effective web solutions. I have experience working on various projects including Electronic Data Capture systems, Loan Origination Systems, and Property management platforms.',
  "I'm driven by curiosity and a love for continuous learning — always exploring new tools, frameworks, and best practices to stay current in the evolving web landscape.",
] as const;

// ==================== Education Data ====================
interface EducationData {
  institution: string;
  degree: string;

  period: string;
  gpa: string;
}

const EDUCATION_DATA: EducationData = {
  institution: 'Muhammadiyah University of Ponorogo',
  degree: 'Bachelor of Informatic Engineering',

  period: '2018 - 2022',
  gpa: '3.85 / 4.00',
};

// ==================== Experience Data ====================
interface ExperienceData {
  position: string;
  company: string;
  period: string;

  location?: string;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  techStack?: string[];
}

const EXPERIENCE_DATA: ExperienceData = {
  position: 'Frontend Developer',
  company: 'PT Infosys Solusi Terpadu',
  period: 'November 2023 - September 2025',
  description:
    'frontend development initiatives for enterprise-grade applications, transforming complex business requirements into intuitive, high-performance user interfaces.',
  responsibilities: [
    'Architected and developed scalable web applications using React.js, Next.js, and TypeScript',
    'Collaborated with cross-functional teams to deliver Electronic Data Capture (EDC) systems and Loan Origination Systems (LOS)',
    'Implemented responsive UI components with Tailwind CSS, ensuring pixel-perfect designs across all devices',
    'Optimized application performance, achieving 40% faster load times through code splitting and lazy loading',
    'Integrated RESTful APIs and managed state efficiently using Redux and React Query',
  ],
};

// ==================== Certificate  ====================
interface CertificateData {
  name: string;
  issuer?: string;
  years: string;
  url: string;
}

const CERTIFICATE_DATA: CertificateData[] = [
  {
    name: 'Belajar Javascript Pemula Sampai Mahir',
    issuer: 'Udemy',
    years: '2023',
    url: 'https://www.udemy.com/certificate/UC-3074907a-30e1-4989-91f6-61ce13d64907/',
  },
  {
    name: 'Belajar Typescript Pemula Sampai Mahir',
    issuer: 'Udemy',
    years: '2023',
    url: 'https://www.udemy.com/certificate/UC-0681567b-d7e6-4f29-a6b7-671d3a0a0d11/',
  },
  {
    name: 'Problem Solving with Javascript',
    issuer: 'HackerRank',
    years: ' 2023',
    url: 'https://www.hackerrank.com/certificates/a6e30814cb84',
  },
  {
    name: 'Legacy JavaScript Algorithms and Data Structures',
    issuer: 'FreeCodeCamp',
    years: '2023',
    url: 'https://www.freecodecamp.org/certification/matfaisall/javascript-algorithms-and-data-structures',
  },
  {
    name: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    years: '2023',
    url: 'https://www.freecodecamp.org/certification/matfaisall/responsive-web-design',
  },
  {
    name: 'Belajar Membuat Aplikasi Web dengan React.js',
    issuer: 'Dicoding Indonesia',
    years: '2023',
    url: 'https://www.dicoding.com/certificates/N9ZO7R7QDZG5',
  },
];

// ==================== Sub Components ====================
const ProfileHeader: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Muhammad Faisal
        </motion.h1>
        <motion.p
          className="text-base font-medium sm:text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Frontend Developer
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.6,
        }}
      >
        <StatusIndicator />
      </motion.div>
    </motion.div>
  );
};

const ProfileImage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="col-span-12 md:col-span-5 lg:col-span-4"
      variants={imageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative h-64 w-full overflow-hidden rounded-2xl border-2 border-orange-500 sm:h-80 md:h-96 lg:h-[450px]"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        whileHover={shouldReduceMotion ? undefined : 'hover'}
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <Image
          src="/images/me.png"
          alt="Muhammad Faisal - Frontend Developer"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  );
};

const BioContent: React.FC = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, {
    once: true,
    margin: '-100px',
    amount: 0.3,
  });

  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-8" ref={contentRef}>
      <motion.h2
        className="mb-4 text-2xl font-bold text-white sm:mb-6 sm:text-3xl"
        custom={0}
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        Hi hi hi, Hello...
      </motion.h2>

      <div className="space-y-3 leading-relaxed text-slate-300 sm:space-y-4">
        {BIO_PARAGRAPHS.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-base sm:text-[1.1rem] lg:text-[1.16rem]"
            custom={index + 1}
            variants={paragraphVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

const TechStackCarousels: React.FC = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(carouselRef, {
    once: true,
    margin: '-50px',
    amount: 0.2,
  });

  return (
    <motion.div
      ref={carouselRef}
      className="space-y-6 sm:space-y-8"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.div
        custom={0}
        variants={carouselVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <InfiniteScrollCarousel items={techStackFromRight} direction="left" duration={25} />
      </motion.div>

      <motion.div
        custom={1}
        variants={carouselVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <InfiniteScrollCarousel items={techStackFromLeft} direction="right" duration={20} />
      </motion.div>
    </motion.div>
  );
};

// ==================== Education Section ====================
const EducationSection: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
    amount: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className="container-fluid relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-12 gap-8 lg:gap-12"
      >
        {/* Left Column - Title */}
        <motion.div
          className="col-span-12 lg:col-span-6"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 0.2,
          }}
        >
          <div className="sticky top-32">
            <motion.h2
              className="mb-2 text-3xl font-bold text-white"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Educations
            </motion.h2>
            <motion.p
              className="text-base text-slate-400 sm:text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.4 }}
            >
              Where my passion for web development began
            </motion.p>
          </div>
        </motion.div>

        {/* Right Column - Education Details */}
        <motion.div
          className="col-span-12 lg:col-span-6"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 0.3,
          }}
        >
          <div className="space-y-2">
            {/* Institution Name */}
            <motion.div
              custom={0}
              variants={educationItemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.h3
                className="text-2xl font-bold text-white hover:!text-orange-500 sm:text-3xl"
                whileHover={{ y: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {EDUCATION_DATA.institution}
              </motion.h3>
            </motion.div>

            {/* Degree & Major */}
            <motion.div
              className="space-y-2"
              custom={1}
              variants={educationItemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <p className="text-lg font-medium text-gray-400 sm:text-xl">
                {EDUCATION_DATA.degree} - GPA: {EDUCATION_DATA.gpa}
              </p>

              <p className="text-lg text-gray-400">{EDUCATION_DATA.period}</p>
            </motion.div>

            {/* GPA */}
            {/* <motion.div
              custom={2}
              variants={educationItemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="inline-flex items-center gap-2">
                <motion.span
                  className="text-sm font-medium text-slate-400"
                  whileHover={{ scale: 1.05 }}
                >
                  GPA:
                </motion.span>
                <motion.span
                  className="text-md font-bold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {EDUCATION_DATA.gpa}
                </motion.span>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ExperienceSection: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
    amount: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="container-fluid relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-12 gap-8 lg:gap-12"
      >
        {/* Left Column - Title */}
        <motion.div
          className="col-span-12 lg:col-span-6"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 0.2,
          }}
        >
          <div className="lg:sticky lg:top-32">
            <motion.h2
              className="mb-2 text-3xl font-bold text-white"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Experiences
            </motion.h2>
            <motion.p
              className="text-base text-slate-400 sm:text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.4 }}
            >
              Building products that matter
            </motion.p>
          </div>
        </motion.div>

        {/* Right Column - Experience Details */}
        <motion.div
          className="col-span-12 lg:col-span-6"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 0.3,
          }}
        >
          <div className="space-y-6 rounded-2xl border border-gray-800 bg-gray-900/30 p-6 backdrop-blur-sm sm:space-y-8">
            {/* Header - Position & Company */}
            <motion.div
              className="space-y-2"
              custom={0}
              variants={educationItemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.h3
                className="text-2xl font-bold text-white sm:text-3xl"
                whileHover={{ x: 5, color: '#FFA500' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {EXPERIENCE_DATA.position}
              </motion.h3>
              <motion.p
                className="text-lg font-semibold text-orange-500 sm:text-xl"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                at {EXPERIENCE_DATA.company}
              </motion.p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="text-slate-400">📅 </span>
                  {EXPERIENCE_DATA.period}
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              custom={1}
              variants={educationItemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                {EXPERIENCE_DATA.description}
              </p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              className="space-y-3"
              custom={2}
              variants={educationItemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <h4 className="text-base font-semibold text-slate-300 sm:text-lg">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {EXPERIENCE_DATA.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{
                      // delay: 0.5 + index * 0.08,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    />
                    <span className="text-sm text-slate-300 sm:text-base">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Achievements */}
            {EXPERIENCE_DATA.achievements && EXPERIENCE_DATA.achievements.length > 0 && (
              <motion.div
                className="space-y-3"
                custom={3}
                variants={educationItemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <h4 className="text-base font-semibold text-slate-300 sm:text-lg">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {EXPERIENCE_DATA.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{
                        delay: 0.9 + index * 0.1,
                        type: 'spring',
                        stiffness: 100,
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <span className="text-xs">🎯</span>
                      </motion.span>
                      <span className="text-sm text-slate-300 sm:text-base">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Tech Stack */}
            {EXPERIENCE_DATA.techStack && EXPERIENCE_DATA.techStack.length > 0 && (
              <motion.div
                className="space-y-3"
                custom={4}
                variants={educationItemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <h4 className="text-base font-semibold text-slate-300 sm:text-lg">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {EXPERIENCE_DATA.techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{
                        delay: 1.2 + index * 0.05,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        borderColor: '#10B981',
                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const CertificateSection: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
    amount: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="container-fluid relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-12 gap-8 lg:gap-12"
      >
        {/* column title */}
        <motion.div
          className="col-span-12 lg:col-span-6"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 0.2,
          }}
        >
          <div className="sticky top-32">
            <motion.h2
              className="mb-2 text-3xl font-bold text-white"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Certificates
            </motion.h2>
            <motion.p
              className="text-base text-slate-400 sm:text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.4 }}
            >
              Continuous learning and skill development
            </motion.p>
          </div>
        </motion.div>
        {/* column certificate */}
        <motion.div
          className="col-span-12 lg:col-span-6"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 0.3,
          }}
        >
          <div className="space-y-2">
            <motion.div initial="hidden" animate="visible">
              {CERTIFICATE_DATA.map((certificate, index) => (
                <motion.a
                  key={index}
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
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
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// ==================== Main Component ====================
const AboutPage: React.FC = () => {
  return (
    <div className="overflow-hidden dark:bg-black dark:text-white">
      {/* Hero Section - Full Screen */}
      <section className="container-fluid relative flex min-h-dvh w-full flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
        <motion.div
          className="flex flex-col gap-12 sm:gap-16"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <ProfileHeader />

          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            <ProfileImage />
            <BioContent />
          </div>

          <TechStackCarousels />
        </motion.div>
      </section>

      {/* Education Section - Below Hero */}
      <EducationSection />

      <ExperienceSection />

      <CertificateSection />
    </div>
  );
};

export default AboutPage;
