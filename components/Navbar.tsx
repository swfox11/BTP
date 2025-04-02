// "use client"
// import Link from 'next/link'
// import React from 'react'
// import { useState } from 'react'
// // import { usePathname } from 'next/navigation';

// const Navbar = () => {

//   const [showdropdown, setshowdropdown] = useState(false)
//   const [showdropdown2, setshowdropdown2] = useState(false)

//   // const pathname = usePathname();

//   return (
//     <nav className='bg-gray-900 text-white flex flex-col justify-between items-center md:h-16 md:flex-row px-3 shadow-2xl z-10'>

//       <div className='flex gap-16 justify-center items-center'>

//         <div className='flex gap-1 text-2xl items-center justify-center'>
//           <img src="/favicon.gif" alt="logo" width={35} />
//           <span className='font-bold font-serif'><span>Oceanic</span><span className="text-[#48bf91]">Edge</span></span>
//         </div>

//         <div className="flex gap-8 font-bold text-lg items-center justify-center">
          
//           {/* <Link className={pathname === '/' ? 'active' : ''} href="/">Home</Link> */}
//           <Link className="hover:text-[#48bf91]" href="/">Home</Link>
//           {/* <Link className={pathname === '/about' ? 'active' : ''} href="/about">About</Link> */}
//           {/* <Link className="hover:text-[#48bf91]" href="#about">About</Link> */}
//           <Link
//             href="#about"
//             className="hover:text-[#48bf91]"
//             onClick={(e) => {
//               e.preventDefault(); // Prevent default anchor behavior
//               const aboutSection = document.querySelector("#about");
//               if (aboutSection) {
//                 aboutSection.scrollIntoView({ behavior: "smooth" });
//               }
//             }}
//           >
//             About
//           </Link>

//         </div>

//       </div>


//       <div className="flex gap-3 items-center justify-center">

//         {/* onBlur={() => { setTimeout(() => { setshowdropdown(false) }, 100) }} */}
//         <div>
//           <button onClick={() => { setshowdropdown(!showdropdown) }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Department (IIT KGP)<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//           </svg>
//           </button>

//           {/* Dropdown menu  */}
//           <div id="dropdown" className={`${showdropdown ? "" : "hidden"} absolute right-[213px] top-[60px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-50`}>
//             <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
//               <li>
//                 <Link href="/faculty" onClick={() => { setshowdropdown(!showdropdown) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white"  >Faculty</Link>
//               </li>


//               {/* <Link href="/faculty" className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Faculty</Link> */}


//               <li>
//                 <Link href="/location" onClick={() => { setshowdropdown(!showdropdown) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Location</Link>
//               </li>
//               <li>
//                 <Link href="/lab" onClick={() => { setshowdropdown(!showdropdown) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Lab Facilities</Link>
//               </li>
//               <li>
//                 <Link href="/events" onClick={() => { setshowdropdown(!showdropdown) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Events</Link>
//               </li>
//               <li>
//                 <Link href="/visualgallery" onClick={() => { setshowdropdown(!showdropdown) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Visual Gallery</Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* onBlur={() => { setTimeout(() => { setshowdropdown2(false) }, 100) }} */}
//         <div>
//           <button onClick={() => { setshowdropdown2(!showdropdown2) }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Student Resources<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//           </svg>
//           </button>

//           {/* Dropdown menu  */}
//           <div id="dropdown" className={`${showdropdown2 ? "" : "hidden"} absolute right-[14px] top-[60px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-50`}>
//             <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
//               <li>
//                 <Link href="/terminologies" onClick={() => { setshowdropdown2(!showdropdown2) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Terminologies</Link>
//               </li>
//               <li>
//                 <Link href="/numericals" onClick={() => { setshowdropdown2(!showdropdown2) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Basic Calculations</Link>
//               </li>
//               <li>
//                 <Link href="/fleet" onClick={() => { setshowdropdown2(!showdropdown2) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Global Fleet 2024</Link>
//               </li>
//               <li>
//                 <Link href="/publication" onClick={() => { setshowdropdown2(!showdropdown2) }} className="block px-4 py-2 hover:bg-[#48bf91] dark:hover:bg-gray-600 dark:hover:text-white">Publications</Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//       </div>

