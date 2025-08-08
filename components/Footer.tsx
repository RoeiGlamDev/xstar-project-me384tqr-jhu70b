import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { name: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "luxury LRP cosmetics";
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Products', url: '/products' },
    { name: 'Contact', url: '/contact' },
    { name: 'Privacy Policy', url: '/privacy' },
  ];

  const socialMedia = [
    { platform: 'Facebook', url: 'https://facebook.com/luxuryLRP' },
    { platform: 'Instagram', url: 'https://instagram.com/luxuryLRP' },
    { platform: 'Twitter', url: 'https://twitter.com/luxuryLRP' },
  ];

  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {companyName}
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-6 mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-lg hover:text-orange-500 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {socialMedia.map((media) => (
            <a
              key={media.platform}
              href={media.url}
              className="text-orange-600 hover:text-orange-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {media.platform}
            </a>
          ))}
        </motion.div>
        <motion.div
          className="text-center text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;