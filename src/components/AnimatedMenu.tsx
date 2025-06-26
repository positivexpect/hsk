"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Alcapurrias",
    description: "Green banana and yautia fritters stuffed with beef",
    price: "$12.99",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fea42e1fe42604aeeaf4d162157b19fc9%2F57435ab5f5944841b76aedd35965cbd1",
    category: "Frituras (Fried Foods)",
  },
  {
    name: "Empanadas",
    description: "Crispy turnovers filled with seasoned beef or chicken",
    price: "$3.50",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fea42e1fe42604aeeaf4d162157b19fc9%2F67ef0d0f58774f29bbb339675840557d",
    category: "Frituras (Fried Foods)",
  },
  {
    name: "Bacalaitos",
    description: "Crispy codfish fritters",
    price: "$3.50",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fea42e1fe42604aeeaf4d162157b19fc9%2F391f9b7798084496aa133933dcf757ad",
    category: "Frituras (Fried Foods)",
  },
  {
    name: "Nachones",
    description:
      "Our signature loaded nachos with authentic Puerto Rican toppings",
    price: "$4.00",
    image: "/nachones.jpg",
    category: "WEPA Rice Bowls",
  },
  {
    name: "Classic Nachos",
    description:
      "Crispy tortilla chips loaded with melted cheese and fresh toppings",
    price: "$10.99",
    image: "/nachos.jpg",
    category: "WEPA Rice Bowls",
  },
  {
    name: "Pernil Bowl",
    description: "Roasted marinated pork with rice and beans",
    price: "$12.99",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fea42e1fe42604aeeaf4d162157b19fc9%2F6b987062e2b543429c92d8ad9079760d",
    category: "WEPA Rice Bowls",
  },
  {
    name: "Traditional",
    description: "Mashed plantains with garlic and pork crackling",
    price: "$8.99",
    category: "Mofongo",
  },
  {
    name: "Shrimp",
    description: "Mofongo topped with garlic shrimp",
    price: "$14.99",
    category: "Mofongo",
  },
  {
    name: "Pernil",
    description: "Mofongo topped with roasted pork",
    price: "$13.99",
    category: "Mofongo",
  },
  {
    name: "Tostones",
    description: "Crispy twice-fried plantains, a Puerto Rican favorite",
    price: "$3.99",
    image: "/tostones.jpg",
    category: "Sides",
  },
  {
    name: "Maduros",
    description: "Sweet fried plantains",
    price: "$3.99",
    image: "/sweetnspicy.jpg",
    category: "Sides",
  },
  {
    name: "Arroz con Gandules",
    description: "Rice with pigeon peas",
    price: "$4.50",
    category: "Sides",
  },
  {
    name: "Flan",
    description: "Classic caramel custard",
    price: "$4.99",
    category: "Desserts",
  },
  {
    name: "Tembleque",
    description: "Coconut pudding",
    price: "$4.50",
    category: "Desserts",
  },
  {
    name: "Guava Cheesecake",
    description: "New York style with guava topping",
    price: "$13.99",
    category: "Desserts",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AnimatedMenu() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8">
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                <Image
                  src={selectedItem.image || ""}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.name}</h3>
                <p className="text-gray-600 mb-2">{selectedItem.description}</p>
                <p className="text-xl font-bold text-[#E41F1D]">
                  {selectedItem.price}
                </p>
              </div>
              <button
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0F47AF]">
              ¡Buen Provecho!
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the authentic flavors of Puerto Rico with our signature
              dishes.
            </p>
          </motion.div>

          <div className="space-y-32">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0F47AF] mb-8 sm:mb-16">
              Full Menu
            </h2>
            {[
              "Frituras (Fried Foods)",
              "WEPA Rice Bowls",
              "Mofongo",
              "Sides",
              "Desserts",
            ].map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#E41F1D]">
                    {category}
                  </h2>
                  <div className="w-24 h-1 bg-[#E41F1D] mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {menuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <motion.div
                        key={item.name}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedItem(item)}
                      >
                        {item.image && (
                          <div className="relative h-40 sm:h-48">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-bold mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {item.description}
                          </p>
                          <p className="text-base sm:text-lg font-bold text-[#E41F1D]">
                            {item.price}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 italic">
              * Prices and menu items subject to change. Food truck menu may
              vary.
            </p>
            <p className="text-gray-600 mt-2">
              Please inform us of any allergies or dietary restrictions.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
