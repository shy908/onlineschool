import React from 'react';
import { BsQuote } from 'react-icons/bs';
import Slider from '../Helper/Slider';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const sliderVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#f0f0f0]'>
      <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20'>
        {/* Text Section */}
        <motion.div
          className='xl:col-span-1 mt-6'
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-col'>
              <BsQuote className='h-6 w-6 text-white' />
            </div>
            <h1 className='text-xl text-black font-semibold'>What Students Say</h1>
          </div>
          {/* Title */}
          <h1 className='text-2xl md:text-3xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] text-black'>
            Join Thousands of Successful Learners!
          </h1>
          <p className='text-base text-black text-opacity-80 mt-6'>
            Many students have achieved academic excellence and personal growth through various leading online learning platforms. Hear directly from those who have thrived with the guidance and resources available on these platforms. Your success is just a course away!
          </p>
          {/* Information */}
          <div className='flex items-center space-x-10 mt-8'>
            <p className='text-black font-bold text-5xl'>99%</p>
            <p className='text-black'>
              Students Successfully <br />
              Completed Their Courses
            </p>
          </div>
        </motion.div>

        {/* Slider Section */}
        <motion.div
          className='xl:col-span-2 bg-white rounded-lg overflow-hidden'
          variants={sliderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Slider />
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
