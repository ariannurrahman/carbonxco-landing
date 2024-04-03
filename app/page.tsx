import { ContactSection } from './ui/contact-section';
import { HomeHero } from './ui/hero/home-hero';
import { OurFocus } from './ui/home/our-focus';
import { OurWorkSection } from './ui/home/our-work-section';
import { Partners } from './ui/home/partners';
import { QualitySection } from './ui/home/quality-section';
import { WhatIsCarbonx } from './ui/home/what-is-carbonx';
import { WhyCarbonx } from './ui/home/why-carbonx';

export default function Home() {
  return (
    <main>
      <div className='min-h-screen flex-col justify-between'>
        <HomeHero />
        <QualitySection />
      </div>
      <Partners />
      <WhatIsCarbonx />
      <WhyCarbonx />
      <OurWorkSection />
      <OurFocus />
      <ContactSection />
    </main>
  );
}
