import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={isInView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center justify-center">
      <header className="py-10">
        <h1 className="text-5xl font-bold text-center">
          Welcome to <span className="text-orange-500">luxury LRP cosmetics</span>
        </h1>
        <p className="mt-4 text-lg text-center">
          Discover the elegance of luxury cosmetics tailored for your beauty needs.
        </p>
      </header>
      <main className="flex flex-col items-center">
        <FadeIn>
          <section className="max-w-4xl p-6 bg-orange-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center">
              Our Exclusive Collection
            </h2>
            <p className="mt-2 text-center">
              Indulge in our range of high-end products, crafted with the finest ingredients to enhance your natural beauty.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/ Example Product Card /}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src="/path/to/product-image.jpg" alt="Luxury Lipstick" className="rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Luxury Lipstick</h3>
                  <p className="mt-2 text-orange-600">$35.00</p>
                  <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
              {/ Repeat for more products /}
            </div>
          </section>
        </FadeIn>
      </main>
      <footer className="py-10">
        <p className="text-center">
          © {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmetics;