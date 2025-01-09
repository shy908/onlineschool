import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          How does online school work?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At Maduyu Academy, learning happens online, providing your child with the flexibility to
          learn from the comfort of their home, guided by experienced teachers. All lessons are
          recorded, allowing students to rewatch them anytime for revision.
        </motion.p>
      </div>

      {/* Grades Section */}
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Grades</h3>
        <p className="text-gray-600 mb-6">
          Maduyu Academy offers online schooling for learners from Early Childhood Development (ECD)
          to Form 6, in English and Shona.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 text-blue-500 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="ml-4 text-gray-700">ECD (Early Childhood Development)</span>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 text-blue-500 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="ml-4 text-gray-700">Primary School (Grade 1 to 7)</span>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 text-blue-500 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="ml-4 text-gray-700">High School (Form 1 to 6)</span>
          </li>
        </ul>
      </motion.div>

      {/* Curriculums Section */}
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Curriculums</h3>
        <p className="text-gray-600 mb-6">
          Our curriculum is based on the ZIMSEC framework, ensuring learners are well-prepared for
          their national examinations. We also offer Cambridge options for advanced levels.
        </p>
        <p className="text-gray-600 mb-6">
          From Form 1, learners are introduced to subject specializations tailored to their academic
          and career goals.
        </p>
      </motion.div>

      {/* Subjects Section */}
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Subjects</h3>
        <p className="text-gray-600 mb-6">
          We offer a wide range of subjects to ensure learners receive a holistic education. From
          ECD to Form 6, in English and Shona, here are some of the subjects available:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <li>Mathematics</li>
          <li>English Language</li>
          <li>Shona</li>
          <li>Science</li>
          <li>Geography</li>
          <li>History</li>
          <li>Commerce</li>
          <li>Accounting</li>
          <li>Economics</li>
          <li>Business Studies</li>
          <li>Agriculture</li>
          <li>Physical Education</li>
          <li>Computer Science</li>
          <li>Art and Design</li>
          <li>Music</li>
          <li>Food and Nutrition</li>
          <li>Technical Graphics</li>
          <li>Religious Studies</li>
          <li>Biology</li>
          <li>Chemistry</li>
          <li>Physics</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
