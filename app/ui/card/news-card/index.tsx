import { News } from '@/app/news/news-list';
import { formatDate } from '@/app/utils';
import Image from 'next/image';
import Link from 'next/link';

export const NewsCard = ({ category, title, content, createdAt, author, id }: News) => {
  return (
    <div className='flex justify-center lg:justify-start flex-wrap lg:flex-nowrap items-center lg:items-start last:border-none py-[60px] border-b-2 border-black gap-x-10'>
      <div className='relative w-full md:w-[300px] h-[290px] min-w-[300px] min-h-[290px]'>
        <Image src='/assets/works/other-project.png' fill alt='projects' />
      </div>
      <div className='w-full'>
        <p className='text-[#46A7ED] font-bold text-[14px] mb-4 mt-5 lg:mt-0'>{category ?? 'News'}</p>
        <Link className='text-black font-semibold text-[24px] my-4' href={`/news/${id.toString()}`}>
          {title}
        </Link>
        <h2 className='text-[#252C2D] font-medium text-[14px] my-4'>
          {formatDate(createdAt).toUpperCase()} | {(author ?? '').toUpperCase()}
        </h2>
        <p className='text-black text-[16px] font-medium'>{content}</p>
      </div>
    </div>
  );
};
