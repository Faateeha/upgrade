import Log from '../assets/log.png'
import  { useState } from 'react'

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className=" py-4 px-[6rem]  w-full z-50">
            <div className="container mx-auto flex items-center justify-between">
                
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={Log} alt="logo" className="w-15 h-10" />
                </div>
                
                {/* Nav Links (Desktop) */}
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-300 hover:text-gray-900">Personal Loan</a>
                    <a href="#" className="text-gray-300 hover:text-gray-900">One card</a>
                    <a href="#" className="text-gray-300 hover:text-gray-900">Savings</a>
                    <a href="#" className="text-gray-300 hover:text-gray-900">Checkings</a>
                    <a href="#" className="text-gray-300 hover:text-gray-900">Help</a>
                </div>

                {/* Sign In Button (Desktop) */}
                <div className="hidden md:flex">
                    <button className="bg-transparent border border-gray-300 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-green-600">
                        Sign In
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-300 hover:text-gray-900 focus:outline-none"
                    >
                        {/* Icon for Mobile Menu */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isMobileMenuOpen && (
                <div className="md:hidden ">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <a href="#" className="text-gray-300 hover:text-gray-900">Personal Loan</a>
                        <a href="#" className="text-gray-300 hover:text-gray-900">One card</a>
                        <a href="#" className="text-gray-300 hover:text-gray-900">Savings</a>
                        <a href="#" className="text-gray-300 hover:text-gray-900">Checkings</a>
                        <a href="#" className="text-gray-300 hover:text-gray-900">Help</a>
                        <button className="bg-transparent border border-gray-300 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-green-600">
                            Sign In
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
