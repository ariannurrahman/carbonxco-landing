import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '../../ui/typography/GreenSubTitle';
import Image from 'next/image';
import { Button } from '@/app/ui/button';
import { BASE_URL } from '@/app/constant';
import { ProjectDetail } from '@/app/types';

export default async function ProjectsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log('id', id);

  const project: ProjectDetail = await fetch(`${BASE_URL}/projects/${id}`).then((res) => res.json());
  const moreProject: ProjectDetail = await fetch(`${BASE_URL}/projects/${id}/more`).then((res) => res.json());
  console.log('moreProject', moreProject);

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
    community: 'There are five Dayak indigenous communities within this area as well as five customary lands.',
    mainGoal: project.main_goal,
    keyFactor: project.key_factor,
    projectStarted: project.start_date,
    location: project.location,
    status: project.status,
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
      <SectionWrapper className='pb-[125px]' padding='high'>
        <GreenSubTitle label='PROJECT DETAILS' />
        <div className='grid grid-cols-1 lg:grid-cols-[auto_420px] pt-8'>
          {/* LEFT */}
          <div className='pr-8'>
            <div>
              <p className='text-[16px] font-bold'>Project Area</p>
              <div className='flex flex-start gap-[18px] flex-row flex-nowrap items-center my-4'>
                <div className='bg-[#D9D9D9] min-w-11 min-h-11 w-11 h-11' />
                <p className='text-[16px] font-medium'>{PROJECT_DETAILS.projectArea.value}</p>
              </div>
              <p className='text-[14px] text-[#8C8C8C] font-bold'>{PROJECT_DETAILS.projectArea.caption}</p>
            </div>
            <div>
              <p className='text-[16px] font-bold mt-8'>Ecosystem Type</p>
              <div className='flex flex-start gap-[18px] flex-row flex-nowrap items-center my-4'>
                <div className='bg-[#D9D9D9] min-w-11 min-h-11 w-11 h-11' />
                <p className='text-[16px] font-medium'>{PROJECT_DETAILS.ecosystemType}</p>
              </div>
            </div>
            <div>
              <p className='text-[16px] font-bold mt-8'>Community</p>
              <div className='flex flex-start gap-[18px] flex-row flex-nowrap items-center my-4'>
                <div className='bg-[#D9D9D9] min-w-11 min-h-11 w-11 h-11' />
                <p className='text-[16px] font-medium'>{PROJECT_DETAILS.community}</p>
              </div>
            </div>
            <div>
              <p className='text-[16px] font-bold mt-8'>Main Goals</p>
              <p className='my-4 text-left text-[16px] font-medium'>{PROJECT_DETAILS.mainGoal}</p>
            </div>
            <div>
              <p className='text-[16px] font-bold mt-8'>Key Factors</p>
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
              <div>
                <p className='text-[16px] font-bold mt-8'>Project Started</p>
                <div className='flex flex-start gap-[18px] flex-row flex-nowrap items-center my-4'>
                  <div className='bg-[#D9D9D9] min-w-11 min-h-11 w-11 h-11' />
                  <p className='text-[16px] font-medium'>{PROJECT_DETAILS.projectStarted}</p>
                </div>
              </div>
              <div>
                <p className='text-[16px] font-bold mt-8'>Location</p>
                <div className='flex flex-start gap-[18px] flex-row flex-nowrap items-center my-4'>
                  <div className='bg-[#D9D9D9] min-w-11 min-h-11 w-11 h-11' />
                  <p className='text-[16px] font-medium'>{PROJECT_DETAILS.location}</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-base font-bold text-center mb-[18px]'>Need more information for this project?</h3>
              <Button className='bg-[#46A7ED] w-full max-w-[342px]'>
                <p className='text-[20px] text-white font-medium text-nowrap'>Contact Us</p>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper padding='none' className='border-t-2 border-[#D7D7D7]'>
        <SectionWrapper padding='high' className='py-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex justify-start items-center'>
              <p className='font-medium text-[32px] text-center w-full '>Other Projects...</p>
            </div>
            <div className='flex flex-row gap-5 items-center'>
              <div className='relative'>
                <Image
                  src='/assets/works/other-project.png'
                  className='rounded-xl'
                  width={260}
                  height={242}
                  alt='other projects'
                />
              </div>
              <div className='w-[390px]'>
                <h1 className='text-[24px] font-semibold'>Buru Island</h1>
                <p className='text-base font-medium'>
                  Intervening the ongoing land conversion to become restored and sustainably preserved; investing in
                  community-based empowerment to generate alternative livelihoods; and protecting the...
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionWrapper>
    </div>
  );
}
