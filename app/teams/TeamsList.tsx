'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BASE_URL } from '../constant';

interface Team {
  id: string;
  name: string;
  position: string;
  description: string;
  link: string | null;
  createdAt: string;
  updatedAt: string;
  documents: string[];
}

export default function TeamsList() {
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

  useEffect(() => {
    const getTeams = async () => {
      const response = await fetch(`${BASE_URL}/teams`).then((res) => res.json());
      setTeams(response.data);
    };
    getTeams();
  }, []);

  return teams?.map(({ name, position, description, link }, index) => {
    return (
      <div key={index} onClick={() => setSelectedTeam(index)} className='bg-white'>
        <div className='z-30 bg-white relative'>
          <div className=''>
            <div className='relative aspect-square'>
              <Image src='/assets/teams.png' alt={name} fill />
            </div>
            <h2 className='font-semibold text-2xl mt-5'>{name}</h2>
            <p className='font-medium text-base mt-2'>{position}</p>
          </div>
        </div>
        {selectedTeam === index && (
          <div className='cursor-pointer relative z-50 bg-white border-b-2 border-b-[#46A7ED] pb-10'>
            <p className='py-7'>{description}</p>
            <a
              href={link ?? ''}
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#46A7ED] text-base font-semibold mt-5 underline underline-[#46A7ED] '
            >
              Linked In
            </a>
          </div>
        )}
      </div>
    );
  });
}
