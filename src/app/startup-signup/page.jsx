'use client'
import React from 'react'
import Accountnav from '../components/Accountnav'
import { useRouter } from 'next/navigation';

export default function page() {
    const router = useRouter();
    const handleGoogleSignUp = () => {
        // Handle Google sign-up logic here
    };

    const handleEmailSignUp = (e) => {
        e.preventDefault();
        // Handle email sign-up logic here
    };
    return (
        <div className='bg-black min-h-screen flex items-center justify-center'>
            <Accountnav />
            <div className="lg:pr-48 lg:pl-48 xl:pr-80 xl:pl-80 w-full p-8 bg-black text-white rounded-lg mb-8 xl:ml-auto flex flex-col items-center">
                <button
                    className="text-sm mb-8 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mt-16"
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

                <h1 className="text-3xl font-semibold mb-4 text-center">Create Startup Account</h1>
                <p className="text-center mb-6 text-gray-400">
                    Already have an account?{' '}
                    <a href="/sign-in" className="text-blue-400 hover:underline">
                        Sign in
                    </a>
                </p>

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
                        type="text"
                        placeholder="Startup Name"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    />
                    <label className="block text-gray-400 mb-2" htmlFor="logo-upload">
                        Input Startup Logo (PNG)
                    </label>
                    <input
                        id="logo-upload"
                        type="file"
                        accept=".png"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="mt-4 w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Website URL"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    />
                    <textarea
                        placeholder="Mission Statement"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 max-h-32 overflow-auto"
                        required
                        rows={3} // Default height
                    />

                    {/* Elevator Pitch */}
                    <textarea
                        placeholder="Elevator Pitch (150-200 words)"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 max-h-40 overflow-auto"
                        required
                        rows={5} // Default height
                    />

                    {/* Industry/Category */}
                    <select
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    >
                        <option value="" disabled selected>
                            Select Industry/Category
                        </option>
                        <option>Fintech</option>
                        <option>Healthcare</option>
                        <option>AI</option>
                        <option>Education</option>
                        <option>E-commerce</option>
                        <option>Other</option>
                    </select>

                    {/* Products/Services Offered */}
                    <textarea
                        placeholder="Products/Services Offered"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 max-h-32 overflow-auto"
                        required
                        rows={3} // Default height
                    />

                    {/* Target Audience */}
                    <textarea
                        placeholder="Target Audience"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 max-h-32 overflow-auto"
                        required
                        rows={3} // Default height
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
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
                        className="w-full bg-[#636AE8] text-white py-3 rounded-lg font-bold transition-colors duration-300 hover:bg-[#4850E4] active:bg-[#2C35E0] mb-6"
                    >
                        Sign up
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
        </div>
    )
}

