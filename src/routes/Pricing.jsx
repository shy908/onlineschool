import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const basicSubjects = [
    { range: '1 Subject', priceUSD: '$5', priceZAR: 'R100' },
    { range: '2-3 Subjects', priceUSD: '$10', priceZAR: 'R200' },
    { range: '4-5 Subjects', priceUSD: '$15', priceZAR: 'R300' },
    { range: '6-7 Subjects', priceUSD: '$20', priceZAR: 'R400' },
    { range: '8-10 Subjects', priceUSD: '$30', priceZAR: 'R600' }
  ];

  const premiumSubjects = [
    { range: '1 Subject', priceUSD: '$10', priceZAR: 'R200' },
    { range: '2-3 Subjects', priceUSD: '$25', priceZAR: 'R500' },
    { range: '4-5 Subjects', priceUSD: '$30', priceZAR: 'R600' },
    { range: '6-8 Subjects', priceUSD: '$40', priceZAR: 'R800' },
    { range: '8-10 Subjects', priceUSD: '$60', priceZAR: 'R1200' }
  ];

  const crashCourse = [
    { range: 'O\'Level in 1 Year', priceUSD: '$100', priceZAR: 'R2000' },
    { range: 'A\'Level in 1 Year', priceUSD: '$150', priceZAR: 'R3000' }
  ];

  return (
    <div id="pricing" className="bg-[#f7f8fc] pt-12 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing Plans</h1>
          <p className="text-lg text-gray-600">Choose a plan that best suits your learning needs at Maduyu Academy. We offer affordable packages for both primary, ordinary, and advanced levels.</p>
        </div>

        {/* Basic Plan */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Basic Plan</h2>
          <p className="text-lg text-primary mt-2 mb-6">Primary and Ordinary Level Pricing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          {basicSubjects.map((subject, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{subject.range}</h3>
              <p className="text-lg font-bold text-blue-600">{subject.priceUSD}</p>
              <p className="text-lg text-gray-500">{subject.priceZAR}</p>
            </motion.div>
          ))}
        </div>

        {/* Features for Basic Plan */}
        <div className="mt-12 bg-white shadow-lg rounded-xl p-8 text-center w-full md:w-3/4 lg:w-1/2 mx-auto border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h3>
          <ul className="flex flex-col items-start space-y-3 text-gray-700 text-lg">
            <li>✅ Access to notes and study material</li>
            <li>✅ Online lessons 3 days a week</li>
            <li>✅ Teacher assistance 3 days a week</li>
            <li>✅ Access to all recorded video lessons</li>
            <li>✅ School library access</li>
          </ul>
          <Link to="/contact">
            <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
              Enroll Now
            </button>
          </Link>
        </div>

        {/* Premium Plan */}
        <div className="text-center mt-20 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Premium Plan</h2>
          <p className="text-lg text-primary mt-2 mb-6">Advanced Study Package</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          {premiumSubjects.map((subject, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{subject.range}</h3>
              <p className="text-lg font-bold text-blue-600">{subject.priceUSD}</p>
              <p className="text-lg text-gray-500">{subject.priceZAR}</p>
            </motion.div>
          ))}
        </div>

        {/* Features for Premium Plan */}
        <div className="mt-12 bg-white shadow-lg rounded-xl p-8 text-center w-full md:w-3/4 lg:w-1/2 mx-auto border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h3>
          <ul className="flex flex-col items-start space-y-3 text-gray-700 text-lg">
            <li>✅ Notes and study material</li>
            <li>✅ Online lessons 6 days a week</li>
            <li>✅ Teacher assistance 6 days a week</li>
            <li>✅ Access to recorded lessons</li>
            <li>✅ Library access</li>
            <li>✅ 1-on-1 teacher consultation</li>
          </ul>
          <Link to="/contact">
            <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
              Enroll Now
            </button>
          </Link>
        </div>

        {/* Crash Course */}
        <div className="text-center mt-20 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Crash Course</h2>
          <p className="text-lg text-primary mt-2 mb-6">Intensive Year-long Study Plans</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          {crashCourse.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.range}</h3>
              <p className="text-lg font-bold text-blue-600">{course.priceUSD} per month</p>
              <p className="text-lg text-gray-500">{course.priceZAR} per month</p>
            </motion.div>
          ))}
        </div>

        {/* Features for Crash Course */}
        <div className="mt-12 bg-white shadow-lg rounded-xl p-8 text-center w-full md:w-3/4 lg:w-1/2 mx-auto border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h3>
          <ul className="flex flex-col items-start space-y-3 text-gray-700 text-lg">
            <li>✅ Study O'Level or A'Level in one year</li>
            <li>✅ Monthly payment plan</li>
            <li>✅ Free next-year study if you don't pass</li>
          </ul>
          <Link to="/contact">
            <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
