import { Button } from '@/app/ui/button';
import Image from 'next/image';

export const WhatIsCarbonx = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 py-[100px]'>
      <div className='flex justify-center items-start flex-col flex-nowrap'>
        <h3 className='text-[#00AC42] font-semibold tracking-widest text-[16px]'>WHAT IS CARBONX</h3>
        <h1 className='text-[32px] font-medium'>
          We invest, implement, transform <br />
          and nourish grassroot communities
        </h1>
        <p className='text-[16px] text-black font-medium mt-[29px] mb-[43px]'>
          The current business industries are challenged to transform their practice and engage in real climate
          solutions. So, we are eager to embrace our journey in enabling a just transition to a low-carbon and resilient
          development. In the midst of all the uncertainties, we would like to invite you to help amplify the values of
          carbon initiatives, as well as to celebrate how diverse our struggles, experiences, and identities are within
          our communities.
        </p>
        <div className='flex justify-center items-center lg:justify-start w-full'>
          <Button className='bg-[#46A7ED]' label='About CarbonX' />
        </div>
      </div>
      <div className='mt-5 lg:mt-0 flex justify-center items-center lg:justify-end lg:items-end flex-col flex-nowrap'>
        <Image src='/assets/home/what-is-carbonx.png' width={428} height={607} alt='what is carbonx' priority />
      </div>
    </div>
  );
};
