import NavigationBar from '@/components/layout/NavigationBar';
import SideNav from '@/components/layout/SideNav';
import MarqueeSection from '@/components/layout/Marquee';
import {
  HeroSection,
  AboutSection,
  ServiceSection,
  PortfolioSection,
  ContactUsSection,
} from '@/components/sections/homepage';
import RotatingCircleText from '@/assets/icons/RotatingCircleText';
import CTAPlayButton from '@/assets/icons/CTAPlayButton';
import ScrollIndicator from '@/elements/scroll-indicator';

// this is the main page
export default function Home() {
  return (
    <div className="overflow-hidden dark:bg-black dark:text-white">
      <div className="relative min-h-svh">
        <NavigationBar />
        <SideNav />
        <MarqueeSection />
        <HeroSection />

        <RotatingCircleText />
        <CTAPlayButton />

        <ScrollIndicator />
      </div>

      {/* about section */}
      <div className="min-h-[60svh]">
        <AboutSection />
      </div>

      {/*  service section */}
      <div className="min-h-[60svh]">
        <ServiceSection />
      </div>

      {/* portfolio section */}
      <div className="min-h-[70svh]">
        <PortfolioSection />
      </div>

      {/*  */}
      <div className="min-h-[65svh]">
        <ContactUsSection />
      </div>
    </div>
  );
}
