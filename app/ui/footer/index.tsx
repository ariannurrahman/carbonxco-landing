import Image from 'next/image';
import Link from 'next/link';
import { HEADER_NAV } from '../constants';

export const Footer = () => {
  return (
    <footer className='bg-[#EDEDED] p-5 lg:py-14 lg:px-40'>
      <div className='flex justify-between items-start flex-col md:flex-row'>
        <div className='flex justify-between items-start gap-12 flex-col md:flex-row'>
          <div>
            <Link href='/'>
              <Image alt='carbonxco' src='/assets/carbonxco-logo.svg' width='135' height='32' />
            </Link>
            <p className='mt-[18px] mb-[26px] font-medium text-black text-[14x]'>
              Carbonxco is a carbon company leading
              <br /> the way in making impact through
              <br /> collaboration in the sustainable industry
            </p>
            <p className='font-medium text-black text-[8px]'>CarbonxCo© 2024 All Rights Reserved</p>
          </div>
          <div className='grid grid-cols-2 gap-y-5 gap-x-5'>
            {HEADER_NAV.map(({ href, label }) => {
              return (
                <Link className='tracking-wider text-[14px] text-start font-medium' key={label} href={href}>
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className='mt-10 md:mt-0'>
          <p className='font-semibold text-black text-[14x]'>INDONESIA OFFICE</p>
          <p className='mt-3 mb-6 font-medium text-black text-[12px]'>
            Treasury tower 7th Floor , <br />
            Suite 7JKL District 8, SCBD lot.28 <br />
            Jl. Jendral Sudirman Kav. 52-53 Jakarta 12190 - Indonesia
          </p>
          <p className='font-medium text-black text-[12px]'>
            <span className='w-6 mr-4'>Ph.</span> <span className='ml-4'>+62 21 27085488 / 27085081</span>
          </p>
          <p className='font-medium text-black text-[12px]'>
            <span className='w-6 mr-4'>Fax.</span> <span className='ml-4'>+62 21 27085391</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
