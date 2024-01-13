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
    <div className='flex justify-between align-middle p-5 px-20'>
      <Link href='/'>
        <Image alt='carbonxco' src='/assets/carbonxco-logo.svg' width='135' height='32' />
      </Link>
      <nav className='flex gap-5'>
        {HEADER_NAV.map(({ href, label }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
