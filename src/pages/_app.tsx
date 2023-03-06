import 'the-new-css-reset/css/reset.css';
import '@/styles/globals.scss';
import 'aos/dist/aos.css';

import AOS from 'aos';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { useEffect } from 'react';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';

export const AllianceNo1 = localFont({
  src: [
    {
      path: '../fonts/AllianceNo1/AllianceNo1-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/AllianceNo1/AllianceNo1-Regular.woff2',
      weight: '400',
      style: 'normal',
    },

    {
      path: '../fonts/AllianceNo1/AllianceNo1-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/AllianceNo1/AllianceNo1-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/AllianceNo1/AllianceNo1-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/AllianceNo1/AllianceNo1-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  fallback: ['Helvetica', 'ui-sans-serif'],
});

export const AllianceNo2 = localFont({
  src: [
    {
      path: '../fonts/AllianceNo2/AllianceNo2-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/AllianceNo2/AllianceNo2-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/AllianceNo2/AllianceNo2-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/AllianceNo2/AllianceNo2-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className={AllianceNo1.className}>
      <style jsx global>{`
        :root {
          --font-primary: ${AllianceNo1.style.fontFamily};
          --font-secondary: ${AllianceNo2.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
