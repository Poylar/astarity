import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import styles from './Btn.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary';
  };

const Btn: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...rest
}) => {
  const isLink = rest.href !== undefined;
  const Component = isLink ? 'a' : 'button';

  return (
    <Component
      className={`${styles.btn} ${styles[`btn_${variant}`]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Btn;
