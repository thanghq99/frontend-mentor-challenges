import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google';

const bellefair = Bellefair({
  weight: '400',
  variable: '--next-bellefair',
  subsets: ['latin'],
});

const barlow = Barlow({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // or ['100 900'] if the font has full range
  variable: '--next-barlow',
  subsets: ['latin'],
});

const barlowCondensed = Barlow_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // or ['100 900'] if the font has full range
  variable: '--next-barlow-condensed',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Space Tourism',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}
      >
        <main>
          <div className='relative text-white'>
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
