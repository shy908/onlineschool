import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-extrabold text-blue-800 mb-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          How does online education work at Maduyu Academy?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At Maduyu Academy, we provide a flexible and personalized learning experience, whether you're
          a primary school student, a high school learner, an adult learner seeking literacy or professional
          development, or looking for homeschooling solutions. All our lessons are recorded, allowing students
          to rewatch them anytime for revision.
        </motion.p>
      </div>

      {/* Education Levels Section */}
      <motion.div
        className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-12"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Education Levels</h3>
        <p className="text-gray-600 mb-8">
          Maduyu Academy offers online schooling for learners of all ages and education levels. From homeschooling
          and primary education to secondary, high school, adult literacy, and professional courses, we cater to a variety
          of educational needs.
        </p>
        <ul className="space-y-6">
          {['Homeschooling (Flexible Learning)', 'Primary Education (Grade 1 to 7)', 'Secondary Education (Form 1 to 4)', 'High School (Form 5 and 6)', 'Adult Literacy & Professional Courses'].map(
            (level, index) => (
              <li key={index} className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-4 text-lg text-gray-700">{level}</span>
              </li>
            )
          )}
        </ul>
      </motion.div>

      {/* Subjects Section */}
      <motion.div
        className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Subjects</h3>
        <p className="text-gray-600 mb-8">
          We offer a wide range of subjects to ensure learners receive a well-rounded education, whether you're in
          primary school, secondary, high school, or an adult learner pursuing professional development. Here are some of the subjects we cover:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-lg">
          {[
            'Mathematics',
            'English Language',
            'Shona',
            'Science',
            'Geography',
            'History',
            'Commerce',
            'Accounting',
            'Economics',
            'Business Studies',
            'Agriculture',
            'Physical Education',
            'Computer Science',
            'Art and Design',
            'Music',
            'Food and Nutrition',
            'Technical Graphics',
            'Religious Studies',
            'Biology',
            'Chemistry',
            'Physics',
            'Adult Literacy (Reading and Writing)',
            'Professional Development (Management, Marketing, etc.)',
            'Entrepreneurship',
            'Customer Service',
            'Information Technology (IT)',
            'Human Resources Management',
            'Project Management',
            'Accounting Software (e.g., QuickBooks)',
            'Workplace Communication Skills',
            'Leadership and Teamwork',
            'Health and Safety Management',
          ].map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
