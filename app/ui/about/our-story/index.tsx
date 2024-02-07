import Image from 'next/image';
import { GreenSubTitle } from '../../typography/GreenSubTitle';
import { SectionWrapper } from '../../wrapper';

export const OurStory = () => {
  const STORY = [
    {
      year: 2021,
      label: 'Establishment',
    },
    {
      year: 2022,
      label: 'Origination',
    },
    {
      year: 2023,
      label: 'Development',
    },
    {
      year: 2024,
      label: 'Implementation',
    },
  ];

  return (
    <SectionWrapper padding='high' className='relative h-screen w-screen flex justify-center items-center'>
      <div className='w-full max-w-[678px] relative z-20'>
        <GreenSubTitle className='text-center mb-5' label='OUR STORY' />
        <h2 className='text-center text-[32px] text-black font-medium'>
          Catalyzing climate actions since 2021, and will keep on doing so for future generations
        </h2>
        <div className='flex justify-center items-center flex-col my-10 gap-y-3'>
          {STORY.map(({ label, year }) => {
            return (
              <div className='group grid grid-cols-[50px_20px_165px] gap-7 items-center' key={year}>
                <p className='font-medium text-[20px]'> {year}</p>
                <div className='h-4 w-4 bg-[#D4EFDE] group-hover:bg-[#00B040] rounded-full' />
                <p className='font-medium text-[20px] text-left'>{label}</p>
              </div>
            );
          })}
        </div>

        <p className='text-base font-medium text-center'>
           CarbonX was founded by several prominent investors and experts in their respective fields. The initial idea
          was to catalyze climate actions while creating high-impact projects for social, economics, and environmental
          sectors.
        </p>
      </div>
      <Image src='/assets/about/our-story.png' className='absolute top-0 left-0 z-10' fill alt='our story' />
    </SectionWrapper>
  );
};
