import { Metadata } from 'next';

import { GreenSubTitle } from '../ui/typography/GreenSubTitle';
import { SectionWrapper } from '../ui/wrapper';
import FaQList from './FaQList';

export const metadata: Metadata = {
  title: 'F.A.Q',
  description: 'F.A.Q Carbonxco',
};

export default function FaqPage() {
  return (
    <SectionWrapper padding='high' className='pb-[200px]'>
      <div className='flex justify-center items-start h-[214px] flex-col flex-nowrap'>
        <GreenSubTitle label='F.A.Q' />
        <p className='text-[32px] font-medium mt-3'>Frequently Asked Question</p>
      </div>
      <div className='flex flex-col gap-y-5'>
        <FaQList />
      </div>
    </SectionWrapper>
  );
}
