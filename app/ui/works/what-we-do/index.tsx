import Image from 'next/image';
import { SectionWrapper } from '../../wrapper';
import { GreenSubTitle } from '../../typography/GreenSubTitle';

export const WhatWeDo = () => {
  const whatWeDo = [
    {
      height: 250,
      src: '/assets/works/what-we-do-1.png',
      alt: 'What we do 1',
      right: (
        <div className='w-full lg:max-w-[500px]'>
          <GreenSubTitle label='WHAT WE DO' />
          <h1 className='text-[32px] font-medium my-2'>Our Business Model</h1>
          <p className='text-base font-medium'>
            CarbonX carefully selects, funds and implements carbon credit projects that meet investment profile and
            criteria.
          </p>
        </div>
      ),
    },
    {
      height: 500,
      src: '/assets/works/what-we-do-2.png',
      alt: 'What we do 2',
      right: (
        <div className='w-full lg:max-w-[500px]'>
          <p className='font-medium text-base mt-3 lg:mt-10'>
            CarbonX partner ups with Local NGOs, government, communities, and business & microfinance to implements
            ranges of mitigation and adaptation programs to achieve high-impact projects with activities illustrated in
            the graphic.
          </p>
        </div>
      ),
    },
    {
      height: 500,
      src: '/assets/works/what-we-do-3.png',
      alt: 'What we do 3',
      right: (
        <div className='w-full lg:max-w-[500px]'>
          <p className='font-medium text-base mt-3 lg:mt-20'>
            Once carbon credit project is implemented, we shall register and verify emission reduction of the project on
            global offsetting standard such as:{' '}
            <span className='text-[#46A7ED] underline underline-[#46A7ED]'>
              National Registry System for Climate Change, Verified Carbon Standard (VCS), The Climate Community &
              Biodiversity Standards, or Gold Standard.
            </span>
          </p>
          <p className='font-medium text-base mt-3 lg:mt-10'>
            Once certified, we sell carbon credits to potential buyers via carbon credit market or exchanges
          </p>
        </div>
      ),
    },
  ];

  return (
    <SectionWrapper padding='high' className='py-20'>
      {whatWeDo.map(({ alt, height, right, src }) => {
        return (
          <div key={alt} className={`grid grid-cols-1 lg:grid-cols-2 h-fit place-content-center w-full`}>
            <Image src={src} className='object-fill hidden lg:block' alt={alt} height={height} width={500} />
            <div className=''>{right}</div>
          </div>
        );
      })}
      <div className='flex justify-center items-center w-full flex-col mt-10 lg:hidden'>
        {whatWeDo.map(({ alt, height, src }, index) => {
          return <Image className='object-fill' src={src} height={height} width={500} alt={alt} key={index} />;
        })}
      </div>
    </SectionWrapper>
  );
};
