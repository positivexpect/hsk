'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const AnimatedAbout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <Header />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F47AF]">Our Story</h1>
            <p className="text-gray-800 max-w-3xl mx-auto text-lg">
              Welcome to Hit The Spot Kitchen, where we bring the authentic flavors of Puerto Rico to Fredericksburg, VA.
            </p>
          </motion.div>

          {/* Chef's Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/chefwill.jpg"
                alt="Chef Will"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-[#0F47AF]">Meet Chef Will</h2>
              <p className="text-gray-800 mb-4">
                Growing up in a Puerto Rican family, Chef Will developed a deep love for his culinary heritage. Together with his wife, their shared passion for authentic Puerto Rican flavors and family recipes led to the creation of Hit The Spot Kitchen.
              </p>
              <p className="text-gray-800">
                Starting from their beloved food truck, they&apos;ve built a cherished presence in the Fredericksburg community, bringing the vibrant tastes and warm hospitality of Puerto Rico to every dish they serve.
              </p>
            </motion.div>
          </div>

          {/* Reviews Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0F47AF]">What People Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="italic text-gray-800 mb-4">
                  &quot;The most authentic Puerto Rican food I&apos;ve had outside of the island. The mofongo is incredible!&quot;
                </p>
                <p className="text-sm text-gray-600">- Maria R.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="italic text-gray-800 mb-4">
                  &quot;Chef Will&apos;s passion for Puerto Rican cuisine shines through in every dish. A must-visit in Fredericksburg!&quot;
                </p>
                <p className="text-sm text-gray-600">- John D.</p>
              </div>
            </div>
          </motion.div>

          {/* Local Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#0F47AF]">Local Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link 
                href="https://www.fredericksburgfreepress.com/2024/06/23/taste-of-spotsylvania-highlights-flavor-profiles-in-fredericksburg-area/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3 text-[#0F47AF]">Fredericksburg Free Press</h3>
                <p className="text-gray-800">
                  Featured in &quot;Taste of Spotsylvania&quot; for our authentic Puerto Rican cuisine
                  and contribution to the local food scene.
                </p>
                <span className="text-[#E41F1D] mt-3 inline-block">Read Article →</span>
              </Link>
              <Link
                href="https://www.fredericksburg.com/food/local-favorites/hit-the-spot-kitchen/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3 text-[#0F47AF]">Community Favorite</h3>
                <p className="text-gray-800">
                  Recognized by the local community for bringing diverse culinary experiences
                  to Fredericksburg through our food truck and restaurant.
                </p>
                <span className="text-[#E41F1D] mt-3 inline-block">Read Article →</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnimatedAbout;
