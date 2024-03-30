import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '../../ui/typography/GreenSubTitle';
import Image from 'next/image';
import { Button } from '@/app/ui/button';
import { BASE_URL } from '@/app/constant';
import { ProjectDetail } from '@/app/types';
import dayjs from 'dayjs';

export default async function ProjectsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const project: ProjectDetail = await fetch(`${BASE_URL}/projects/${id}`).then((res) => res.json());
  const moreProject: ProjectDetail = await fetch(`${BASE_URL}/projects/${id}/more`).then((res) => res.json());
  const moreProjectThumbnail = moreProject.documents.find(({ document_type }) => document_type === 'project_thumbnail');

  const featureImage = project.documents.find(({ document_type }) => document_type === 'project_thumbnail');
  const gallery = project.documents.filter(({ document_type }) => document_type === 'project_gallery');
  const mapImage = project.documents.find(({ document_type }) => document_type === 'project_map');
  const PROJECT_DETAILS = {
    title: project.title,
    description: project.description,
    projectArea: {
      value: project.area,
      caption: project.area_description,
    },
    ecosystemType: project.ecosystem_type,
    community: project.community,
    mainGoal: project.main_goal,
    keyFactor: project.key_factor,
    projectStarted: project.start_date ? dayjs.unix(Number(project.start_date)).format('DD MMMM YYYY') : '-',
    location: project.location,
    status: project.status.toUpperCase(),
  };

  return (
    <div>
      <SectionWrapper padding='high'>
        <div className='mt-5 lg:mt-[93px] mb-5 lg:mb-[47px]'>
          <GreenSubTitle label='OUR WORK / PROJECTS' />
          <h3 className='font-medium text-[32px] mt-1'>{PROJECT_DETAILS.title}</h3>
          <p className='text-base font-medium mt-[18px] max-w-[756px]'>{PROJECT_DETAILS.description}</p>
        </div>
      </SectionWrapper>
      <SectionWrapper className='mb-5' padding='low'>
        <div className='h-[160px] lg:h-[392px]'>
          <Image src={featureImage?.url ?? ''} className='w-full h-full' alt='our works' width={1380} height={416} />
        </div>
      </SectionWrapper>
      <SectionWrapper className='mb-5' padding='high'>
        <GreenSubTitle label='PROJECT DETAILS' />
        <div className='grid grid-cols-1 lg:grid-cols-[auto_420px] pt-8'>
          {/* LEFT */}
          <div className='pr-8 space-y-8'>
            <div>
              <p className='text-[16px] font-bold'>Project Started</p>
              <div className='flex flex-start gap-[18px] flex-row flex-nowrap items-center my-4'>
                <Image src='/assets/works/clock.png' width={44} height={44} alt='clock' />
                <p className='text-[16px] font-medium'>{PROJECT_DETAILS.projectStarted}</p>
              </div>
            </div>
            <div>
              <p className='text-[16px] font-bold'>Location</p>
              <div className='flex flex-start gap-[18px] flex-row flex-nowrap items-center my-4'>
                <Image src='/assets/works/location.png' width={44} height={44} alt='location' />
                <p className='text-[16px] font-medium'>{PROJECT_DETAILS.location}</p>
              </div>
            </div>
            <div>
              <p className='text-[16px] font-bold'>Project Area</p>
              <div className='flex flex-start gap-[18px] flex-row flex-nowrap items-center my-4'>
                <Image src='/assets/works/area.png' width={44} height={44} alt='clock' />
                <p className='text-[16px] font-medium'>{PROJECT_DETAILS.projectArea.value}</p>
              </div>
              <p className='text-[14px] text-[#8C8C8C] font-bold'>{PROJECT_DETAILS.projectArea.caption}</p>
            </div>
            <div>
              <p className='text-[16px] font-bold'>Ecosystem Type</p>
              <div className='flex flex-start gap-[18px] flex-row flex-nowrap items-center my-4'>
                <Image src='/assets/works/eco.png' width={44} height={44} alt='ecosystem' />
                <p className='text-[16px] font-medium'>{PROJECT_DETAILS.ecosystemType}</p>
              </div>
            </div>
            <div>
              <p className='text-[16px] font-bold'>Community</p>
              <div className='flex flex-start gap-[18px] flex-row flex-nowrap items-center my-4'>
                <Image src='/assets/works/community.png' width={44} height={44} alt='community' />
                <p className='text-[16px] font-medium'>{PROJECT_DETAILS.community}</p>
              </div>
            </div>
            <div>
              <p className='text-[16px] font-bold'>Main Goals</p>
              <p className='my-4 text-left text-[16px] font-medium'>{PROJECT_DETAILS.mainGoal}</p>
            </div>
            <div>
              <p className='text-[16px] font-bold'>Key Factors</p>
              <p className='my-4 text-left text-[16px] font-medium'>{PROJECT_DETAILS.keyFactor}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className='p-8 lg:border-l-2 border-[#D9D9D9] flex justify-between flex-col'>
            <div>
              <div className='rounded-lg bg-[#DAEEFA] border border-[#46A7ED] w-fit px-6 py-4'>
                <p className='text-[#13282D] font-semibold text-[14px] tracking-widest'>{PROJECT_DETAILS.status}</p>
              </div>
              <div>
                <p className='text-[16px] font-bold mt-8'>Area map</p>
                <div className='relative w-[350px] h-[350px]'>
                  <Image src={mapImage?.url ?? ''} className='w-full h-full' alt='our works' fill sizes='350' />
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-base font-semibold text-center mb-4'>Need more information for this project?</h3>
              <Button className='bg-[#46A7ED] w-full max-w-[342px]'>
                <p className='text-[20px] text-white font-medium text-nowrap'>Contact Us</p>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper padding='high' className='pb-[125px]'>
        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {gallery.map(({ url }) => (
            <div key={url} className='w-full h-auto aspect-square relative'>
              <Image src={url} fill alt={url} sizes='300' />
            </div>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper padding='none' className='border-t-2 border-[#D7D7D7]'>
        <SectionWrapper padding='high' className='py-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex justify-start items-center'>
              <p className='font-medium text-[32px] text-center w-full '>Other Projects...</p>
            </div>
            <div className='flex flex-row gap-5 items-center'>
              <div className='relative rounded-tl-[40px] rounded-br-[40px]'>
                <Image
                  src={moreProjectThumbnail?.url ?? '/assets/works/other-project.png'}
                  className='rounded-tl-[40px] rounded-br-[40px]'
                  width={260}
                  height={242}
                  alt='other projects'
                />
              </div>
              <div className='w-[390px] flex items-start flex-col justify-start h-full'>
                <h1 className='text-[24px] font-semibold'>{moreProject.title ?? ''}</h1>
                <p className='text-base font-medium'>{moreProject.description ?? ''}</p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionWrapper>
    </div>
  );
}
