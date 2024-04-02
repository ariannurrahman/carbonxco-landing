import './style.scss';

import Image from 'next/image';
import Link from 'next/link';
import { HEADER_NAV } from '../constants';
import { Sidebar } from '../sidebar';

export const Header = () => {
  return (
    <div className='bg-white flex justify-between items-center h-[80px] p-3 md:p-5 md:pt-10 md:px-20'>
      <Link href='/'>
        <Image alt='carbonxco' src='/assets/carbonxco-logo.svg' width='135' height='32' />
      </Link>
      <nav>
        {/* Desktop */}
        <div className='hidden lg:flex gap-10 items-center'>
          {HEADER_NAV.map(({ href, label }) => (
            <Link className='tracking-wider text-[14px] font-medium text-center hover:text-[#00B040]' key={label} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <Sidebar />
      </nav>
    </div>
  );
};
