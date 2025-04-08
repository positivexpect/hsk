'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0F47AF] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hit The Spot Kitchen</h3>
            <p className="text-gray-200">
              Bringing authentic Puerto Rican flavors to Fredericksburg, VA.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-200 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-200 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="text-gray-200 space-y-2">
              <li>Monday - Thursday: 11am - 9pm</li>
              <li>Friday - Saturday: 11am - 10pm</li>
              <li>Sunday: 12pm - 8pm</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/HitthesSpotVA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/hitthespotkitchen_va"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.yelp.com/biz/hit-the-spot-kitchen-fredericksburg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FaYelp size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200/20 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} Hit The Spot Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
