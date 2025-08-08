import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Johnson',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Smith',
    role: 'Head of Product Development',
    image: '/images/liam.jpg',
  },
  {
    name: 'Emma Brown',
    role: 'Marketing Director',
    image: '/images/emma.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <header className="text-center py-10">
        <motion.div
          className="text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About luxury LRP cosmetics
        </motion.h1>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          className="text-3xl font-semibold mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our History
        </motion.h2>
        <p className="text-lg mb-5">
          Founded in 2020, luxury LRP cosmetics has redefined the beauty industry by offering high-end, luxurious products that enhance natural beauty. Our commitment to quality and innovation has made us a leader in the cosmetics market, with a focus on sustainable practices and ethical sourcing.
        </p>
        <p className="text-lg mb-5">
          At luxury LRP cosmetics, we believe that beauty should be a celebration of individuality. Our products are crafted with the finest ingredients, ensuring that every application feels like a pampering experience.
        </p>
      </section>

      <section className="bg-orange-100 py-10">
        <motion.div
          className="text-3xl font-semibold text-center mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Values
        </motion.h2>
        <ul className="max-w-2xl mx-auto text-lg list-disc list-inside">
          <li>Quality: We prioritize the highest standards in our products.</li>
          <li>Innovation: We are committed to continuous improvement and creativity.</li>
          <li>Sustainability: We strive to minimize our environmental impact.</li>
          <li>Inclusivity: We celebrate diversity and aim to cater to all beauty needs.</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          className="text-3xl font-semibold mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg shadow-lg p-5 text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;