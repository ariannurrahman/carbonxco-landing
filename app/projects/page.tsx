import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '../ui/typography/GreenSubTitle';
import Image from 'next/image';
import { Button } from '@/app/ui/button';

export default function ProjectsPage() {
  const PROJECT_DETAILS = {
    projectArea: {
      value: '20.606 ha',
      caption: 'including 10 villages within Sanggau and Landak Regency, West Kalimantan Province',
    },
    ecosystemType: 'Tropical Rainforest',
    community: 'There are five Dayak indigenous communities within this area as well as five customary lands.',
    mainGoal:
      'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment to generate alternative livelihoods; and protecting the biological diversity within the ecosystem.',
    keyFactor:
      'Halting palm oil expansion and forest degradation; Escalated numbers of income from sustainable land management; A thriving ecosystem for agroforestry development.',
    projectStarted: '20.606 ha',
    location: '20.606 ha',
    status: 'IN PROGRESS',
  };

  return (
    <div>
      <SectionWrapper padding='high'>
        <div className='mt-5 lg:mt-[93px] mb-[47px]'>
          <GreenSubTitle label='OUR WORK / PROJECTS' />
          <h3 className='font-medium text-[32px] mt-1'>Sanggala Projects</h3>
          <p className='text-base font-medium mt-[18px] max-w-[756px]'>
            Intervening the ongoing land conversion to become restored and sustainably preserved; investing in
            community-based empowerment to generate alternative livelihoods; and protecting the biological diversity
            within the ecosystem. ored and sustainably preserved; investing in community-based empowerment to generate
            alternative livelihoods; and protecting the biological diversity within the ecosystem.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper padding='low'>
        <div className=' h-[392px]'>
          <Image src='/assets/hero/projects-hero.png' className='w-full' alt='our works' width={1380} height={416} />
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
              <p className='my-4 text-left text-[16px] font-medium'>{PROJECT_DETAILS.community}</p>
            </div>
            <div>
              <p className='text-[16px] font-bold mt-8'>Key Factors</p>
              <p className='my-4 text-left text-[16px] font-medium'>{PROJECT_DETAILS.keyFactor}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className='p-8 border-l-2 border-[#D9D9D9] flex justify-between flex-col'>
            <div>
              <div className='rounded-lg bg-[#DAEEFA] border border-[#46A7ED] w-fit px-6 py-4'>
                <p className='text-[#13282D] font-semibold text-[14px] tracking-widest'>{PROJECT_DETAILS.status}</p>
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
