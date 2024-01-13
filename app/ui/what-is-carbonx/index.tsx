import Image from 'next/image';
import { BasicHeroWrapper } from '../wrapper/BasicHeroWrapper';

export const WhatIsCarbonx = () => {
  return (
    <BasicHeroWrapper bgColor='white' sectionId='home-hero'>
      <h3 className='text-[#00AC42] font-semibold'>WHAT IS CARBONX</h3>
      <h1 className='text-[32px] font-medium'>
        We invest, implement, transform <br />
        and nourish grassroot communities
      </h1>
      <p className='text-[16px] text-black font-medium mt-[29px] mb-[43px]'>
        We drive the transition to a sustainable economy by incorporating environmental, social, and governance
        principles into our operations. Our business model fosters collaboration among the communities, businesses, and
        the environment in order to address both global climate challenges and to achieve prosper economy. This
        collaboration will pave the way for a more sustainable future
      </p>
      <button className='flex items-center justify-center shadow-md shadow-[#133E3E] rounded-[50px] border border-1 bg-[#E8F4F5] px-8 py-2'>
        <span className='mr-4 text-[#133E3E] font-medium text-[14px]'>Meet the People behind CarbonX</span>
        <Image src='./assets/right-arrow.svg' height={16} width={16} alt='Meet the People behind CarbonX' />
      </button>
    </BasicHeroWrapper>
  );
};
