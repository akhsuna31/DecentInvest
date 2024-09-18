import React from 'react';
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Main Section */}
      <div className="relative w-full h-[90vh] bg-[#171A1F66] flex flex-col items-center justify-center">
        <h1 className="w-[70vw] font-archivo xl:text-[64px] leading-[84px] font-bold text-white text-center mb-4 lg:text-[50px] md:text-[45px] sm:text-[45px]">
          Decentralized Investment Banking & startup listing Marketplace
        </h1>
        <p className="w-[70vw] font-inter text-[24px] leading-[36px] text-white text-center mb-4">
          Access simple, secure, and seamless investment opportunities today.
        </p>
        <button className="mt-8 h-[52px] px-[20px] flex items-center justify-center font-inter text-[18px] leading-[28px] text-white bg-[#636AE8] rounded-[6px] transition-colors hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40">
          Get Started
        </button>
      </div>

      {/* Secondary Section */}
      <div className="relative w-full h-[350px] bg-[#1D2128] py-[100px] flex flex-col items-center">
        <h1 className="w-[70vw] font-archivo text-[48px] leading-[68px] font-bold text-[#636AE8] text-center">
          How It Works
        </h1>
        <p className="absolute top-[180px] w-[912px] font-inter text-[18px] leading-[28px] font-normal text-[#F3F4F6] text-center">
          Effortlessly navigate through our investment platform with these simple steps.
        </p>
        <button
          className="absolute top-[228px] h-[52px] px-[20px] flex items-center justify-center font-inter text-[18px] leading-[28px] font-normal text-white bg-[#636AE8] rounded-[6px] transition-colors duration-300 ease-in-out hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40"
          disabled
        >
          Button Text
        </button>
      </div>
    </>
  );
}
