'use client';

import { useState } from 'react';
import Image from 'next/image';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

  const TEAMS_LIST = [
    {
      name: 'Ken Sauer',
      title: 'Co-Founder and CEO',
      jobDesc:
        'A seasoned investor and Managing Partner of Risco Energy, Ken Sauer co-founded Risco Gas Infrastructure “RGI” and has over 15 years of experience in financing and investing in the energy sector. Currently, he is a Board of Advisor of the Indonesian Indah Foundation “IIF”, a non-profit multi-faceted environmentally sustainable foundation across Indonesia. Aside from that, he is a member of the Young Presidents Organization (YPO). He studied History, Market, and Management at Duke University.',
    },
    {
      name: 'Dessi Yuliana',
      title: 'Director',
      jobDesc:
        'A seasoned investor and Managing Partner of Risco Energy, Ken Sauer co-founded Risco Gas Infrastructure “RGI” and has over 15 years of experience in financing and investing in the energy sector. Currently, he is a Board of Advisor of the Indonesian Indah Foundation “IIF”, a non-profit multi-faceted environmentally sustainable foundation across Indonesia. Aside from that, he is a member of the Young Presidents Organization (YPO). He studied History, Market, and Management at Duke University.',
    },
    {
      name: 'Kiki Hermawan Susilo',
      title: 'Finance Director',
      jobDesc:
        'A seasoned investor and Managing Partner of Risco Energy, Ken Sauer co-founded Risco Gas Infrastructure “RGI” and has over 15 years of experience in financing and investing in the energy sector. Currently, he is a Board of Advisor of the Indonesian Indah Foundation “IIF”, a non-profit multi-faceted environmentally sustainable foundation across Indonesia. Aside from that, he is a member of the Young Presidents Organization (YPO). He studied History, Market, and Management at Duke University.',
    },
    {
      name: 'Rusman Sudaya',
      title: 'General Manager for Carbon Project',
      jobDesc:
        'A seasoned investor and Managing Partner of Risco Energy, Ken Sauer co-founded Risco Gas Infrastructure “RGI” and has over 15 years of experience in financing and investing in the energy sector. Currently, he is a Board of Advisor of the Indonesian Indah Foundation “IIF”, a non-profit multi-faceted environmentally sustainable foundation across Indonesia. Aside from that, he is a member of the Young Presidents Organization (YPO). He studied History, Market, and Management at Duke University.',
    },
    {
      name: 'Adhi Wardana',
      title: 'Senior Legal Manager',
      jobDesc:
        'A seasoned investor and Managing Partner of Risco Energy, Ken Sauer co-founded Risco Gas Infrastructure “RGI” and has over 15 years of experience in financing and investing in the energy sector. Currently, he is a Board of Advisor of the Indonesian Indah Foundation “IIF”, a non-profit multi-faceted environmentally sustainable foundation across Indonesia. Aside from that, he is a member of the Young Presidents Organization (YPO). He studied History, Market, and Management at Duke University.',
    },
    {
      name: 'Fikri Syaryadi',
      title: 'Senior Investment Manager',
      jobDesc:
        'A seasoned investor and Managing Partner of Risco Energy, Ken Sauer co-founded Risco Gas Infrastructure “RGI” and has over 15 years of experience in financing and investing in the energy sector. Currently, he is a Board of Advisor of the Indonesian Indah Foundation “IIF”, a non-profit multi-faceted environmentally sustainable foundation across Indonesia. Aside from that, he is a member of the Young Presidents Organization (YPO). He studied History, Market, and Management at Duke University.',
    },
  ];

  return (
    <>
      <SectionWrapper padding='high' className='pt-5 lg:pt-[100px] pb-[300px] z-30'>
        <GreenSubTitle label='OUR TEAM' />
        <div className='flex justify-end '>
          <h2 className='text-right text-[28px] lg:text-[40px] font-medium max-w-[923px]'>
            A broad range of expertise spanning from technical, commercial, and legal domains.
          </h2>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14 mt-[100px] relative z-20'>
          {TEAMS_LIST.map(({ name, title, jobDesc }, index) => {
            return (
              <div key={index} onClick={() => setSelectedTeam(index)} className='bg-white'>
                <div className='z-30 bg-white relative'>
                  <div className=''>
                    <div className='relative aspect-square'>
                      <Image src='/assets/teams.png' alt={name} fill />
                    </div>
                    <h2 className='font-semibold text-2xl mt-5'>{name}</h2>
                    <p className='font-medium text-base mt-2'>{title}</p>
                  </div>
                </div>
                {selectedTeam === index && (
                  <div className='cursor-pointer relative z-20 bg-white'>
                    <p className='absolute top-0 left-0 bg-white pt-7'>{jobDesc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
          className='absolute z-10 top-0 left-0 object-fill'
          alt='join the team'
          fill
        />
      </div>
    </>
  );
}
