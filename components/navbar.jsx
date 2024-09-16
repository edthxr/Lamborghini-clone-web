"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-0 left-0 right-0 pt-[50px] pb-[90px] p-4 bg-black/20 text-white z-20 font-sans">
      <div className="max-w-screen-lg mx-auto px-8 flex items-center justify-between w-full relative">
        
        {/* Hamburger Menu Button */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Left Links Section (Desktop) */}
        <div className="hidden lg:flex space-x-6 relative z-10">
          <a href="#model" className="relative pb-2 hover:text-gray-400 hover:text-shadow">MODEL</a>
          <a href="#custom-solutions" className="relative pb-2 hover:text-gray-400 hover:text-shadow">CUSTOM SOLUTIONS</a>
          <a href="#motorsport" className="relative pb-2 hover:text-gray-400 hover:text-shadow">MOTORSPORT</a>
        </div>
        
        {/* Logo Section */}
        <div className="flex-shrink-0 relative z-10">
          <img
            src="/assets/image/image2.png"
            alt="Logo"
            className="h-8 transition-transform duration-300 hover:scale-150"
            style={{ transition: 'transform 0.3s ease' }}
          />
        </div>

        {/* Right Links Section (Desktop) */}
        <div className="hidden lg:flex space-x-6 relative z-10">
          <a href="#ownership" className="relative pb-2 hover:text-gray-400 hover:text-shadow">OWNERSHIP</a>
          <a href="#dealerships" className="relative pb-2 hover:text-gray-400 hover:text-shadow">DEALERSHIPS</a>
          <a href="#museum" className="relative pb-2 hover:text-gray-400 hover:text-shadow">MUSEUM</a>
          <a href="#store" className="relative pb-2 hover:text-gray-400 hover:text-shadow">STORE</a>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className={`lg:hidden fixed inset-0 bg-black/75 z-30 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center justify-center h-full">
            <a href="#model" className="text-white py-2 text-lg hover:text-gray-400 hover:text-shadow">MODEL</a>
            <a href="#custom-solutions" className="text-white py-2 text-lg hover:text-gray-400 hover:text-shadow">CUSTOM SOLUTIONS</a>
            <a href="#motorsport" className="text-white py-2 text-lg hover:text-gray-400 hover:text-shadow">MOTORSPORT</a>
            <a href="#ownership" className="text-white py-2 text-lg hover:text-gray-400 hover:text-shadow">OWNERSHIP</a>
            <a href="#dealerships" className="text-white py-2 text-lg hover:text-gray-400 hover:text-shadow">DEALERSHIPS</a>
            <a href="#museum" className="text-white py-2 text-lg hover:text-gray-400 hover:text-shadow">MUSEUM</a>
            <a href="#store" className="text-white py-2 text-lg hover:text-gray-400 hover:text-shadow">STORE</a>
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Underline */}
        <div className="absolute inset-x-0 bottom-2 hidden lg:block">
          <div className="relative flex">
            {/* Underline */}
            <div className="absolute inset-x-0 bottom-2 border-b border-white" style={{ left: 'calc(2.3% + 0.5rem)', right: 'calc(2.3% + 0.5rem)', transform: 'translateY(0.5rem)' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
