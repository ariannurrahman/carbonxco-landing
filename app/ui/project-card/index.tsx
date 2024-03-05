import Image from 'next/image';

interface Project {
  title: string;
  id: string;
  desc: string;
  src: string;
}

export const ProjectCard = ({ desc, id, title, src }: Project) => {
  return (
    <div
      key={id}
      className='shadow-[0_1px_1px_0_rgba(0,0,0,0.04)] flex justify-around items-start flex-col flex-nowrap w-fit border-2 rounded-[20px] border-[#D4EFDE] p-8'
    >
      <div>
        <div className='w-fill h-[195px] relative'>
          <Image src={src} fill alt={title} />
        </div>
        <h1 className='text-[#13282D] text-[24px] xl:text-[32px] font-medium my-2'>{title}</h1>
        <p className='text-[#13282D] text-base xl:text-[16px] font-medium'>{desc}</p>
      </div>
      <p className='text-[16px] text-[#00B040] font-bold text-center w-full mt-20'>Read More</p>
    </div>
  );
};
