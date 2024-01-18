import Image from 'next/image';

export const HomeHero = () => {
  return (
    <>
      <Image
        className='hidden lg:block'
        src='/assets/home/home-hero-desktop.png'
        width={1380}
        height={416}
        alt='home'
        priority
      />
      <Image
        className='block lg:hidden w-full'
        src='/assets/home/home-hero-mobile.png'
        width={360}
        height={173}
        alt='home'
        priority
      />
    </>
  );
};
