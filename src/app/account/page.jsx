'use client';
import React from 'react';
import Accountnav from '../components/Accountnav';
import { GridBeam } from '../components/ui/gridbeam';
import { useRouter } from 'next/navigation';

export default function Account() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/investors-signup'); // Replace '/account' with your actual account page route
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <Accountnav />
      <GridBeam className="sm:pl-16 pt-28 pl-4 flex items-center justify-center">
        <div className="grid gap-2 justify-items-center">
          <h1 className="z-40 font-archivo text-[40px] mb-4 sm:text-[48px] md:text-[64px] leading-snug md:leading-snug xl:leading-normal font-bold text-white text-center mb-8 px-4 sm:px-8 md:px-24 lg:px-32 xl:px-40">
            Create Your Account and Start Your Journey
          </h1>
          <div className="z-40 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button
              className="w-full sm:w-[271px] h-[52px] px-5 flex items-center justify-center font-inter text-[18px] leading-[28px] font-bold text-white bg-[#636AE8] transition-opacity duration-300 ease-in-out rounded-[6px] hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40"
              disabled={false}
              onClick={handleRegisterClick}
            >
              Investors Account
            </button>
            <button
              className="w-full sm:w-[271px] h-[52px] px-5 flex items-center justify-center font-inter text-[18px] leading-[28px] font-bold text-[#171A1F] bg-white transition-colors duration-300 ease-in-out rounded-[6px] hover:text-[#171A1F] hover:bg-[#DEE1E6] active:bg-[#BCC1CA] disabled:opacity-40"
              disabled={false}
            >
              Startup Account
            </button>
          </div>
        </div>
      </GridBeam>
    </div>
  );
}
