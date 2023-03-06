import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { AllianceNo2 } from '@/pages/_app';

import Btn from '../../ui/Btn/Btn';
import styles from './CardsItem.module.scss';

interface Coords {
  x: number;
  y: number;
}

type Props = {
  title: string;
  desc: string;
  image?: string;
  imageMobile?: string;
  buttonText: string;
};

const CardsItem: React.FC<Props> = ({
  title,
  desc,
  image,
  imageMobile,
  buttonText,
}: Props) => {
  const [globalCoords, setGlobalMousePos] = useState<Coords>({ x: 0, y: 0 });
  const [localCoords, setLocalMousePos] = useState<Coords>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // 👇 Get mouse position relative to element
    const localX = event.clientX - event.currentTarget.offsetLeft;
    const localY = event.clientY - event.currentTarget.offsetTop;

    setLocalMousePos({ x: localX, y: localY });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setGlobalMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cardStyles: React.CSSProperties = {
    '--mouse-x': localCoords.x + 'px',
    '--mouse-y': localCoords.y + 'px',
  } as React.CSSProperties;

  return (
    <div
      className={styles.card}
      onMouseMove={handleMouseMove}
      data-x={`${localCoords.x} ${localCoords.y}`}
      data-y={`${globalCoords.x} ${globalCoords.y}`}
      style={cardStyles}
    >
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
            href="https://google.com"
          >
            {buttonText}
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default CardsItem;
