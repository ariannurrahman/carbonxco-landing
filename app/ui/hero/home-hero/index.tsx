import Image from 'next/image';
import { SectionWrapper } from '../../wrapper';

export const HomeHero = () => {
  return (
    <SectionWrapper padding='low'>
      <Image
        className='hidden lg:block w-full '
        src='/assets/home/home-hero-desktop.png'
        width={1380}
        height={416}
        alt='home'
        priority
      />
      <Image
        className='block lg:hidden w-full '
        src='/assets/home/home-hero-mobile.png'
        width={360}
        height={173}
        alt='home'
        priority
      />
    </SectionWrapper>
  );
};
