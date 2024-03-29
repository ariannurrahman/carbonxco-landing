'use client';

import ReCAPTCHA from 'react-google-recaptcha';

import { Button } from '@/app/ui/button';

export default function ContactUsForm() {
  return (
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
        <Button className='bg-[#00AC42] w-full md:w-fit'>
          <p className='text-[20px] text-white font-medium text-nowrap'>Send E-mail</p>
        </Button>
      </div>
    </form>
  );
}
