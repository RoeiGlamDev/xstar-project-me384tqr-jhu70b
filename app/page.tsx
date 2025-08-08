import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center h-screen text-center">
                    <motion.div
                        className="text-6xl font-bold text-orange-600"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Welcome to luxury LRP cosmetics
                    </motion.h1>
                    <motion.div
                        className="mt-4 text-xl text-gray-700"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Experience the elegance of our premium cosmetics line.
                    </motion.p>
                    <motion.div
                        className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 transition duration-300"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Shop Now
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <div className="bg-orange-100 py-20">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    className="text-4xl font-bold text-orange-600"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Why Choose luxury LRP cosmetics?
                </motion.h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-orange-600">Premium Quality</h3>
                        <p className="mt-2 text-gray-700">
                            Our products are crafted with the finest ingredients for a luxurious experience.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-orange-600">Elegant Packaging</h3>
                        <p className="mt-2 text-gray-700">
                            Our products come in beautifully designed packaging that reflects luxury.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-orange-600">Sustainable Practices</h3>
                        <p className="mt-2 text-gray-700">
                            We are committed to eco-friendly practices in our production processes.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const LuxuryLRPCosmetics: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
        </div>
    );
};

export default LuxuryLRPCosmetics;