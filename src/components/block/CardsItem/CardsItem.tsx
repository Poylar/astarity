import Image from 'next/image';
import React from 'react';

import { AllianceNo2 } from '@/pages/_app';

import Btn from '../../ui/Btn/Btn';
import styles from './CardsItem.module.scss';

type Props = {
  title: string;
  desc: string;
  image?: string;
  imageMobile?: string;
  buttonText: string;
};

const CardsItem: React.FC<Props> = (props) => {
  const { title, desc, image, imageMobile, buttonText } = props;

  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <div className={styles.card__image}>
          {image && (
            <picture>
              {imageMobile && <source srcSet={imageMobile} media="(max-width:768px)" />}
              <Image
                className={styles.card__imageContent}
                src={image}
                width={500}
                height={123}
                alt=""
              />
            </picture>
          )}
          <Image
            className={styles.card__imageGrid}
            width={500}
            height={180}
            src="/assets/cards/grid.svg"
            alt=""
          />
        </div>
        <div className={styles.card__text}>
          <h3 className={`${styles.card__title} ${AllianceNo2.className}`}>{title}</h3>
          <p className={styles.card__desc}>{desc}</p>
          <Btn variant="secondary" className={styles.card__btn} href="https://google.com">
            {buttonText}
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default CardsItem;