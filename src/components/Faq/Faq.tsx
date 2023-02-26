import React from 'react';

import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Faq.module.scss';
import FaqItem from './FaqItem';

const faqItems = [
  {
    question: 'What is Astarity?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi vero excepturi consectetur, earum asperiores ut tempora sapiente corrupti dignissimos molestiae vitae facilis veritatis ipsa id voluptate neque recusandae omnis.',
  },
  {
    question: 'How to use the dApp protocol?',
    answer:
      'To use the dApp Astarity, you need to install a compatible cryptocurrency wallet, connect it to Astarity, browse available features, complete transactions by confirming them in your wallet, and monitor your activity for safety and security.',
  },
  {
    question: 'Who able to provide liquidity to protocol?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi vero excepturi consectetur, earum asperiores ut tempora sapiente corrupti dignissimos molestiae vitae facilis veritatis ipsa id voluptate neque recusandae omnis.',
  },
  {
    question: 'How to borrow ASTR to start?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi vero excepturi consectetur, earum asperiores ut tempora sapiente corrupti dignissimos molestiae vitae facilis veritatis ipsa id voluptate neque recusandae omnis.',
  },
  {
    question: 'Where is my money, Igor?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi vero excepturi consectetur, earum asperiores ut tempora sapiente corrupti dignissimos molestiae vitae facilis veritatis ipsa id voluptate neque recusandae omnis.',
  },
];

const Faq: React.FC = () => {
  return (
    <section className="section section_l container">
      <SectionHeading title="Frequently Asked Questions" variant="small" />
      <div className={styles.faq}>
        {faqItems.map((elem) => (
          <FaqItem {...elem} key={elem.question} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
