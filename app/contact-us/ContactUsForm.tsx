'use client';

import ReCAPTCHA from 'react-google-recaptcha';

import { Button } from '@/app/ui/button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { BASE_URL } from '../constant';
import axios from 'axios';

interface ContactUsPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  body: string;
}

export default function ContactUsForm() {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState<ContactUsPayload>({
    body: '',
    email: '',
    name: '',
    phone: '',
    subject: '',
  });
  const onChangeForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setPayload((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${BASE_URL}/contact-us`, payload);
      setPayload({ body: '', email: '', name: '', phone: '', subject: '' });
      setLoading(false);
    } catch (_) {
      setLoading(false);
    }
  };

  const onChangeRecaptcha = (value: string | null) => {
    setIsVerified(!!value);
  };

  return (
    <form className='mt-8' onSubmit={onSubmitForm}>
      <p>
        <input
          className='w-full placeholder:text-[#546E70] placeholder:text-base placeholder:font-medium py-5 px-6 rounded-[4px] h-16 bg-[#F8F8F8] border border-2-[#546E70]'
          name='name'
          placeholder='Name'
          onChange={onChangeForm}
          value={payload.name}
          required
        />
      </p>
      <p className='mt-6'>
        <input
          className='w-full placeholder:text-[#546E70] placeholder:text-base placeholder:font-medium py-5 px-6 rounded-[4px] h-16 bg-[#F8F8F8] border border-2-[#546E70]'
          name='email'
          placeholder='Email Address'
          onChange={onChangeForm}
          required
          value={payload.email}
        />
      </p>
      <p className='mt-6'>
        <input
          className='w-full placeholder:text-[#546E70] placeholder:text-base placeholder:font-medium py-5 px-6 rounded-[4px] h-16 bg-[#F8F8F8] border border-2-[#546E70]'
          name='phone'
          placeholder='Phone'
          onChange={onChangeForm}
          required
          value={payload.phone}
        />
      </p>
      <p className='mt-6'>
        <input
          className='w-full placeholder:text-[#546E70] placeholder:text-base placeholder:font-medium py-5 px-6 rounded-[4px] h-16 bg-[#F8F8F8] border border-2-[#546E70]'
          name='subject'
          placeholder='Subject'
          onChange={onChangeForm}
          required
          value={payload.subject}
        />
      </p>
      <p className='mt-6'>
        <textarea
          className='w-full placeholder:text-[#546E70] placeholder:text-base placeholder:font-medium py-5 px-6 rounded-[4px] h-28 bg-[#F8F8F8] border border-2-[#546E70]'
          name='body'
          placeholder='Message'
          onChange={onChangeForm}
          required
          value={payload.body}
        />
      </p>
      <div className='flex justify-between flex-row flex-wrap lg:flex-nowrap items-center mt-6 gap-5'>
        <ReCAPTCHA onChange={onChangeRecaptcha} size='normal' sitekey='6Le_2V4pAAAAAOuLAKJ752MH_HTUbwHJklZrqmB2' />
        <Button
          disabled={loading}
          className={`bg-[#00AC42] hover:bg-[#287B49] ${loading ?? 'bg-[#287B49]'} w-full md:w-fit`}
          type='submit'
        >
          <p className='text-[20px] text-white font-medium text-nowrap'>Send E-mail</p>
        </Button>
      </div>
    </form>
  );
}
