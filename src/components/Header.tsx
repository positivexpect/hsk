'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#E41F1D] flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
            <span className="hidden sm:inline">Hit The Spot Kitchen</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-[#E41F1D] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/menu"
              className="text-gray-700 hover:text-[#E41F1D] transition-colors font-medium"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#E41F1D] transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-[#E41F1D] transition-colors font-medium"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#E41F1D] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col gap-4 pt-4 pb-2">
            <Link
              href="/menu"
              className="text-gray-700 hover:text-[#E41F1D] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#E41F1D] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-[#E41F1D] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#E41F1D] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
