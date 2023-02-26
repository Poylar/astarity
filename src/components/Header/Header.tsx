import React, { useEffect, useRef } from 'react';

import Logo from '@/components/Logo/Logo';

import Discord from '../../../public/assets/icons/socials/discord.svg';
import Telegram from '../../../public/assets/icons/socials/telegram.svg';
import Twitter from '../../../public/assets/icons/socials/twitter.svg';
import Btn from '../Btn/Btn';
import SocialsList from '../SocialsList/SocialsList';
import styles from './Header.module.scss';

const socialsArray = [
  {
    element: <Twitter color="#fff" />,
    link: 'google.com',
  },
  {
    element: <Discord color="#fff" />,
    link: 'google.com',
  },
  {
    element: <Telegram color="#fff" />,
    link: 'google.com',
  },
];

const Header: React.FC = () => {
  const header = useRef<HTMLHeadingElement>(null);
  console.log(header.current?.offsetHeight);
  const calcHeaderHeight = () => {
    console.log(header.current?.offsetHeight);
    document.documentElement.style.setProperty(
      '--header-height',
      `${header.current?.offsetHeight}px`,
    );
  };

  useEffect(() => {
    if (document.readyState === 'complete') {
      calcHeaderHeight();
    } else {
      window.addEventListener('load', calcHeaderHeight);
      return () => window.removeEventListener('load', calcHeaderHeight);
    }
  }, []);

  return (
    <header ref={header} className={`${styles.header} container container--big`}>
      <div className={styles.header__inner}>
        <SocialsList items={socialsArray} />
        <div className={styles.header__logo}>
          <Logo />
        </div>
        <Btn className={styles.header__btn} link="google.com">
          Launch app
        </Btn>
      </div>
    </header>
  );
};

export default Header;
