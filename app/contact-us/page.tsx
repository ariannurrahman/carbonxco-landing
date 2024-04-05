import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper';
import { Metadata } from 'next';
import ContactUsForm from './ContactUsForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Us Carbonxco',
};

export default function ContactPage() {
  return (
    <div className='relative'>
      <Image
        className='hidden lg:flex absolute top-0 right-0 object-fit lg:w-[300px] xl:w-[550px] h-full'
        src='/assets/contact-us/contact-bg.png'
        sizes='550'
        width={550}
        height={100}
        alt='contact'
      />
      <Image
        className='block lg:hidden w-full h-auto max-h-[280px] object-cover aspect-square'
        src='/assets/contact-us/contact-bg.png'
        sizes='550'
        width={550}
        height={100}
        alt='contact'
      />
      <SectionWrapper padding='high' className='relative min-h-screen py-5 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12'>
          <div>
            <GreenSubTitle label='CONTACT US' />
            <h1 className='text-[24px] lg:text-[30px] font-medium mt-2'>
              Take part in our emission reduction and beyond.
            </h1>
            <p className='text-[16px] font-medium mt-5'>
              In a world where science and technology have quickly driven our ways in resolving things, let&apos;s
              ignite our collective efforts that can put inclusion at its core. Do give us a hello, stay in touch, or
              spark a new collaboration with us.
            </p>
            <ContactUsForm />
            <div className='grid grid-cols-[120px_auto] gap-x-5 px-5 border-t-2 pt-5 border-[#00AC42] mt-20'>
              <div className=''>
                <Image src='/assets/contact-us/contact-handshake.png' width={116} height={108} alt='contact' />
              </div>
              <div>
                <p className='font-medium text-base '>
                  For those interested in co-creating a carbon project with us, do send your initial ideas with a
                  maximum of 5 pages describing your project design and its roadmap by clicking{' '}
                  <a href='mailto:fikri@carbonxco.com' className='text-[#46A7ED]'>
                    here.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div />
        </div>
      </SectionWrapper>
    </div>
  );
}
