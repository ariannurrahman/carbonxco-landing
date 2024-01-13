import { HomeCarousel } from './ui/carousel/HomeCarousel';
import { HomeHero } from './ui/hero/home-hero';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeCarousel />
    </main>
  );
}
