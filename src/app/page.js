'use client'
import React from 'react';
import { Archivo } from "next/font/google";

import { WavyBackground } from './components/ui/wave-background';
import { FlipWords } from './components/ui/flipwords';

import { AppleCardsCarouselDemo } from './components/Cards';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
const archivo = Archivo({ subsets: ["latin"] });


export default function Home() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/account'); // Replace '/account' with your actual account page route
  };

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
      <div className="bg-black min-h-screen">
        <Navbar />
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
        <div className="relative w-full bg-[#1D2128] h-[40vh] md:py-[60px] lg:py-[80px] flex flex-col items-center justify-center px-4 md:px-8" id="register">
          <h1 className="text-center font-archivo text-[30px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[48px] xl:leading-[68px] font-bold text-[#636AE8] mb-4 px-4 md:px-6 lg:px-8 xl:px-12">
            Register Your Startup Now!!
          </h1>
          <p className="text-center font-inter text-[16px] md:text-[18px] lg:text-[20px] xl:text-[18px] leading-[24px] md:leading-[28px] lg:leading-[32px] xl:leading-[28px] text-[#F3F4F6] mb-4 mt-2">
            Effortlessly navigate through our investment platform with these simple steps.
          </p>
          <button onClick={handleRegisterClick} className="h-[52px] px-4 md:px-6 flex items-center justify-center font-inter text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white bg-[#636AE8] rounded-[6px] transition-colors duration-300 ease-in-out hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40 mt-4">
            Register
          </button>
        </div>

        <AppleCardsCarouselDemo />
        
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
                          </span>
                          {testimonial.text}
                          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
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
      </div>
    </>
  );
}

