import Image from 'next/image';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper/';
import { Button } from '@/app/ui/button';
import Link from 'next/link';

export const AboutHero = () => {
  return (
    <div className='relative w-screen h-full md:h-fit py-10'>
      <SectionWrapper padding='high' className='relative z-20 grid grid-cols-1 md:grid-cols-2 h-full gap-x-5'>
        <div className='flex items-start flex-col justify-center h-full '>
          <GreenSubTitle label='ABOUT CARBONX' />
          <h2 className='text-white md:text-black text-[28px] font-medium mt-5'>
            CarbonX is an end-to-end carbon projects developer, centered around grassroot communities and climate
            technology solutions.
          </h2>
          <p className='text-white md:text-[#757575] text-[16px] font-medium mt-4'>
            Real change starts at the roots, that is why we actively engage with communities in our carbon projects,
            from the initial planning to long-term implementation. Our projects are ensured to not only generate
            positive environmental outcomes but also create economic opportunities to build a lasting sustainability.
          </p>
          <p className='text-white md:text-[#757575] text-[14px] font-medium mt-4'>
            Join us to reshape the future of carbon projects and deliver real impacts together.
          </p>
          <Button className='bg-[#00AC42] mt-5 hover:bg-[#287B49]'>
            <Link href='/works'>
              <p className='text-[20px] text-white font-medium'>Learn more about our impact</p>
            </Link>
          </Button>
        </div>
        <div className='w-full hidden md:flex justify-end '>
          <div className='hidden md:flex w-full max-w-[540px] h-[644px] relative'>
            <Image
              className='hidden md:block object-fill'
              src='/assets/hero/about-hero.png'
              sizes='540'
              fill
              alt='about carbon x'
            />
          </div>
        </div>
      </SectionWrapper>

      <Image
        className='block md:hidden absolute z-10 top-0 left-0 object-fill'
        src='/assets/hero/about-hero-mobile.png'
        sizes='100vw'
        fill
        alt='about carbon x mobile'
      />
    </div>
  );
};
