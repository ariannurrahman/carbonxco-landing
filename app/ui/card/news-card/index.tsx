import Image from 'next/image';

interface NewsCardProps {
  title: string;
  caption: string;
  slug: string;
  date: string;
  author: string;
}

export const NewsCard = ({ title, caption, slug, date, author }: NewsCardProps) => {
  return (
    <div className='flex justify-start flex-nowrap items-center last:border-none py-[60px] border-b-2 border-black gap-x-10'>
      <div className='relative w-[320px] h-[290px] min-w-[320px] min-h-[290px]'>
        <Image src='/assets/works/other-project.png' fill alt='projects' />
      </div>
      <div>
        <p className='text-[#46A7ED] font-bold text-[14px] mb-4'>{slug}</p>
        <h1 className='text-black font-semibold text-[24px] mb-4'>{title}</h1>
        <h2 className='text-[#252C2D] font-medium text-[14px] mb-4'>
          {date} | {author}
        </h2>
        <p className='text-black text-[16px] font-medium'>{caption}</p>
      </div>
    </div>
  );
};
