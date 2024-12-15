import Image from 'next/image';
import React from 'react';
import Logo from '@/public/logo.svg';
import { Hamburger } from '../atoms/icons';

const Header = () => {
  return (
    <div className='bg-primary/500 px-2 py-4 flex items-center justify-between'>
      <div>
        <Image
          className='w-full'
          src={Logo}
          alt='logo'
          width={80}
          height={80}
        />
      </div>
      <Hamburger className='h-8' />
    </div>
  );
};

export default Header;
