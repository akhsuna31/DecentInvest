import React from 'react'
import { Button } from '../../../@/components/ui/button'
import { LucideIcon, BriefcaseBusiness } from 'lucide-react'


export default function Sidebarbtn({ icon: Icon = BriefcaseBusiness, label = 'Portfolio', iconColor = '#636AE8'}) {

  return (
    <Button className="flex gap-2 justify-start text-xl p-4 hover:bg-[#2D3136] hover:text-[#A4B3E4] border-0 transition-all duration-300 rounded-3xl pt-6 pb-6 pl-6 flex items-center" >
        <Icon style={{ color: iconColor }} />
        <span className='text-white'>{label}</span>
    </Button>
  )
}
