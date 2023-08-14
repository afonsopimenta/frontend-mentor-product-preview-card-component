import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import { Fraunces, Montserrat } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

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
  title: 'Product Preview Card Component',
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
      <body className='h-full bg-cream'>{children}</body>
    </html>
  );
};

export default RootLayout;
