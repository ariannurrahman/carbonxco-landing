import Image from 'next/image';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper/';

export const WorksHero = () => {
  return (
    <div className='relative w-screen h-full lg:h-[572px] pt-10 pb-20 lg:py-0'>
      <SectionWrapper
        padding='high'
        className='relative z-20 grid grid-cols-1 lg:grid-cols-[auto_auto] xl:grid-cols-[632px_auto] h-full gap-x-5'
      >
        <div className='flex items-start flex-col justify-center h-full order-2 lg:order-1'>
          <GreenSubTitle label='OUR WORKS' />
          <h2 className='text-black text-[32px] font-medium mt-5'>
            From local communities and innovations to nation-wide carbon projects
          </h2>
          <p className='text-black text-[14px] lg:text-[16px] lg:text-base font-medium mt-4'>
            In our attempt to chart a path to a low-emission and resilient world, we are co-creating a wide range of
            carbon projects. Our work is rooted in our determination to consolidate, enhance, and reshape the future
            where all beings can thrive toward intergenerational justice, with an end goal to make the carbon market
            more accessible and reliable for every community.
          </p>
        </div>
        <div className='w-full h-full grid place-content-center order-1 lg:order-2 pb-10 lg:pb-0'>
          <Image src='/assets/works/works-hero.png' alt='works' width={400} height={314} />
        </div>
      </SectionWrapper>
      <Image
        className='hidden md:block absolute z-10 top-0 left-0 object-fill'
        src='/assets/hero/works-hero.png'
        sizes='100vw'
        fill
        alt='works carbon x'
      />
      <Image
        className='md:hidden block absolute z-10 top-0 left-0 object-fill'
        src='/assets/hero/works-hero-mobile.png'
        sizes='100vw'
        fill
        alt='works carbon x mobile'
      />
    </div>
  );
};
