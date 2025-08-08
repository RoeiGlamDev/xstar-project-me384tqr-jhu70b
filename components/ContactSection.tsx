import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.reason) newErrors.reason = 'Reason for contact is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h2>
      <p className="text-gray-700 mb-4">
        For inquiries about our luxurious cosmetics, please fill out the form below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={border-2 rounded-md p-2 w-full ${errors.name ? 'border-red-500' : 'border-orange-500'} focus:outline-none focus:ring-2 focus:ring-orange-300}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={border-2 rounded-md p-2 w-full ${errors.email ? 'border-red-500' : 'border-orange-500'} focus:outline-none focus:ring-2 focus:ring-orange-300}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="reason">Reason for Contact</label>
          <select
            name="reason"
            id="reason"
            value={formData.reason}
            onChange={handleChange}
            className={border-2 rounded-md p-2 w-full ${errors.reason ? 'border-red-500' : 'border-orange-500'} focus:outline-none focus:ring-2 focus:ring-orange-300}
          >
            <option value="">Select a reason</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Feedback">Feedback</option>
          </select>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={border-2 rounded-md p-2 w-full ${errors.message ? 'border-red-500' : 'border-orange-500'} focus:outline-none focus:ring-2 focus:ring-orange-300}
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-orange-500">Business Information</h3>
        <p className="text-gray-700">luxury LRP cosmetics</p>
        <p className="text-gray-700">123 Luxury St, Glamour City, CA 90210</p>
        <p className="text-gray-700">Business Hours: Mon-Fri 9 AM - 6 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;