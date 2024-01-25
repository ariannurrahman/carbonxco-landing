import Image from 'next/image';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';

export const WhyCarbonx = () => {
  const WHY_CARBON_X = [
    {
      title: '[WIP]',
      caption: 'Demonstrate your sustainability commitment',
      src: '/assets/home/why-carbonx-1.png',
    },
    {
      title: '[WIP]',
      caption: 'Better engagement with environmentally-conscious consumers',
      src: '/assets/home/why-carbonx-2.png',
    },
    {
      title: '[WIP]',
      caption: 'Improved reputation',
      src: '/assets/home/why-carbonx-1.png',
    },
  ];

  return (
    <div className='relative w-screen min-h-screen h-full lg:h-screen'>
      <div className='relative z-20 flex flex-col justify-center items-center w-full h-full'>
        <GreenSubTitle className='text-center mb-6 mt-5' label='WHY CARBONX' white />
        <h3 className='text-white font-medium mb-20 text-center lg:max-w-[700px]'>
          We catalyze climate actions and create high-impact projects for people and planet, as well as your brand
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-[300px_300px_300px] gap-6 pb-5'>
          {WHY_CARBON_X.map(({ caption, src, title }) => {
            return (
              <div className='flex justify-start items-center flex-col flex-nowrap' key={caption}>
                <Image className='object-fit w-[95px] h-[87px]' src={src} width={95} height={87} alt={caption} />
                <p className='text-center text-[#D4EFDE] font-medium text-[20px]'>{title}</p>
                <p className='text-center text-[#D4EFDE] font-medium text-[20px]'>{caption}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Image
        className='z-10 absolute top-0 left-0 w-screen min-h-screen h-full'
        src='/assets/home/why-carbonx.png'
        width={1440}
        height={800}
        alt='why carbon x'
      />
    </div>
  );
};
