'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import Header from './Header';
import Footer from './Footer';

const AnimatedEvents: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0F47AF]">¡Eventos Especiales!</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From private chef experiences to food truck events, let us bring authentic Puerto Rican flavors to your special occasion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48 sm:h-64">
              <Image
                src="/maria.jpg"
                alt="Private Chef Experience"
                fill
                className="object-cover object-[center_25%]"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#0F47AF]">Private Chef Experience</h2>
              <p className="text-gray-800 mb-6">
                Let us create an unforgettable dining experience in your home. Our private
                chef service brings the authentic flavors of Puerto Rico directly to your
                kitchen, perfect for intimate gatherings and special celebrations.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Customized menu planning</li>
                <li>• Interactive cooking demonstrations</li>
                <li>• Wine pairing recommendations</li>
                <li>• Professional service staff available</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48 sm:h-64">
              <Image
                src="/foodtruck.jpg"
                alt="Food Truck Events"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#0F47AF]">Food Truck Events</h2>
              <p className="text-gray-800 mb-6">
                Bring the excitement of our food truck to your next event! Perfect for
                corporate functions, weddings, festivals, and private parties. We&apos;ll
                serve up fresh, authentic Puerto Rican cuisine that your guests will love.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Flexible menu options</li>
                <li>• Professional and efficient service</li>
                <li>• Custom packages available</li>
                <li>• Serving Fredericksburg and surrounding areas</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-[#0F47AF]">Upcoming Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0F47AF]">Food Truck Friday</h3>
                <p className="text-gray-800 mb-4">
                  Join us every Friday at Adventure Brewing Company for lunch and dinner.
                </p>
                <p className="text-sm text-gray-500">11:00 AM - 8:00 PM</p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0F47AF]">Farmers Market</h3>
                <p className="text-gray-800 mb-4">
                  Find us at the Fredericksburg Farmers Market every Saturday morning.
                </p>
                <p className="text-sm text-gray-500">7:00 AM - 2:00 PM</p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#0F47AF]">Sunday Brunch</h3>
                <p className="text-gray-800 mb-4">
                  Special Puerto Rican brunch menu at our restaurant location.
                </p>
                <p className="text-sm text-gray-500">10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#0F47AF]">Book Your Event</h2>
          <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
            Ready to bring the flavors of Puerto Rico to your next event? Contact us
            to discuss your needs and let us create a custom package for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnimatedEvents;
