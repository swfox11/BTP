import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className='bg-black text-white flex justify-center items-center h-16 px-8 py-8 mt-auto'>
        <div className='font-semibold'>Copyright &copy; {currentYear} <span className='font-bold font-serif'><span>Oceanic</span><span className="text-[#48bf91]">Edge</span></span> - All rights reserved</div>
      </footer>
    )
}

export default Footer