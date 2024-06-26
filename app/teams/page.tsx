import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper';
import { Button } from '@/app/ui/button';
import { TeamsListComponent } from './TeamsListComponent';
export const metadata: Metadata = {
  title: 'Teams',
  description:
    'CarbonX is equipped with dedicated in-house team with a broad range of expertise, from technical, commercial, to legal domains.',
};

export default function TeamsPage() {
  return (
    <>
      <SectionWrapper id='team-list' padding='high' className='pt-5 lg:pt-[100px] pb-[400px] z-30'>
        <GreenSubTitle label='OUR TEAM' className='text-center lg:text-right' />
        <div className='flex justify-end '>
          <h2 className='text-center lg:text-right text-[24px] lg:text-[30px] font-medium max-w-[923px]'>
            A broad range of expertise spanning from technical, commercial, community development, and legal domains.
          </h2>
        </div>
        <TeamsListComponent />
      </SectionWrapper>
      <div className='relative w-full h-[230px] z-10'>
        <SectionWrapper
          padding='high'
          className='relative z-20 flex justify-center lg:justify-between items-start lg:items-center flex-col lg:flex-row h-full w-full'
        >
          <h1 className='text-[40px] font-medium text-black'>Join Our Team</h1>
          <Button className='bg-[#00AC42] w-fit h-fit'>
            <Link className='inline-flex items-center' href='/career'>
              <p className='text-[20px] text-white font-medium text-nowrap'>See Available Opening</p>
              <Image className='ml-3' alt='go to FAQ' width={30} height={16} src='/assets/white-right-arrow.png' />
            </Link>
          </Button>
        </SectionWrapper>
        <Image
          src='/assets/join-team-bg.png'
          className='absolute z-10 top-0 left-0 object-cover'
          alt='join the team'
          fill
        />
      </div>
    </>
  );
}
