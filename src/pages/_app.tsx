import 'the-new-css-reset/css/reset.css';
import '@/styles/globals.scss';

import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

import Header from '@/components/Header/Header';

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
      path: '../fonts/AllianceNo1/AllianceNo1-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/AllianceNo1/AllianceNo1-Semibold.woff2',
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
      path: '../fonts/AllianceNo2/AllianceNo2-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/AllianceNo2/AllianceNo2-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={AllianceNo1.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
