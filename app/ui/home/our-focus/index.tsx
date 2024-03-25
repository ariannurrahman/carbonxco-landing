'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionWrapper } from '../../wrapper';
import { GreenSubTitle } from '../../typography/GreenSubTitle';

export const OurFocus = () => {
  const [clicked, setClicked] = useState<number[]>([]);

  const OUR_FOCUS_LIST = [
    {
      title: 'Project Origination',
      description: 'Holistic project assessment to maximize impact beyond financial returns',
      key: 1,
    },
    {
      title: 'Development & Implementation',
      description:
        'Calculated results aligned with established objectives, timelines, and budgets backed with technical expertise and nurtured partnerships',
      key: 2,
    },
    {
      title: 'Investment & Advisory',
      description: 'Effective financing and portfolio management with strategically designed guidance and assessments',
      key: 3,
    },
  ];

  const onClickFocusList = (key: number) => {
    const copy = [...clicked];
    copy.push(key);
    setClicked(copy);
  };

  return (
    <SectionWrapper padding='low'>
      <div className='w-full h-screen lg:h-[399px] px-2 lg:px-8 relative'>
        <div className='z-20 relative flex justify-center flex-col items-start h-full lg:pl-[100px] p-5'>
          <GreenSubTitle yellow label='OUR SCOPE OF WORK' />
          <div className='mt-10 flex flex-col lg:flex-row gap-5'>
            {OUR_FOCUS_LIST.map(({ title, description, key }) => {
              return (
                <div
                  key={title}
                  className='flex flex-col flex-1 pl-4 border-l-4 border-l-[#FFC42D]'
                  onClick={() => onClickFocusList(key)}
                >
                  <h1 className='text-[#FFC42D] text-[20px] font-medium w-fit'>{title}</h1>
                  <p className='text-white text-[14px] font-medium mt-3'>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Image
          className='hidden lg:block z-10 absolute top-0 left-0 w-screen h-full'
          width={1440}
          height={399}
          src='/assets/home/our-focus.png'
          alt='our focus'
        />
        <Image
          className='block lg:hidden z-10 absolute top-0 left-0 w-screen min-h-screen h-full'
          fill
          src='/assets/home/our-focus-mobile.png'
          alt='our focus'
        />
      </div>
    </SectionWrapper>
  );
};
