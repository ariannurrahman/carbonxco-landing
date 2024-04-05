import Image from 'next/image';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper/';

export const WorksHero = () => {
  return (
    <div className='relative w-screen h-full lg:h-[572px] pt-10 pb-20 lg:py-0 bg-gradient-to-r from-[#D4EFDE] from-100% to-[#F0E5DB] to-100%'>
      <SectionWrapper
        padding='high'
        className='relative z-20 grid grid-cols-1 lg:grid-cols-[auto_auto] xl:grid-cols-[632px_auto] h-full gap-x-5'
      >
        <div className='flex items-start flex-col justify-center h-full order-2 lg:order-1'>
          <GreenSubTitle label='OUR WORKS' />
          <h2 className='text-black text-[30px] font-medium mt-5'>
            Delivering innovations from local communities to nation-wide carbon projects
          </h2>
          <p className='text-black text-[14px] lg:text-base font-medium mt-4'>
            As an end-to-end project developer, CarbonX makes informed decisions, manages risks, and maximizes the
            likelihood of successful outcomes. It provides higher accountability and a clear roadmap for transforming a
            concept to reality while ensuring that resources are allocated wisely and goals are achieved.
          </p>
        </div>
        <div className='w-full h-full grid place-content-center order-1 lg:order-2 pb-10 lg:pb-0'>
          <Image src='/assets/hero/works-hero.png' alt='works hero' width={400} height={314} />
        </div>
      </SectionWrapper>
    </div>
  );
};
