import Image from 'next/image';
import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';

export const MainFocus = () => {
  const DUMMY_DATA = [
    {
      label: 'Community Based Conservations',
      desc: "Indigenous People serve a vital role in conserving the Earth. They also make up at least 25% of the global population (Hoffman, 2022) including over one-third of the world's protected areas. It is about time they are getting the respect they deserve–and that is why we include them, including the youth and women to undertake carbon projects with informed consent and post-project dialogue.",
      img: '/assets/about/focus-1.png',
    },
    {
      label: 'Sustainable Livelihood with Integrated Approaches',
      desc: 'Our projects are rooted in trust and a shared vision with targeted stakeholders in each region to make it less affected by macroeconomic uncertainty. This helps us establish a solid supply chain that is connected to a wider network to provide market access, products, and valuable services.',
      img: '/assets/about/focus-2.png',
    },
    {
      label: 'Nature Based Solution',
      desc: 'Indonesia has about 60-70 percent of carbon emission reduction potential from its natural sector. Tapping into the transformative power of collective action, we are working together with various stakeholders to take the lead in numerous Nature-based Solution (NbS) projects across the country.',
      img: '/assets/about/focus-3.png',
    },
    {
      label: 'Technology Innovations',
      desc: 'From satellite imagery, LiDAR technology, and advanced algorithms, our project selections are streamlined and optimized. These cutting-edge technologies has also helped in data collection and monitoring.',
      img: '/assets/about/focus-4.png',
    },
  ];

  return (
    <div className='relative w-screen min-h-screen h-full py-5'>
      <SectionWrapper padding='high' className='relative z-20 h-full flex justify-start items-center flex-col py-20'>
        <div className='flex justify-start items-start flex-col lg:flex-row lg:gap-x-20'>
          <GreenSubTitle label='MAIN FOCUS' white className='w-fit text-nowrap' />
          <div>
            <h4 className='text-white text-2xl font-medium'>How does CarbonX play a part in this ecosystem?</h4>
            <p className='text-white text-base font-medium mt-5'>
              Engaging with local communities has become a core aspect of our approach for both environmental
              preservation and improved the livelihood of communities. By harnessing the power of nature and
              technological solutions, we are making strides to address climate challenges in an efficient and effective
              manner.
            </p>
          </div>
        </div>

        <div className='flex flex-col w-full mt-10 border-white border-2 p-10 backdrop-blur-sm gap-5'>
          {DUMMY_DATA.map(({ desc, img, label }, index) => {
            return (
              <div key={label} className='grid grid-cols-1 lg:grid-cols-[50px_auto_200px] w-full gap-3 lg:gap-10'>
                <div className='order-2 lg:order-1 h-9 w-9 border-2 border-white rounded-full flex justify-center items-center'>
                  <p className='text-white text-[20px] font-medium'>{index + 1}</p>
                </div>

                <div className='order-3 lg:order-2'>
                  <p className='text-white text-[20px] font-medium'>{label}</p>
                  <p className='text-white text-base font-medium'>{desc}</p>
                </div>
                <div className='order-1 lg:order-3 w-full h-[150px] flex justify-center items-center'>
                  <Image alt={label} src={img} height={150} width={150} />
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
      <Image
        className='hidden lg:block z-10 absolute top-0 left-0 object-fill'
        src='/assets/about/main-focus-bg.png'
        sizes='100vw'
        fill
        alt='about carbon x'
      />
      <Image
        className='block lg:hidden z-10 absolute top-0 left-0 object-fill'
        src='/assets/about/main-focus-bg-mobile.png'
        sizes='100vw'
        fill
        alt='about carbon x'
      />
    </div>
  );
};
