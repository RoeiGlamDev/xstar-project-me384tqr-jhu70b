import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      <motion.div
        onSubmit={handleSubmit}
        className="bg-orange-100 p-6 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-orange-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-orange-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="border border-orange-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={4}
            required
          />
        </div>
        <motion.div
          type="submit"
          className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
        <p className="text-lg">luxury LRP cosmetics</p>
        <p className="text-lg">123 Luxury Ave, Glamour City, CA 90210</p>
        <p className="text-lg">Business Hours: Mon-Fri 9 AM - 6 PM</p>
      </div>
    </div>
  );
};

export default ContactPage;