import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroIm from '../../assets/img2.jpg';

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[700px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroIm})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      {/* Hero Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-snug"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Transforming Education for All Ages <br className="hidden sm:block" /> Discover Your Path to Learning.
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose mb-6 sm:mb-8 max-w-md sm:max-w-lg lg:max-w-3xl mx-auto text-gray-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Explore our wide range of educational services, from personalized homeschooling programs to professional courses designed to prepare learners of all ages for a brighter future.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link to="/services">
            <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-transparent rounded-lg sm:rounded-xl border-2 border-white text-white font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-500 hover:border-none hover:scale-105 transition-transform duration-300">
              Explore Our Services
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
