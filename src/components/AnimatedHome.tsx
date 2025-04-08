'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Header from './Header';

export default function AnimatedHome() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#E41F1D]/80 to-[#0F47AF]/80 z-10"></div>
          <Image
            src="/hero-bg.jpg"
            alt="Puerto Rican Food"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-[72px] left-0 w-full h-2 bg-[#E41F1D]"></div>
        <div className="absolute top-[80px] left-0 w-full h-2 bg-white"></div>
        <div className="absolute top-[88px] left-0 w-full h-2 bg-[#0F47AF]"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#E41F1D]"></div>
        <div className="absolute bottom-2 left-0 w-full h-2 bg-white"></div>
        <div className="absolute bottom-4 left-0 w-full h-2 bg-[#0F47AF]"></div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center mb-12 mt-32"
          >
            <div className="w-72 h-72 relative mb-8">
              <Image
                src="/logo.png"
                alt="Hit The Spot Kitchen Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-8 font-light"
            >
              Authentic Puerto Rican Cuisine
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-base sm:text-xl px-4 sm:px-0"
            >
              <Link
                href="https://maps.apple.com/?address=1016+Lafayette+Blvd,+Fredericksburg,+VA+22401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0F47AF] transition-colors text-center sm:text-left"
              >
                <FaMapMarkerAlt className="text-xl sm:text-2xl flex-shrink-0" />
                <span className="leading-tight">1016 Lafayette Blvd,<br className="sm:hidden" /> Fredericksburg, VA 22401</span>
              </Link>
              <Link
                href="tel:+15401234567"
                className="flex items-center gap-2 hover:text-[#0F47AF] transition-colors sm:ml-4"
              >
                <FaPhone className="text-xl sm:text-2xl flex-shrink-0" />
                <span>(540) 123-4567</span>
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 max-w-2xl"
            >
              Experience the vibrant flavors of Puerto Rico through our family recipes,
              available at our food truck, restaurant, and private chef services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 sm:px-0"
            >
              <Link
                href="/menu"
                className="w-full sm:w-auto bg-[#E41F1D] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors text-center"
              >
                View Menu
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-24 px-4 sm:px-6 md:px-0">
            <div className="text-center">
              <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/empanadas.jpg"
                  alt="Food Truck"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0F47AF]">Food Truck</h3>
              <p className="text-gray-600">Find us around Fredericksburg serving up fresh Puerto Rican favorites.</p>
            </div>
            <div className="text-center">
              <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/nachos.jpg"
                  alt="Restaurant"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0F47AF]">Restaurant</h3>
              <p className="text-gray-600">Visit our restaurant for the full Puerto Rican dining experience.</p>
            </div>
            <div className="text-center">
              <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/personalchef.jpeg"
                  alt="Private Chef Services"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0F47AF]">Private Chef</h3>
              <p className="text-gray-600">Let us bring the flavors of Puerto Rico to your special event.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Social Feed Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F47AF]">Follow Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Instagram Feed */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-[600px] overflow-hidden">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaInstagram className="text-[#E41F1D]" />
                Latest Photos
              </h3>
              <iframe
                src="https://www.instagram.com/hitthespotkitchen_va/embed"
                className="w-full h-[500px] border-none"
                loading="lazy"
                title="Instagram Feed"
              />
            </div>
            {/* Facebook Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-[600px] overflow-hidden flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FaFacebook className="text-[#E41F1D]" />
                Follow Us on Facebook
              </h3>
              <p className="text-gray-600 mb-8 max-w-md">
                Stay updated with our latest events, specials, and behind-the-scenes moments on Facebook!
              </p>
              <Link
                href="https://www.facebook.com/hitthespotkitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E41F1D] text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <FaFacebook className="text-xl" />
                Visit Our Facebook Page
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <Link
                href="https://maps.apple.com/?address=1016+Lafayette+Blvd,+Fredericksburg,+VA+22401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-2 hover:text-[#E41F1D] transition-colors"
              >
                <FaMapMarkerAlt />
                <span>1016 Lafayette Blvd, Fredericksburg, VA 22401</span>
              </Link>
              <Link
                href="tel:+15401234567"
                className="flex items-center gap-2 hover:text-[#E41F1D] transition-colors"
              >
                <FaPhone />
                <span>(540) 123-4567</span>
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.facebook.com/hitthespotkitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E41F1D] transition-colors"
                >
                  <FaFacebook className="text-2xl" />
                </Link>
                <Link
                  href="https://www.instagram.com/hitthespotkitchen_va/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E41F1D] transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="mb-2">Monday - Friday: 11am - 9pm</p>
              <p>Saturday - Sunday: 12pm - 10pm</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; {new Date().getFullYear()} Hit The Spot Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
