import React, { useEffect, useRef, useState } from 'react';

import cardsData from '@/mock/cards.json';

import CardsItem from '../CardsItem/CardsItem';
import styles from './Cards.module.scss';

const Cards: React.FC = () => {
  const [globalState, setGlobalState] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [cardState, setCardState] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setGlobalState({ x: event.clientX, y: event.clientY });
    };
    const cardMouseMove = (event: React.MouseEvent) => {
      setCardState({
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      });
    };

    const elems = cardsWrapper.current?.childNodes;
    elems?.forEach((item) => item.addEventListener('mousemove', cardMouseMove));

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      elems?.forEach((item) => item.removeEventListener('mousemove', cardMouseMove));
    };
  }, []);

  const cardsWrapper = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.cards}>
      {cardsData.map((elem) => (
        <CardsItem {...elem} key={elem.title} x={globalState.x} y={globalState.y} />
      ))}
    </div>
  );
};

export default Cards;
