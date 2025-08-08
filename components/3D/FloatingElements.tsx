import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    // Initialize any necessary 3D animations or effects here
  }, []);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <motion.div 
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-orange-500"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Welcome to Luxury LRP Cosmetics
      </motion.h1>
      <motion.div 
        className="absolute top-24 left-1/2 transform -translate-x-1/2 text-xl text-gray-700"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        Experience the elegance of luxury beauty products crafted just for you.
      </motion.p>
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/ Add your 3D models here /}
        <OrbitControls />
      </Canvas>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div 
          className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingElements;