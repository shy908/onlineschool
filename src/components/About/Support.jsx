import React from 'react';
import { motion } from 'framer-motion';

const Support = () => {
  return (
    <motion.div
      className="py-12 bg-gradient-to-b from-blue-50 to-blue-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image Section */}
        <motion.div
          className="flex-shrink-0 md:w-1/2 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.img
            src="https://www.keg.com/hubfs/shutterstock_1511963099.jpg"
            alt="Academic Support"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <motion.h2
            className="text-4xl font-extrabold text-blue-900 mb-6 text-center md:text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            How We Support You
          </motion.h2>
          <motion.p
            className="text-lg text-textColor mb-8 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            We’re here to ensure your success every step of the way – with expert academic and
            technical support tailored to your needs.
          </motion.p>
        </div>
      </div>

      {/* Support Boxes with Individual Animations */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Academic Support */}
        <motion.div
          className="bg-white shadow-xl rounded-lg p-8 border-l-4 border-blue-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Academic Support</h3>
          <p className="text-textColor">
            Our 200-strong team of expert teachers, subject specialists, and academic leaders are
            here to support you from day one until you matriculate.
          </p>
        </motion.div>

        {/* Technical Support */}
        <motion.div
          className="bg-white shadow-xl rounded-lg p-8 border-l-4 border-blue-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Technical Support</h3>
          <p className="text-textColor">
            Our technical support crew is ready to provide answers to all your questions and solve
            any technical issues you may encounter, all day, in real-time.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Support;
