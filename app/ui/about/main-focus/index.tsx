import Image from 'next/image';
import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { MainFocusList } from './List';

export const MainFocus = () => {
  return (
    <div className='relative w-screen min-h-screen h-full py-5'>
      <SectionWrapper padding='high' className='relative z-20 h-full flex justify-start items-center flex-col py-20'>
        <div className='flex justify-start items-start flex-col lg:flex-row lg:gap-x-20'>
          <GreenSubTitle label='MAIN FOCUS' white className='w-fit text-nowrap' />
          <div>
            <h4 className='text-white text-2xl font-medium'>How does CarbonX play a part in this ecosystem?</h4>
            <p className='text-white text-base font-medium mt-5'>
              Engaging with local communities has become a core aspect of our approach for both environmental
              preservation and improved the livelihood of communities. By harnessing the power of nature and
              technological solutions, we are making strides to address climate challenges in an efficient and effective
              manner.
            </p>
          </div>
        </div>
        <MainFocusList />
      </SectionWrapper>
      <Image
        className='hidden lg:block z-10 absolute top-0 left-0 object-fill'
        src='/assets/about/main-focus-bg.png'
        sizes='100vw'
        fill
        alt='about carbon x'
      />
      <Image
        className='block lg:hidden z-10 absolute top-0 left-0 object-fill'
        src='/assets/about/main-focus-bg-mobile.png'
        sizes='100vw'
        fill
        alt='about carbon x'
      />
    </div>
  );
};
