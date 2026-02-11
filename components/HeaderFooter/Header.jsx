"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center bg-gray-50 shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl sm:text-3xl font-bold leading-none flex-shrink-0">
        <Image
          src="/Plogo.jpeg"
          alt="Logo"
          width={64}
          height={64}
          className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:space-x-4 xl:space-x-6">
        <li>
          <Link href="/" className="text-sm xl:text-base text-green-400 hover:text-green-600 font-bold transition duration-200">
            Home
          </Link>
        </li>
        <li className="text-gray-400 flex items-center">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li>
          <Link href="/About" className="text-sm xl:text-base text-green-400 hover:text-green-600 font-bold transition duration-200">
            About Me
          </Link>
        </li>
        <li className="text-gray-400 flex items-center">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li>
          <Link href="/Showcase" className="text-sm xl:text-base text-green-400 hover:text-green-600 font-bold transition duration-200">
            My Showcase
          </Link>
        </li>
        <li className="text-gray-400 flex items-center">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li>
          <Link href="/Resume" className="text-sm xl:text-base text-green-400 hover:text-green-600 font-bold transition duration-200">
            Resume
          </Link>
        </li>
        <li className="text-gray-400 flex items-center">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li>
          <Link href="/Company" className="text-sm xl:text-base text-green-400 hover:text-green-600 font-bold transition duration-200">
            My Company
          </Link>
        </li>
      </ul>

      {/* Desktop Contact Button */}
      <Link
        href="/Contact"
        className="hidden lg:inline-block py-2 px-4 xl:px-6 bg-white hover:bg-gray-50 text-sm text-green-600 font-bold rounded-l-xl rounded-t-xl transition duration-200 shadow-sm"
      >
        Contact Me
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex items-center text-gray-600 hover:text-green-600 p-2 transition duration-200"
        aria-label="Toggle menu"
      >
        {!isMenuOpen ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div onClick={closeMenu} className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"></div>
      )}

      {/* Mobile Menu Sidebar */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-64 sm:w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto transition-transform duration-300 transform translate-x-0">
          <div className="p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-gray-600 hover:text-green-600 transition duration-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Mobile Menu Items */}
            <ul className="mt-12 space-y-6 text-left">
              {[
                { href: "/", label: "Home" },
                { href: "/About", label: "About Me" },
                { href: "/Showcase", label: "My Showcase" },
                { href: "/Resume", label: "Resume" },
                { href: "/Company", label: "My Company" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-lg text-gray-800 hover:text-green-600 font-semibold transition duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="pt-4 border-t border-gray-200">
                <Link
                  href="/Contact"
                  onClick={closeMenu}
                  className="block w-full text-center py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-200"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
