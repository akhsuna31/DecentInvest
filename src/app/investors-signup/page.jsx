'use client'
import React from 'react'
import Accountnav from '../components/Accountnav'
import { SignupFormDemo } from '../components/inevestorform'
import { GlobeDemo } from '../components/Globedemo'

export default function page() {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center">
            <Accountnav />
            <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="w-full lg:w-1/2">
                    <SignupFormDemo />
                </div>
                {/* Hide GlobeDemo on smaller screens and limit its size */}
                <div className="hidden lg:flex lg:w-1/2 lg:justify-end">
                    <GlobeDemo />
                </div>
            </div>
        </div>
    )
}