//     </nav>
//   )
// }

// export default Navbar



// "use client"
// import Link from 'next/link'
// import React, { useState } from 'react'

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showDropdown2, setShowDropdown2] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // **Added state for mobile menu toggle**

//   return (
//     <nav className="bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center md:h-16 p-2 shadow-2xl z-10">

//       <div className="w-full flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex gap-1 text-xl md:text-2xl items-center">
//           <img src="/favicon.gif" alt="logo" width={35} />
//           <span className="font-bold font-serif">
//             <span>Oceanic</span><span className="text-[#48bf91]">Edge</span>
//           </span>
//         </div>

//         {/* **Hamburger Menu for Mobile** */}
//         <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
//       </div>

//       {/* **Menu Items - Mobile and Desktop** */}
//       {/* <div className={`w-full md:flex-row md:items-center md:justify-center md:gap-8 font-bold text-lg ${menuOpen ? "flex flex-col items-center gap-4 mt-4" : "hidden md:flex"}`}>
//         <Link className="hover:text-[#48bf91]" href="/">Home</Link>
//         <Link href="#about" className="hover:text-[#48bf91]" onClick={(e) => {
//           e.preventDefault();
//           document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
//         }}>About</Link>
//       </div> */}

//       {/* **Dropdown Buttons - Positioned Properly** */}
//       <div className={`flex flex-row gap-1 items-center justify-center ${menuOpen ? "mt-4 px-2" : "hidden md:flex"}`}>
      

//         {/* **Dropdown 1 - Department** */}
//         <div className="relative">
//         <button 
//             onClick={() => setShowDropdown(!showDropdown)} 
//             className="w-[175px] text-white bg-blue-700 hover:bg-blue-800 font-small md:font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center justify-between"> {}
//             Department (IIT KGP)
//             <svg className="w-2.5 h-2.5 ms-0" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
//           </button>

//           <div className={`${showDropdown ? "block" : "hidden"} absolute left-0 md:left-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-50`}>
//             <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
//               <li><Link href="/faculty" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-[#48bf91]">Faculty</Link></li>
//               <li><Link href="/location" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-[#48bf91]">Location</Link></li>
//               <li><Link href="/lab" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-[#48bf91]">Lab Facilities</Link></li>
//               <li><Link href="/events" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-[#48bf91]">Events</Link></li>
//               <li><Link href="/visualgallery" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-[#48bf91]">Visual Gallery</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* **Dropdown 2 - Student Resources** */}
//         <div className="relative">
//           <button 
//             onClick={() => setShowDropdown2(!showDropdown2)} 
//             className="w-[175px] text-white bg-blue-700 hover:bg-blue-800 font small md:font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center justify-between"> {/* **Increased width to 175px and used justify-between** */}
//             Student Resources
//             <svg className="w-2.5 h-2.5 ms-0" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
//           </button>

//           <div className={`${showDropdown2 ? "block" : "hidden"} absolute left-0 md:left-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-50`}>
//             <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
//               <li><Link href="/terminologies" onClick={() => setShowDropdown2(false)} className="block px-4 py-2 hover:bg-[#48bf91]">Terminologies</Link></li>
//               <li><Link href="/numericals" onClick={() => setShowDropdown2(false)} className="block px-4 py-2 hover:bg-[#48bf91]">Basic Calculations</Link></li>
//               <li><Link href="/fleet" onClick={() => setShowDropdown2(false)} className="block px-4 py-2 hover:bg-[#48bf91]">Global Fleet 2024</Link></li>
//               <li><Link href="/publication" onClick={() => setShowDropdown2(false)} className="block px-4 py-2 hover:bg-[#48bf91]">Publications</Link></li>
//             </ul>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// "use client"
// import Link from 'next/link'
// import React, { useState } from 'react'

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showDropdown2, setShowDropdown2] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); 

