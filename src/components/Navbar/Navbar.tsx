"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white flex justify-between px-7 py-4 items-center w-full relative">
      <div className="text-xl font-extrabold italic">
        <a href="#">Areesha</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Includes Links and Buttons) */}
      <div
        className={`absolute md:static top-16 left-0 w-full h-screen md:h-auto md:w-auto bg-black md:bg-transparent md:flex transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-x-12 py-6 md:py-0 px-6 md:px-0">
          <li className="hover:text-gray-200 hover:underline">
            <Link href="#">Home</Link>
          </li>
          <li className="hover:text-gray-200 hover:underline">
            <Link href="#">About</Link>
          </li>
          <li className="hover:text-gray-200 hover:underline">
            <Link href="#">Blog</Link>
          </li>
          <li className="hover:text-gray-200 hover:underline">
            <Link href="#">Contact</Link>
          </li>
        </ul>

        {/* Buttons for Mobile */}
        <div className="flex flex-col md:hidden gap-y-4 px-6">
          <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 text-sm font-semibold">
            Sign up
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 text-sm font-semibold">
            Sign in
          </button>
        </div>
      </div>

      {/* Buttons for Desktop */}
      <div className="hidden md:flex gap-x-4">
        <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 text-sm font-semibold">
          Sign up
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 text-sm font-semibold">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;