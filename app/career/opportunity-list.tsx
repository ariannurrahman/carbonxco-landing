'use client';

import { useEffect, useState } from 'react';
import { BASE_URL } from '../constant';
import Link from 'next/link';

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  requirement: string[];
  qualification: string[];
  createdAt: string;
  updatedAt: string;
}

export const OpportunityList = () => {
  const [jobs, setJobs] = useState<Job[] | null>([]);

  useEffect(() => {
    const getJos = async () => {
      const response = await fetch(`${BASE_URL}/jobs`).then((res) => res.json());
      setJobs(response.data);
    };
    getJos();
  }, []);

  return (
    <div className='flex flex-col gap-y-5 mt-7'>
      {jobs?.map(({ title, id }, index) => {
        return (
          <div
            key={index}
            className='flex justify-between items-center flex-row flex-wrap p-9 rounded-[20px] border border-2-[#D4EFDE]'
          >
            <p className='font-medium text-[20px]'>{title}</p>
            <div className=''>
              <Link href={`/career/${id}`}>
                <p className='font-semibold text-base cursor-pointer'>Apply</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
