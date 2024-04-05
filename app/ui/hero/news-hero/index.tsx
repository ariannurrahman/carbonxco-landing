'use client';

import Image from 'next/image';

import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type FilterType = 'all' | 'insight' | 'news' | 'all_about_carbon';

export const NewsHero = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentCategory: FilterType = (searchParams.get('category') || '') as FilterType;

  const [activeFilter, setActiveFilter] = useState<FilterType>(currentCategory);

  const BUTTON_FILTER = [
    {
      label: 'All',
      value: '',
    },
    {
      label: 'Insight',
      value: 'insight',
    },
    {
      label: 'News',
      value: 'news',
    },
    {
      label: 'All About Carbon',
      value: 'all_about_carbon',
    },
  ];

  const onChangeFilter = (value: FilterType) => {
    setActiveFilter(value);
    router.push(`${pathname}?category=${value}`);
  };

  return (
    <SectionWrapper padding='none' className='relative w-screen h-[514px] lg:h-[344px]'>
      <SectionWrapper className='flex justify-start items-center h-full' padding='high'>
        <div className='relative z-20'>
          <GreenSubTitle className='text-white lg:text-[#00AC42]' label='NEWS & INSIGHTS' />
          <h1 className='text-[28px] lg:text-[30px] text-[#DAEEFA] font-medium max-w-[620px] mt-4'>
            Get a deeper scoop of our projects and stay on top of industry trends.
          </h1>
          <div className='flex flex-row flex-wrap justify-start items-center gap-5 mt-5'>
            {BUTTON_FILTER.map(({ label, value }) => {
              return (
                <button
                  key={label}
                  className={`hover:bg-[#DAEEFA] hover:text-[#46A7ED] rounded-lg px-6 py-4 cursor-pointer ${
                    activeFilter === value
                      ? 'bg-[#E8F4F5] text-[#13282D]'
                      : 'border-[1px] bg-[#E8F4F54D] border-[#46A7ED] text-white'
                  }`}
                  onClick={() => onChangeFilter(value as FilterType)}
                >
                  <p className='text-base font-medium'>{label}</p>
                </button>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
      <Image
        className='hidden lg:block absolute top-0 left-0 z-10 object-fill'
        src='/assets/hero/news-hero.png'
        fill
        alt='news and insight'
      />
      <Image
        className='block lg:hidden absolute top-0 left-0 z-10 object-cover'
        src='/assets/hero/news-hero-mobile.png'
        fill
        alt='news and insight'
      />
    </SectionWrapper>
  );
};
