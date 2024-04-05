import { sdg, SDG_COLOR } from '@/app/constant';
import { Documents } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  documents: Documents[];
  title: string;
  id: string;
  description: string;
  sdg: string[];
  minWidth?: string;
}

export const ProjectCard = ({ documents, title, id, description, sdg, minWidth }: ProjectCardProps) => {
  const projectThumbnail = documents?.filter(({ document_type }) => document_type === 'project_thumbnail');

  return (
    <div
      key={id}
      className={`relative shadow-[0_1px_1px_0_rgba(0,0,0,0.04)] flex justify-start items-start flex-col flex-nowrap ${
        minWidth ? minWidth : 'w-full'
      }  h-[500px] border-2 rounded-[20px] border-[#D4EFDE] p-8`}
    >
      <div className='w-full flex-1 flex flex-col justify-between'>
        <div className='h-fit'>
          <div className='relative w-full h-[160px] max-h-[160px]'>
            <Image className='object-fill z-10' src={projectThumbnail?.[0]?.url} fill alt={title} sizes='308' />
            <div className='absolute -top-5 right-0 flex flex-row'>
              {sdg?.map((eachSdg, index) => {
                const eachStyle = SDG_COLOR[Number(eachSdg) as sdg];

                return (
                  <div
                    key={eachSdg}
                    className={`w-9 h-9 border-2 rounded-full flex justify-center items-center -ml-2 ${eachStyle?.bg} ${eachStyle?.border} ${eachStyle?.text}`}
                    style={{ zIndex: 10 + index }}
                  >
                    {eachSdg}
                  </div>
                );
              })}
            </div>
          </div>
          <h1 className='text-[#13282D] text-[24px] xl:text-[32px] font-medium my-2 line-clamp-3'>{title}</h1>
          <p className='text-[#13282D] text-base xl:text-[16px] font-medium text-ellipsis line-clamp-4 overflow-auto'>
            {description}
          </p>
        </div>
        <Link href={`/works/${id}`} className='text-[16px] text-[#00B040] font-bold text-center w-full'>
          Read More
        </Link>
      </div>
    </div>
  );
};
