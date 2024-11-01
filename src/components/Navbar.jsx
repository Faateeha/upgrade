import Log from '../assets/log.png'
import  { useState } from 'react'

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="py-4 md:px-6 w-full z-50 ">
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
    
          {/* Mobile Sidebar Menu */}
          <div className={`fixed inset-y-0 right-0 w-64 bg-green-600 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-gray-900 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
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
    
          {/* Overlay for Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-30"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          )}
        </nav>
      );
}
