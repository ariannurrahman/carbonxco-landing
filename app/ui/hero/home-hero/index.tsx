import Image from 'next/image';
import { BasicHeroWrapper } from '../../wrapper/BasicHeroWrapper';
import { ButtonArrow } from '../../button/button-arrow';

export const HomeHero = () => {
  return (
    <BasicHeroWrapper bgColor='#EEE' sectionId='home-hero'>
      <h1 className='text-[40px] font-medium'>
        Making
        <br />
        Significant
        <br />
        Impact
      </h1>
      <p className='text-[16px] text-black font-medium mt-[29px] mb-[43px]'>
        Carbonxco is a carbon company leading the way in making impact <br /> through collaboration in the sustainable
        industry
      </p>

      <ButtonArrow imgAlt='See Our Portfolio' label='See Our Portfolio' />
    </BasicHeroWrapper>
  );
};
