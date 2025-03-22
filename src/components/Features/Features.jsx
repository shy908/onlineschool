import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
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
    <div className="py-16 bg-gradient-to-b from-bgLight via-bgDark to-[#e2e7ec]">
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
            className="shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://thumbs.dreamstime.com/b/excited-black-schoolgirl-holding-book-pencil-over-yellow-background-african-american-elementary-pupil-ready-to-answer-question-335515223.jpg"
              alt="Excited student ready to learn"
              className="w-full h-full object-cover"
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
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <FaChalkboardTeacher className="h-6 w-6 text-yellow-500" />
            </div>
            <h1 className="text-xl text-primary font-semibold font-sans">
              Comprehensive Learning for all levels
            </h1>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-5xl mt-8 font-bold md:leading-[3rem] text-primary"
          >
            Explore Engaging Lessons and Fun Activities
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            className="mt-8 mb-6"
          >
            <div className="flex items-center space-x-4">
              <FaBook className="h-8 w-8 text-blue-500" />
              <h1 className="text-lg md:text-2xl text-gray-800 font-semibold">
                Learn and Grow with Tailored Content
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-700 mt-4">
              From foundational skills to advanced topics, our platform offers resources
              designed to make learning exciting and effective for students of all levels.
            </p>
          </motion.div>

          {/* Additional Features with Icons and Different Colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            className="mt-8 mb-6"
          >
            <div className="flex items-center space-x-4">
              <FaUsers className="h-8 w-8 text-green-500" />
              <h1 className="text-lg md:text-2xl text-gray-800 font-semibold">
                Interactive Learning and Real-Time Feedback
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-700 mt-4">
              Our platform incorporates quizzes, interactive lessons, and instant feedback to
              keep students engaged and help them track their progress in real time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
            className="mt-8 mb-6"
          >
            <div className="flex items-center space-x-4">
              <FaBook className="h-8 w-8 text-red-500" />
              <h1 className="text-lg md:text-2xl text-gray-800 font-semibold">
                Personalized Learning Paths
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-700 mt-4">
              Content is tailored to match each student's learning pace and preferences, ensuring
              that no one is left behind, and everyone gets the support they need to succeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
            className="mt-8 mb-6"
          >
            <div className="flex items-center space-x-4">
              <FaUsers className="h-8 w-8 text-purple-500" />
              <h1 className="text-lg md:text-2xl text-gray-800 font-semibold">
                Collaboration and Community Support
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-700 mt-4">
              Students can interact with peers and instructors, collaborate on projects, and join
              discussions to enhance their learning experience and build a supportive community.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
