'use client';

import { BASE_URL } from '../constant';
import { NewsCard } from '../ui/card/news-card';
import { Documents } from '../types';
import { useEffect, useState } from 'react';
import { Pagination } from '../ui/works/recent-projects/Pagination';
import { useSearchParams } from 'next/navigation';
import { FilterType } from '../ui/hero/news-hero';

export interface News {
  id: string;
  author: string;
  title: string;
  content: string;
  category: string;
  meta_title: string;
  meta_description: string;
  project_summary: string;
  createdAt: string;
  updatedAt: string;
  documents: Documents[];
  status?: number;
  message?: string;
}

export const NewsList = () => {
  const searchParams = useSearchParams();
  const currentCategory: FilterType = (searchParams.get('category') || '') as FilterType;

  const [totalPage, setTotalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState<News[] | undefined>(undefined);

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch(`${BASE_URL}/blogs?category=${currentCategory}&limit=6&page=${currentPage}`).then(
        (res) => res.json(),
      );
      setNews(response?.data);
      setTotalPage(response?.totalPage);
    };
    getProjects();
  }, [currentPage, currentCategory]);

  const paginationList = Array.from({ length: totalPage }, (_, i) => i + 1);
  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {news?.map((news, index) => {
        return <NewsCard {...news} key={index} />;
      })}
      <div className='py-10 flex justify-center'>
        <Pagination paginate={paginate} paginationList={paginationList} currentPage={currentPage} />
      </div>
    </div>
  );
};
