'use client';

import Image from 'next/image';
import React from 'react';
import Logo from '@/public/logo.svg';
import { Hamburger } from '../atoms/icons';
import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className='bg-primary/500 px-4 md:px-8 py-5 flex items-center justify-between'>
      {/* logo */}
      <div className='flex text-white items-center gap-4'>
        <div>
          <Image
            className='w-full'
            src={Logo}
            alt='logo'
            width={80}
            height={80}
          />
        </div>
        <span className='uppercase text-xl font-bold'>4EVA Braids</span>
      </div>
      <div className='hidden md:flex gap-6 md:gap-8 items-center'>
        <nav>
          <ul className='flex items-center gap-3 md:gap-6'>
            {navItems.map((item) => (
              <li key={item.name} className='relative'>
                <Link
                  href={item.href}
                  className={`text-white ${
                    pathName.toLowerCase() === item.name.toLowerCase() ||
                    (pathName.toLowerCase() === '/' &&
                      item.name.toLowerCase() === 'home' &&
                      'after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0')
                  }  uppercase text-lg font-bold  py-1`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className='hidden md:flex bg-neutral-50 py-5 text-secondary/500 px-4 text-base  items-center uppercase'>
          login / register
        </Button>
      </div>
      <Hamburger className='h-6 md:hidden' />
    </div>
  );
};

export default Header;

type TNavItem = { name: string; href: string };

const navItems: TNavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
];
