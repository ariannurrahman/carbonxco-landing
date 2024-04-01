import Image from 'next/image';
import { SectionWrapper } from '../ui/wrapper';
import { GreenSubTitle } from '../ui/typography/GreenSubTitle';
import { Metadata } from 'next';
import { OpportunityList } from './opportunity-list';

export const metadata: Metadata = {
  title: 'Career',
  description: 'Career Carbonxco',
};

export default function CareerPage() {
  return (
    <SectionWrapper className='py-5 lg:py-[100px]' padding='high'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
          <GreenSubTitle label='CAREERS AT CARBONX' />
          <h1 className='font-medium text-[40px] leading-[60px]'>Work on What Matters Most</h1>
          <p className='font-medium text-base mt-5'>
            The clock is ticking. Have we done enough to realize our potential as a vast carbon sink? 
          </p>
          <p className='font-medium text-base mt-5'>
            CarbonX invites you to join us in unleashing the opportunities for meaningful innovation and conquering the
            dynamics of each carbon project development.
          </p>
        </div>
        <div className='flex justify-center w-full'>
          <div className='relative w-full h-full lg:h-[262px] lg:w-[487px] '>
            <Image src='/assets/career/career-hero.png' alt='career' fill />
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
