'use client';

import Lottie from 'lottie-react';
import communityAnimation from '@/public/assets/lottie/community.json';
import rootsAnimation from '@/public/assets/lottie/roots.json';
import natureAnimation from '@/public/assets/lottie/nature.json';
import techAnimation from '@/public/assets/lottie/tech.json';

export const MainFocusList = () => {
  const MAIN_FOCUS_LIST = [
    {
      label: 'Community Based Conservations',
      desc: "Indigenous People serve a vital role in conserving the Earth. They also make up at least 25% of the global population (Hoffman, 2022) including over one-third of the world's protected areas. It is about time they are getting the respect they deserve–and that is why we include them, including the youth and women to undertake carbon projects with informed consent and post-project dialogue.",
      lottie: communityAnimation,
    },
    {
      label: 'Sustainable Livelihood with Integrated Approaches',
      desc: 'Our projects are rooted in trust and a shared vision with targeted stakeholders in each region to make it less affected by macroeconomic uncertainty. This helps us establish a solid supply chain that is connected to a wider network to provide market access, products, and valuable services.',
      lottie: rootsAnimation,
    },
    {
      label: 'Nature-based Solutions',
      desc: 'Indonesia has about 60-70 percent of carbon emission reduction potential from its natural sector. Tapping into the transformative power of collective action, we are working together with various stakeholders to take the lead in numerous Nature-based Solution (NbS) projects across the country.',
      lottie: natureAnimation,
    },
    {
      label: 'Technology Innovations',
      desc: 'From satellite imagery, LiDAR technology, and advanced algorithms, our project selections are streamlined and optimized. These cutting-edge technologies has also helped in data collection and monitoring.',
      lottie: techAnimation,
    },
  ];

  return (
    <div className='flex flex-col w-full mt-10 border-white border-2 p-10 bg-black/30 gap-5'>
      {MAIN_FOCUS_LIST.map(({ desc, lottie, label }, index) => {
        return (
          <div key={label} className='grid grid-cols-1 lg:grid-cols-[50px_200px_auto] w-full gap-3 lg:gap-10'>
            <div className='order-2 lg:order-1 h-9 w-9 border-[1px] border-white rounded-full flex justify-center items-center'>
              <p className='text-white text-[20px] font-medium'>{index + 1}</p>
            </div>

            <div className='order-3'>
              <p className='text-white text-[20px] font-medium'>{label}</p>
              <p className='text-white text-[14px] font-medium mt-5'>{desc}</p>
            </div>
            <div className='order-1 lg:order-2 w-full h-[150px] flex justify-center items-start'>
              <Lottie animationData={lottie} loop={true} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
