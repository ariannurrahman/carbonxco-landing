import React from 'react';
import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '../../typography/GreenSubTitle';
import Image from 'next/image';

export const OurGoals = () => {
  const OUR_GOALS = [
    {
      label: 'Greenhouse gasses emissions avoidance and reductions',
      value: '8 million tCO2e per year',
      src: '/assets/about/goal-1.png',
    },
    {
      label: 'Green jobs creations',
      value: '>400 new jobs, with 50% of the jobs made accessible for local communities',
      src: '/assets/about/goal-2.png',
    },
    {
      label: 'Supporting villages and village forests',
      value: '>80 villages and 15 village forests',
      src: '/assets/about/goal-3.png',
    },
    {
      label: 'Increasing livelihood resilience',
      value: 'in >30,000 local communities in which 49% of it are female',
      src: '/assets/about/goal-4.png',
    },
  ];

  return (
    <SectionWrapper
      className='relative w-screen min-h-screen h-full flex justify-center items-center flex-col py-20'
      padding='high'
    >
      <GreenSubTitle label='Our Goal' />
      <h1 className='text-black font-medium text-[32px]'>Targeted Impacts</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 place-content-center gap-20 mt-11'>
        {OUR_GOALS.map(({ label, src, value }) => {
          return (
            <div key={label} className='flex flex-col justify-start items-center w-fit lg:w-[320px] mx-auto'>
              <div className='h-[240px] flex justify-center items-center'>
                <Image src={src} alt='label' width={150} height={150} />
              </div>
              <p className='text-base lg:text-xl text-wrap text-center text-black font-semibold'>{label}</p>
              <p className='text-base text-center text-black font-medium mt-5'>{value}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
