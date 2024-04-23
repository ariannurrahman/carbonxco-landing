'use client';

import { useEffect, useState } from 'react';
import { SectionWrapper } from '../../wrapper';
import { Pagination } from './Pagination';
import { Project } from '@/app/types';
import { BASE_URL } from '@/app/constant';
import { ProjectCard } from '../../project-card';

export const RecentProjects = () => {
  const [totalPage, setTotalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<Project[] | undefined>(undefined);
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch(`${BASE_URL}/projects?limit=6&page=${currentPage}`).then((res) => res.json());
      setProjects(response?.data);
      setTotalPage(response?.totalPage);
    };
    getProjects();
  }, [currentPage]);

  const paginationList = Array.from({ length: totalPage }, (_, i) => i + 1);
  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <SectionWrapper padding='high' className='pt-10 pb-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <h1 className='text-[32px] font-medium text-center lg:text-left'>Recent Projects</h1>
        <div className='hidden lg:flex justify-end'>
          <Pagination paginate={paginate} paginationList={paginationList} currentPage={currentPage} />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-10'>
        {projects?.map(({ documents, title, id, description, sdg }) => {
          return (
            <ProjectCard key={id} documents={documents} title={title} id={id} description={description} sdg={sdg} />
          );
        })}
      </div>
      <div className='flex-row justify-center flex lg:hidden w-full'>
        <Pagination paginate={paginate} paginationList={paginationList} currentPage={currentPage} />
      </div>
    </SectionWrapper>
  );
};
