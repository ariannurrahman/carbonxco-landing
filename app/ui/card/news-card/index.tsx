import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  title: string;
  caption: string;
  slug: string;
  date: string;
  author: string;
  id: number;
}

export const NewsCard = ({ title, caption, slug, date, author, id }: NewsCardProps) => {
  return (
    <div className='flex justify-start flex-wrap lg:flex-nowrap items-center last:border-none py-[60px] border-b-2 border-black gap-x-10'>
      <div className='relative w-[300px] h-[290px] min-w-[300px] min-h-[290px]'>
        <Image src='/assets/works/other-project.png' fill alt='projects' />
      </div>
      <div>
        <p className='text-[#46A7ED] font-bold text-[14px] mb-4'>{slug}</p>
        <Link className='text-black font-semibold text-[24px] mb-4' href={`/news/${id.toString()}`}>
          {title}
        </Link>
        <h2 className='text-[#252C2D] font-medium text-[14px] mb-4'>
          {date} | {author}
        </h2>
        <p className='text-black text-[16px] font-medium'>{caption}</p>
      </div>
    </div>
  );
};
