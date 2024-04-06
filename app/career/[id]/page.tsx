'use client';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper';
import { ApplyJobForm } from './ApplyJobForm';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/app/constant';
import Image from 'next/image';
import Link from 'next/link';

interface Job {
  createdAt: string;
  id: string;
  location: string;
  qualification: string[];
  requirement: string[];
  title: string;
  type: string;
  updatedAt: string;
}

export default function CarrerPageDetails() {
  const [job, setJob] = useState<Job | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getJobDetail = async () => {
      const response = await fetch(`${BASE_URL}/jobs/${id}`).then((res) => res.json());
      setJob(response);
    };
    getJobDetail();
  }, [id]);

  return (
    <SectionWrapper
      padding='none'
      className='py-10 ps-2 lg:ps-[120px] xl:ps-[76px] pe-4 lg:pe-[120px] xl:pe-[159px] lg:py-[100px] flex flex-col lg:flex-row items-start'
    >
      <Link
        className='lg:hidden mb-10 bg-[#FFC42D] w-[60px] h-[60px] z-20 relative flex justify-center items-center rounded-full'
        href='/career'
      >
        <Image className='z-30' src='/assets/career/back-button.svg' alt='back' width={12} height={18} />
      </Link>
      <Link className='lg:pe-[75px] hidden lg:block' href='/career'>
        <div className='bg-[#FFC42D]  w-[60px] h-[60px] z-20 relative flex justify-center items-center rounded-full'>
          <Image className='z-30' src='/assets/career/back-button.svg' alt='back' width={12} height={18} />
        </div>
      </Link>
      <SectionWrapper className='flex-1' padding='none'>
        <GreenSubTitle label='JOB DETAILS' />
        <h1 className='text-2xl leading-[48px] font-medium'>{job?.title}</h1>
        <div className='grid grid-cols-[120px_auto]'>
          <div className='w-fit'>
            <p className='text-base font-semibold'>TYPE</p>
            <p className='text-base font-semibold'>LOCATION</p>
          </div>
          <div>
            <p className='text-base font-medium'>{job?.type}</p>
            <p className='text-base font-medium'>{job?.location}</p>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-[auto_400px] gap-10'>
          <div>
            <div className='mt-8'>
              <h3 className='text-base font-semibold leading-[29px]'>REQUIREMENTS</h3>
              <div className='mt-2'>
                {job?.requirement?.map((req) => {
                  return (
                    <li className='text-base leading-[29px] font-medium' key={req}>
                      {req}
                    </li>
                  );
                })}
              </div>
            </div>
            <div className='mt-8'>
              <h3 className='text-base font-semibold leading-[29px]'>QUALIFICATIONS, SKILLS & EXPERIENCE</h3>
              <div className='mt-2'>
                {job?.qualification?.map((eachQualification) => {
                  return (
                    <li className='text-base leading-[29px] font-medium' key={eachQualification}>
                      {eachQualification}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <div className='border-l-4 border-[#00AC42] pl-5 h-11 flex items-center'>
              <h2 className='text-2xl font-semibold'>Apply for this Position</h2>
            </div>
            <ApplyJobForm />
          </div>
        </div>
      </SectionWrapper>
    </SectionWrapper>
  );
}
