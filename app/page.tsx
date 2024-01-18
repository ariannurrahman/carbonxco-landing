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
      <div className='px-2 lg:px-8 w-full relative'>
        <HomeHero />
      </div>
      <div className='px-2 lg:px-[120px] xl:px-[159px]'>
        <QualitySection />
      </div>

      <HomeCarousel />
      <div className='px-2 lg:px-[120px] xl:px-[159px]'>
        <WhatIsCarbonx />
      </div>
      <WhyCarbonx />
      <div className='px-2 lg:pl-[120px] xl:pl-[159px]'>
        <OurWorkSection />
      </div>
      <div className='px-2 lg:px-8 w-full relative'>
        <OurFocus />
      </div>
      <div className='relative'>
        <ContactSection />
      </div>
    </main>
  );
}
