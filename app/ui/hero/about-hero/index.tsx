import Image from 'next/image';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper/';
import { Button } from '@/app/ui/button';
import Link from 'next/link';

export const AboutHero = () => {
  return (
    <div className='relative w-screen h-full lg:h-[662px] py-10 lg:py-0'>
      <SectionWrapper padding='high' className='relative z-20 grid grid-cols-1 lg:grid-cols-[660px_auto] h-full'>
        <div className='flex items-start flex-col justify-center h-full '>
          <GreenSubTitle label='ABOUT CARBONX' />
          <h2 className='text-black text-[32px] lg:text-[40px] font-medium mt-5'>
            Charting path to a low-emission and sustainable economy for now and the future
          </h2>
          <p className='text-black text-[14px] lg:text-base font-medium mt-4'>
            We believe real change starts at the roots. That’s why we actively engage communities in every step of our
            carbon project initiatives, from the initial planning to long-term implementation. We ensure our projects
            not only generate positive environmental outcomes but also empower communities, create economic
            opportunities, and build lasting sustainability. Join us to reshape the future of carbon projects.
          </p>
          <Button className='bg-[#00AC42] mt-5'>
            <Link href='/works'>
              <p className='text-[20px] text-white font-medium'>See Our Projects</p>
            </Link>
          </Button>
        </div>
      </SectionWrapper>
      <Image
        className='hidden md:block absolute z-10 top-0 left-0 object-fill'
        src='/assets/hero/about-hero.png'
        sizes='100vw'
        fill
        alt='about carbon x'
      />
      <Image
        className='md:hidden block absolute z-10 top-0 left-0 object-fill'
        src='/assets/hero/about-hero-mobile.png'
        sizes='100vw'
        fill
        alt='about carbon x mobile'
      />
    </div>
  );
};
