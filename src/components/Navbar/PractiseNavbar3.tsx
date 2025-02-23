"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
const PractiseNavbar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-black text-white px-5 py-4 flex items-center justify-between w-full">
        <div className="">
          <h1 className="text-xl italic font-bold">
            <Link href="/">Logo</Link>
          </h1>
        </div>
        <div className="md:hidden flex">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`absolute left-0 top-14 md:static w-full h-[50%] md:w-full md:h-auto bg-black transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex md:justify-end py-5 md:py-0 px-5 md:px-0 md:flex-row flex-col gap-y-4 md:gap-y-0 md:gap-x-2">
            <li className="text-white rounded-md font-medium text-base px-4 py-2 hover:bg-white hover:text-black duration-300 ease-in-out transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white rounded-md font-medium text-base px-4 py-2 hover:bg-white hover:text-black duration-300 ease-in-out transition-all">
              <Link href="/">About</Link>
            </li>
            <li className="text-white rounded-md font-medium text-base px-4 py-2 hover:bg-white hover:text-black duration-300 ease-in-out transition-all">
              <Link href="/">Services</Link>
            </li>
            <li className="text-white rounded-md font-medium text-base px-4 py-2 hover:bg-white hover:text-black duration-300 ease-in-out transition-all">
              <Link href="/">Feedback</Link>
            </li>
            <li className="text-white rounded-md font-medium text-base px-4 py-2 hover:bg-white hover:text-black duration-300 ease-in-out transition-all">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default PractiseNavbar3;
