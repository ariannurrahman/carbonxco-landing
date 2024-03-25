import Image from 'next/image';

export const WhyCarbonx = () => {
  const WHY_CARBON_X = [
    {
      title: 'Robust Project Management',
      caption: 'Strong in-house capabilities and a robust local institutional network',
      src: '/assets/home/why-carbonx-1.png',
    },
    {
      title: 'Closely Monitored Output',
      caption: 'Rigorous project control ensures high quality results',
      src: '/assets/home/why-carbonx-2.png',
    },
    {
      title: 'Improved Branding',
      caption: 'Demonstrate a tangible commitment to do business better with a heed to the planetary health',
      src: '/assets/home/why-carbonx-1.png',
    },
    {
      title: 'Co-Benefits',
      caption: 'Emphasis on benefits beyond emission reductions, from social to economy standpoint to name a few',
      src: '/assets/home/why-carbonx-3.png',
    },
  ];

  return (
    <div className='relative w-screen min-h-screen h-full lg:h-screen'>
      <div className='relative z-20 flex flex-col justify-center items-center w-full h-full py-20 lg:py-0'>
        <h2 className='font-medium text-[32px] text-white mb-10'>Why Work with Us?</h2>

        <div className='grid grid-cols-1 lg:grid-cols-[360px_360px] gap-10 pb-5'>
          {WHY_CARBON_X.map(({ caption, src, title }) => {
            return (
              <div className='flex justify-start items-center flex-col flex-nowrap px-5' key={caption}>
                <Image className='object-fit w-[95px] h-[87px]' src={src} width={95} height={87} alt={caption} />
                <p className='text-center text-[#D4EFDE] font-semibold text-[20px] mt-5'>{title}</p>
                <p className='text-center text-[#D4EFDE] font-medium text-[14px] lg:text-[16px] mt-3'>{caption}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Image
        className='hidden lg:block z-10 absolute top-0 left-0 w-screen min-h-screen h-full'
        src='/assets/home/why-carbonx.png'
        width={1440}
        height={800}
        alt='why carbon x'
      />
      <Image
        className='block lg:hidden z-10 absolute top-0 left-0 w-screen min-h-screen h-full'
        src='/assets/home/why-carbonx-mobile.png'
        alt='why carbon x'
        fill
      />
    </div>
  );
};
