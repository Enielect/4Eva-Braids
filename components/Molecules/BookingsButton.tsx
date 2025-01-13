'use client';
import React from 'react';
import { useState } from 'react';
import { Instagram, Whatsapp } from './Footer';
import { X } from 'lucide-react';
import Link from 'next/link';
import { ClickStatMarker } from '@/app/action/bookings';

const BookingsButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={`transition-all duration-300 delay-[6000ms] ${
          show ? 'flex font-bold flex-col' : 'hidden'
        } gap-5 fixed z-40 bottom-[6rem] max-sm:right-5 sm:right-10 md:right-12`}
      >
        <Button
          onClick={() => ClickStatMarker('W')}
          href='https://wa.me/2347062453170'
          className='bg-green-600 flex text-white items-center gap-3 uppercase'
        >
          <span className='pt-1'> whatsapp </span>
          <Whatsapp size='!h-6' />
        </Button>
        <Button
          onClick={() => ClickStatMarker('G')}
          href='https://www.instagram.com/4evabraids/'
          className='bg-red-500 flex text-white items-center gap-3 uppercase'
        >
          <span className='pt-1'> Instagram </span>
          <Instagram size='!h-6' />
        </Button>
      </div>
      <Book show={show} onClick={() => setShow(!show)} />
    </>
  );
};

export default BookingsButton;

type ButtonProp = {
  children?: React.ReactNode;
  className?: string;
  show?: boolean;
} & React.LinkHTMLAttributes<HTMLButtonElement>;

type LinkProp = {
  children?: React.ReactNode;
  className?: string;
  href: string;
} & React.LinkHTMLAttributes<HTMLAnchorElement>;

function Button(props: LinkProp) {
  return (
    <Link
      target='_blank'
      {...props}
      href={props.href}
      className={`px-5 py-2 rounded-full ${props.className}`}
    >
      {props.children}
    </Link>
  );
}

function Book(props: ButtonProp) {
  return (
    <button
      onClick={props.onClick}
      className={`transition-all duration-300 min-w-[145px] ${
        props.show ? 'bg-white' : 'bg-[#EF4444]'
      } flex items-center text-lg px-5 py-3 font-bold rounded-full z-50 fixed bottom-5 right-5 sm:right-10  md:right-12 text-white`}
    >
      {!props.show ? (
        <span className='flex w-full'>
          BOOK VIA{' '}
          <span className='ml-3'>
            <svg
              width='30'
              height='30'
              className='h-6'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M25.9993 4.00024V10.0002M25.9993 4.00024H19.9993M25.9993 4.00024L17.9993 12.0002M21.9993 28.0002C10.9536 28.0002 1.99927 19.0459 1.99927 8.00024V5.00024C1.99927 3.34339 3.34241 2.00024 4.99927 2.00024H6.8281C7.5164 2.00024 8.11638 2.46869 8.28332 3.13644L9.75771 9.03402C9.90408 9.61952 9.68531 10.2357 9.2025 10.5978L7.47767 11.8914C6.97708 12.2669 6.75572 12.9162 6.97095 13.5038C8.58614 17.9131 12.0865 21.4134 16.4957 23.0286C17.0833 23.2438 17.7326 23.0224 18.1081 22.5218L19.4017 20.797C19.7638 20.3142 20.38 20.0954 20.9655 20.2418L26.8631 21.7162C27.5308 21.8831 27.9993 22.4831 27.9993 23.1714V25.0002C27.9993 26.6571 26.6561 28.0002 24.9993 28.0002H21.9993Z'
                stroke='white'
                strokeWidth='2.49997'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
        </span>
      ) : (
        <span className='flex w-full gap-2 justify-center items-center'>
          {/* <X className='stroke-black  fill-black' />
           */}
          <X className='text-black' />
          <span className=' text-black'> Cancel</span>
        </span>
      )}
    </button>
  );
}
