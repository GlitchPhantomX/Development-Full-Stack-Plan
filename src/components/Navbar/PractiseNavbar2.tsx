"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
const PractiseNavbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-slate-800 text-white px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="italic font-bold text-xl">
            <Link href="/">Areesha</Link>
          </h1>
        </div>
        <div className="md:hidden flex">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`absolute left-0 top-14 md:static w-full h-screen md:h-auto bg-slate-800 duration-300 transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex md:justify-center md:items-center py-5 md:py-0 gap-y-4 md:gap-y-0 px-9 md:px-0 md:gap-x-12 md:flex-row flex-col">
            <li className="text-base font-semibold hover:text-gray-100 hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="text-base font-semibold hover:text-gray-100 hover:underline">
              <Link href="/">About</Link>
            </li>
            <li className="text-base font-semibold hover:text-gray-100 hover:underline">
              <Link href="/">Blog</Link>
            </li>
            <li className="text-base font-semibold hover:text-gray-100 hover:underline">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <div className="md:hidden flex w-full flex-col gap-x-4 px-10 gap-y-4">
            <button className="bg-white text-base px-4 py-2 text-black rounded-md hover:bg-gray-200 font-semibold">
              Log in
            </button>
            <button className="bg-white text-black rounded-md hover:bg-gray-200 text-base px-4 py-2 font-semibold">
              Sign in
            </button>
          </div>
        </div>
        <div className="md:flex hidden gap-x-4 w-auto">
          <button className="bg-white text-base px-4 py-2 text-black rounded-md hover:bg-gray-200 font-semibold whitespace-nowrap">
            Log in
          </button>
          <button className="bg-white text-black rounded-md hover:bg-gray-200 text-base px-4 py-2 font-semibold whitespace-nowrap">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
};

export default PractiseNavbar2;