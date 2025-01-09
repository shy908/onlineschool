import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import heroImg from '../../assets/hero2.jpg';

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="flex justify-center items-center w-full h-auto p-4 md:p-8"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.05}
        transitionSpeed={2500}
        className="block max-w-full"
      >
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={heroImg}
            alt="Hero showcasing the essence of our platform"
            className="w-full h-auto object-cover"
          />
        </div>
      </Tilt>
    </motion.div>
  );
};

export default HeroImage;
