import React from 'react';
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="absolute top-[65px] left-0 w-[100vw] h-[740px] bg-[#171A1F66] rounded-none flex flex-col items-center justify-center">
      <h1 className="w-[70vw] h-[168px] font-archivo text-[64px] leading-[84px] font-bold text-white text-center mb-4">
        Decentralized Investment Banking & startup listing Marketplace
      </h1>
      <p className="w-[70vw] h-[36px] font-inter text-[24px] leading-[36px] font-normal text-white text-center mb-4">
        Access simple, secure, and seamless investment opportunities today.
      </p>
      <button className="mt-8 h-[52px] px-[20px] flex items-center justify-center font-inter text-[18px] leading-[28px] font-normal text-white bg-[#636AE8] rounded-[6px] border-none transition-colors hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40">
        Get Started
      </button>
    </div>
  );
}
