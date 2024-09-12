import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className='bg-black text-white flex justify-center items-center h-16 px-8 py-8 mt-auto'>
        <span className='text-center font-semibold'>Copyright &copy; {currentYear} <span>Oceanic</span><span className="text-[#48bf91]">Edge</span> - All rights reserved</span>
      </footer>
    )
}

export default Footer