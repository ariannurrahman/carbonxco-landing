import { WorksHero } from '@/app/ui/hero/works-hero';
import { WhatWeDo } from '@/app/ui/works/what-we-do';
import { RecentProjects } from '@/app/ui/works/recent-projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'CarbonX is co-creating a wide range of carbon projects, with an end goal to make the carbon market more accessible for every community.',
};

export default function WorksPage() {
  return (
    <div>
      <WorksHero />
      <WhatWeDo />
      <RecentProjects />
    </div>
  );
}
