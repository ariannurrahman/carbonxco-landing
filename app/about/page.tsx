import { AboutHero } from '@/app/ui/hero/about-hero';
import { MainFocus } from '@/app/ui/about/main-focus';
import { OurGoals } from '@/app/ui/about/our-goals';
import { Values } from '@/app/ui/about/values';
import { OurStory } from '@/app/ui/about/our-story';

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MainFocus />
      <OurGoals />
      <Values />
    </>
  );
}
