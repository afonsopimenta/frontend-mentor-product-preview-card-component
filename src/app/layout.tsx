import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import './globals.css';

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
    <html lang='en' className='h-full'>
      <body className='h-full'>{children}</body>
    </html>
  );
};

export default RootLayout;
