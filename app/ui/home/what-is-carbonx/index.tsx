import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/app/ui/button';
import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';

export const WhatIsCarbonx = () => {
  return (
    <SectionWrapper padding='high'>
      <div className='grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-[100px]'>
        <div className='order-2 lg:order-1 flex justify-center items-start flex-col flex-nowrap mt-10 lg:mt-0'>
          <GreenSubTitle label='WHAT IS CARBONX' />
          <h1 className='text-[20px] lg:text-[32px] font-medium mt-5'>
            We are an end-to-end carbon projects facilitator, centered around grassroot communities and climate
            technology solutions.
          </h1>
          <p className='text-[14px] lg:text-base text-black font-medium mt-[29px] mb-[43px]'>
            From originating, investing, developing, and implementing carbon projects, CarbonX is committed to design a
            sustainable growth for businesses involving community, innovation, and conservation to address global
            climate challenges and pursue a more just economy.
          </p>
          <div className='flex items-center lg:justify-start w-full'>
            <Button className='bg-[#46A7ED]'>
              <Link href='/about'>
                <p className='text-[20px] text-white font-medium'>About CarbonX</p>
              </Link>
            </Button>
          </div>
        </div>
        <div className='order-1 lg:order-2 mt-5 lg:mt-0  flex justify-center items-center lg:justify-end lg:items-end flex-col flex-nowrap'>
          <div className='w-[320px] h-[325px] relative lg:w-[428px] lg:h-[607px]'>
            <Image src='/assets/home/what-is-carbonx.png' fill alt='what is carbonx' priority />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
