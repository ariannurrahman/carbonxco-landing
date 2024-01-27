import Image from 'next/image';

import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { Button } from '@/app/ui/button';

export const NewsHero = () => {
  const BUTTON_FILTER = [
    {
      label: 'All',
    },
    {
      label: 'Insight',
    },
    {
      label: 'News',
    },
  ];

  return (
    <SectionWrapper padding='none' className='relative'>
      <SectionWrapper className='flex justify-start items-center h-[340px]' padding='high'>
        <div className='relative z-20'>
          <GreenSubTitle label='NEWS & INSIGHTS' />
          <p className='text-[32px] text-[#DAEEFA] max-w-[620px] mt-4'>
            Get a deeper scoop of our projects and stay on top of industry trends.
          </p>
          <div className='flex flex-row flex-wrap justify-start items-center gap-5 mt-5'>
            {BUTTON_FILTER.map(({ label }) => {
              return (
                <button key={label} className='bg-white rounded-lg px-6 py-4'>
                  <p className='text-[#13282D] text-base font-medium'>{label}</p>
                </button>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
      <div className='w-full h-[340px] absolute top-0 left-0 z-10'>
        <Image src='/assets/hero/news-hero.png' className='relative' fill alt='news and insight' />
      </div>
    </SectionWrapper>
  );
};
