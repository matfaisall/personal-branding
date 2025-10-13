import { Works } from '@/types/about/works.types';

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'uiux', label: 'UI/UX Design' },
];

export const works: Works[] = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'Modern e-commerce platform with responsive design',
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Real-time analytics dashboard with interactive charts',
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    tags: ['TypeScript', 'Chart.js', 'Redux'],
  },
  {
    id: 3,
    title: 'RESTful API Service',
    description: 'Scalable backend API with authentication',
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 4,
    title: 'Microservices Architecture',
    description: 'Distributed system with Docker containerization',
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop',
    tags: ['Docker', 'Kubernetes', 'PostgreSQL'],
  },
  {
    id: 5,
    title: 'Mobile App Design',
    description: 'Clean and intuitive mobile app interface',
    category: 'uiux',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    id: 6,
    title: 'Design System',
    description: 'Comprehensive design system and component library',
    category: 'uiux',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    tags: ['Design Tokens', 'Storybook', 'Accessibility'],
  },
];
