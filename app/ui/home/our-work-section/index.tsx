import Image from 'next/image';
import { Button } from '../../button';
import { SectionWrapper } from '../../wrapper';
import { GreenSubTitle } from '../../typography/GreenSubTitle';

export const OurWorkSection = () => {
  const OUR_WORK_IMAGE = [
    '/assets/home/our-work/our-work-13.png',
    // '/assets/home/our-work/our-work-14.png',
    '/assets/home/our-work/our-work-15.png',
    '/assets/home/our-work/our-work-1.png',
    '/assets/home/our-work/our-work-2.png',
    // '/assets/home/our-work/our-work-3.png',
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
      <GreenSubTitle className='pt-20' label='OUR WORK' />
      <div className='grid grid-cols-1 lg:grid-cols-[488px_auto] pb-20 gap-y-10 gap-x-5 lg:gap-x-10'>
        <div>
          <h3 className='text-[#13282D] text-[24px] lg:text-[26px] font-medium mt-5'>
            From local communities, innovations to nation-wide carbon projects
          </h3>
          <p className='text-[#000] text-[14px] font-medium mt-2'>
            Our core values driven by SDG 1, 2, 5, 8, 11,13, 15, and 17
          </p>
          <div className='flex flex-row flex-wrap gap-x-2 gap-y-2 mt-3'>
            {OUR_WORK_IMAGE.map((eachImg) => (
              <div key={eachImg} className='relative w-[47px] h-[47px] lg:w-[60px] lg:h-[60px]'>
                <Image className='m-0' src={eachImg} fill alt={eachImg} />
              </div>
            ))}
          </div>
          <div className='flex justify-start lg:block'>
            <Button className='bg-[#00AC42] mt-20'>
              <p className='text-[20px] text-white font-medium'>See Our Projects</p>
            </Button>
          </div>
        </div>
        <div className='flex flex-nowrap flex-row justify-start items-center overflow-y-scroll gap-x-5 pb-10'>
          {WORK_LIST.map(({ caption, src, title, id }) => {
            return (
              <div
                key={id}
                className='shadow-[0_1px_1px_0_rgba(0,0,0,0.04)] flex justify-around items-start flex-col flex-nowrap min-w-[370px] border-2 rounded-[20px] border-[#D4EFDE] p-8'
              >
                <div>
                  <Image src={src} width={308} height={195} alt={title} />
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
