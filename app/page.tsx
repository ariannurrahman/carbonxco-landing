import { Metadata } from 'next';
import { ContactSection } from './ui/contact-section';
import { HomeHero } from './ui/hero/home-hero';
import { OurFocus } from './ui/home/our-focus';
import { OurWorkSection } from './ui/home/our-work-section';
import { Partners } from './ui/home/partners';
import { QualitySection } from './ui/home/quality-section';
import { WhatIsCarbonx } from './ui/home/what-is-carbonx';
import { WhyCarbonx } from './ui/home/why-carbonx';

export const metadata: Metadata = {
  title: 'Homepage',
  description:
    'Join CarbonX in empowering communities through quality carbon projects by leveraging climate technology solutions, for a more sustainable future.',
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <QualitySection />
      <Partners />
      <WhatIsCarbonx />
      <WhyCarbonx />
      <OurWorkSection />
      <OurFocus />
      <ContactSection />
    </main>
  );
}
