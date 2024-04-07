import Image from 'next/image';
import { SectionWrapper } from '../ui/wrapper';
import { GreenSubTitle } from '../ui/typography/GreenSubTitle';
import { Metadata } from 'next';
import { OpportunityList } from './opportunity-list';

export const metadata: Metadata = {
  title: 'Career',
  description:
    'Have you worked on what matters most? Join CarbonX in unleashing the opportunities for meaningful innovation through quality carbon projects. ',
};

export default function CareerPage() {
  return (
    <SectionWrapper className='py-5 lg:py-[100px]' padding='high'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='order-2 lg:order-1 mt-5 lg:mt-0'>
          <GreenSubTitle label='CAREERS AT CARBONX' />
          <h1 className='font-medium text-[24px] lg:text-[40px]'>Work on What Matters Most</h1>
          <p className='font-medium text-base mt-5'>
            The clock is ticking. Have we done enough to realize our potential as a vast carbon sink?
          </p>
          <p className='font-medium text-base mt-5'>
            CarbonX invites you to join us in unleashing the opportunities for meaningful innovation and conquering the
            dynamics of each carbon project development.
          </p>
        </div>
        <div className='order-1 lg:order-2 flex justify-center items-center w-full'>
          <div className='relative w-full h-[300px] lg:h-[262px] lg:w-[487px] '>
            <Image
              src='/assets/career/career-hero.png'
              className='object-cover rounded-tl-[30px] rounded-br-[30px]'
              alt='career'
              sizes='487'
              fill
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-xl leading-[30px] mt-5 '>Current Openings</h2>
        <OpportunityList />
      </div>
    </SectionWrapper>
  );
}
