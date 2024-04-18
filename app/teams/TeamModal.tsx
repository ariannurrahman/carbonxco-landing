import Modal from 'react-modal';
import { Team } from './TeamsList';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface TeamModalProps {
  team: Team | null;
  setSelectedTeam: Dispatch<SetStateAction<Team | null>>;
}

export const TeamModal = ({ setSelectedTeam, team }: TeamModalProps) => {
  if (!team) return;

  const imgUrl = team.documents.find(({ document_type }) => document_type === 'team_avatar');

  return (
    <Modal
      ariaHideApp={false}
      isOpen
      className='bg-white shadow-md border-2-[#46A7ED] z-50 w-[340px] h-fit p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      onRequestClose={() => setSelectedTeam(null)}
      contentLabel='Teams'
    >
      <div className='flex flex-row justify-between'>
        <Image
          className='rounded-tl-[30px] rounded-br-[30px] object-cover'
          src={imgUrl?.url ?? ''}
          alt={team.name}
          width={180}
          height={175}
        />
        <div className='w-5 h-5'>
          <p className='text-[20px] font-semibold' onClick={() => setSelectedTeam(null)}>
            X
          </p>
        </div>
      </div>
      <div className='space-y-2 mt-3'>
        <h2 className='text-base font-bold'>{team.name}</h2>
        <h3 className='text-[12px] font-medium'>{team.position}</h3>
        <p className='text-[14px] font-medium pb-10'>{team.description}</p>
        <a
          href={team.link ?? ''}
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#46A7ED] text-base font-semibold  underline underline-[#46A7ED] '
        >
          Linked In
        </a>
      </div>
    </Modal>
  );
};
