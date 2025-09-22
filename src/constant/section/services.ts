interface ServiceProps {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
}

export const services: ServiceProps[] = [
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description:
      'Developing interactive and responsive website interfaces using modern technologies. With 2+ years of experience, I specialize in building fast, SEO-friendly, and user-friendly web applications. Focus on clean code, and performance optimization.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Designing intuitive user experiences and visually appealing interfaces. Combining user research, wireframing, and prototyping to create designs that are not only beautiful to look at, but also easy to use.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing'],
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description:
      'Creating modern, responsive website designs that align with brand identity. Combining graphic design principles with deep understanding of web development to produce designs that are not only attractive, but also feasible to implement.',
    technologies: ['Responsive Design', 'Design Systems'],
  },
];
