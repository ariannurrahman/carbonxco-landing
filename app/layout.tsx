import '@/app/ui/globals.css';

import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { Header } from './ui/header';
import { Footer } from './ui/footer';
import { montserrat } from './ui/fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.carbonxco.com/'),
  title: {
    template: '%s | Carbonxco',
    default: 'Carbonxco',
  },
  description:
    'Join CarbonX in empowering communities through quality carbon projects by leveraging climate technology solutions, for a more sustainable future.',
  openGraph: {
    title: 'Carbonxco',
    description:
      'Join CarbonX in empowering communities through quality carbon projects by leveraging climate technology solutions, for a more sustainable future.',
    url: 'https://www.carbonxco.com/',
    type: 'website',
    images: [
      {
        url: 'https://www.carbonxco.com/carbonxco-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Carbonxco open graph image',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <meta name='google-site-verification' content='V4-jqIYjS8SUgmCC_to9shf6Xzgp_-9ayVk7YSzKS-E' />
      <body className={`${montserrat.className} antialiased`}>
        <NextTopLoader showSpinner={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
