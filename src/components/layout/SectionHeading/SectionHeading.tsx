import React from 'react';

import { AllianceNo2 } from '@/pages/_app';

import styles from './SectionHeading.module.scss';

interface Props {
  title: string;
  desc?: string;
  variant?: string;
}

const SectionHeading: React.FC<Props> = (props) => {
  const { title, desc, variant } = props;
  return (
    <div className={`${styles.sectionHeading}`}>
      <h2
        data-aos="fade-up"
        className={`${
          variant === 'small'
            ? styles.sectionHeading__titleSmall
            : styles.sectionHeading__title
        }  ${AllianceNo2.className}`}
      >
        {title}
      </h2>
      {desc && (
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className={styles.sectionHeading__desc}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
