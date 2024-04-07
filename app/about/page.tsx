import { Metadata } from 'next';

import { AboutHero } from '@/app/ui/hero/about-hero';
import { MainFocus } from '@/app/ui/about/main-focus';
import { OurGoals } from '@/app/ui/about/our-goals';
import { Values } from '@/app/ui/about/values';
import { OurStory } from '@/app/ui/about/our-story';
import { MoreAbout } from '@/app/ui/about/more-about';

export const metadata: Metadata = {
  title: 'About',
  description:
    'CarbonX is an end-to-end carbon projects facilitator, committed to design a sustainable growth for businesses, involving community and conservation.',
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
