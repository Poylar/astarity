import React, { useEffect, useRef } from 'react';

import { drawStars } from './drawStar';
import styles from './Stars.module.scss';

/* typescript-disable */
const Stars: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvas.current !== null) {
      drawStars(canvas.current);
    }
  }, [canvas]);
  return <canvas ref={canvas} className={styles.canvas} id="stars"></canvas>;
};

export default Stars;
