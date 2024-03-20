import { Metadata } from 'next';
import { NewsHero } from '@/app/ui/hero/news-hero';
import { SectionWrapper } from '@/app/ui/wrapper';
import { NewsCard } from '@/app/ui/card/news-card';
import { NewsList } from './news-list';

export const metadata: Metadata = {
  title: 'News',
  description: 'News Carbonxco',
};

export default function News() {
  return (
    <>
      <NewsHero />
      <SectionWrapper padding='high'>
        <div className='flex flex-col w-full pt-[60px]'>
          <NewsList />
        </div>
      </SectionWrapper>
    </>
  );
}
