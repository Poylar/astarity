import React from 'react';

import Cards from '@/components/Cards/Cards';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

const sectionHeading = {
  title: 'Choose your side',
  desc: 'Astarity is essentially a lending marketplace: it connects users who want passive safe APY & leverage degens',
};

const CardsSection = () => {
  return (
    <section className="section container">
      <SectionHeading title={sectionHeading.title} desc={sectionHeading.desc} />
      <Cards />
    </section>
  );
};

export default CardsSection;
