'use client';

import { useEffect, useState } from 'react';
import { BASE_URL } from '../constant';
import { NewsCard } from '../ui/card/news-card';

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
  documents: string[];
}

export const NewsList = () => {
  const [news, setNews] = useState<News[] | null>(null);
  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(`${BASE_URL}/blogs`).then((res) => res.json());
      setNews(response.data);
    };
    getNews();
  }, []);

  return news?.map((news, index) => {
    return <NewsCard {...news} key={index} />;
  });
};
