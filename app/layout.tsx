import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Advice Generator',
  description: 'Get a random advice to kickstart your day or night!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.className} bg-[--clr-dark-blue] `}>
        {children}
      </body>
    </html>
  );
}
