import React, { HTMLAttributes } from 'react';

import styles from '@/components/block/SocialsList/SocialsList.module.scss';

interface ISocialsList extends HTMLAttributes<HTMLDivElement> {
  items: {
    element: JSX.Element;
    link: string;
  }[];
}

const stylesList: React.FC<ISocialsList> = ({ items, className, ...props }) => {
  return (
    <div className={`${styles.socialsList} ${className}`} {...props}>
      {items.map((Element, index) => (
        <div className={styles.socialsItem} key={index}>
          <a
            href={Element.link}
            target="_blank"
            className={styles.socialsLink}
            rel="noreferrer"
          >
            {Element.element}
          </a>
        </div>
      ))}
    </div>
  );
};

export default stylesList;
