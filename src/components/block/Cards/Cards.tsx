import React from 'react';

import cardsData from '@/mock/cards.json';

import CardsItem from '../CardsItem/CardsItem';
import styles from './Cards.module.scss';

const Cards = () => {
  return (
    <div className={styles.cards}>
      {cardsData.map((elem) => (
        <CardsItem {...elem} key={elem.title} />
      ))}
    </div>
  );
};

export default Cards;
