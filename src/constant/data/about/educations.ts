import { EducationData } from '@/types/about/education.types';

export const BIO_PARAGRAPHS = [
  "I'm a Front End Developer passionate about creating clean, responsive, and engaging web experiences. I focus on turning design concepts into intuitive interfaces using technologies like React.js, Next.js, TypeScript, and Tailwind CSS.",
  'Always eager to learn new technologies and contribute to teams by creating innovative and effective web solutions. I have experience working on various projects including Electronic Data Capture systems, Loan Origination Systems, and Property management platforms.',
  "I'm driven by curiosity and a love for continuous learning — always exploring new tools, frameworks, and best practices to stay current in the evolving web landscape.",
] as const;

export const EDUCATION_DATA: EducationData = {
  institution: 'Muhammadiyah University of Ponorogo',
  degree: 'Bachelor of Informatic Engineering',
  period: '2018 - 2022',
  gpa: '3.85 / 4.00',
};
