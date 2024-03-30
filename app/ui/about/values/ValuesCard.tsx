'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { Tooltip } from 'react-tooltip';

interface ValusCard {
  label: string;
  caption: string | ReactNode;
  src: string;
}

export const ValuesCard = () => {
  const firstValueClassname =
    'text-[#00B040] font-medium text-base underline underline-[#00B040] underline-offset-4 cursor-pointer z-10 static';

  const VALUES_CARD: ValusCard[] = [
    {
      label: 'Environment Integrity',
      caption: (
        <div className='flex flex-col justify-center items-center mt-5 gap-y-4 relative'>
          <p className={`first-tooltip ${firstValueClassname}`}>Additionality</p>
          <p className={`second-tooltip ${firstValueClassname}`}>Permeance</p>
          <p className={`third-tooltip ${firstValueClassname}`}>Measurability</p>
        </div>
      ),
      src: '/assets/about/environment.jpg',
    },
    {
      label: 'Co-Benefit',
      caption:
        'Generating positive impacts beyond our environmental objectives, such as in the socio-economic and health sectors.',
      src: '/assets/about/benefits.jpg',
    },
    {
      label: 'Inclusion',
      caption: 'Consulting and actively involving local communities in the planning and decision-making processes.',
      src: '/assets/about/inclusion.jpg',
    },
    {
      label: 'Sophistication',
      caption:
        'Employing both a team of passionate and highly-experienced people as well as advanced technologies like Monitoring, Reporting, and Verification (MRV) tools, satellite imagery, and data analytics to meet our quality standard.',
      src: '/assets/about/sophistication.jpg',
    },
  ];

  return VALUES_CARD.map(({ caption, label, src }) => {
    return (
      <div key={label} className='relative h-[400px] rounded-lg w-full'>
        <div className='relative z-30 rounded-t-lg bg-white flex justify-start flex-col items-center h-[250px] p-4 pt-10'>
          <h2 className='font-medium text-center text-[#13282D] text-[24px]'>{label}</h2>
          {typeof caption === 'string' ? (
            <p className='font-medium text-center text-[#13282D] text-[14px] mt-4'>{caption}</p>
          ) : (
            caption
          )}
        </div>
        <Tooltip
          className='bg-white text-black shadow-md border-2 p-5'
          style={{ backgroundColor: 'white', opacity: 1, color: 'black', maxWidth: 400 }}
          anchorSelect='.first-tooltip'
          place='right'
        >
          <p className='text-[14px] font-medium text-black '>
            Creating environmental benefits that are beyond the mandatory legal framework
          </p>
        </Tooltip>
        <Tooltip
          className='bg-white text-black shadow-md border-2 p-5'
          style={{ backgroundColor: 'white', opacity: 1, color: 'black', maxWidth: 400 }}
          anchorSelect='.second-tooltip'
          place='right'
        >
          <p className='text-[14px] font-medium text-black '>
            Ensuring impact that lasts for a specified period by minimizing risks associated with project implementation
          </p>
        </Tooltip>
        <Tooltip
          className='bg-white text-black shadow-md border-2 p-5'
          style={{ backgroundColor: 'white', opacity: 1, color: 'black', maxWidth: 400 }}
          anchorSelect='.third-tooltip'
          place='right'
        >
          <p className='text-[14px] font-medium text-black '>
            {' '}
            Conducting robust monitoring systems to track and verify the key project indicators
          </p>
        </Tooltip>
        <Image src={src} alt='label' fill sizes='300' className='z-20 absolute top-0 left-0 w-full rounded-lg' />
      </div>
    );
  });
};
