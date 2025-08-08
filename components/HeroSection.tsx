import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: ''url(/path/to/luxury-background.jpg)' '}}></div>
      <div className="relative z-10 text-center p-8">
        <motion.div 
          className="text-6xl font-bold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          luxury LRP cosmetics
        </motion.h1>
        <motion.div 
          className="text-2xl font-light text-gray-700 mb-8"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Elevate your beauty with our premium cosmetics tailored for the discerning individual.
        </motion.h2>
        <motion.div 
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Experience the essence of luxury with our exclusive range of high-end cosmetics designed to enhance your natural beauty.
        </motion.p>
        <motion.div 
          href="/shop" 
          className="inline-block px-8 py-3 text-white bg-orange-500 rounded-full shadow-lg transition-transform transform hover:scale-105"
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {Shop Now}
        </motion.a>
        <div className="mt-6">
          <span className="text-sm text-gray-500">Trusted by beauty enthusiasts worldwide.</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;