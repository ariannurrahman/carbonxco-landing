'use client';

import { useState } from 'react';
import { HEADER_NAV } from '../constants';
import Link from 'next/link';
import Image from 'next/image';

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onOpenSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className='block md:hidden'>
        <button onClick={onOpenSidebar}>
          <Image src='/assets/menu-icon.svg' width={40} height={40} alt='menu' />
        </button>
      </div>
      {isSidebarOpen && (
        <aside className='bg-white h-svh pt-10 px-5 fixed top-0 left-0 z-50'>
          <div className='flex flex-col gap-5'>
            {HEADER_NAV.map(({ href, label }) => {
              return (
                <Link className='tracking-wider text-[14px] font-medium text-center' key={label} href={href}>
                  {label}
                </Link>
              );
            })}
          </div>
        </aside>
      )}
    </>
  );
};
