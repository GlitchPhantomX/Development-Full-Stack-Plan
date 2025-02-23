"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";

const PractiseDropdown1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-auto py-4 px-6 flex justify-start gap-x-4 md:justify-between items-center bg-black text-white">
        <div className="md:hidden flex">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="">
          <h1 className="text-xl font-extrabold italic">
            <Link href="/">Areesha</Link>
          </h1>
        </div>
        <div
          className={`absolute bg-black left-0 h-screen top-14 w-full sm:w-96 md:w-auto md:h-auto md:static transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex md:justify-center md:gap-x-6 md:items-center md:flex-row flex-col md:gap-y-0 gap-y-5 md:px-0 px-10 md:py-0 py-6">
            <li className="font-medium text-base hover:text-gray-300 hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="font-medium text-base hover:text-gray-300 hover:underline">
              <Link href="/">About</Link>
            </li>
            <li className="relative flex items-center">
              <button
                className="font-medium text-base hover:text-gray-300 hover:underline"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Feedback
              </button>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </li>
            <li className="font-medium text-base hover:text-gray-300 hover:underline">
              <Link href="/">Blog</Link>
            </li>
            <li className="font-medium text-base hover:text-gray-300 hover:underline">
              <Link href="/">Contact</Link>
            </li>

            <div
              className={`absolute bg-white w-48 h-auto md:left-28 md:top-11 top-36 rounded-md shadow-md transition-all duration-300 ${
                isDropdownOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 pointer-events-none scale-95"
              }`}
            >
              <ul className="py-2 px-2">
                <li className="text-gray-700 text-base font-medium hover:bg-gray-100 cursor-pointer px-2 py-2">
                  Feedback one
                </li>
                <li className="text-gray-700 text-base font-medium hover:bg-gray-100 cursor-pointer px-2 py-2">
                  Feedback Two
                </li>
                <li className="text-gray-700 text-base font-medium hover:bg-gray-100 cursor-pointer px-2 py-2">
                  Feedback Three
                </li>
                <li className="text-gray-700 text-base font-medium hover:bg-gray-100 cursor-pointer px-2 py-2">
                  Feedback Four
                </li>
              </ul>
            </div>
          </ul>

          <div className="flex px-12 gap-x-3 md:hidden flex-col gap-y-4 sm:flex-row ">
            <button className="bg-white text-gray-700 text-base font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
              Log in
            </button>
            <button className="bg-white text-gray-700 text-base font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
              Sign in
            </button>
          </div>
        </div>

        <div className="md:flex justify-center gap-x-3 hidden">
          <button className="bg-white text-gray-700 text-base font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
            Log in
          </button>
          <button className="bg-white text-gray-700 text-base font-medium px-4 py-2 hover:bg-gray-100 rounded-md">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
};

export default PractiseDropdown1;
