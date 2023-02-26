import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogoSrc = '/assets/logo.svg';

const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoSrc} width={190} height={48} alt="Logo" />
    </Link>
  );
};

export default Logo;
