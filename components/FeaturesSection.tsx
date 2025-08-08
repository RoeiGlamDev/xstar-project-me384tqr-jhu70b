import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'At luxury LRP cosmetics, we use only the finest ingredients to ensure that our products provide unparalleled results.',
    icon: <i className="fas fa-gem text-orange-500"></i>,
  },
  {
    title: 'Elegant Packaging',
    description: 'Our products are elegantly packaged, reflecting the luxury and sophistication of the luxury LRP cosmetics brand.',
    icon: <i className="fas fa-box-open text-orange-500"></i>,
  },
  {
    title: 'Cruelty-Free',
    description: 'We are committed to ethical practices, ensuring that all our products are cruelty-free and environmentally friendly.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Expert Formulations',
    description: 'Our team of experts formulates each product with precision, ensuring that you receive the best in luxury cosmetics.',
    icon: <i className="fas fa-flask text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Our Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;