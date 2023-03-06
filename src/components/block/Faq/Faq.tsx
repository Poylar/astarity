import React, { useState } from 'react';

import faqData from '@/mock/faq.json';

import SectionHeading from '../../layout/SectionHeading/SectionHeading';
import styles from './Faq.module.scss';
import FaqItem from './FaqItem';

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <section className="section section_l container">
      <SectionHeading title="Frequently Asked Questions" variant="small" />
      <div className={styles.faq} data-aos="fade-right">
        {faqData.map((elem, index) => (
          <FaqItem
            {...elem}
            setActiveIndex={setActiveIndex}
            isActive={index === activeIndex}
            index={index}
            key={elem.question}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
