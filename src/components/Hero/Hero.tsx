import React, { useEffect, useRef, useState } from 'react';

import { AllianceNo1, AllianceNo2 } from '../../pages/_app';
import Stars from '../Stars/Stars';
import styles from './Hero.module.scss';

const Hero = () => {
  const [deg, setDeg] = useState<number>(0);
  const requestRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const rotate = () => {
      setDeg((prev) => {
        const newDeg = prev + 1;
        return newDeg > 360 ? 0 : newDeg;
      });
      requestRef.current = requestAnimationFrame(rotate);
    };
    if (requestRef.current === undefined) {
      requestRef.current = requestAnimationFrame(rotate);
    }
    return () => {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const degStyle = { '--deg': `${deg}deg` } as React.CSSProperties;
  return (
    <section className={`section ${styles.sectionHero}`}>
      <Stars />
      <div className="container">
        <div className={styles.hero}>
          <h1
            className={`${AllianceNo2.className} ${styles.hero__title}`}
            data-aos="fade-down"
          >
            Astar native leverage protocol for DeFi
          </h1>
          <p
            className={`${AllianceNo1.className} ${styles.hero__desc}`}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Your boundless possibilities to{' '}
            <span className={styles.hero__gradientText}> earn</span>
          </p>
          <button
            className={styles.hero__btn}
            style={degStyle}
            disabled
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <span>Coming soon</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
