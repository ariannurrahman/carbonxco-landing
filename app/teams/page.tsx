'use client';

import { useState } from 'react';
import Image from 'next/image';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper';

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
    <SectionWrapper padding='high' className='py-[100px]'>
      <GreenSubTitle label='OUR TEAM' />
      <div className='flex justify-end '>
        <h2 className='text-right text-[40px] font-medium max-w-[538px]'>
          A Team of Experts <br /> and Leader in the Industry
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14 mt-[100px]'>
        {TEAMS_LIST.map(({ name, title, jobDesc }, index) => {
          return (
            <div key={index} onClick={() => setSelectedTeam(index)} className='bg-white'>
              <div className='z-10 bg-white'>
                <div className=''>
                  <div className='relative w-full h-[330px]'>
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
  );
}