//   return (
//     <nav className="bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center md:h-16 p-2 shadow-2xl z-10">

//       <div className="w-full flex justify-between items-center">
//         {/* Logo - Now Acts as Home Button */}
//         <Link href="/" className="flex gap-1 text-xl md:text-2xl items-center font-bold font-serif cursor-pointer transition-transform duration-200 hover:scale-105">
//           <img src="/favicon.gif" alt="logo" width={35} />
//           <span>
//             <span>Oceanic</span><span className="text-[#48bf91]">Edge</span>
//           </span>
//         </Link>

//         {/* Hamburger Menu for Mobile */}
//         <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
//       </div>

//       {/* Menu Items - Mobile and Desktop */}
//       <div className={`flex flex-row gap-1 items-center justify-center ${menuOpen ? "mt-4 px-2" : "hidden md:flex"}`}>
//         {/* Dropdown 1 - Department */}
//         <div className="relative">
//           <button 
//             onClick={() => setShowDropdown(!showDropdown)} 
//             className="w-[175px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center justify-between">
//             Department (IIT KGP)
//             <svg className="w-2.5 h-2.5 ms-0" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
//           </button>
//           <div className={`${showDropdown ? "block" : "hidden"} absolute left-0 md:left-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-50`}>
//             <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
//               <li><Link href="/faculty" className="block px-4 py-2 hover:bg-[#48bf91]">Faculty</Link></li>
//               <li><Link href="/location" className="block px-4 py-2 hover:bg-[#48bf91]">Location</Link></li>
//               <li><Link href="/lab" className="block px-4 py-2 hover:bg-[#48bf91]">Lab Facilities</Link></li>
//               <li><Link href="/events" className="block px-4 py-2 hover:bg-[#48bf91]">Events</Link></li>
//               <li><Link href="/visualgallery" className="block px-4 py-2 hover:bg-[#48bf91]">Visual Gallery</Link></li>
//               <li><Link href="/curriculum" className="block px-4 py-2 hover:bg-[#48bf91]">Curriculum</Link></li>
//               <li><Link href="/publication" className="block px-4 py-2 hover:bg-[#48bf91]">Publications</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* Dropdown 2 - Student Resources */}
//         <div className="relative">
//           <button 
//             onClick={() => setShowDropdown2(!showDropdown2)} 
//             className="w-[175px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center justify-between">
//             Student Resources
//             <svg className="w-2.5 h-2.5 ms-0" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
//           </button>
//           <div className={`${showDropdown2 ? "block" : "hidden"} absolute left-0 md:left-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-50`}>
//             <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
//               <li><Link href="/terminologies" className="block px-4 py-2 hover:bg-[#48bf91]">Terminologies</Link></li>
//               <li><Link href="/numericals" className="block px-4 py-2 hover:bg-[#48bf91]">Basic Calculations</Link></li>
//               <li><Link href="/fleet" className="block px-4 py-2 hover:bg-[#48bf91]">Global Fleet 2024</Link></li>
//             </ul>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;




// "use client"
// import Link from 'next/link'
// import React, { useState } from 'react'

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showDropdown2, setShowDropdown2] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); 

//   return (
//     <nav className="bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center md:h-16 p-2 shadow-2xl z-10">

//       <div className="w-full flex justify-between items-center">
//         {/* Logo - Now Acts as Home Button */}
//         <Link href="/" className="flex gap-1 text-xl md:text-2xl items-center font-bold font-serif cursor-pointer transition-transform duration-200 hover:scale-105">
//           <img src="/favicon.gif" alt="logo" width={35} />
//           <span>
//             <span>Oceanic</span><span className="text-[#48bf91]">Edge</span>
//           </span>
//         </Link>

//         {/* Hamburger Menu for Mobile */}
//         <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
//       </div>

