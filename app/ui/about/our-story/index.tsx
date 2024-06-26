import Image from 'next/image';

import { GreenSubTitle } from '../../typography/GreenSubTitle';
import { SectionWrapper } from '../../wrapper';
import { StoryList } from './StoryList';

export const OurStory = () => {
  return (
    <SectionWrapper padding='high' className='relative h-full w-screen flex justify-center items-center py-[100px]'>
      <div className='w-full max-w-[678px] relative z-20 flex flex-col justify-center items-center'>
        <GreenSubTitle className='text-center mb-5' label='OUR STORY' />
        <h2 className='text-center text-[32px] text-black font-medium max-w-[678px]'>
          Catalyzing climate actions since 2021, and will keep on doing so for future generations
        </h2>

        <StoryList />
      </div>
      <Image
        src='/assets/about/our-story.png'
        className='absolute top-0 left-0 z-10 objec-cover'
        fill
        alt='our story'
      />
    </SectionWrapper>
  );
};
