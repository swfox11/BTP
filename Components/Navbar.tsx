"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const [showdropdown, setshowdropdown] = useState(false)
  const [showdropdown2, setshowdropdown2] = useState(false)

  const pathname = usePathname();

  return (
    <nav className='bg-black text-white flex flex-col justify-between items-center md:h-16 md:flex-row px-3'>

      <div className='flex gap-16 justify-center items-center'>

        <div className='flex gap-1 text-2xl items-center justify-center'>
          <img src="/favicon.gif" alt="logo" width={35} />
          <span className='font-bold font-serif'><span>Oceanic</span><span className="text-[#48bf91]">Edge</span></span>
        </div>

        <div className="flex gap-8 font-bold text-lg items-center justify-center">
          
          {/* <Link className={pathname === '/' ? 'active' : ''} href="/">Home</Link> */}
          <Link className="hover:text-[#48bf91]" href="/">Home</Link>
          {/* <Link className={pathname === '/about' ? 'active' : ''} href="/about">About</Link> */}
          {/* <Link className="hover:text-[#48bf91]" href="#about">About</Link> */}
          <Link
            href="#about"
            className="hover:text-[#48bf91]"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              const aboutSection = document.querySelector("#about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            About
          </Link>

        </div>

      </div>


      <div className="flex gap-3 items-center justify-center">

        {/* onBlur={() => { setTimeout(() => { setshowdropdown(false) }, 100) }} */}
        <div>
          <button onClick={() => { setshowdropdown(!showdropdown) }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Department (IIT KGP)<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          {/* Dropdown menu  */}
          <div id="dropdown" className={`${showdropdown ? "" : "hidden"} absolute right-[213px] top-[60px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/faculty" onClick={() => { setshowdropdown(!showdropdown) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white"  >Faculty</Link>
              </li>


              {/* <Link href="/faculty" className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Faculty</Link> */}


              <li>
                <Link href="/location" onClick={() => { setshowdropdown(!showdropdown) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Location</Link>
              </li>
              <li>
                <Link href="/lab" onClick={() => { setshowdropdown(!showdropdown) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Lab Facilities</Link>
              </li>
              <li>
                <Link href="/events" onClick={() => { setshowdropdown(!showdropdown) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Events</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* onBlur={() => { setTimeout(() => { setshowdropdown2(false) }, 100) }} */}
        <div>
          <button onClick={() => { setshowdropdown2(!showdropdown2) }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Student Resources<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          {/* Dropdown menu  */}
          <div id="dropdown" className={`${showdropdown2 ? "" : "hidden"} absolute right-[14px] top-[60px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/terminology" onClick={() => { setshowdropdown2(!showdropdown2) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Terminologies</Link>
              </li>
              <li>
                <Link href="/numericals" onClick={() => { setshowdropdown2(!showdropdown2) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Basic Calculations</Link>
              </li>
              <li>
                <Link href="/fleet" onClick={() => { setshowdropdown2(!showdropdown2) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Global Fleet 2024</Link>
              </li>
              <li>
                <Link href="/publication" onClick={() => { setshowdropdown2(!showdropdown2) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Publications</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar