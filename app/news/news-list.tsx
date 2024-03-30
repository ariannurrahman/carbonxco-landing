import { BASE_URL } from '../constant';
import { NewsCard } from '../ui/card/news-card';
import { Documents } from '../types';

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
}

export const NewsList = async () => {
  const response = await await fetch(`${BASE_URL}/blogs`).then((res) => res.json());
  const news: News[] = response.data;

  return news?.map((news, index) => {
    return <NewsCard {...news} key={index} />;
  });
};
