import { BASE_URL } from '@/app/constant';
import { SectionWrapper } from '@/app/ui/wrapper';
import { Metadata } from 'next';
import { News } from '../news-list';
import Link from 'next/link';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const blogs: News = await fetch(`${BASE_URL}/blogs/${id}`).then((res) => res.json());
  return {
    title: blogs.meta_title ?? blogs.title,
    description: blogs.meta_description ?? blogs.content,
  };
}

export default async function NewsDetails({ params }: Props) {
  const id = params.id;
  const news: News = await fetch(`${BASE_URL}/blogs/${id}`).then((res) => res.json());

  return (
    <SectionWrapper padding='high' className='py-5'>
      <div className='w-full h-[493px] bg-[#46A7ED]' />

      <h3 className='text-[#46A7ED] font-semibold text-base my-5'>
        <Link href='/news'>ALL CATEGORIES / </Link>
        {news?.category?.toUpperCase() ?? 'NEWS'}
      </h3>

      <h1 className='text-[32px] font-medium'>{news?.title.toUpperCase()}</h1>
      <p className='text-base font-medium my-5'>{news?.content}</p>
    </SectionWrapper>
  );
}
