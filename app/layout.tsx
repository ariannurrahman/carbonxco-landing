import '@/app/ui/globals.css';

import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { Header } from './ui/header';
import { Footer } from './ui/footer';
import { montserrat } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Carbonxco Landing',
    default: 'Carbonxco',
  },
  description: 'Carbonxco',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased`}>
        <NextTopLoader showSpinner={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