//       {/* Menu Items - Mobile and Desktop */}
//       <div className={`flex flex-row gap-1 items-center justify-center ${menuOpen ? "mt-4 px-2" : "hidden md:flex"}`}>
//         {/* Dropdown 1 - Department */}
//         <div className="relative">
//           <button 
//             onClick={() => setShowDropdown(!showDropdown)} 
//             className="w-[175px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center justify-between">
//             Department (IIT KGP)
//             <svg className="w-2.5 h-2.5 ms-0" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
//           </button>
//           <div className={`${showDropdown ? "block" : "hidden"} absolute left-0 md:left-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-50`}>
//             <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
//               <li><Link href="/faculty" className="block px-4 py-2 hover:bg-[#48bf91]">Faculty</Link></li>
//               <li><Link href="/location" className="block px-4 py-2 hover:bg-[#48bf91]">Location</Link></li>
//               <li><Link href="/lab" className="block px-4 py-2 hover:bg-[#48bf91]">Lab Facilities</Link></li>
//               <li><Link href="/events" className="block px-4 py-2 hover:bg-[#48bf91]">Events</Link></li>
//               <li><Link href="/visualgallery" className="block px-4 py-2 hover:bg-[#48bf91]">Visual Gallery</Link></li>
//               <li><Link href="/curriculum" className="block px-4 py-2 hover:bg-[#48bf91]">Curriculum</Link></li>
//               <li><Link href="/publication" className="block px-4 py-2 hover:bg-[#48bf91]">Publications</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* Dropdown 2 - Student Resources */}
//         <div className="relative">
//           <button 
//             onClick={() => setShowDropdown2(!showDropdown2)} 
//             className="w-[175px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center justify-between">
//             Student Resources
//             <svg className="w-2.5 h-2.5 ms-0" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
//           </button>
//           <div className={`${showDropdown2 ? "block" : "hidden"} absolute left-0 md:left-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-50`}>
//             <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
//               <li><Link href="/terminologies" className="block px-4 py-2 hover:bg-[#48bf91]">Terminologies</Link></li>
//               <li><Link href="/numericals" className="block px-4 py-2 hover:bg-[#48bf91]">Basic Calculations</Link></li>
//               <li><Link href="/fleet" className="block px-4 py-2 hover:bg-[#48bf91]">Global Fleet 2024</Link></li>
//             </ul>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;



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
    <nav className="bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center md:h-16 p-2 shadow-2xl z-10">
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
          className="md:hidden text-white text-2xl" 
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(prev => !prev);
          }}
        >
          ☰
        </button>
      </div>

      {/* Menu Items - Mobile and Desktop */}
      <div className={`flex flex-row gap-1 items-center justify-center ${menuOpen ? "mt-4 px-2" : "hidden md:flex"}`}>
        {/* Dropdown 1 - Department */}
        <div className="relative" ref={dropdownRef}>
          <button 
            ref={buttonRef}
            onClick={toggleDropdown}
            className="w-[175px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center justify-between"
          >
            Department (IIT KGP)
            <svg className="w-2.5 h-2.5 ms-0" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div 
            className={`${showDropdown ? "block" : "hidden"} absolute left-0 md:left-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-50`}
          >
            <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
              {[
                { href: "/faculty", text: "Faculty" },
                { href: "/location", text: "Location" },
                { href: "/lab", text: "Lab Facilities" },
                { href: "/events", text: "Events" },
                { href: "/visualgallery", text: "Visual Gallery" },
                { href: "/curriculum", text: "Curriculum" },
                { href: "/publication", text: "Publications" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="block px-4 py-2 hover:bg-[#48bf91]"
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
            className="w-[175px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2 inline-flex items-center justify-between"
          >
            Student Resources
            <svg className="w-2.5 h-2.5 ms-0" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div 
            className={`${showDropdown2 ? "block" : "hidden"} absolute left-0 md:left-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-50`}
          >
            <ul className="py-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
              {[
                { href: "/terminologies", text: "Terminologies" },
                { href: "/numericals", text: "Basic Calculations" },
                { href: "/fleet", text: "Global Fleet 2024" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="block px-4 py-2 hover:bg-[#48bf91]"
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