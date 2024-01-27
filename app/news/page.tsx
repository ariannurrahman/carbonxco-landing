import { NewsHero } from '@/app/ui/hero/news-hero';
import { SectionWrapper } from '@/app/ui/wrapper';
import { NewsCard } from '../ui/card/news-card';

export default function News() {
  const DUMMY_DATA_CARD = [
    {
      title: 'Buru Island',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment to generate alternative livelihoods; and protecting the...',
      slug: 'News',
      date: '01 JANUARY 2024',
      author: 'AUTHOR NAME',
    },
    {
      title: 'Buru Island',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment to generate alternative livelihoods; and protecting the...',
      slug: 'News',
      date: '01 JANUARY 2024',
      author: 'AUTHOR NAME',
    },
    {
      title: 'Buru Island',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment to generate alternative livelihoods; and protecting the...',
      slug: 'News',
      date: '01 JANUARY 2024',
      author: 'AUTHOR NAME',
    },
    {
      title: 'Buru Island',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment to generate alternative livelihoods; and protecting the...',
      slug: 'News',
      date: '01 JANUARY 2024',
      author: 'AUTHOR NAME',
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
