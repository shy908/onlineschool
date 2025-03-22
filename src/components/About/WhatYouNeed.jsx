import React from 'react';
import { motion } from 'framer-motion';

const WhatYouNeed = () => {
  return (
    <motion.div
      className="py-12 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Image Section */}
      <motion.div className="flex justify-center items-center mb-12">
        <motion.img
          src="https://thumbs.dreamstime.com/b/black-schoolgirl-wearing-earphones-writing-learning-online-home-concentrated-preteen-black-african-american-girl-wearing-218232584.jpg"
          alt="Online School"
          className="w-[60%] h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </motion.div>

      {/* Text Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">What You Need for Maduyu Academy</h2>
        <p className="text-gray-600 text-lg">
          To ensure a smooth and productive learning experience, make sure you have the right equipment and resources.
        </p>
      </div>

      {/* Requirements Boxes */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Computer Requirements */}
        <motion.div
          className="bg-blue-50 shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Computer Requirements</h3>
          <p className="text-gray-600">
            To get started, you'll need a device with a webcam, at least 4GB of RAM, and 128GB of storage. For uninterrupted access, backup power is recommended to keep your device and internet connection running for at least 4 hours during power outages. If you're using a phone, ensure it's capable of video calls and has a stable internet connection.
          </p>
        </motion.div>

        {/* Textbooks and Stationery */}
        <motion.div
          className="bg-green-50 shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Textbooks and Stationery</h3>
          <p className="text-gray-600">
            Most of our subject content lives on our learning platform, but some subjects require textbooks. You’ll find these on our textbook lists, which you’ll receive – along with a list of stationery – after enrolment.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhatYouNeed;
