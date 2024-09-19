'use client'
import React from 'react';
import { Archivo } from "next/font/google";
import { HoverEffect } from '@components/components/ui/card-hover-effect';

const archivo = Archivo({ subsets: ["latin"] });

// Define or import the projects data
const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "",
  },
];

export default function Home() {
  return (
    <>
      {/* Main Section */}
      <div className="relative h-[90vh] bg-[#171A1F66] flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="text-center font-archivo text-[40px] md:text-[45px] sm:leading-[50px] lg:text-[50px] xl:text-[64px] leading-[50px] md:leading-[40px] lg:leading-[48px] xl:leading-[84px] font-bold text-white mb-4 px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-48">
          Decentralized Investment Banking & startup listing Marketplace
        </h1>
        <p className="text-center font-inter text-[18px] md:text-[20px] lg:text-[20px] xl:text-[24px] leading-[24px] md:leading-[28px] lg:leading-[32px] xl:leading-[36px] text-white mb-2">
          Access simple, secure, and seamless investment opportunities today.
        </p>
        <button className="mt-8 h-[52px] px-4 md:px-6 flex items-center justify-center font-inter text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white bg-[#636AE8] rounded-[6px] transition-colors hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40">
          Get Started
        </button>
      </div>

      {/* Secondary Section */}
      <div className="relative w-full bg-[#1D2128] py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center px-4 md:px-8">
        <h1 className="text-center font-archivo text-[40px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[48px] xl:leading-[68px] font-bold text-[#636AE8] mb-4 px-4 md:px-6 lg:px-8 xl:px-12">
          How It Works
        </h1>
        <p className="text-center font-inter text-[16px] md:text-[18px] lg:text-[20px] xl:text-[18px] leading-[24px] md:leading-[28px] lg:leading-[32px] xl:leading-[28px] text-[#F3F4F6] mb-4 mt-2">
          Effortlessly navigate through our investment platform with these simple steps.
        </p>
        <button className="h-[52px] px-4 md:px-6 flex items-center justify-center font-inter text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white bg-[#636AE8] rounded-[6px] transition-colors duration-300 ease-in-out hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40 mt-4">
          See all tutorials
        </button>
      </div>

      {/* Third Section */}
      <div className="relative left-0 w-[100vw] h-[1000px] bg-[#000000] rounded-none flex flex-col items-center justify-center">
        <h1 className="text-[40px] leading-[56px] font-bold text-[#FFFFFFFF] font-archivo text-center mb-4">
          Startup Discovery
        </h1>
        <p className="text-[16px] leading-[26px] font-normal text-[#F3F4F6] font-inter text-center">
          Explore and invest in promising startups with unique NFTs.
        </p>
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
