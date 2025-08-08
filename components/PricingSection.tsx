import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essential Glow Package',
    price: '$99',
    features: [
      'Skin Analysis',
      'Customized Skincare Routine',
      '1 Luxury Product Sample',
      'Free Shipping on Orders Over $50',
    ],
  },
  {
    title: 'Radiant Luxe Package',
    price: '$199',
    features: [
      'Personalized Skincare Consultation',
      '2 Luxury Product Samples',
      'Exclusive Access to New Arrivals',
      'Complimentary Gift Wrapping',
    ],
  },
  {
    title: 'Ultimate Luxury Experience',
    price: '$299',
    features: [
      'One-on-One Skincare Masterclass',
      '3 Luxury Product Samples',
      'VIP Customer Support',
      'Exclusive Discounts on Future Purchases',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans for luxury LRP cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">{tier.title}</h3>
              <p className="text-xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">{feature}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors hover:bg-orange-500"
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;