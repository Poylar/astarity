import React, { HTMLAttributes, useId, useRef } from 'react';

import { AllianceNo2 } from '@/pages/_app';

import Minus from '../../../../public/assets/icons/faq/minus.svg';
import Plus from '../../../../public/assets/icons/faq/plus.svg';
import styles from './Faq.module.scss';

interface IFaqItem extends HTMLAttributes<HTMLDivElement> {
  question: string;
  answer: string;
  isActive: boolean;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}

const FaqItem: React.FC<IFaqItem> = ({
  question,
  answer,
  className,
  index,
  isActive,
  setActiveIndex,
  ...props
}) => {
  const faqContent = useRef<HTMLDivElement>(null);

  const uniqId = useId();
  function toggleFaq() {
    setActiveIndex(isActive ? -1 : index);
  }

  const contentHeight = faqContent.current ? faqContent.current.offsetHeight : 0;

  return (
    <div
      className={`${styles.faqItem} ${isActive && styles.faqItem_opened} ${className}`}
      {...props}
    >
      <button
        type="button"
        className={`${styles.faqItem__inner} ${
          isActive ? styles.faqItem__inner_opened : null
        }`}
        onClick={() => toggleFaq()}
        aria-expanded={isActive}
        aria-controls={uniqId}
      >
        <div className={styles.faqItem__header}>
          <h4 className={`${styles.faqItem__title} ${AllianceNo2.className}`}>
            {question}
          </h4>
          {!isActive ? <Plus width={32} height={32} /> : <Minus width={32} height={32} />}
        </div>
        <div
          className={styles.faqItem__contentWrapper}
          style={
            isActive
              ? { height: `${contentHeight}px`, opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          aria-labelledby={uniqId}
        >
          <div ref={faqContent} className={styles.faqItem__content}>
            {answer}
          </div>
        </div>
      </button>
    </div>
  );
};

export default FaqItem;
