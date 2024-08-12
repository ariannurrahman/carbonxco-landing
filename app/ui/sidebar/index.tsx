'use client';

import { useState } from 'react';
import { SIDEBAR_NAV } from '../constants';
import Link from 'next/link';
import Image from 'next/image';

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const onCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className='block lg:hidden'>
        <button onClick={onOpenSidebar}>
          <Image src='/assets/menu-icon.svg' width={40} height={40} alt='menu' />
        </button>
      </div>
      {isSidebarOpen && (
        <aside className='bg-[#13282D] min-h-svh h-svh pt-10 px-5 fixed top-0 left-0 z-50 w-full transition-all'>
          <div className='flex justify-end w-full'>
            <button onClick={onCloseSidebar}>
              <Image src='/assets/close-icon.svg' alt='close' width={18} height={18} />
            </button>
          </div>
          <div className='flex flex-col gap-5 mt-20'>
            {SIDEBAR_NAV.map(({ href, label }) => {
              return (
                <Link
                  onClick={onCloseSidebar}
                  className='tracking-wider text-[20px] text-white font-medium text-left'
                  key={label}
                  href={href}
                >
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
