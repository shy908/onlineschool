import React from 'react';
import { motion } from 'framer-motion';

const Support = () => {
  return (
    <motion.div
      className="py-8 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <motion.div className="flex-shrink-0 md:w-1/2 mb-6 md:mb-0">
          <motion.img
            src="https://www.keg.com/hubfs/shutterstock_1511963099.jpg"
            alt="Academic Support"
            className="w-full h-full object-cover rounded-md shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        {/* Text Section */}
        <div className="md:w-1/2 md:ml-8">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            How We Support You
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            We’re here to ensure your success every step of the way – with expert academic and
            technical support designed to meet your needs.
          </motion.p>
        </div>
      </div>

      {/* Support Boxes with Individual Animations */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Academic Support */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Academic Support</h3>
          <p className="text-gray-600">
            Our 200-strong team of expert teachers, subject specialists, and academic leaders are
            here to support you from day one until you matriculate.
          </p>
        </motion.div>

        {/* Technical Support */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Support</h3>
          <p className="text-gray-600">
            Our technical support crew is ready to provide answers to all your questions and solve
            any technical issues you may encounter, all day, in real-time.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Support;
