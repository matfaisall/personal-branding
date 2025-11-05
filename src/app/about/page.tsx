'use client';

import React, { useState, useEffect, useMemo, memo } from 'react';
import { motion, LazyMotion, domAnimation } from 'motion/react';

import StatusIndicator from '@/components/shared/status-indicator';
import { ContactFooter } from '@/components/shared/footer';
import { CERTIFICATE_DATA } from '@/constant/data/about/certificates';

// Import components dan animations dari file terpisah
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  CertificateSection,
} from './sectionComponents';
import {
  headerVariants,
  headerTitleVariants,
  headerSubtitleVariants,
  statusIndicatorVariants,
} from './animations';

// ==================== Profile Header Component ====================
const ProfileHeader = memo(() => (
  <motion.div
    className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
    variants={headerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="flex flex-col gap-2">
      <motion.h1
        className="text-3xl font-bold sm:text-4xl lg:text-5xl"
        variants={headerTitleVariants}
      >
        Muhammad Faisal
      </motion.h1>
      <motion.p
        className="text-base font-medium text-[#8b8b8b] sm:text-lg"
        variants={headerSubtitleVariants}
      >
        Frontend Developer
      </motion.p>
    </div>

    <motion.div variants={statusIndicatorVariants}>
      <StatusIndicator />
    </motion.div>
  </motion.div>
));

// ==================== Navigation Button Component ====================
const NavButton = memo(
  ({
    tab,
    activeTab,
    onClick,
  }: {
    tab: string;
    activeTab: string;
    onClick: (tab: string) => void;
  }) => (
    <button
      onClick={() => onClick(tab)}
      className={`cursor-pointer border-b-2 py-4 text-sm font-medium transition-colors ${
        activeTab === tab
          ? 'border-orange-500 text-white'
          : 'border-transparent text-gray-400 hover:text-white'
      }`}
      aria-label={`Switch to ${tab} section`}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  ),
);

// ==================== Main About Page Component ====================
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  // Data untuk education
  const educationData = useMemo(
    () => [
      {
        degree: 'Bachelor of Informatics Engineering',
        institution: 'Muhammadiyah University of Ponorogo',
        period: '2018 - 2022',
        description: 'Focused on software engineering, web development, and data structures.',
      },
    ],
    [],
  );

  // Data untuk experience
  const experienceData = useMemo(
    () => [
      {
        title: 'Frontend Web Developer',
        company: 'PT Infosys Solusi Terpadu',
        period: '2023 - 2025',
        description:
          'Building scalable web applications using React, Next.js, and TypeScript. Collaborating with cross-functional teams to deliver high-quality user experiences.',
      },
      {
        title: 'Freelance Frontend Developer',
        company: 'PT Ragdalion Indonesia',
        period: '',
        description: 'Building web app using Next.js, and TypeScript',
      },
    ],
    [],
  );

  // Navigation tabs
  const navigationTabs = useMemo(() => ['about', 'education', 'experience', 'certificates'], []);

  // Render section berdasarkan active tab
  const renderSection = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'education':
        return <EducationSection data={educationData} />;
      case 'experience':
        return <ExperienceSection data={experienceData} />;
      case 'certificates':
        return <CertificateSection data={CERTIFICATE_DATA} />;
      default:
        return <AboutSection />;
    }
  };

  // Handle scroll untuk sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="dark:bg-black dark:text-white">
        {/* Header Section */}
        <section className="container-fluid relative flex w-full flex-col justify-center px-4 pt-32 sm:px-6 sm:py-20 md:mt-12">
          <ProfileHeader />
        </section>

        {/* Sticky Navigation */}
        <motion.div
          className={`sticky top-19 z-50 mb-10 border-b border-gray-800 transition-all duration-300 md:top-21 md:mb-0 ${
            isScrolled ? 'bg-black/95 shadow-lg shadow-black/20 backdrop-blur-md' : 'bg-black/50'
          }`}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
        >
          <nav className="container-fluid mx-auto px-4 sm:px-6" aria-label="About page navigation">
            <div className="flex gap-8 overflow-x-auto">
              {navigationTabs.map((tab) => (
                <NavButton key={tab} tab={tab} activeTab={activeTab} onClick={setActiveTab} />
              ))}
            </div>
          </nav>
        </motion.div>

        {/* Main Content */}
        <main className="container-fluid relative w-full px-4 sm:px-6 sm:py-10">
          {renderSection()}
        </main>

        {/* Footer */}
        <section className="container-fluid relative flex w-full flex-col justify-center px-4 sm:px-6 sm:py-20">
          <ContactFooter />
        </section>
      </div>
    </LazyMotion>
  );
};

export default AboutPage;
