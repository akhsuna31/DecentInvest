import React from 'react';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className='absolute top-0 left-0 w-[100vw] h-[65px] bg-[#171A1F] rounded-none shadow-sm shadow-[#171a1f]'>
            <div className='flex items-center h-full px-6'>
                <Image
                    src='/images/logo.png'
                    alt="Logo"
                    width={65}
                    height={65}
                    className='rounded-none'
                />
                <h1 className='ml-1 font-archivo text-[28px] leading-[42px] font-bold text-[#FFFFFF]'>
                    DecentInvest
                </h1>
            </div>
            <div className='absolute top-[0px] left-[320px] w-[351px] h-[65px] flex items-center'>
                <a href="#" className='px-[15px] py-[12px] flex items-center justify-center text-[#636AE8] bg-[#171A1F] rounded-[6px] cursor-pointer whitespace-nowrap font-bold relative'>
                    Features
                    <div className='absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#636AE8] rounded-[2px]'></div>
                </a>
                <a href="#" className='px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7] bg-[#171A1F] rounded-[6px] cursor-pointer whitespace-nowrap'>
                    Docs
                </a>
                <a href="#" className='px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7] bg-[#171A1F] rounded-[6px] cursor-pointer whitespace-nowrap'>
                    Pricing
                </a>
                <a href="#" className='px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7] bg-[#171A1F] rounded-[6px] cursor-pointer whitespace-nowrap'>
                    About us
                </a>
                <a href="#" className='px-[15px] py-[12px] flex items-center justify-center text-[#A7ADB7] bg-[#171A1F] rounded-[6px] cursor-pointer whitespace-nowrap'>
                    Blog
                </a>
            </div>
            <button className='absolute right-8 top-[10px] w-[170px] h-[46px] px-[12px] flex items-center justify-center font-inter text-[16px] leading-[22px] font-normal text-[#FFFFFFFF] bg-[#636AE8] border-none rounded-[8px] opacity-100 hover:text-[#FFFFFF] hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40'>
                    Get Started
                </button>
        </nav>
    );
}
