import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import { Fraunces, Montserrat } from 'next/font/google';
import clsx from 'clsx';
import AuthorOverlay from '@/components/AuthorOverlay';
import '@/css/globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: '--font-fraunces',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Product preview card component',
  description:
    'Frontend Mentor challenge: Product Preview Card Component - Made by Afonso Pimenta',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang='en'
      className={clsx('h-full', fraunces.variable, montserrat.variable)}
    >
      <body className='relative h-full bg-cream'>
        {children}
        <AuthorOverlay position='top-right' />
      </body>
    </html>
  );
};

export default RootLayout;
