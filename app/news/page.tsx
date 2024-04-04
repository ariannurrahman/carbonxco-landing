import { Metadata } from 'next';
import { NewsHero } from '@/app/ui/hero/news-hero';
import { SectionWrapper } from '@/app/ui/wrapper';
import { NewsList } from './news-list';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'News',
  description: 'News Carbonxco',
};

export default function News() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <NewsHero />
      </Suspense>
      <SectionWrapper padding='high'>
        <div className='flex flex-col w-full pt-[60px]'>
          <Suspense fallback={<p>Loading...</p>}>
            <NewsList />
          </Suspense>
        </div>
      </SectionWrapper>
    </>
  );
}
