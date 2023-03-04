import Head from 'next/head';

import CardsSection from '@/components/CardsSection/CardsSection';
import Faq from '@/components/Faq/Faq';
import Hero from '@/components/Hero/Hero';
import TextContent from '@/components/TextContent/TextContent';

export default function terms() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <TextContent />
      </main>
    </>
  );
}
