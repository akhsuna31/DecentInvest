import React from 'react';
import Sidebarbtn from './Sidebarbtn';
import { Settings, HandCoins, BriefcaseBusiness, ChartNoAxesCombined, DollarSign, BadgeDollarSign, LogOut } from 'lucide-react';
import { Separator } from '../../../@/components/ui/separator';
import { Popover } from '../../../@/components/ui/popover';
import { PopoverTrigger } from '../../../@/components/ui/popover';
import { Button } from '../../../@/components/ui/button';
import { Avatar } from '../../../@/components/ui/avatar';
import { AvatarImage } from '../../../@/components/ui/avatar';
import { AvatarFallback } from '../../../@/components/ui/avatar';
import { MoreHorizontal } from 'lucide-react';
import { PopoverContent } from '../../../@/components/ui/popover';
import Link from 'next/link';
import logo from "../../public/images/logo.png"
import Image from 'next/image';

export default function Dashnav() {
    return (
        <aside className='bg-[#171A1F] h-full w-[370px] max-w-xs fixed left-0 top-0 z-40  flex flex-col'>
            <div className='h-[64px] px-3 py-4 flex items-center'>
                <Image width={70} height={60} src={logo} className="h-16" alt="Flowbite Logo" />
                <h3 className='text-3xl text-white font-semibold'>DecentInvest</h3>
            </div>
            <div className="mt-5 flex flex-col gap-4 flex-grow">
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
    );
}
