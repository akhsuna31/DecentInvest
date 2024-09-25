'use client'
import React from 'react'
import facebook from '../../public/images/facebook.svg'
import twitter from '../../public/images/twitter.svg'
import youtube from '../../public/images/youtube.svg'
import linkedin from '../../public/images/linkedin.svg'
import Image from 'next/image';
import logo from '../../public/images/logo.png'
export default function Footer() {
  return (
    <div>
      <footer className="bg-[#171A1F] py-12" id="news">
        <div className="container mx-auto px-4 text-center">
          {/* Logo Section */}
          <div className="flex justify-center items-center mr-4">
            {/* You can replace this with your logo */}
            <Image width={70} height={60} src={logo} className="h-16" alt="Flowbite Logo" />
            <h1 className="w-[240px] h-[48px] font-archivo text-4xl leading-[48px] font-bold text-white">
              DecentInvest
            </h1>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
            <form className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <input
                  type="email"
                  placeholder="📧 Input your email"
                  className="w-full px-4 py-3 text-black rounded-l-md focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#636AE8] text-white px-6 py-3 rounded-r-md hover:bg-[#4850E4] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 ">
            <div>
              <h4 className="text-white font-semibold mb-2">Product</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Resources</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
                <li><a href="#guides" className="hover:text-white">User guides</a></li>
                <li><a href="#webinars" className="hover:text-white">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#about" className="hover:text-white">About us</a></li>
                <li><a href="#contact" className="hover:text-white">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Plans & Pricing</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#personal" className="hover:text-white">Personal</a></li>
                <li><a href="#startup" className="hover:text-white">Start up</a></li>
                <li><a href="#organization" className="hover:text-white">Organization</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media and Legal Links */}
          <div className="flex flex-col md:flex-row justify-center items-center text-gray-400 text-sm">
            <div className="mb-4 md:mb-0 md:mr-56 lg:mr-56
            xl:mr-56">
              © 2024 Brand, Inc. • <a href="#privacy" className="hover:text-white">Privacy</a> • <a href="#terms" className="hover:text-white">Terms</a> • <a href="#sitemap" className="hover:text-white">Sitemap</a>
            </div>
            <div className="flex space-x-4">
              <a href="#twitter" className="text-gray-400 hover:text-white">
                <Image src={twitter} alt="Facebook" width={30} height={30} />
              </a>
              <a href="#facebook" className="text-gray-400 hover:text-white">
                <Image src={facebook} alt="Facebook" width={30} height={30} />
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-white">
                <Image src={linkedin} alt="Facebook" width={30} height={30} />
              </a>
              <a href="#youtube" className="text-gray-400 hover:text-white">
                <Image src={youtube} alt="Facebook" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
