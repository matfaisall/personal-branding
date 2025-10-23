// import NavigationBar from '@/components/layout/NavigationBar';
import SideNav from '@/components/layout/SideNav';
import MarqueeSection from '@/components/layout/Marquee';
import {
  HeroSection,
  AboutSection,
  ServiceSection,
  PortfolioSection,
  // ContactUsSection,
} from '@/components/sections/homepage';
import RotatingCircleText from '@/assets/icons/RotatingCircleText';
import CTAPlayButton from '@/assets/icons/CTAPlayButton';
import ScrollIndicator from '@/elements/scroll-indicator';
import UnderDevelopmentModal from '@/components/shared/dialogs/UnderDevelopmentDialogs';
import { ContactFooter } from '@/components/shared/footer';

// this is the main page
export default function Home() {
  return (
    <div className="overflow-hidden dark:bg-black dark:text-white">
      <div className="min-h-sm relative">
        <UnderDevelopmentModal />
        {/* <NavigationBar /> */}
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

      <section className="container-fluid relative mt-32 flex w-full flex-col justify-center px-4 sm:px-6 sm:py-20 md:mt-12">
        <ContactFooter />
      </section>
    </div>
  );
}
