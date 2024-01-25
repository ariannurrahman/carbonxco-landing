import Link from 'next/link';
import { Button } from '../../button';
import { SectionWrapper } from '../../wrapper';

export const QualitySection = () => {
  return (
    <SectionWrapper padding='high'>
      <div className='grid grid-cols-1 lg:grid-cols-[600px_auto] xl:grid-cols-[700px_auto] mt-4 lg:mt-10 gap-x-6 pb-[70px]'>
        <div>
          <h1 className='mb-5 text-[30px] lg:text-[40px] font-medium'>
            Quality carbon – within reach! Let&apos;s jump right in and make a lasting impact together.
          </h1>
          <Link className='text-[14px] lg:text-base font-bold text-[#46A7ED] underline' href='/about'>
            But first, what is carbon?
          </Link>
        </div>
        <div className='flex flex-col items-center lg:items-start lg:justify-end'>
          <p className='text-[16px] font-medium'>
            Untangling the knots within this whole new carbon trade ecosystem does require us to be fully equipped to
            create shared value for the future we want.
          </p>
          <div className='mt-8'>
            <Button label='Get to Know CarbonX' className='bg-[#00AC42]' />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
