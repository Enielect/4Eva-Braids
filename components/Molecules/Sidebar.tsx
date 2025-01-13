import Link from 'next/link';
import React, { FC } from 'react';
import { navItems } from './Header';

type SidebarProp = {
  isOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Sidebar: FC<SidebarProp> = ({ isOpen, setNavOpen }) => {
  return (
    <div
      className={`fixed top-[74px] left-0 w-full flex flex-col gap-4 bg-white px-6 py-4 z-50 transform overflow-hidden transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {navItems.map((item) => (
        <Link
          onClick={() => setNavOpen(false)}
          href={item.href}
          key={item.name}
          className='flex items-center font-bold justify-end uppercase text-primary/500 gap-4'
        >
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
