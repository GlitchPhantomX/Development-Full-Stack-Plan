"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
const PractiseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
     <div className="">
      <nav className='bg-black text-white flex justify-between items-center px-4 py-4 w-full'>
<div className="text-xl italic font-bold">
  <h1>
    <a href="/">Areesha</a>
  </h1>
</div>

<div className="md:hidden flex">
  <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
{isOpen ?   <X size={24}/> : <Menu size={24}/> }
  </button>
</div>

<div className={`absolute md:static top-14 left-0 w-full h-screen md:h-auto md:w-auto bg-black md:bg-transparent md:flex transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}>
<ul className='flex flex-col md:flex-row md:items-center gap-6 md:gap-x-12 py-6 md:py-0 px-6 md:px-0'>
  <li className='text-[16px] hover:text-gray-200 hover:underline font-semibold'>
    <Link href="/">Home</Link>
  </li>
  <li className='text-[16px] hover:text-gray-200 hover:underline font-semibold'>
    <Link href="/">About</Link>
  </li>
  <li className='text-[16px] hover:text-gray-200 hover:underline font-semibold'>
    <Link href="/">Blog</Link>
  </li>
  <li className='text-[16px] hover:text-gray-200 hover:underline font-semibold'>
    <Link href="/">Contact</Link>
  </li>
</ul>
<div className="flex md:hidden justify-center gap-y-4 py-1 flex-col px-8">
<button className='bg-white px-4 py-2 text-sm text-black font-semibold rounded-md hover:bg-gray-100'>
Log in
</button>
<button className='bg-white px-4 py-2 text-sm text-black font-semibold rounded-md hover:bg-gray-100'>
Sign up
</button>
</div>
</div>
<div className="md:flex justify-center gap-x-4 py-1 hidden">
<button className='bg-white px-4 py-2 text-sm text-black font-semibold rounded-md hover:bg-gray-100'>
Log in
</button>
<button className='bg-white px-4 py-2 text-sm text-black font-semibold rounded-md hover:bg-gray-100'>
Sign up
</button>
</div>
      </nav>
      </div> 
    </>
  )
}

export default PractiseNavbar
