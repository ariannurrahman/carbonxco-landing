import React from 'react';
import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '../../typography/GreenSubTitle';

export const OurGoals = () => {
  const OUR_GOALS = [
    {
      label: '8 Million',
      value: 'tCO2e per year',
      caption: 'of GHG emissions avoidance and reductions',
    },
    {
      label: '200 Villages and 15 Village Forrest',
      caption: 'Supported and Rehabilitated',
    },
    {
      label: '6 Million',
      value: 'tCO2e per year',
      caption: 'carbon credits available for sale',
    },
    {
      label: '30.000',
      value: 'Local Communities',
      caption: '(49% are female) livelihood resilience increased',
    },
    {
      label: 'Biodiversity Protection',
      caption: 'Endangered Species Protection',
    },
    {
      label: 'More than 400 Green Jobs',
      caption: '50% of the jobs will be available for local communities',
    },
  ];

  return (
    <SectionWrapper
      className='relative w-screen min-h-screen h-full lg:h-screen py-5 flex justify-center items-start flex-col'
      padding='high'
    >
      <GreenSubTitle label='Our Goal' />
      <h1 className='text-black font-medium text-[40px]'>Targeted Impacts</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-y-8 mt-11'>
        {OUR_GOALS.map(({ label, caption, value }) => {
          return (
            <div key={label} className='border-l-[3px] border-[#D4EFDE] pl-4'>
              <p className='text-2xl text-black font-medium'>
                {label} | {value ?? <span className='text-base'>{value}</span>}
              </p>
              <p className='mt-2 text-base text-black font-medium'>{caption}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
