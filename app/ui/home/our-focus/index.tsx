import Image from 'next/image';
import { SectionWrapper } from '../../wrapper';
import { GreenSubTitle } from '../../typography/GreenSubTitle';

export const OurFocus = () => {
  const OUR_FOCUS_LIST = [
    {
      title: 'Advisory',
      description:
        'Providing expertise and guidance, inter alia technical advice, policy recommendations, stakeholder engagement, standard development and review, disputing resolution, as well as research and analysis on various aspects of the carbon market to generate knowledge and insights that can inform policy decisions and market development strategies.',
    },
    {
      title: 'Investment',
      description:
        'Financing climate action and diversifying investment to offer new opportunities for portfolio diversification and potential returns, including developing and implementing emission reduction projects while promoting a high standard for strong additionalities, co-benefits, and permanence. These projects consist of; but are not limited to, renewable energy initiatives, forestry or mangrove conservation programs, and energy efficiency solutions.',
    },
    {
      title: 'Carbon Project Initiator',
      description:
        'Identifying, developing, and managing projects that reduce or remove greenhouse gas emissions from the atmosphere. Our key responsibilities encompass conducting project identification and its development, feasibility studies, project design and implementation, multi-stakeholder engagement, financing and management, up to carbon credits issuance and trading.',
    },
  ];

  return (
    <SectionWrapper padding='low'>
      <div className='w-full min-h-screen h-full lg:h-screen px-2 lg:px-8 relative'>
        <div className='z-20 relative flex justify-center flex-col items-start h-full lg:pl-[100px] p-5'>
          <div>
            <GreenSubTitle label='OUR FOCUS' />

            <p className='max-w-[570px] text-[#D4EFDE] text-2xl font-medium my-4'>
              Community-based conservation, alternative livelihood through market access, social inclusion, and emission
              reduction.
            </p>
          </div>
          <div className='grid mx-auto lg:mx-0 auto-cols-auto lg:grid-cols-[auto_auto_auto] xl:grid-cols-[313px_313px_313px] mt-10'>
            {OUR_FOCUS_LIST.map(({ title, description }) => {
              return (
                <div
                  key={title}
                  className='border-l-2 border-b-2 border-r-2 first:border-t-2 lg:last:border-r-2 lg:border-t-2 border-white backdrop-blur-sm'
                >
                  <h1 className='text-white text-[16px] font-bold text-left p-5'>{title}</h1>
                  <p className='text-white text-[12px] font-medium text-left pb-5 px-8'> {description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Image
          className='z-10 absolute top-0 left-0 w-full min-h-screen h-full'
          src='/assets/home/our-focus.png'
          width={1380}
          height={416}
          alt='our focus'
        />
      </div>
    </SectionWrapper>
  );
};
