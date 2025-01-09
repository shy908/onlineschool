import React from 'react';
import { motion } from 'framer-motion';

const WhatToExpect = () => {
  return (
    <motion.div
      className="py-8 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What to Expect at Maduyu Academy</h2>
        <p className="text-gray-600">
          At Maduyu Academy, we provide an immersive learning experience with a focus on the ZIMSEC curriculum,
          ensuring every student receives the education they deserve.
        </p>
      </div>

      {/* Top Two Boxes */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Dynamic Learning Environment */}
        <motion.div
          className="bg-blue-50 shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">A Dynamic Learning Environment</h3>
          <p className="text-gray-600">
            Expect interactive teacher-led lessons, real-time feedback in live classrooms, and access to 24/7 learning
            content. It’s all designed to make your learning experience exciting and engaging.
          </p>
        </motion.div>

        {/* Quality Teaching */}
        <motion.div
          className="bg-green-50 shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Teaching</h3>
          <p className="text-gray-600">
            With over 200 qualified, SACE-registered teachers, we’re here to help every learner achieve better results
            in the ZIMSEC curriculum.
          </p>
        </motion.div>
      </div>

      {/* Two More Boxes */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Learn Your Way */}
        <motion.div
          className="bg-yellow-50 shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Learn Your Way</h3>
          <p className="text-gray-600">
            Have horse riding first thing? Prefer to attend class at 11am? No problem. You’ll have a daily timetable
            that works for you and lesson recordings and learning material accessible any time.
          </p>
        </motion.div>

        {/* There's Place for Everyone */}
        <motion.div
          className="bg-purple-50 shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">There's Place for Everyone</h3>
          <p className="text-gray-600">
            At Maduyu Academy, everyone gets in! You’ll always be accepted and placed in the correct grade based on
            your previous school report. Our learning platform and formats are designed to suit diverse learning
            styles, abilities, and barriers.
          </p>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="max-w-4xl mx-auto bg-blue-50 shadow-md rounded-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">A Safe, Supportive Environment</h3>
        <p className="text-gray-600">
          Our school provides a secure, supportive online environment free from bullying, discrimination, and other
          barriers, ensuring every learner has the opportunity to succeed.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhatToExpect;
