import React from 'react';

import faqData from '@/mock/faq.json';

import SectionHeading from '../../layout/SectionHeading/SectionHeading';
import styles from './Faq.module.scss';
import FaqItem from './FaqItem';

const Faq: React.FC = () => {
  return (
    <section className="section section_l container">
      <SectionHeading title="Frequently Asked Questions" variant="small" />
      <div className={styles.faq}>
        {faqData.map((elem) => (
          <FaqItem {...elem} key={elem.question} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
