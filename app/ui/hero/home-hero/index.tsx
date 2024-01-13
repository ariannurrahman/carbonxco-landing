import Image from 'next/image';

export const HomeHero = () => {
  return (
    <section className='flex justify-start align-middle bg-[#EEE]'>
      <div className='px-[160px] py-[190px]'>
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
        <button className='flex items-center justify-center shadow-md shadow-[#133E3E] rounded-[50px] border border-1 bg-[#E8F4F5] px-8 py-2'>
          <span className='mr-4 text-[#133E3E] font-medium text-[14px]'>See Our Portfolio</span>
          <Image src='./assets/right-arrow.svg' height={16} width={16} alt='See Our Portfolio' />
        </button>
      </div>
    </section>
  );
};
