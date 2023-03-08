import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import SocialsList from '@/components/block/SocialsList/SocialsList';

import Discord from '../../../../public/assets/icons/socials/discord.svg';
import Twitter from '../../../../public/assets/icons/socials/twitter.svg';
import styles from './Footer.module.scss';

const LogoSrc = '/assets/logo-small.svg';

interface FooterNavItem {
  title: string;
  href: string;
}

const footerNav: FooterNavItem[] = [
  {
    title: 'Terms of use',
    href: '/terms',
  },
  {
    title: 'Privacy policy',
    href: '/terms',
  },
  {
    title: 'Blog',
    href: '/terms',
  },
  {
    title: 'Docs',
    href: '/terms',
  },
  {
    title: 'Audit',
    href: '/terms',
  },
];

const socialsArray = [
  {
    element: <Twitter color="#697586" />,
    link: 'google.com',
  },
  {
    element: <Discord color="#697586" />,
    link: 'google.com',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <Image src={LogoSrc} width={32} height={32} alt="Logo" />
            </Link>
          </div>
          <nav className={styles.footerNav}>
            <ul className={styles.footerNav__list}>
              {footerNav.map(({ title, href }) => (
                <li className={styles.footerNav__item} key={title}>
                  <Link className={styles.footerNav__link} href={href}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.class}></div>
        <SocialsList items={socialsArray} />
      </div>
    </footer>
  );
};

export default Footer;
