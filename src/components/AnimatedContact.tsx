'use client';

import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const AnimatedContact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F47AF]">¡Contáctanos!</h1>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Reach out to us for authentic Puerto Rican catering, private chef services, or food truck events.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#0F47AF]">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="https://maps.google.com/?q=3318+Bourbon+St,+Fredericksburg,+VA" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-[#E41F1D] transition-colors">
                <FaMapMarkerAlt className="w-5 h-5 mr-3" />
                3318 Bourbon St, Fredericksburg, VA
              </a>
              <a href="tel:+15404791687" className="flex items-center text-gray-800 hover:text-[#E41F1D] transition-colors">
                <FaPhone className="w-5 h-5 mr-3" />
                (540) 479-1687
              </a>
              <a href="mailto:Hskva2017@gmail.com" className="flex items-center text-gray-800 hover:text-[#E41F1D] transition-colors">
                <FaEnvelope className="w-5 h-5 mr-3" />
                Hskva2017@gmail.com
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4 text-[#0F47AF]">Follow Us</h2>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.instagram.com/hitthespotkitchen_va/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-red-100 to-red-50 rounded-lg hover:from-red-200 hover:to-red-100 transition-colors"
                  >
                    <FaInstagram className="w-8 h-8 text-red-600 mb-2" />
                    <span className="text-gray-800 font-medium">Instagram</span>
                    <span className="text-sm text-gray-600">@hitthespotkitchen_va</span>
                  </a>
                  <a
                    href="https://www.facebook.com/HitthesSpotVA/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-red-100 to-red-50 rounded-lg hover:from-red-200 hover:to-red-100 transition-colors"
                  >
                    <FaFacebookF className="w-8 h-8 text-red-600 mb-2" />
                    <span className="text-gray-800 font-medium">Facebook</span>
                    <span className="text-sm text-gray-600">Hit The Spot Kitchen</span>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4 text-[#0F47AF]">Leave us a Review</h2>
                <p className="text-gray-800 mb-6">We appreciate your feedback! Share your experience with us and help others discover authentic Puerto Rican cuisine.</p>
                <a
                  href="https://www.google.com/maps/place/Hit+The+Spot+Kitchen/@38.2986773,-77.5070899,17z/data=!4m8!3m7!1s0x89b6c1f7f75827c5:0x9b5ad5300f6a89db!8m2!3d38.2986773!4d-77.504515!9m1!1b1!16s%2Fg%2F11h_yfk8_k?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#E41F1D] text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
                >
                  Write a Review on Google
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#0F47AF]">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E41F1D]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E41F1D]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E41F1D]"
                  >
                    <option value="">Select an option</option>
                    <option value="private-chef">Private Chef Services</option>
                    <option value="catering">Catering</option>
                    <option value="food-truck">Food Truck Events</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E41F1D]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnimatedContact;
