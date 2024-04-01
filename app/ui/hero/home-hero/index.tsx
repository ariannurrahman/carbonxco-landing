import { SectionWrapper } from '../../wrapper';

export const HomeHero = () => {
  return (
    <SectionWrapper padding='low'>
      <div className='w-full h-[416px]'>
        <video
          className='h-full w-full object-cover'
          autoPlay
          playsInline
          width='100%'
          height='100%'
          controls
          preload='auto'
        >
          <source src='/assets/video/home-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
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
