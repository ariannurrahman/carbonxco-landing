'use client';

import { MouseEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BASE_URL } from '../constant';
import Modal from 'react-modal';
import { TeamModal } from './TeamModal';

export interface Team {
  id: string;
  name: string;
  position: string;
  description: string;
  link: string | null;
  createdAt: string;
  updatedAt: string;
  documents: {
    document_type: string;
    url: string;
  }[];
}

export default function TeamsList() {
  Modal.setAppElement('#team-list');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const teamRef = useRef<HTMLDivElement>(null);
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedTeamModal, setSelectedTeamModal] = useState<Team | null>(null);

  useEffect(() => {
    const getTeams = async () => {
      const response = await fetch(`${BASE_URL}/teams?limit=50`).then((res) => res.json());
      setTeams(response.data);
    };
    getTeams();
  }, []);

  useEffect(() => {
    const handleClickOutside: EventListener = (event: any) => {
      const mouseEvent = event as MouseEvent;

      if (teamRef.current && !teamRef.current.contains(mouseEvent.target as Node)) {
        setSelectedTeam(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!window) return;
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div id='team-list' className='z-0 relative'>
      <TeamModal team={selectedTeamModal} setSelectedTeam={setSelectedTeamModal} />

      <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14 mt-[100px] relative z-10'>
        {teams?.map((eachTeam, index) => {
          const { name, position, description, link, documents } = eachTeam;
          const imgUrl = documents?.find(({ document_type }) => document_type === 'team_avatar');

          return (
            <div
              ref={teamRef}
              key={index}
              onClick={() => {
                if (windowWidth > 768) {
                  setSelectedTeam(eachTeam);
                } else {
                  setSelectedTeamModal(eachTeam);
                }
              }}
              className='bg-white w-full relative'
            >
              <div className='z-30 bg-white relative'>
                <div className=''>
                  <div className='relative aspect-square object-cover rounded-tl-[30px] rounded-br-[30px]'>
                    <Image
                      src={imgUrl?.url ?? ''}
                      alt={name}
                      fill
                      className='rounded-tl-[30px] rounded-br-[30px] object-cover'
                      sizes='auto'
                    />
                  </div>
                  <h2 className='font-semibold text-2xl mt-5'>{name}</h2>
                  <p className='font-medium text-base mt-2'>{position}</p>
                </div>
              </div>
              {selectedTeam?.id === eachTeam.id && (
                <div className='cursor-pointer absolute z-50 w-fit bg-white border-b-2 border-b-[#46A7ED] pb-10'>
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
        })}
      </div>
    </div>
  );
}
