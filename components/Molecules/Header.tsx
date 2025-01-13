'use client';

import Image from 'next/image';
import React from 'react';
import Logo from '@/public/logo.svg';
import { DummyProfile, Hamburger, X } from '../atoms/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

const Header = ({ firstName }: { firstName: string }) => {
  const [navOpen, setNavOpen] = React.useState(false);
  const pathName = usePathname();

  return (
    <div className='bg-primary/500 px-4 md:px-8 py-5 flex items-center justify-between'>
      {/* logo */}
      <div className='flex text-white items-center gap-4'>
        <Link href='/'>
          <Image
            className='w-full'
            src={Logo}
            alt='logo'
            width={80}
            height={80}
          />
        </Link>
        <span className='max-sm:hidden text-xl font-bold'>4evabraids</span>
      </div>
      <div className='hidden md:flex gap-6 md:gap-8 items-center'>
        <nav>
          <ul className='flex items-center gap-3 md:gap-6'>
            {navItems.slice(0,-1).map((item) => (
              <li key={item.name} className='relative'>
                <Link
                  href={item.href}
                  className={`text-white ${
                    (pathName.toLowerCase() === `/${item.name.toLowerCase()}` ||
                      `${pathName.toLowerCase().split('/')[1]}` ===
                        item.name.toLowerCase() ||
                      (pathName.toLowerCase() === '/' &&
                        item.name.toLowerCase() === 'home')) &&
                    'after:content-[""] after:absolute after:w-full after:h-[3px] after:bg-white after:-bottom-1 after:left-0'
                  }  uppercase text-base font-bold py-1 `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {firstName?.length > 0 ? (
        <div className='flex items-center text-right'>
          <div className='flex justify-end items-center text-white sm:items-end flex-col'>
            <span className='md:text-right font-medium'>Hello</span>
            <span className='font-bold'>{firstName}</span>
          </div>

          <DummyProfile calssName='h-10 hidden sm:block' />
        </div>
      ) : (
        <Link
          href='/login'
          className='hidden md:flex rounded-md bg-neutral-50 py-2 text-secondary/500 px-5 text-base  items-center uppercase'
        >
          login / register
        </Link>
      )}
      <button onClick={() => setNavOpen(!navOpen)} className='md:hidden'>
        {navOpen ? <X /> : <Hamburger className='h-6 ' />}
      </button>
      <Sidebar isOpen={navOpen} setNavOpen={setNavOpen} />
    </div>
  );
};

export default Header;

type TNavItem = { name: string; href: string };

export const navItems: TNavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Login / Register', href: '/login' },
];
