import { MetadataRoute } from 'next';
import { BASE_URL } from './constant';

const URL = 'https://carbonxco-landing.vercel.app/';

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const newsResponse = await fetch(`${BASE_URL}/blogs?&limit=50&page=${1}`).then((res) => res.json());

  const worksResponse = await fetch(`${BASE_URL}/projects?&limit=50&page=${1}`).then((res) => res.json());

  const teamsResponse = await fetch(`${BASE_URL}/teams?&limit=50&page=${1}`).then((res) => res.json());

  const newsSitemap = newsResponse.data.map(({ id, updatedAt }: { id: string; updatedAt: string }) => ({
    url: `${URL}news/${id}`,
    lastModified: updatedAt,
    priority: 0.9,
  }));
  const worksSitemap = worksResponse.data.map(({ id, updatedAt }: { id: string; updatedAt: string }) => ({
    url: `${URL}works/${id}`,
    lastModified: updatedAt,
    priority: 0.9,
  }));
  const teamsSitemap = teamsResponse.data.map(({ id, updatedAt }: { id: string; updatedAt: string }) => ({
    url: `${URL}teams/${id}`,
    lastModified: updatedAt,
    priority: 0.9,
  }));

  return [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${URL}/teams`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${URL}/career`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${URL}/pp`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${URL}/tc`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...newsSitemap,
    ...worksSitemap,
    ...teamsSitemap,
  ];
}
