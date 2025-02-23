"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";
const PractiseDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <nav className="bg-black text-white px-5 py-4 flex md:justify-between justify-start gap-x-6 items-center w-full h-auto">
        <div className="md:hidden flex">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="">
          <h1 className="text-xl font-extrabold italic">
            <Link href="/">Areesha</Link>
          </h1>
        </div>
        <div
          className={`absolute top-14 left-0 md:static w-full sm:w-96 h-screen md:w-auto md:h-auto bg-black text-white transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex md:justify-center md:items-center md:gap-x-7 flex-col md:flex-row gap-y-5 px-10 py-6 md:py-0 md:px-0 md:gap-y-0">
            <li className="text-base font-medium hover:text-gray-200 hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="text-base font-medium hover:text-gray-200 hover:underline">
              <Link href="/">About</Link>
            </li>
            <li className="relative hover:underline flex gap-x-2 items-center">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-base font-medium hover:text-gray-200 hover:underline"
              >
                Blog
              </button>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
              <div
                className={`absolute left- top-8 w-48 bg-white px-3 text-black rounded-lg shadow-lg transition-all duration-300 transform ${
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
            <li className="text-base font-medium hover:text-gray-200 hover:underline">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <div className="flex px-9 gap-y-4 sm:flex-row gap-x-6 flex-col md:hidden">
            <button className="bg-white px-4 py-2 text-black text-base hover:bg-gray-100 font-medium rounded-md">
              Log in
            </button>
            <button className="bg-white px-4 py-2 text-black text-base hover:bg-gray-100 font-medium rounded-md">
              Sign in
            </button>
          </div>
        </div>
        <div className="md:flex justify-center items-center gap-x-3 hidden">
          <button className="bg-white px-4 py-2 text-black text-base hover:bg-gray-100 font-medium rounded-md">
            Log in
          </button>
          <button className="bg-white px-4 py-2 text-black text-base hover:bg-gray-100 font-medium rounded-md">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
};

export default PractiseDropdown;
