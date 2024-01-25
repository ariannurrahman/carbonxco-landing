import Image from 'next/image';
import { Button } from '../../button';
import { SectionWrapper } from '../../wrapper';
import { GreenSubTitle } from '../../typography/GreenSubTitle';

export const OurWorkSection = () => {
  const OUR_WORK_IMAGE = [
    '/assets/home/our-work/our-work-13.png',
    '/assets/home/our-work/our-work-14.png',
    '/assets/home/our-work/our-work-15.png',
    '/assets/home/our-work/our-work-1.png',
    '/assets/home/our-work/our-work-2.png',
    '/assets/home/our-work/our-work-3.png',
    '/assets/home/our-work/our-work-5.png',
    '/assets/home/our-work/our-work-8.png',
    '/assets/home/our-work/our-work-17.png',
  ];

  const WORK_LIST = [
    {
      title: 'Sanggala Project',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment',
      src: '/assets/home/projects/sanggala.png',
      id: 1,
    },
    {
      title: 'Buru Island',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment',
      src: '/assets/home/projects/bulu.png',
      id: 2,
    },
    {
      title: 'Sanggala Project',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment',
      src: '/assets/home/projects/sanggala.png',
      id: 3,
    },
    {
      title: 'Buru Island',
      caption:
        'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment',
      src: '/assets/home/projects/bulu.png',
      id: 4,
    },
  ];

  return (
    <SectionWrapper padding='high'>
      <div className='grid grid-cols-1 lg:grid-cols-2 py-20 gap-y-10 gap-x-5 lg:gap-x-[40px] xl:gap-x-[100px]'>
        <div>
          <GreenSubTitle label='OUR WORK' />

          <h3 className='text-[#13282D] text-[26px] font-medium mt-5'>
            From grass-root communities, to nation-wide carbon projects
          </h3>
          <p className='text-[#000] text-[14px] font-medium mt-2'>Our Core Values are driven by SDGs</p>
          <div className='flex flex-row flex-wrap gap-x-2 gap-y-2 mt-3'>
            {OUR_WORK_IMAGE.map((eachImg) => (
              <Image className='m-0' key={eachImg} src={eachImg} width={60} height={60} alt={eachImg} />
            ))}
          </div>
          <div className='flex justify-center lg:block'>
            <Button label='Find out more about our values' className='bg-[#00AC42] mt-20' />
          </div>
        </div>
        <div className='flex flex-nowrap flex-row justify-start items-center overflow-y-scroll'>
          {WORK_LIST.map(({ caption, src, title, id }) => {
            return (
              <div
                key={id}
                className='flex justify-around items-start flex-col flex-nowrap min-w-[300px] h-full px-8 border-l-2 border-[#D4EFDE] pb-5'
              >
                <div>
                  <Image src={src} width={308} height={208} alt={title} />
                  <h1 className='text-[#13282D] text-[24px] xl:text-[32px] font-medium my-2'>{title}</h1>
                  <p className='text-[#13282D] text-base xl:text-[16px] font-medium'>{caption}</p>
                </div>
                <p className='text-[16px] text-[#00B040] font-bold text-center w-full mt-20'>Read More</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
