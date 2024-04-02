import { News } from '@/app/news/news-list';
import { formatDate } from '@/app/utils';
import Image from 'next/image';
import Link from 'next/link';

type NewsType = 'news' | 'all_about_carbon' | 'insight';

enum NewsEnum {
  'news' = 'News',
  'all_about_carbon' = 'All',
  'insight' = 'Insight',
}

export const NewsCard = ({ category, title, createdAt, author, id, documents, project_summary }: News) => {
  const transformedCategory = NewsEnum[category as NewsType];
  const thumbnailUrl = documents?.find(({ document_type }) => document_type === 'blog_thumbnail');
  return (
    <div className='flex justify-center lg:justify-start flex-wrap lg:flex-nowrap items-center lg:items-start last:border-none py-[60px] border-b-2 border-black gap-x-10'>
      <div className='relative w-full md:w-[300px] h-[290px] min-w-[300px] min-h-[290px] rounded-tl-[40px] rounded-br-[40px]'>
        <Image
          className='rounded-tl-[40px] rounded-br-[40px]'
          src={thumbnailUrl?.url ?? '/assets/works/other-project.png'}
          fill
          alt='projects'
        />
      </div>
      <div className='w-full'>
        <p className='text-[#46A7ED] font-bold text-[14px] mb-4 mt-5 lg:mt-0'>{transformedCategory ?? 'News'}</p>
        <Link className='text-black font-semibold text-[24px] my-4' href={`/news/${id.toString()}`}>
          {title}
        </Link>
        <h2 className='text-[#252C2D] font-medium text-[14px] my-4'>
          {formatDate(createdAt).toUpperCase()} | {(author ?? '').toUpperCase()}
        </h2>
        <p className='text-black text-[16px] font-medium'>{project_summary}</p>
      </div>
    </div>
  );
};
