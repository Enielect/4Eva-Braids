import React from "react";
import Image from "next/image";
import Logo from '@/public/logo2.svg'

export default function VerificationPage() {
  return (
    <div className="h-screen w-screen flex flex-col bg-white">
      {/* Header */}
      <header className="p-4 flex justify-start">
        <Image
          src={Logo}
          alt="4EVA BRAIDS"
          className="w-[204px] h-[40px] object-contain"
        />
      </header>

      {/* Body */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-[960px] max-w-full h-[640px] max-h-[calc(100%-4rem)] bg-white rounded-lg shadow-2xl flex flex-col justify-center items-center p-6 sm:p-8">
          <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
            We’ve sent you a verification code via email, please enter the code
            in the boxes below
          </p>

          <div className="flex justify-center space-x-2 sm:space-x-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-[#E5E5E5] bg-gray-200 rounded-md text-lg text-black"
              >
                -
              </div>
            ))}
          </div>
          <a href="/verification1">enter</a>
        </div>
      </div>
    </div>
  );
}
