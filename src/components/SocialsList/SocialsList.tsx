import React from 'react';

import socials from '@/components/SocialsList/SocialsList.module.scss';

interface Props {
  items: {
    element: JSX.Element;
    link: string;
  }[];
}

const SocialsList: React.FC<Props> = (props) => {
  const { items } = props;
  return (
    <div className={socials.socialsList}>
      {items.map((Element, index) => (
        <div className={socials.socialsItem} key={index}>
          <a
            href={Element.link}
            target="_blank"
            className={socials.socialsLink}
            rel="noreferrer"
          >
            {Element.element}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialsList;
