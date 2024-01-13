import { HomeCarousel } from './ui/carousel/HomeCarousel';
import { ContactSection } from './ui/contact-section';
import { HomeHero } from './ui/hero/home-hero';
import { Impact } from './ui/impact-section';
import { ProjectSection } from './ui/project-section';
import { WhatIsCarbonx } from './ui/what-is-carbonx';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeCarousel />
      <WhatIsCarbonx />
      <Impact />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
