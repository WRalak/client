// components/Navbar.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DarkModeToggle from '../darkModeToggle';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-fuchsia-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image src='/image.png' width={60} height={60} alt='logo'/>
            <Link href="/">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                Kenya Methodist University
              </p>
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            {/* Hamburger Menu Button */}
            <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <div className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'block' : ''}`}>
            
            
            <Link href="/admin">
              <p className="text-gray-800 dark:text-white hover:text-blue-500">Admin</p>
            </Link>
          </div>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800`}>
          
          <Link href="/admin">
            <p className="block text-white p-4">Admin</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

