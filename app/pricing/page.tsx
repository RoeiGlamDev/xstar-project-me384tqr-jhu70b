import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Luxury LRP Essentials',
    price: '$99',
    features: [
      'High-quality skincare products',
      'Personalized consultation',
      'Free shipping on orders over $150',
    ],
  },
  {
    title: 'Luxury LRP Deluxe',
    price: '$199',
    features: [
      'All Essentials features',
      'Exclusive access to new product launches',
      'Complimentary luxury gift with purchase',
    ],
  },
  {
    title: 'Luxury LRP Ultimate',
    price: '$299',
    features: [
      'All Deluxe features',
      'One-on-one skincare routine development',
      'VIP customer support',
    ],
  },
];

const FAQ = [
  {
    question: 'What is the return policy?',
    answer: 'We offer a 30-day return policy on all unopened products.',
  },
  {
    question: 'How do I track my order?',
    answer: 'You will receive a tracking number via email once your order has shipped.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide with additional shipping fees.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.div
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Luxury LRP Cosmetics Pricing
      </motion.h1>
      <motion.div
        className="min-w-full border-collapse border border-orange-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr>
            <th className="border border-orange-600 p-4">Package</th>
            <th className="border border-orange-600 p-4">Price</th>
            <th className="border border-orange-600 p-4">Features</th>
          </tr>
        </thead>
        <tbody>
          {pricingOptions.map((option) => (
            <tr key={option.title} className="hover:bg-orange-100 transition duration-300">
              <td className="border border-orange-600 p-4">{option.title}</td>
              <td className="border border-orange-600 p-4">{option.price}</td>
              <td className="border border-orange-600 p-4">
                <ul className="list-disc pl-5">
                  {option.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </motion.table>
      <motion.div
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div>
        {FAQ.map((item) => (
          <div key={item.question} className="mb-4">
            <motion.div
              className="text-xl font-medium text-orange-600 cursor-pointer hover:underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.question}
            </motion.h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;