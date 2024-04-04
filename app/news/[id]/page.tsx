import { BASE_URL } from '@/app/constant';
import { SectionWrapper } from '@/app/ui/wrapper';
import { News } from '../news-list';
import Link from 'next/link';
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';

 

// export async function generateMetadata({ params }: params: { id: string }): {
//   const id = params.id;
//   const blogs: News = await fetch(`${BASE_URL}/blogs/${id}`).then((res) => res.json());
//   return {
//     title: blogs?.title ?? blogs?.meta_title,
//     description: blogs?.meta_description ?? blogs?.content,
//   };
// }

export default async function NewsDetails({ params }: {params: { id: string }}) {
  const id = params.id;
  const news: News = await fetch(`${BASE_URL}/blogs/${id}`).then((res) => res.json());
  const moreNews: News = await fetch(`${BASE_URL}/blogs/${id}/more`).then((res) => res.json());
  const moreNewsThumbnail = moreNews?.documents?.find(({ document_type }) => document_type === 'project_thumbnail');
  const blogThumbnail = news?.documents?.find(({ document_type }) => document_type === 'blog_thumbnail')?.url ?? '';
  return (
    <SectionWrapper padding='high' className='pt-5 '>
      <div className='lg:px-[120px] xl:px-[159px] pb-[150px]'>
        {blogThumbnail ? (
          <Image
            src={blogThumbnail}
            alt={news.title ?? ''}
            className='w-full h-[493px] object-contain'
            width={1440}
            height={493}
          />
        ) : (
          <div className='w-full h-[493px] bg-[#46A7ED]' />
        )}

        <h3 className='text-[#46A7ED] font-semibold text-base my-5'>
          <Link href='/news'>ALL CATEGORIES / </Link>
          {news?.category?.toUpperCase() ?? 'NEWS'}
        </h3>

        <h1 className='text-[32px] font-medium mb-5'>{news?.title ?? ''}</h1>
        <div
          className='font-normal space-y-4 leading-6'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news?.content) }}
        />
      </div>

      <SectionWrapper padding='none' className='py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-[auto_700px]'>
          <div className='flex justify-center items-center flex-col'>
            <p className='font-medium text-[32px] text-left w-full '>Other News </p>
            <p className='font-medium text-[32px] text-left w-full '>that may interest you...</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-[260px_auto] gap-5'>
            <div className='relative rounded-tl-[40px] rounded-br-[40px]'>
              <Image
                src={moreNewsThumbnail?.url ?? '/assets/works/other-project.png'}
                className='rounded-tl-[40px] rounded-br-[40px]'
                width={260}
                height={242}
                alt='other projects'
              />
            </div>
            <div className='max-w-[390px] flex items-start flex-col justify-start h-full'>
              <Link href={moreNews.id}>
                <h1 className='text-[24px] font-semibold'>{moreNews.title ?? ''}</h1>
              </Link>
              <p className='text-base font-medium'>{moreNews.project_summary ?? ''}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </SectionWrapper>
  );
}
