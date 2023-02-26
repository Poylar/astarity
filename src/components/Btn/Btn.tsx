import React from 'react';

import button from './Btn.module.scss';

type Props = {
  children: React.ReactNode;
  className: string;
  link: string;
  variant?: string;
};

const Btn = (props: Props) => {
  const { children, className, link, variant } = props;
  return (
    <a
      href={link}
      className={`${className} ${button.btn} ${
        variant == 'secondary' ? button.btn_secondary : button.btn_primary
      }`}
    >
      <span>{children}</span>
    </a>
  );
};

export default Btn;
