// components/Navbar.js
import { useState } from "react";

import { Download } from "lucide-react";

export default function Navbar() {

  const navMenuItems=[
    "About Us","Services","Testimonials"
  ]

  return (
    <nav className=" text-black border-b border-gray-400 md:mb-[5rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="ArunRaj" className="w-20" />
            <h1 className="text-2xl font-bold">ArunRaj</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navMenuItems.map((item, index) => {
              return (
                <span
                  key={index}
                  className="group text-black-500 transition-all duration-300 ease-in-out  cursor-pointer"
                >
                  <a href="#">
                    <span className="bg-left-bottom font-semibold md:text-lg bg-gradient-to-r from-indigo-700 to-indigo-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-base">
                      {item}
                    </span>
                  </a>
                </span>
              );
            })}

            <button className="px-4 py-2 rounded-lg bg-indigo-700 font-bold flex items-center gap-2 text-white tracking-widest  transform hover:scale-105 hover:bg-indigo-600 transition-colors duration-200">
              <Download size={20} /> Brochure
            </button>
          </div>

          {/* Mobile Menu Button */}
          
        </div>
      </div>

    
    </nav>
  );
}
