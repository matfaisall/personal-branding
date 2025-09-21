import NavigationBar from '@/components/layout/NavigationBar';
import SideNav from '@/components/layout/SideNav';
import MarqueeSection from '@/components/layout/Marquee';
import { HeroSection, AboutSection } from './(homepage)/components';

// this is the main page
export default function Home() {
  return (
    <div className="overflow-hidden dark:bg-black dark:text-white">
      {/* main section : navbar, sidenav, text marquee and hero section */}
      <div className="relative min-h-svh">
        <NavigationBar />
        <SideNav />
        <MarqueeSection />
        <HeroSection />
      </div>

      {/* about section */}

      <AboutSection />
    </div>
  );
}
