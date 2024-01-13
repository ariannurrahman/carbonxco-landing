import React from 'react';
import { ButtonBlack } from '../button/button-black';

export const ContactSection = () => {
  return (
    <div className='bg-[#F7F7F7] p-3 lg:p-12' id='contact-section'>
      <div className='bg-white p-5 lg:py-20 rounded-lg'>
        <h1 className='text-center text-black font-medium text-[32px]'>
          Let’s talk about <br /> how we can make more impact, <span className='font-bold text-[#1A7C68]'>today</span>.
        </h1>
        <p className='my-4 text-center text-black font-medium text-[16px]'>
          Call +6221 1234 5678 or e-mail us at hello@carbonx.com
        </p>
        <div className='flex justify-center'>
          <ButtonBlack label='Contact Us' />
        </div>
      </div>
    </div>
  );
};
