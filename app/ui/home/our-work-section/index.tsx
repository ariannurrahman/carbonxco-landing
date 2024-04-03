import Image from 'next/image';
import { Button } from '../../button';
import { SectionWrapper } from '../../wrapper';
import { GreenSubTitle } from '../../typography/GreenSubTitle';
import Link from 'next/link';
import { BASE_URL } from '@/app/constant';
import { Project } from '@/app/types';
import { ProjectCard } from '../../project-card';

export const OurWorkSection = async () => {
  const OUR_WORK_IMAGE = [
    '/assets/home/our-work/our-work-13.png',
    // '/assets/home/our-work/our-work-14.png',
    '/assets/home/our-work/our-work-15.png',
    '/assets/home/our-work/our-work-1.png',
    '/assets/home/our-work/our-work-2.png',
    // '/assets/home/our-work/our-work-3.png',
    '/assets/home/our-work/our-work-5.png',
    '/assets/home/our-work/our-work-8.png',
    '/assets/home/our-work/our-work-17.png',
  ];

  const response = await fetch(`${BASE_URL}/projects`).then((res) => res.json());
  const projectsList: Project[] = response.data;

  return (
    <SectionWrapper padding='high'>
      <GreenSubTitle className='pt-20' label='OUR WORK' />
      <div className='grid grid-cols-1 lg:grid-cols-[488px_auto] pb-20 gap-y-10 gap-x-5 lg:gap-x-10'>
        <div>
          <h3 className='text-[#13282D] text-[24px] lg:text-[32px] font-medium mt-5'>
            Delivering nation-wide impact from restoring local lands and forests–and more to come!
          </h3>
          <p className='text-[#000] text-[14px] font-medium mt-2'>
            Our core values driven by SDG 1, 2, 5, 8, 11,13, 15, and 17
          </p>
          <div className='flex flex-row flex-wrap gap-x-2 gap-y-2 mt-3'>
            {OUR_WORK_IMAGE.map((eachImg) => (
              <div key={eachImg} className='relative w-[47px] h-[47px] lg:w-[60px] lg:h-[60px]'>
                <Image className='m-0' src={eachImg} fill alt={eachImg} sizes='47' />
              </div>
            ))}
          </div>
          <div className='hidden lg:flex justify-start'>
            <Button className='bg-[#00AC42] hover:bg-[#287B49] mt-20'>
              <Link href='/works'>
                <p className='text-[20px] text-white font-medium'>Learn more about our projects</p>
              </Link>
            </Button>
          </div>
        </div>
        <div className='flex flex-col flex-nowrap w-full overflow-y-scroll'>
          <div className='flex flex-nowrap flex-row justify-start items-center overflow-y-scroll gap-x-5 pb-10 w-full'>
            {projectsList?.map(({ documents, title, id, description, sdg }) => {
              return (
                <ProjectCard
                  minWidth='min-w-[370px]'
                  key={id}
                  documents={documents}
                  title={title}
                  id={id}
                  description={description}
                  sdg={sdg}
                />
              );
            })}
          </div>
          <div className='flex lg:hidden justify-start'>
            <Button className='bg-[#00AC42] hover:bg-[#287B49] mt-5'>
              <Link href='/works'>
                <p className='text-[20px] text-white font-medium'>Learn more about our projects</p>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
