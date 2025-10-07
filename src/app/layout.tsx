import type { Metadata } from 'next';
import { Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
// import SplashWrapper from '@/components/shared/splash-screen/SplashScreenWrapper';
import NavigationBar from '@/components/layout/NavigationBar';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: true,
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Muhammad Faisal',
  description: 'Muhammad Faisal is a frontend developer and a ui ux designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${geistMono.className} antialiased`}>
      <body className="dark">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
