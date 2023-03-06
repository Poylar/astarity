import React, { useRef, useState } from 'react';

import { AllianceNo2 } from '@/pages/_app';

import Minus from '../../../../public/assets/icons/faq/minus.svg';
import Plus from '../../../../public/assets/icons/faq/plus.svg';
import styles from './Faq.module.scss';

interface IFaqItem {
  question: string;
  answer: string;
}

const FaqItem: React.FC<IFaqItem> = (props) => {
  const { question, answer } = props;
  const faqContent = useRef<HTMLDivElement>(null);
  const [faqState, setFaqState] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1); // Добавляем новый state для отслеживания активного элемента

  function toggleFaq(index: number) {
    // Принимаем индекс элемента в качестве аргумента
    setActiveIndex(index); // Устанавливаем активный индекс для нового элемента
    setFaqState((prev) => !prev);
  }

  const contentHeight = faqContent.current ? faqContent.current.offsetHeight : 0;

  return (
    <div
      className={`${styles.faqItem} ${faqState && styles.faqItem_opened}`}
      onClick={() => toggleFaq(activeIndex === -1 ? 0 : -1)} // Если ни один элемент не открыт, открываем данный элемент, иначе закрываем его и все остальные
    >
      <div
        className={`${styles.faqItem__inner} ${
          faqState ? styles.faqItem__inner_opened : null
        }`}
      >
        <div className={styles.faqItem__header}>
          <h4 className={`${styles.faqItem__title} ${AllianceNo2.className}`}>
            {question}
          </h4>
          {!faqState ? <Plus width={32} height={32} /> : <Minus width={32} height={32} />}
        </div>
        <div
          className={styles.faqItem__contentWrapper}
          style={
            faqState
              ? { height: `${contentHeight}px`, opacity: 1 }
              : { height: 0, opacity: 0 }
          }
        >
          <div ref={faqContent} className={styles.faqItem__content}>
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
