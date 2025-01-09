import React from 'react';
import { FaFile, FaStar } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; 

const CourseCard = ({ course }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when the card comes into view
    threshold: 0.1, // Start the animation when 10% of the card is in view
  });

  return (
    <Tilt>
      <motion.div
        ref={ref} // Attach the inView hook to the div
        className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }} // Initial state (invisible, scaled down)
        animate={{
          opacity: inView ? 1 : 0, // Animate opacity when in view
          scale: inView ? 1 : 0.8, // Animate scale when in view
        }}
        transition={{ duration: 0.6 }} // Transition duration for smooth animation
      >
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-60 object-cover"
          />
          <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md">
            {course.category}
          </span>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
          <p className="text-sm text-gray-500 mt-2">By {course.author}</p>
          <div className="flex items-center mt-4 space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="w-4 h-4 text-yellow-500" />
              ))}
              <span className="text-sm text-orange-500 font-bold">
                ({course.reviewNumber} Reviews)
              </span>
            </div>
          </div>
          <div className="mt-6 w-full h-[2px] bg-gray-200"></div>
          <div className="flex mt-6 justify-between">
            <div className="flex items-center space-x-2">
              <FaFile className="w-5 h-5 text-blue-600" />
              <p className="text-sm font-semibold text-gray-700">{course.lessons} Lessons</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaUserGroup className="w-5 h-5 text-blue-600" />
              <p className="text-sm font-semibold text-gray-700">{course.students} Students</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default CourseCard;
