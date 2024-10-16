'use client';

import React, { useState } from 'react';
import Sidebarbtn from './Sidebarbtn';
import { Settings, HandCoins, BriefcaseBusiness, ChartNoAxesCombined, DollarSign, BadgeDollarSign, LogOut } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '../../../@/components/ui/popover';
import { Button } from '../../../@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../../../@/components/ui/avatar';
import { MoreHorizontal, Menu, X } from 'lucide-react';
import Link from 'next/link';
import logo from "../../public/images/logo.png";
import Image from 'next/image';

export default function Dashnav() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <Button
                onClick={toggleSidebar}
                className="fixed top-20 left-4 z-50 p-2 bg-[#171A1F] rounded-full"
            >
                {isSidebarOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
            </Button>
            <aside className={`bg-[#171A1F] h-full w-[370px] max-w-xs fixed left-0 top-0 z-40 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="mt-32 flex flex-col gap-4 flex-grow">
                    <Sidebarbtn label="Portfolio" icon={BriefcaseBusiness} iconColor='#F4A460' />
                    <Sidebarbtn label="Assets" icon={HandCoins} />
                    <Sidebarbtn label="Analytics" icon={ChartNoAxesCombined} iconColor='#F08080' />
                    <Sidebarbtn label="Current Investment" icon={DollarSign} iconColor='#90EE90' />
                    <Sidebarbtn label="Recent Investment" icon={BadgeDollarSign} iconColor='#FFF700' />
                    <Sidebarbtn label="Settings" icon={Settings} iconColor='#71797E' />
                </div>
                <div className="absolute left-0 w-full p-3 bottom-3 text-white">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button className="flex gap-2 justify-start text-xl p-4 hover:bg-[#2D3136] hover:text-[#A4B3E4] border-0 transition-all duration-300 rounded-3xl pt-6 pb-6 pl-6 flex items-center w-full">
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex gap-4 items-center w-full '>
                                        <Avatar className='h-10 w-10'>
                                            <AvatarImage src="https://github.com/KBP09.png" />
                                            <AvatarFallback>Kanak B Pandey</AvatarFallback>
                                        </Avatar>
                                        <span className='text-white'>Kanak B Pandey</span>
                                    </div>
                                    <MoreHorizontal size={30} />
                                </div>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className='flex flex-col gap-4 flex-grow'>
                                <Link href='/'>
                                    <Sidebarbtn label="Account Settings" icon={Settings} iconColor='#71797E' />
                                </Link>
                                <Sidebarbtn label="Log Out" icon={LogOut} iconColor='#00FF00' />
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </aside>
        </>
    );
}
