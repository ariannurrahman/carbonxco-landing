import Link from 'next/link';
import { Button } from '../../button';
import { SectionWrapper } from '../../wrapper';
import Image from 'next/image';

export const QualitySection = () => {
  return (
    <SectionWrapper padding='high'>
      <div className='grid grid-cols-1 lg:grid-cols-[400px_auto] xl:grid-cols-[700px_auto] mt-4 lg:mt-10 gap-x-6 pb-[70px]'>
        <div>
          <h1 className='mb-8 text-[32px] md:text-[40px] font-medium'>
            Join us in empowering communities through quality carbon projects!
          </h1>
          <Link
            className='text-[14px] md:text-base font-semibold text-[#46A7ED] tracking-widest inline-flex items-center'
            href='/faq'
          >
            <Image className='mr-5' alt='what is carbon' width={25} height={30} src='/assets/home/what-is-icon.png' />
            BUT FIRST, <span className='underline'>WHAT IS CARBON?</span>
          </Link>
        </div>
        <div className='mt-5 lg:mt-0 flex flex-col items-center lg:items-start lg:justify-end'>
          <p className='text-[14px] md:text-base font-medium'>
            The current business industries are in a dire need to engage with real climate solutions and facilitate a
            genuine transition to sustainability.
          </p>

          <p className='text-[14px] md:text-base font-medium mt-5'>
            This is where carbon projects come into play for businesses to not only reduce their carbon footprint, but
            also create a solid foundation for a sustainable and resilient future. Untangling the knots within this
            whole new carbon trade ecosystem does require us to be fully equipped to create shared value for the future
            we want.
          </p>
          <div className='mt-8'>
            <Button className='bg-[#00AC42]'>
              <Link className='inline-flex items-center' href='/faq'>
                <p className='text-[20px] text-white font-medium text-nowrap'>Get to Know CarbonX</p>
                <Image className='ml-3' alt='go to FAQ' width={30} height={16} src='/assets/white-right-arrow.png' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
