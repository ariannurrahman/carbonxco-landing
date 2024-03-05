import { WorksHero } from '@/app/ui/hero/works-hero';
import { WhatWeDo } from '@/app/ui/works/what-we-do';
import { RecentProjects } from '@/app/ui/works/recent-projects';

export default function WorksPage() {
  return (
    <div>
      <WorksHero />
      <WhatWeDo />
      <RecentProjects />
    </div>
  );
}
