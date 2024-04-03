'use client';

import { createRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useFormState } from 'react-dom';
import { useParams } from 'next/navigation';

import { Button } from '@/app/ui/button';
import { applyJob } from '@/app/lib/actions';

export const ApplyJobForm = () => {
  const formRef = createRef<HTMLFormElement>();
  const [_, dispatch] = useFormState(applyJob, undefined);

  const { id } = useParams();
  const APPLY_FORM = [
    {
      name: 'firstName',
      id: 'firstName',
      type: 'text',
      label: 'First Name*',
      required: true,
    },
    {
      name: 'lastName',
      id: 'lastName',
      type: 'text',
      label: 'Last Name*',
      required: true,
    },
    {
      name: 'email',
      id: 'email',
      type: 'email',
      label: 'E-mail Address*',
      required: true,
    },
    {
      name: 'phone',
      id: 'phone',
      type: 'tel',
      label: 'Phone*',
      required: true,
    },
    {
      name: 'address',
      id: 'address',
      type: 'text',
      label: 'Address',
      required: false,
      placeholder: 'Street',
    },
  ];

  return (
    <form
      className='mt-4'
      action={(payload) => {
        dispatch(payload);
        formRef?.current?.reset();
        alert('Application sent!');
      }}
      ref={formRef}
    >
      {APPLY_FORM.map(({ id, label, name, required, type, placeholder }) => {
        return (
          <div key={id} className='first:mt-0 mt-8'>
            <label className='block text-[#252C2D] text-base font-medium leading-[29px]' htmlFor={id}>
              {label}
            </label>
            <input
              placeholder={placeholder ?? ''}
              className='block border border-2-[#D9D9D9] rounded-lg w-full h-[64px] py-4 px-5'
              type={type}
              id={id}
              name={name}
              required={required}
            />
          </div>
        );
      })}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-[14px] mt-[14px]'>
        <input className='hidden' type='text' id='id' name='id' value={id} readOnly />
        <input
          className='border border-2-[#D9D9D9] rounded-lg w-full h-[64px] py-4 px-5'
          type='text'
          id='city'
          name='city'
          placeholder='City'
        />
        <input
          className='border border-2-[#D9D9D9] rounded-lg w-full h-[64px] py-4 px-5'
          type='text'
          id='state'
          name='state'
          placeholder='State'
        />
        <input
          className='border border-2-[#D9D9D9] rounded-lg w-full h-[64px] py-4 px-5'
          type='text'
          id='postalCode'
          name='postalCode'
          placeholder='Postal Code'
        />
      </div>

      <div className='my-[14px]'>
        <label className='block text-[#252C2D] text-base font-medium leading-[29px]'>Resume*</label>
        <label className='block text-[#252C2D] text-base font-medium leading-[29px]'>
          Attach resume as .pdf, .doc, .docx (max. 5MB)
        </label>
        <input
          name='file'
          className='w-full block'
          type='file'
          accept='application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          required
        />
        <br />
      </div>
      <label className='text-[#252C2D] text-base font-medium leading-[29px]'>Human Check*</label>
      <br />
      <ReCAPTCHA size='normal' sitekey='6Le_2V4pAAAAAOuLAKJ752MH_HTUbwHJklZrqmB2' />
      <Button className='bg-[#00AC42] w-full md:w-fit mt-10' type='submit'>
        <p className='text-[20px] text-white font-medium text-nowrap'>Submit Application</p>
      </Button>
    </form>
  );
};
