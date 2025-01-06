import React from 'react';
import Image from 'next/image';
import Logo from '@/public/logo2.svg';
import { InputOTPControlled } from '@/components/Molecules/InputOTP';
// import Link from 'next/link';

export default function VerificationPage() {
  return (
    <div className='h-screen max-md:w-screen overflow-x-hidden flex flex-col bg-white'>
      {/* Header */}
      <header className='p-4 flex justify-start'>
        <Image
          src={Logo}
          alt='4EVA BRAIDS'
          className='w-[204px] h-[40px] object-contain'
        />
      </header>

      {/* Body */}
      <div className='flex flex-1 items-center justify-center px-4 rounded-lg'>
        <div className='w-[58rem] max-w-full md:h-[35rem]  max-h-[calc(100%-4rem)] bg-white rounded-lg  shadow-[1px_-1px_10px_0px_#d5d1d1c9] flex flex-col justify-center items-center p-6 sm:p-8'>
          <p className='text-center text-gray-600 font-semibold mb-8 text-sm sm:text-base'>
            We&apos;ve sent you a verification code via email, please enter the
            code in the boxes below
          </p>

          <div className='flex justify-center space-x-2 sm:space-x-4'>
            <InputOTPControlled />
          </div>
          {/* <Link href='/verification1'>enter</Link> */}
        </div>
      </div>
    </div>
  );
}
