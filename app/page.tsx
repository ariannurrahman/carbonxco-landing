import { HomeCarousel } from './ui/carousel/HomeCarousel';
import { ContactSection } from './ui/contact-section';
import { HomeHero } from './ui/hero/home-hero';
import { WhatIsCarbonx } from './ui/home/what-is-carbonx';
import { QualitySection } from './ui/home/quality-section';
import { WhyCarbonx } from './ui/home/why-carbonx';
import { OurWorkSection } from './ui/home/our-work-section';
import { OurFocus } from './ui/home/our-focus';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <QualitySection />
      <HomeCarousel />
      <WhatIsCarbonx />
      <WhyCarbonx />
      <OurWorkSection />
      <OurFocus />
      <ContactSection />
    </main>
  );
}
