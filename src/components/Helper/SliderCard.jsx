import React from 'react';
import { FaStar } from 'react-icons/fa';

const SliderCard = ({ name, image, role, comment, rating }) => {
  // Generate stars based on rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
    />
  ));

  return (
    <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-md bg-white max-w-md mx-auto transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Image Section */}
      <div className="w-40 h-40 overflow-hidden rounded-full border-2 border-primary">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{role}</p>
      </div>

      {/* Comment */}
      <p className="text-center text-gray-600 italic mt-2">"{comment}"</p>

      {/* Star Rating */}
      <div className="flex space-x-1">{stars}</div>
    </div>
  );
};

export default SliderCard;
