import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  const HEADER_NAV = [
    {
      href: '/about',
      label: 'ABOUT US',
    },
    {
      href: '/impact',
      label: 'IMPACT',
    },
    {
      href: '/news',
      label: 'NEWS & INSIGHTS',
    },
    {
      href: '/faq',
      label: 'F.A.Q',
    },
    {
      href: '/contact-us',
      label: 'CONTACT US',
    },
  ];

  return (
    <div className='flex justify-between items-center p-5 pt-10 px-20'>
      <Link href='/'>
        <Image alt='carbonxco' src='/assets/carbonxco-logo.svg' width='135' height='32' />
      </Link>
      <nav className='flex gap-5 items-center'>
        {HEADER_NAV.map(({ href, label }) => (
          <Link className='tracking-wider text-[14px] font-medium text-center' key={label} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
