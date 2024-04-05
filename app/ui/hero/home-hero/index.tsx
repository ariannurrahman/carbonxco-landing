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
          loop
          muted
          preload='auto'
        >
          <source src='/assets/video/home-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </SectionWrapper>
  );
};
