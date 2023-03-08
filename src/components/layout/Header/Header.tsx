import React, { useEffect, useRef } from 'react';

import SocialsList from '@/components/block/SocialsList/SocialsList';
import Logo from '@/components/ui/Logo/Logo';

import Discord from '../../../../public/assets/icons/socials/discord.svg';
import Telegram from '../../../../public/assets/icons/socials/telegram.svg';
import Twitter from '../../../../public/assets/icons/socials/twitter.svg';
import Btn from '../../ui/Btn/Btn';
import styles from './Header.module.scss';

const socialsArray = [
  {
    element: <Twitter color="#697586" />,
    link: 'google.com',
  },
  {
    element: <Discord color="#697586" />,
    link: 'google.com',
  },
  {
    element: <Telegram color="#697586" />,
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
    <header ref={header} className={`${styles.header} container container_big`}>
      <div className={styles.header__inner}>
        {/* <SocialsList
          data-aos="fade-left"
          className={styles.header__socials}
          items={socialsArray}
        /> */}
        <div className={styles.header__logo} data-aos="fade-down">
          <Logo />
        </div>
        {/* <Btn className={styles.header__btn} variant="primary" href="https://google.com">
          Launch app
        </Btn> */}
      </div>
    </header>
  );
};

export default Header;
