import Image from 'next/image';

import { SectionWrapper } from '../wrapper';
import { Button } from '../button';
import Link from 'next/link';

export const ContactSection = () => {
  return (
    <>
      <SectionWrapper className='grid grid-cols-1 md:grid-cols-[500px_auto] py-20 gap-x-20' padding='high'>
        <div className='flex justify-center items-center'>
          <Image src='/assets/home/contact.png' className='object-fit' width={500} height={500} alt='contact' />
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-[32px] font-medium'>
            Have a <span className='underline underline-offset-8 decoration-[#FFC42D]'>carbon project</span> in mind?
          </h2>
          <p className='mt-5 text-base font-medium'>
            Whether you&apos;re a venture capitalist, investor, project developer, or a community member looking for
            carbon-related projects, you can always share your ideas for further collaboration and beyond.
          </p>

          <p className='mt-5 text-base font-medium'>
            For those interested in co-creating a carbon project with us, do send your initial ideas with a maximum of 5
            pages describing your project design and its roadmap
          </p>
          <Button className='bg-[#46A7ED] w-fit mt-8'>
            <Link href='/contact-us'>
              <p className='text-[20px] text-white font-medium'>Share your Ideas!</p>
            </Link>
          </Button>
        </div>
      </SectionWrapper>
      <div className='relative w-screen h-[500px]'>
        <div className='z-20 relative  flex justify-center items-center flex-col w-full h-full'>
          <div className='max-w-[538px]'>
            <h2 className='text-[32px] font-medium text-center text-white'>
              Let&apos;s talk about how we can make more impact, today.
            </h2>
            <p className='text-base text-white text-center mt-5 font-medium'>
              Call <span className='text-[#46A7ED] font-semibold'>+6221 1234 5678</span> or e-mail us at{' '}
              <span className='text-[#46A7ED] font-semibold'>hello@carbonx.com</span>
            </p>
          </div>
          <Button className='bg-[#00AC42] mt-8'>
            <Link href='/contact-us'>
              <p className='text-[20px] text-white font-medium'>Contact Us</p>
            </Link>
          </Button>
        </div>
        <Image className='z-10 absolute top-0 left-0' src='/assets/home/contact-bg.png' alt='contact' fill />
      </div>
    </>
  );
};
