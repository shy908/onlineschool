import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaSchool } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="py-16 bg-gray-100">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto"
      >
        <Tilt>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="shadow-lg"
          >
            <img
              src="https://thumbs.dreamstime.com/b/excited-black-schoolgirl-holding-book-pencil-over-yellow-background-african-american-elementary-pupil-ready-to-answer-question-335515223.jpg"
              alt="Excited student ready to learn"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </Tilt>
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <FaSchool className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-[#1f5156] font-semibold">
              Comprehensive Learning for Grades R to 12
            </h1>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-5xl mt-8 font-bold md:leading-[3rem] text-[#1f5255]"
          >
            Explore Engaging Lessons and Fun Activities
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            className="mt-8 mb-6"
          >
            <h1 className="text-lg md:text-2xl text-gray-800 font-semibold">
              Learn and Grow with Tailored Content
            </h1>
            <p className="text-sm md:text-base text-gray-700 mt-4">
              From foundational skills to advanced topics, our platform offers resources
              designed to make learning exciting and effective for students of all levels.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
