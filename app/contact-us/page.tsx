'use client';

import ReCAPTCHA from 'react-google-recaptcha';

import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper';
import { Button } from '@/app/ui/button';

export default function ContactPage() {
  return (
    <SectionWrapper padding='high' className='min-h-screen py-24'>
      <GreenSubTitle label='CONTACT' />
      <h1 className='text-[32px] font-medium mt-2'>Contact Us</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12'>
        <div>
          <p className='text-[16px] font-medium mt-5'>
            In a world where science and technology have quickly driven our ways in resolving things, let’s ignite our
            collective efforts that can put inclusion at its core. So, we count on everyone to take part in our emission
            reduction and beyond. 
          </p>
          <form className='mt-8'>
            <p>
              <input
                className='w-full placeholder:text-[#546E70] placeholder:text-base placeholder:font-medium py-5 px-6 rounded-[4px] h-16 bg-[#F8F8F8] border border-2-[#546E70]'
                name='name'
                placeholder='Name'
              />
            </p>
            <p className='mt-6'>
              <input
                className='w-full placeholder:text-[#546E70] placeholder:text-base placeholder:font-medium py-5 px-6 rounded-[4px] h-16 bg-[#F8F8F8] border border-2-[#546E70]'
                name='email'
                placeholder='Email Address'
              />
            </p>
            <p className='mt-6'>
              <input
                className='w-full placeholder:text-[#546E70] placeholder:text-base placeholder:font-medium py-5 px-6 rounded-[4px] h-16 bg-[#F8F8F8] border border-2-[#546E70]'
                name='phone'
                placeholder='Phone'
              />
            </p>
            <p className='mt-6'>
              <textarea
                className='w-full placeholder:text-[#546E70] placeholder:text-base placeholder:font-medium py-5 px-6 rounded-[4px] h-28 bg-[#F8F8F8] border border-2-[#546E70]'
                name='message'
                placeholder='Message'
              />
            </p>
            <div className='flex justify-between flex-row flex-wrap lg:flex-nowrap items-center mt-6 gap-5'>
              <ReCAPTCHA size='normal' sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''} />
              <Button label='Send' className='bg-[#00AC42] w-full md:w-fit' />
            </div>
          </form>
        </div>
        <div>
          <div>
            <div className='w-full h-[314px] bg-[#EDEDED]' />
            <div className='mt-9 border-2 border-[#00B040] p-7 rounded-tl-[20px] rounded-br-[20px]'>
              <h2 className='text-2xl font-medium w-[243px]'>Got some ideas? Let’s work together!</h2>
              <p className='mt-5 font-medium text-[14px]'>
                Do give us a hello, or spark a new collaboration with us by following our Instagram and LinkedIn.
              </p>
              <p className='mt-5 font-medium text-[14px]'>
                {' '}
                In addition, you might also drop us an email to <span className='underline'>admin@carbonxco.com.</span>
              </p>
              <p className='mt-5 font-medium text-[14px]'>Any comments or feedback are truly appreciated!</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
