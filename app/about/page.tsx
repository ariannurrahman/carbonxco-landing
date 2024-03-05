import { Metadata } from 'next';

import { AboutHero } from '@/app/ui/hero/about-hero';
import { MainFocus } from '@/app/ui/about/main-focus';
import { OurGoals } from '@/app/ui/about/our-goals';
import { Values } from '@/app/ui/about/values';
import { OurStory } from '@/app/ui/about/our-story';
import { MoreAbout } from '@/app/ui/about/more-about';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Carbonxco',
};

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MainFocus />
      <OurGoals />
      <Values />
      <MoreAbout />
    </>
  );
}
