import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const slideUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">luxury LRP cosmetics</h2>
        <p className="text-gray-700 text-lg">
          Experience the elegance of luxury LRP cosmetics, where beauty meets sophistication. Our premium range of cosmetics is designed to enhance your natural beauty with a touch of luxury.
        </p>
        <p className="text-gray-600 mt-2">
          Indulge in our exquisite collection, featuring high-quality ingredients and luxurious packaging that reflects our commitment to excellence.
        </p>
      </div>
    </motion.div>
  );
};

export default SlideUp;