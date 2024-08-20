import Image from 'next/image';
import Link from 'next/link';
import { FOOTER_NAV } from '../constants';
import { SectionWrapper } from '../wrapper';
import { Instagram } from './instagram';
import { Linkedin } from './linkedin';
import { Email } from './email';

export const Footer = () => {
  const FooterLogo = (
    <div>
      <Link href='/'>
        <div className='w-[135px] h-[32px] relative'>
          <Image alt='carbonxco' className='object-contain' src='/assets/footer-logo.png' fill sizes='130' />
        </div>
      </Link>
      <p className='mt-[18px] mb-[26px] max-w-[330px] font-medium text-white text-[14px]'>
        CarbonX is an impact-focused company, leading the way in meaningful collaborations that goes beyond carbon
        offsetting.
      </p>
      <div className='hidden lg:flex flex-row justify-start gap-4'>
        <Link href='https://www.instagram.com/carbonx.id/' target='_blank'>
          <Instagram />
        </Link>
        <Link href='https://www.linkedin.com/company/carbonx-investments/' target='_blank'>
          <Linkedin />
        </Link>
      </div>
      <p className='block lg:hidden font-medium text-white text-[8px]'>CarbonxCo© 2024 All Rights Reserved</p>
    </div>
  );

  const FooterUrl = (
    <div className='flex justify-start items-start lg:justify-center flex-col lg:items-center'>
      <div className='grid grid-cols-2 gap-y-3 gap-x-5'>
        {FOOTER_NAV.map(({ href, label }) => {
          return (
            <Link
              className='tracking-wider text-[12px] text-white text-start font-semibold hover:text-[#00B040]'
              key={label}
              href={href}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <p className='hidden lg:block font-medium text-white text-[8px] mt-5'>CarbonxCo© 2024 All Rights Reserved</p>
    </div>
  );

  const FooterAddress = (
    <div className='mt-10 md:mt-0'>
      <p className='font-semibold text-white text-[14px]'>INDONESIA OFFICE</p>
      <p className='mt-3 mb-6 font-medium text-white text-[12px]'>
        Treasury Tower, SCBD
        <br />
        Jl. Jenderal Sudirman
        <br />
        Jakarta, Indonesia, 12190
      </p>
      <a href='mailto:admin@carbonxco.com' className='flex flex-row flex-nowrap items-center gap-2'>
        <Email />
        <span className='font-medium text-xs text-white underline'>admin@carbonxco.com</span>
      </a>

      <div className='flex lg:hidden flex-row justify-start gap-4 mt-5'>
        <Link href='https://www.instagram.com/carbonx.id/' target='_blank'>
          <Instagram />
        </Link>
        <Link href='https://www.linkedin.com/company/carbonx-investments/' target='_blank'>
          <Linkedin />
        </Link>
      </div>
    </div>
  );

  return (
    <SectionWrapper padding='high' className='bg-[#13282D] lg:bg-transparent py-5 lg:py-14 relative'>
      <footer>
        <div className='hidden relative z-20 lg:flex justify-between items-start flex-col md:flex-row gap-x-2'>
          <div className='flex justify-between items-start gap-12 flex-col md:flex-row'>
            {FooterLogo}
            {FooterUrl}
          </div>
          {FooterAddress}
        </div>

        <div className='flex lg:hidden relative z-20 flex-col'>
          {FooterUrl}
          {FooterAddress}
          <div className='mt-10'>{FooterLogo}</div>
        </div>
        <Image
          className='z-10 hidden lg:block absolute top-0 left-0 object-cover'
          src='/assets/footer-bg.png'
          alt='carbonx footer'
          fill
        />
      </footer>
    </SectionWrapper>
  );
};
