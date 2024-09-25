'use client'
import React from 'react'
import Accountnav from '../components/Accountnav'
import { useRouter } from 'next/navigation';
import mob from "../../public/images/signup1.png"
import con from "../../public/images/Container.png"
import textb from "../../public/images/Textbox.png"
import Image from 'next/image';

export default function Page() {
    const router = useRouter();

    const handleGoogleSignUp = () => {
        // Handle Google sign-up logic here
    };

    const handleEmailSignUp = (e) => {
        e.preventDefault();
        // Handle email sign-up logic here
    };

    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <Accountnav />
            <div className="w-full xl:max-w-2xl 2xl:max-w-3xl p-8 bg-black text-white rounded-lg mb-8 xl:ml-auto flex flex-col items-center">
                <button
                    className="text-sm mb-8 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    onClick={() => router.push('/')}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    <span>Back to Home</span>
                </button>

                <h1 className="text-3xl font-semibold mb-4 text-center">Create Account</h1>
                <p className="text-center mb-6 text-gray-400">
                    Already have an account?{' '}
                    <a href="/sign-in" className="text-blue-400 hover:underline">
                        Sign in
                    </a>
                </p>

                <button
                    onClick={handleGoogleSignUp}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg flex justify-center items-center font-bold transition-colors duration-300 hover:bg-blue-600 mb-6"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-5 w-5 mr-2"
                    >
                        <path
                            fill="#4285F4"
                            d="M24 9.5c2.38 0 4.53.84 6.23 2.23l4.66-4.66C31.35 4.16 27.89 3 24 3 14.74 3 7.16 9.61 5 18.35l5.98 4.67C12.45 16.23 17.78 12 24 12z"
                        />
                        <path
                            fill="#34A853"
                            d="M46.56 24.36c0-1.32-.11-2.56-.32-3.79H24v7.17h12.63c-.58 2.99-2.23 5.52-4.72 7.23l5.98 4.67C42.42 36.13 46.56 30.7 46.56 24.36z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M10.98 28.7c-.74-2.23-.74-4.62 0-6.85L5 17.18C3.18 21.01 3.18 26.99 5 30.82l5.98-4.67z"
                        />
                        <path
                            fill="#EA4335"
                            d="M24 46c4.05 0 7.49-1.34 10.01-3.64l-5.98-4.67c-1.66 1.11-3.78 1.74-6.03 1.74-5.94 0-10.97-4.01-12.77-9.53l-5.98 4.67C7.16 42.39 14.74 46 24 46z"
                        />
                    </svg>
                    Sign up with Google
                </button>

                <div className="flex items-center justify-center mb-6">
                    <hr className="border-gray-600 w-full" />
                    <span className="text-gray-400 mx-4">or</span>
                    <hr className="border-gray-600 w-full" />
                </div>

                <form onSubmit={handleEmailSignUp} className="w-full">
                    <div className="flex space-x-4 mb-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    />
                    <select
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    >
                        <option value="" disabled selected>
                            What kind of work do you do?
                        </option>
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>Product Manager</option>
                        <option>Other</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold transition-colors duration-300 hover:bg-blue-600 mb-6"
                    >
                        Sign up with email
                    </button>
                </form>

                <div className="flex items-start space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-500 rounded" />
                    <label className="text-gray-400 text-sm">
                        I agree to the{' '}
                        <a href="/terms" className="text-blue-400 hover:underline">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" className="text-blue-400 hover:underline">
                            Privacy Policy
                        </a>
                    </label>
                </div>

                <div className="flex items-start space-x-2 mt-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-500 rounded" />
                    <label className="text-gray-400 text-sm">Keep me updated via email</label>
                </div>
            </div>

            <div className="w-full h-full hidden lg:block">
                <Image
                    src={mob}
                    alt="Description of the image"
                    width={400}
                    height={300}
                    className="absolute top-0 right-72 max-w-[50%] lg:max-w-[300px] lg:right-56 xl:max-w-[500px] md:max-w-[200px]"
                />
                <Image
                    src={con}
                    alt="Description of the image"
                    width={150}
                    height={150}
                    className="absolute top-0 right-0 max-w-[50%] lg:max-w-[100px] xl:max-w-[150px] md:max-w-[50px]"
                />
                <Image
                    src={textb}
                    alt="Description of the image"
                    width={450}
                    height={400}
                    className="absolute bottom-0 right-72 max-w-[50%] lg:max-w-[300px] md:max-w-[200px]"
                />
            </div>
        </div>
    );
}
