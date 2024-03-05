import Image from 'next/image';
import { SectionWrapper } from '@/app/ui/wrapper';
import { ValuesCard } from './ValuesCard';

export const Values = () => {
  return (
    <SectionWrapper className='relative w-screen h-full' padding='none'>
      <SectionWrapper className='relative z-20 pt-[100px] pb-[100px]' padding='high'>
        <h2 className='font-medium text-center text-black text-[32px]'>VALUES</h2>
        <h3 className='font-medium text-center text-black text-xl'>WE LIVE BY</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mt-20'>
          <ValuesCard />
        </div>
      </SectionWrapper>
      <div className='z-10 absolute top-0 left-0 w-full h-[841px]'>
        <Image
          className='w-full h-full object-fit'
          src='/assets/about/values-bg.png'
          width={1440}
          height={340}
          alt='values we live by'
        />
      </div>
    </SectionWrapper>
  );
};
