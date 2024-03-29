'use client';

import { Project } from '@/app/types';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/app/constant';

export const useProjects = () => {
  const [totalPage, setTotalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<Project[] | undefined>(undefined);
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch(`${BASE_URL}/projects?limit=6&page=${currentPage}`).then((res) => res.json());
      setProjects(response.data);
      setTotalPage(response.totalPage);
    };
    getProjects();
  }, [currentPage]);

  const paginate = (page: number) => {
    setCurrentPage(page);
  };
  return {
    projects,
    paginate,
    paginationList: Array.from({ length: totalPage }, (_, i) => i + 1),
    currentPage,
  };
};
