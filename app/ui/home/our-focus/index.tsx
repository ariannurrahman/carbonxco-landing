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
      <div className='w-full h-screen lg:h-[667px] px-2 lg:px-8 relative'>
        <div className='z-20 relative flex justify-center flex-col items-start h-full lg:pl-[100px] p-5'>
          <div>
            <GreenSubTitle label='OUR SCOPE OF WORK' />

            <h1 className='max-w-[681px] text-[#D4EFDE] text-[20px] lg:text-[32px] font-medium my-4'>
              Community-based conservation, sustainable livelihood, with solutions using nature & technology
            </h1>
          </div>
          {/* <div className='grid mx-auto lg:mx-0 auto-cols-auto lg:grid-cols-[auto_auto_auto] xl:grid-cols-[313px_313px_313px] mt-10'> */}
          <div className='mt-10 flex flex-row gap-x-5'>
            <div className='bg-[#D9D9D9] opacity-50 min-w-[434px] h-[306px] hidden lg:block' />
            <div className='flex flex-col gap-y-5'>
              {OUR_FOCUS_LIST.map(({ title, description, key }) => {
                return (
                  <div
                    key={title}
                    className='grid grid-cols-1 lg:grid-cols-[330px_330px] gap-x-5'
                    onClick={() => onClickFocusList(key)}
                  >
                    <h1
                      className={`${
                        clicked.includes(key) ? 'opacity-1' : 'opacity-50'
                      } text-white text-[20px] font-medium w-fit`}
                    >
                      {title}
                    </h1>
                    <p
                      className={`${
                        clicked.includes(key) ? 'opacity-1' : 'opacity-50'
                      } text-white text-[14px] font-medium`}
                    >
                      {' '}
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Image
          className='z-10 absolute top-0 left-0 object-fill'
          fill
          src='/assets/home/our-focus.png'
          alt='our focus'
        />
      </div>
    </SectionWrapper>
  );
};
