interface NewsCardProps {
  title: string;
}

export const NewsCard = ({ title }: NewsCardProps) => {
  return (
    <div className=''>
      <div className='bg-slate-400 h-[194px]' />
      <div className='mt-2 antialiased font-bold'>{title}</div>
    </div>
  );
};
