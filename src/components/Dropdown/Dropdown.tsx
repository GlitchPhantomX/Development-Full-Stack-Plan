"use client";
import Link from "next/link";
import React, { useState } from "react";
import { X, Menu, ChevronDown } from "lucide-react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-black px-4 py-4 text-white flex justify-between items-center w-full relative">
        <div>
          <h1 className="text-xl italic font-bold">
            <Link href="/">Areesha</Link>
          </h1>
        </div>

        <div className="md:hidden flex">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`absolute md:static top-14 left-0 bg-black w-full md:w-auto h-screen md:h-auto transition-transform duration-300 md:bg-transparent ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-x-12 py-6 md:py-0 px-6 md:px-0">
            <li className="text-base font-semibold hover:text-gray-100 hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="text-base font-semibold hover:text-gray-100 hover:underline">
              <Link href="/">About</Link>
            </li>
            <li className="relative hover:underline">
              <button
                className="text-base font-semibold flex items-center gap-x-2 hover:text-gray-100 hover:underline"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Blog
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg transition-all duration-300 transform ${
                  isDropdownOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link href="/blog-1">Blog Post 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link href="/blog-2">Blog Post 2</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link href="/blog-3">Blog Post 3</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="text-base font-semibold hover:text-gray-100 hover:underline">
              <Link href="/">Contact</Link>
            </li>
          </ul>

          <div className="flex px-6 md:hidden flex-col gap-y-4">
            <button className="bg-white px-4 py-2 rounded-md text-black font-semibold text-base hover:bg-gray-100">
              Log in
            </button>
            <button className="bg-white px-4 py-2 rounded-md text-black font-semibold text-base hover:bg-gray-100">
              Sign up
            </button>
          </div>
        </div>

        <div className="md:flex justify-center items-center gap-x-3 hidden">
          <button className="bg-white px-4 py-2 rounded-md text-black font-semibold text-base hover:bg-gray-100">
            Log in
          </button>
          <button className="bg-white px-4 py-2 rounded-md text-black font-semibold text-base hover:bg-gray-100">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Dropdown;
