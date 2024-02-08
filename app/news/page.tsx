import { Metadata } from 'next';
import { NewsHero } from '@/app/ui/hero/news-hero';
import { SectionWrapper } from '@/app/ui/wrapper';
import { NewsCard } from '@/app/ui/card/news-card';

export const metadata: Metadata = {
  title: 'News',
  description: 'News Carbonxco',
};

export default function News() {
  const DUMMY_DATA_CARD = [
    {
      title: 'Buru Island',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment to generate alternative livelihoods; and protecting the...',
      slug: 'News',
      date: '01 JANUARY 2024',
      author: 'AUTHOR NAME',
      id: 1,
    },
    {
      title: 'Buru Island',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment to generate alternative livelihoods; and protecting the...',
      slug: 'News',
      date: '01 JANUARY 2024',
      author: 'AUTHOR NAME',
      id: 2,
    },
    {
      title: 'Buru Island',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment to generate alternative livelihoods; and protecting the...',
      slug: 'News',
      date: '01 JANUARY 2024',
      author: 'AUTHOR NAME',
      id: 3,
    },
    {
      title: 'Buru Island',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment to generate alternative livelihoods; and protecting the...',
      slug: 'News',
      date: '01 JANUARY 2024',
      author: 'AUTHOR NAME',
      id: 4,
    },
  ];

  return (
    <>
      <NewsHero />
      <SectionWrapper padding='high'>
        <div className='flex flex-col w-full pt-[60px]'>
          {DUMMY_DATA_CARD.map((news, index) => {
            return <NewsCard key={index} {...news} />;
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
