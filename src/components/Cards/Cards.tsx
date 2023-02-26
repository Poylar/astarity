import React from 'react';

import CardsItem from '../CardsItem/CardsItem';
import styles from './Cards.module.scss';

const cardsData = [
  {
    title: 'Liquidity providers',
    desc: 'For passive liquidity providers who don’t want to actively manage their positions and simply want to get APY rewards in the same asset.',
    image: '/assets/cards/1.svg',
    buttonText: 'Provide liquidity',
  },
  {
    title: 'Leverage farmers',
    desc: 'For leverage users who actively degen in top farms, manage their own risks, and are very active in DeFi.',
    image: '/assets/cards/2.svg',
    buttonText: 'Farm with leverage',
  },
];

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
