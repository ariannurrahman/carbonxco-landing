import { SectionWrapper } from '../../wrapper';

export const HomeHero = () => {
  return (
    <SectionWrapper padding='low'>
      <video autoPlay playsInline width='100%' height='416' controls preload='auto'>
        <source src='/assets/video/home-video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* <Image
        className='hidden md:block w-full '
        src='/assets/home/home-hero-desktop.png'
        width={1380}
        height={416}
        alt='home'
        priority
      />
      <Image
        className='block md:hidden w-full h-[280px] '
        src='/assets/home/home-hero-mobile.png'
        width={360}
        height={280}
        alt='home'
        priority
      /> */}
    </SectionWrapper>
  );
};
