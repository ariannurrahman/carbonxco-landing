import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/app/ui/button';
import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';

export const WhatIsCarbonx = () => {
  return (
    <SectionWrapper padding='high'>
      <div className='grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-[100px]'>
        <div className='order-2 lg:order-1 flex justify-start items-start flex-col flex-nowrap mt-10 lg:mt-0 space-y-5'>
          <GreenSubTitle label='WHY CARBON AND WHY DOES IT MATTER?' />
          <h1 className='text-[20px] lg:text-[32px] font-medium '>
            Carbon projects help mitigate the looming climate crisis
          </h1>
          <p className='text-[14px] lg:text-base text-black font-medium'>
            The impending climate crisis is not just a threat to our environment, but also to our health and economy.
            Yet it is inevitable that our activities release carbon into the atmosphere, further exacerbating our
            warming planet, our only home.
          </p>
          <p className='text-[14px] lg:text-base text-black font-medium'>
            To address the said global climate challenges and pursue a more just economy, CarbonX offers an end-to-end
            quality carbon project services–from originating, investing, developing, to implementing involving
            community, innovation, and conservation principles.
          </p>
          <div className='flex items-center lg:justify-start w-full'>
            <Button className='bg-[#46A7ED] hover:bg-[#DAEEFA] hover:text-[#13282D] text-white'>
              <Link href='/about'>
                <p className='text-[20px] font-medium'>More about CarbonX</p>
              </Link>
            </Button>
          </div>
        </div>
        <div className='order-1 lg:order-2 mt-5 lg:mt-0  flex justify-center items-center lg:justify-end lg:items-end flex-col flex-nowrap'>
          <div className='w-[320px] h-[325px] relative lg:w-[380px] xl:w-[428px] lg:h-[607px]'>
            <Image
              className='block'
              src='/assets/home/what-is-carbonx.png'
              fill
              alt='what is carbonx'
              priority
              sizes='(max-width: 768px) 320px, (max-width: 1200px) 320px, 428px'
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
