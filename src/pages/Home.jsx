'use client'
import React from 'react';
import { Archivo } from "next/font/google";

import Image from 'next/image';
import { WavyBackground } from '../components/ui/wave-background';
import { FlipWords } from '@components/components/ui/flipwords';
import facebook from '../../public/images/facebook.svg'
import twitter from '../../public/images/twitter.svg'
import youtube from '../../public/images/youtube.svg'
import linkedin from '../../public/images/linkedin.svg'
import { AppleCardsCarouselDemo } from '../components/Cards';

const archivo = Archivo({ subsets: ["latin"] });


export default function Home() {
  const testimonials = [
    {
      name: "Kenzie Edgar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
      imgSrc: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Stevie Tifft",
      text: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
      imgSrc: "https://i.pravatar.cc/100?img=2"
    },
    {
      name: "Tommie Ewart",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.",
      imgSrc: "https://i.pravatar.cc/100?img=3"
    },
    {
      name: "Charlie Howse",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.",
      imgSrc: "https://i.pravatar.cc/100?img=4"
    },
    {
      name: "Nevada Herbertson",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!",
      imgSrc: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Kris Stanton",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!",
      imgSrc: "https://i.pravatar.cc/100?img=6"
    }
  ];
  const words = ["Decently", "Decentrally"];
  return (

    <>
      {/* Main Section */}
      <WavyBackground className="relative w-screen min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 max-w-full overflow-hidden" id="Home">
        <h1 className="text-center font-archivo text-[40px] sm:text-[40px] md:text-[45px] lg:text-[45px] xl:text-[60px] leading-snug md:leading-snug xl:leading-normal font-bold text-white mb-4 px-6 lg:px-8 2xl:px-36">
          Invest
          <FlipWords words={words} />| <br /> Secure, transparent, and fair investments
        </h1>

        <p className="text-center font-inter text-[16px] sm:text-[18px] md:text-[20px] xl:text-[24px] leading-normal md:leading-relaxed xl:leading-relaxed text-white mb-4">
          Decentralized Investment Banking & Startup Listing Marketplace
        </p>

        <button className="mt-8 h-[52px] px-6 md:px-8 flex items-center justify-center font-inter text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white bg-[#636AE8] rounded-md transition-colors hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40">
          Get Started
        </button>
      </WavyBackground>


      {/* Secondary Section */}
      <div className="relative w-full bg-[#1D2128] py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center px-4 md:px-8" id="register">
        <h1 className="text-center font-archivo text-[30px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[48px] xl:leading-[68px] font-bold text-[#636AE8] mb-4 px-4 md:px-6 lg:px-8 xl:px-12">
          Register Your Startup Now!!
        </h1>
        <p className="text-center font-inter text-[16px] md:text-[18px] lg:text-[20px] xl:text-[18px] leading-[24px] md:leading-[28px] lg:leading-[32px] xl:leading-[28px] text-[#F3F4F6] mb-4 mt-2">
          Effortlessly navigate through our investment platform with these simple steps.
        </p>
        <button className="h-[52px] px-4 md:px-6 flex items-center justify-center font-inter text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white bg-[#636AE8] rounded-[6px] transition-colors duration-300 ease-in-out hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40 mt-4">
          Register
        </button>
      </div>

      {/* Third Section */}
      <div className="relative left-0 w-full min-h-screen bg-[#000000] rounded-none flex flex-col items-center" id="startups">

        <AppleCardsCarouselDemo />

      </div>

      <div className="w-full min-h-screen bg-black flex items-center justify-center mt-200" id="review">
        <div className="w-full bg-black px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-white">
                What people <br /> are saying
              </h1>
              <h3 className="text-xl mb-5 font-light text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>

            <div className="-mx-1 md:flex md:flex-wrap md:justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  className="px-1 md:w-1/3 mb-4 flex justify-center"
                  key={index}
                >
                  <div className="w-full max-w-sm mx-auto rounded-lg bg-white border border-gray-200 shadow-md p-5 text-gray-800">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                        <img
                          src={testimonial.imgSrc}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          {testimonial.name}
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        {testimonial.text}
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="relative w-full bg-[#1D2128] py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center px-4 md:px-8" >
        <h1 className="text-center font-archivo text-[30px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[48px] xl:leading-[68px] font-bold text-[#636AE8] mb-4 px-4 md:px-6 lg:px-8 xl:px-12">
          Empower Your Future
        </h1>
        <p className="text-center font-inter text-[16px] md:text-[18px] lg:text-[20px] xl:text-[18px] leading-[24px] md:leading-[28px] lg:leading-[32px] xl:leading-[28px] text-[#F3F4F6] mb-4 mt-2 px-6 lg:px-8 2xl:px-48">
          Join DecentInvest today and take the first step towards mastering your financial journey.
        </p>
        <button className="h-[52px] px-4 md:px-6 flex items-center justify-center font-inter text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white bg-[#636AE8] rounded-[6px] transition-colors duration-300 ease-in-out hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40 mt-4">
          Get Started
        </button>
      </div>

      <footer className="bg-[#171A1F] py-12" id="news">
        <div className="container mx-auto px-4 text-center">
          {/* Logo Section */}
          <div className="flex justify-center items-center mr-4">
            {/* You can replace this with your logo */}
            <Image width={70} height={60} src='/images/logo.png' className="h-16" alt="Flowbite Logo" />
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
    </>
  );
}

