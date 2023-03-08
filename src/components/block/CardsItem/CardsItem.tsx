import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import { AllianceNo2 } from '@/pages/_app';

import Btn from '../../ui/Btn/Btn';
import styles from './CardsItem.module.scss';

type Props = {
  title: string;
  desc: string;
  image?: string;
  imageMobile?: string;
  buttonText: string;
  x: number;
  y: number;
};

const CardsItem: React.FC<Props> = ({
  title,
  desc,
  image,
  imageMobile,
  buttonText,
  x,
  y,
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [cardCoord, setCardCoord] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    setCardCoord((prevState) => {
      if (cardRef.current !== null) {
        return {
          x: x - cardRef.current.getBoundingClientRect().left,
          y: y - cardRef.current.getBoundingClientRect().top,
        };
      }

      return prevState;
    });
  }, [x, y]);

  const cardStyles: React.CSSProperties = {
    '--mouse-x': `${cardCoord.x}px`,
    '--mouse-y': `${cardCoord.y}px`,
  } as React.CSSProperties;

  return (
    <div className={styles.card} style={cardStyles} ref={cardRef}>
      <div className={styles.card__inner}>
        <div className={styles.card__image}>
          {image && (
            <picture data-aos="fade-up">
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
            data-aos="fade-up"
            data-aos-delay="700"
          />
        </div>
        <div className={styles.card__text}>
          <h3 className={`${styles.card__title} ${AllianceNo2.className}`} data-aos>
            {title}
          </h3>
          <p className={styles.card__desc}>{desc}</p>
          <Btn
            variant="secondary"
            className={styles.card__btn}
            data-aos="zoom-in"
            disabled
            // href="https://google.com"
          >
            {buttonText}
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default CardsItem;
