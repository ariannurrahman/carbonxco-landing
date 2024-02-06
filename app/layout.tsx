import '@/app/ui/globals.css';

import { Metadata } from 'next';

import { Header } from './ui/header';
import { Footer } from './ui/footer';
import { montserrat } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Carbonxco Landing',
    default: 'Carbonxco',
  },
  description: 'Carbonxco',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const recaptchKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
