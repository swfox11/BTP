"use client"
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target) &&
        buttonRef.current && !buttonRef.current.contains(target)) {
        setShowDropdown(false);
      }
      if (dropdownRef2.current && !dropdownRef2.current.contains(target) &&
        buttonRef2.current && !buttonRef2.current.contains(target)) {
        setShowDropdown2(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropdown(prev => !prev);
    setShowDropdown2(false);
  };

  const toggleDropdown2 = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropdown2(prev => !prev);
    setShowDropdown(false);
  };

  const closeAllDropdowns = () => {
    setShowDropdown(false);
    setShowDropdown2(false);
  };

  return (
    <nav className="bg-[#0f172a] text-white flex flex-col md:flex-row justify-between items-center md:h-16 p-2 shadow-2xl z-10">
      <div className="w-full flex justify-between items-center">
        {/* Logo - Now Acts as Home Button */}
        <Link
          href="/"
          className="flex gap-1 text-xl md:text-2xl items-center font-bold font-serif cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={closeAllDropdowns}
        >
          <img src="/favicon.gif" alt="logo" width={35} />
          <span>
            <span>Oceanic</span><span className="text-[#48bf91]">Edge</span>
          </span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white text-3xl hover:bg-opacity-70 p-2 rounded transition-all"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(prev => !prev);
          }}
        >
          ☰
        </button>

      </div>

      {/* Menu Items - Mobile and Desktop */}
      <div className={`flex flex-row gap-2 items-center justify-center ${menuOpen ? "mt-4 px-2" : "hidden md:flex"}`}>
        {/* Dropdown 1 - Department */}
        <div className="relative" ref={dropdownRef}>
          <button
            ref={buttonRef}
            onClick={toggleDropdown}
            className="w-[175px] border border-white text-white hover:text-[#48bf91] hover:border-[#48bf91] font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center justify-between"
          >
            Department (IIT KGP)
            <svg className="w-2.5 h-2.5 ms-0" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div
            className={`${showDropdown ? "block" : "hidden"} absolute left-0 top-[50px] md:left-auto bg-gray-800 text-white border border-gray-700 rounded-lg hover:bg-gray-900 shadow w-44 dark:bg-gray-900 z-50`}
          >
            <ul className="text-sm font-semibold py-2">
              {[
                { href: "/faculty", text: "Faculty" },
                { href: "/location", text: "Location" },
                { href: "/labfacilities", text: "Lab Facilities" },
                { href: "/events", text: "Events" },
                { href: "/visualgallery", text: "Visual Gallery" },
                { href: "/curriculum", text: "Curriculum" },
                { href: "/publications", text: "Publications" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 hover:text-[#48bf91]"
                    onClick={closeAllDropdowns}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dropdown 2 - Student Resources */}
        <div className="relative" ref={dropdownRef2}>
          <button
            ref={buttonRef2}
            onClick={toggleDropdown2}
            className="w-[175px] border border-white text-white hover:text-[#48bf91] hover:border-[#48bf91] font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center justify-between"
          >
            Student Resources
            <svg className="w-2.5 h-2.5 ms-0" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div
            className={`${showDropdown2 ? "block" : "hidden"} absolute left-0 top-[50px] md:left-auto bg-gray-800 text-white border border-gray-700 rounded-lg hover:bg-gray-900 shadow w-44 dark:bg-gray-900 z-50`}
          >
            <ul className="text-sm font-semibold py-2">
              {[
                { href: "/terminologies", text: "Terminologies" },
                { href: "/numericals", text: "Basic Calculations" },
                { href: "/fleet", text: "Global Fleet" },
                { href: "/softwares", text: "Engineering Software" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 hover:text-[#48bf91]"
                    onClick={closeAllDropdowns}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;