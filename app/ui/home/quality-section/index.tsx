import Link from 'next/link';
import { Button } from '../../button';
import { SectionWrapper } from '../../wrapper';
import Image from 'next/image';

export const QualitySection = () => {
  return (
    <SectionWrapper padding='high'>
      <div className='grid grid-cols-1 lg:grid-cols-[400px_auto] xl:grid-cols-[700px_auto] mt-4 lg:mt-10 gap-x-6 pb-[70px]'>
        <div className='max-w-[580px]'>
          <h1 className='lg:mb-8 text-[24px] lg:text-[30px] font-medium'>
            Join us in empowering communities through quality carbon projects!
          </h1>
        </div>
        <div className='mt-5 lg:mt-0 flex flex-col items-center lg:items-start lg:justify-start'>
          <p className='text-[14px] md:text-base font-medium'>
            Execute your business’ climate commitment with CarbonX, and answer the need of the current industry
            landscape while bringing a genuine transition to sustainability into fruition.
          </p>
          <div className='space-y-5 mt-5'>
            <Button className='bg-[#00AC42] hover:bg-[#287B49]'>
              <Link className='inline-flex items-center' href='/works'>
                <p className='text-base text-white font-medium'>Let&apos;s Collaborate!</p>
                <Image className='ml-3' alt='go to FAQ' width={30} height={16} src='/assets/white-right-arrow.png' />
              </Link>
            </Button>
            <div>
              <Link className='text-[12px] font-semibold text-[#46A7ED] tracking-widest' href='/faq'>
                BUT FIRST, <span className='underline'>WHAT IS CARBON?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
