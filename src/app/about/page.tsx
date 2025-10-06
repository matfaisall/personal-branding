'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Award, Code, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const skills = [
    'TypeScript',
    'React JS',
    'Next JS',
    'TailwindCSS',
    'Bootstrap',
    'Material UI',
    'Tanstack Query',
    'State Management',
    'React Hook Form',
  ];

  const projects = [
    {
      title: 'CIMB - Electronic Data Capture',
      role: 'Frontend Developer',
      period: 'Feb 2024 - Jul 2025',
      tasks: [
        'Developing responsive and intuitive interface using ReactJS and MaterialUI',
        'Developing reusable frontend components',
        'Integration with Backend API',
        'Fixing issues during SIT and UAT phases',
      ],
    },
    {
      title: 'SMI - Loan Origination System',
      role: 'Frontend Developer',
      period: 'Jul 2024 - Aug 2024',
      tasks: [
        'Building interface matching Figma design using MaterialUI and Next14',
        'Integrating API from Backend team',
      ],
    },
    {
      title: 'BTN - BTN Property',
      role: 'Frontend Developer',
      period: 'Nov 2023 - Feb 2024',
      tasks: ['Fixing issues during SIT and UAT phases'],
    },
  ];

  const certificates = [
    { name: 'FullStack Web and Mobile Development (Pijar)', year: '2022' },
    { name: 'Pemrograman Typescript: Pemula Sampai Mahir (Udemy)', year: '2025' },
    { name: 'Responsive Web Design (FreeCodeCamp)', year: '2022' },
    { name: 'Legacy Javascript Algorithms (FreeCodeCamp)', year: '2024' },
    { name: 'Membuat Aplikasi Web dengan React (Dicoding)', year: '2022' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
            <span className="text-white">faisal</span>
            <span className="text-orange-500">.</span>
          </motion.div>
          <div className="hidden gap-8 md:flex">
            {['About', 'Experience', 'Certificates'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: '#f97316' }}
                className="cursor-pointer text-sm transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-[20rem] font-bold text-gray-900 opacity-10"
          >
            MF
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 px-6 text-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <div className="mb-6 inline-block rounded-full border border-orange-500 px-4 py-2 text-sm text-orange-500">
              Frontend Developer
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="mb-6 text-6xl font-bold md:text-8xl">
            Interface<span className="text-orange-500">.</span>Experience
          </motion.h1>

          <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-light md:text-6xl">
            Hand-Coded Perfection<span className="text-orange-500">.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-2xl font-light text-gray-400 md:text-4xl"
          >
            &beyond
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full border-2 border-orange-500 px-8 py-4 font-medium text-orange-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                EXPLORE WORK
                <ChevronRight className="h-5 w-5" />
              </span>
              <motion.div
                className="absolute inset-0 bg-orange-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-orange-500">
            <div className="mt-2 h-3 w-1 rounded-full bg-orange-500" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-black to-gray-900 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-16 text-6xl font-bold md:text-8xl">
              ABOUT <span className="text-orange-500">ME</span>
            </h2>

            <div className="grid gap-16 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="mb-6 text-4xl font-bold">
                  I create web experiences that matter<span className="text-orange-500">.</span>
                </h3>
                <p className="mb-8 text-xl leading-relaxed text-gray-400">
                  Frontend developer with a passion for clean code and beautiful interfaces. I build
                  web applications that not only look great but also perform exceptionally.
                </p>
                <p className="mb-8 text-xl leading-relaxed text-gray-400">
                  I am a Frontend Web Developer experienced in HTML, CSS, JavaScript, React.js, and
                  Next.js. Proficient in building responsive and engaging user interfaces with a
                  keen eye for detail.
                </p>

                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <Mail className="h-6 w-6 text-orange-500" />
                    <span>muh.faisal572@gmail.com</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <Phone className="h-6 w-6 text-orange-500" />
                    <span>+62 852 3242 6300</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <MapPin className="h-6 w-6 text-orange-500" />
                    <span>Bantul, Yogyakarta</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <Linkedin className="h-6 w-6 text-orange-500" />
                    <a
                      href="https://www.linkedin.com/in/matfaisall"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/matfaisall
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h4 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <Code className="h-8 w-8 text-orange-500" />
                  Technical Skills
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: '#f97316', color: '#000' }}
                      className="cursor-pointer rounded-lg bg-gray-800 px-4 py-3 text-center transition-all duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="mb-6 text-2xl font-bold">Education</h4>
                  <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl bg-gray-800 p-6">
                    <h5 className="mb-2 text-xl font-bold text-orange-500">
                      Muhammadiyah University of Ponorogo
                    </h5>
                    <p className="mb-2 text-gray-400">S1 Teknik Informatika</p>
                    <p className="mb-2 text-gray-500">2018 - 2022</p>
                    <p className="text-lg font-semibold">GPA: 3.63 / 4.0</p>
                    <p className="mt-2 text-sm text-gray-400">
                      🏆 Finalist Hackaton Inter-Fest 2019 Impact
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-black px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-6xl font-bold md:text-8xl">EXPERIENCE</h2>
            <div className="mb-16 h-1 w-20 bg-orange-500" />

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-20 border-l-4 border-orange-500 bg-gradient-to-r from-orange-500/10 to-transparent p-8"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500 text-2xl font-bold">
                  IST
                </div>
                <div>
                  <h3 className="text-3xl font-bold">PT. Infosys Solusi Terpadu</h3>
                  <p className="text-lg text-orange-500">Frontend Developer</p>
                  <p className="text-gray-400">Nov 2023 - Jul 2025 • Yogyakarta, Indonesia</p>
                </div>
              </div>
            </motion.div>

            {/* Projects */}
            <div className="space-y-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-gray-800 bg-gray-900 p-8 transition-all duration-300 hover:border-orange-500"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h4 className="mb-2 text-2xl font-bold">{project.title}</h4>
                      <p className="text-orange-500">{project.role}</p>
                    </div>
                    <span className="text-sm text-gray-400">{project.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {project.tasks.map((task, taskIndex) => (
                      <motion.li
                        key={taskIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: taskIndex * 0.1 }}
                        className="flex gap-3 text-gray-300"
                      >
                        <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                        <span>{task}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="bg-gradient-to-b from-black to-gray-900 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-6xl font-bold md:text-8xl">CERTIFICATES</h2>
            <div className="mb-16 h-1 w-20 bg-orange-500" />

            <div className="grid gap-6 md:grid-cols-2">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
                  className="cursor-pointer rounded-xl border border-gray-800 bg-gray-900 p-6 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500">
                      <Award className="h-6 w-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-lg font-semibold">{cert.name}</h4>
                      <p className="text-sm text-orange-500">{cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © 2025 Muhammad Faisal. Crafted with passion & code.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
