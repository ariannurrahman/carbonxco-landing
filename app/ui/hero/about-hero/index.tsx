import Image from 'next/image';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper/';
import { Button } from '@/app/ui/button';

export const AboutHero = () => {
  return (
    <div className='relative w-screen min-h-screen h-full lg:h-screen'>
      <SectionWrapper padding='high' className='relative z-20 grid grid-cols-1 lg:grid-cols-[660px_auto] h-full'>
        <div className='flex items-start flex-col justify-center h-full'>
          <GreenSubTitle label='ABOUT CARBONX' />
          <h2 className='text-black text-[40px] font-medium'>
            Charting path to <br /> a low-emission and sustainable economy for now and the future
          </h2>
          <p className='text-black text-base font-medium mt-4'>
            We believe that the courage to continue that counts. Success is not our final goal as failure is inevitable
            in innovation. Hence, it is a thorough collaboration among various networks and parties that can accommodate
            the market needs for quality carbon.
          </p>
          <Button label='See Our Projects' className='bg-[#00AC42] mt-5' />
        </div>
      </SectionWrapper>
      <Image
        className='z-10 absolute top-0 left-0 w-screen min-h-screen h-full object-fit'
        src='/assets/hero/about-hero.png'
        width={1440}
        height={800}
        alt='about carbon x'
      />
    </div>
  );
};
