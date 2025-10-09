import IconAdobexd from '@/assets/icons/icon-adobexd.svg';
import IconChrome from '@/assets/icons/icon-chrome.svg';
import IconFigma from '@/assets/icons/icon-figma.svg';
import IconNetlify from '@/assets/icons/icon-netlify.svg';
import IconVsCode from '@/assets/icons/icon-vs-code.svg';
import IconFirebase from '@/assets/icons/icon-firebase.svg';
import IconGithub from '@/assets/icons/icon-github.svg';
import IconVite from '@/assets/icons/icon-vite.svg';
import IconGit from '@/assets/icons/icon-git.svg';
import IconJSON from '@/assets/icons/icon-json.svg';
import IconSass from '@/assets/icons/icon-sass.svg';

import IconHTML from '@/assets/icons/icon-html5.svg';
import IconCSS from '@/assets/icons/icon-css.svg';
import IconJavascript from '@/assets/icons/icon-javascript.svg';
import IconTypescript from '@/assets/icons/icon-typescript.svg';
import IconReact from '@/assets/icons/icon-reactjs.svg';
import IconNextjs from '@/assets/icons/icon-nextjs.svg';
import IconTailwind from '@/assets/icons/icon-tailwindcss.svg';
import IconRedux from '@/assets/icons/icon-redux.svg';
import IconNode from '@/assets/icons/icon-nodejs.svg';
import IconPwa from '@/assets/icons/icon-pwa.svg';

interface TechStack {
  name: string;
  icon: string;
  color: string;
  hexColor: string;
  category?: 'design' | 'development' | 'tools' | 'framework' | 'language';
}

export const techStackFromLeft: TechStack[] = [
  {
    name: 'Adobe XD',
    icon: IconAdobexd,
    color: 'text-pink-600',
    hexColor: '#FF61F6',
    category: 'design',
  },
  {
    name: 'Chrome',
    icon: IconChrome,
    color: 'text-red-500',
    hexColor: '#DB4437',
    category: 'tools',
  },
  {
    name: 'Figma',
    icon: IconFigma,
    color: 'text-purple-500',
    hexColor: '#F24E1E',
    category: 'design',
  },
  {
    name: 'Netlify',
    icon: IconNetlify,
    color: 'text-teal-500',
    hexColor: '#00C7B7',
    category: 'tools',
  },
  {
    name: 'VS Code',
    icon: IconVsCode,
    color: 'text-blue-600',
    hexColor: '#007ACC',
    category: 'tools',
  },
  {
    name: 'Firebase',
    icon: IconFirebase,
    color: 'text-yellow-500',
    hexColor: '#FFCA28',
    category: 'development',
  },
  {
    name: 'GitHub',
    icon: IconGithub,
    color: 'text-gray-900 dark:text-white',
    hexColor: '#181717',
    category: 'tools',
  },
  {
    name: 'Vite',
    icon: IconVite,
    color: 'text-purple-600',
    hexColor: '#646CFF',
    category: 'tools',
  },
  {
    name: 'Git',
    icon: IconGit,
    color: 'text-orange-600',
    hexColor: '#F05032',
    category: 'tools',
  },
  {
    name: 'JSON',
    icon: IconJSON,
    color: 'text-gray-900 dark:text-gray-100',
    hexColor: '#000000',
    category: 'language',
  },
  {
    name: 'Sass',
    icon: IconSass,
    color: 'text-pink-500',
    hexColor: '#CC6699',
    category: 'framework',
  },
];

export const techStackFromRight: TechStack[] = [
  {
    name: 'HTML5',
    icon: IconHTML,
    color: 'text-orange-600',
    hexColor: '#E34F26',
    category: 'language',
  },
  {
    name: 'CSS3',
    icon: IconCSS,
    color: 'text-blue-600',
    hexColor: '#1572B6',
    category: 'language',
  },
  {
    name: 'JavaScript',
    icon: IconJavascript,
    color: 'text-yellow-400',
    hexColor: '#F7DF1E',
    category: 'language',
  },
  {
    name: 'TypeScript',
    icon: IconTypescript,
    color: 'text-blue-600',
    hexColor: '#3178C6',
    category: 'language',
  },
  {
    name: 'React.js',
    icon: IconReact,
    color: 'text-cyan-400',
    hexColor: '#61DAFB',
    category: 'framework',
  },
  {
    name: 'Next.js',
    icon: IconNextjs,
    color: 'text-gray-900 dark:text-white',
    hexColor: '#000000',
    category: 'framework',
  },
  {
    name: 'Tailwind CSS',
    icon: IconTailwind,
    color: 'text-cyan-500',
    hexColor: '#06B6D4',
    category: 'framework',
  },
  {
    name: 'Redux',
    icon: IconRedux,
    color: 'text-purple-600',
    hexColor: '#764ABC',
    category: 'framework',
  },
  {
    name: 'Node.js',
    icon: IconNode,
    color: 'text-green-600',
    hexColor: '#339933',
    category: 'development',
  },
  {
    name: 'PWA',
    icon: IconPwa,
    color: 'text-purple-600',
    hexColor: '#5A0FC8',
    category: 'framework',
  },
];
