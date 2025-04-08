'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#E41F1D] flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
            <span>Hit The Spot Kitchen</span>
          </Link>
          <div className="flex items-center gap-8">
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
      </div>
    </nav>
  );
};

export default Header;
