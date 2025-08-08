import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    description: 'With over a decade of experience in the cosmetics industry, Sophia leads luxury LRP cosmetics with a vision for elegance and innovation.',
  },
  {
    name: 'James Chen',
    role: 'Chief Product Officer',
    description: 'A seasoned expert in product development, James ensures that every product meets the highest standards of luxury and quality.',
  },
  {
    name: 'Isabella Rossi',
    role: 'Marketing Director',
    description: 'Isabella crafts compelling narratives that resonate with our clientele, showcasing the luxurious essence of luxury LRP cosmetics.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-8">About luxury LRP cosmetics</h2>
        <p className="text-lg mb-6">
          At luxury LRP cosmetics, we believe that beauty is an experience that transcends the ordinary. Founded with a passion for elegance and sophistication, our brand is dedicated to creating high-end cosmetic products that empower individuals to express their unique beauty.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg mb-6">
          Our mission is to redefine luxury in the cosmetics industry by providing innovative, high-quality products that enhance natural beauty. We are committed to sustainability, ethical sourcing, and creating a positive impact in the communities we serve.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-orange-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-md italic">{member.role}</p>
              <p className="text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;