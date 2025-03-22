import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    // Use encodeURIComponent to handle spaces and special characters
    const formattedTitle = encodeURIComponent(service.title.toLowerCase().replace(' ', '-'));
    navigate(`/service/${formattedTitle}`);
  };

  const handleEnrollNow = () => {
    // Navigate to the Contact page
    navigate('/contact');
  };

  return (
    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Image Section */}
        <div className="relative">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 font-sans">
            {service.title}
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-serif">
            {service.description}
          </p>
          <div className="mt-6 flex gap-4">
            {/* Learn More Button */}
            <button
              onClick={handleLearnMore}
              className="px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-all duration-300 ease-in-out"
            >
              Learn More
            </button>

            {/* Enroll Now Button */}
            <button
              onClick={handleEnrollNow}
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
