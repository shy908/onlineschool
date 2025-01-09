import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HeroContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:items-start">
        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight text-[#1f5156] text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Tomorrow's Leaders Through Online Learning
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-5 text-sm md:text-base text-[#1f5156] text-opacity-100 text-center lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          At MADUYU ACADEMY, we are committed to empowering learners through
          innovative and flexible online education. As a leading homeschooling
          platform, we offer a comprehensive curriculum for students at every
          stage — from primary education to secondary and A-levels.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-md w-full sm:w-auto text-center"
            aria-label="Get Started"
          >
            Get Started
          </Link>
          <Link
            to="/how-it-works"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-md w-full sm:w-auto text-center"
            aria-label="Learn More"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Statistics */}
        <motion.div
          ref={ref}
          className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {/* Tutors */}
          <div className="text-center lg:text-left">
            <p className="text-base md:text-xl lg:text-2xl text-[#1f5156] font-bold">
              {inView && <CountUp start={0} end={200} duration={2} suffix="+" />}
            </p>
            <div className="w-[80px] h-[3px] bg-green-400 mx-auto lg:mx-0 mt-2 mb-2 rounded-lg"></div>
            <p className="text-sm md:text-lg text-[#1f5156] opacity-80">
              Tutors
            </p>
          </div>

          {/* Students */}
          <div className="text-center lg:text-left">
            <p className="text-base md:text-xl lg:text-2xl text-[#1f5156] font-bold">
              {inView && (
                <CountUp start={0} end={2000} duration={2.5} suffix="+" />
              )}
            </p>
            <div className="w-[80px] h-[3px] bg-yellow-500 mx-auto lg:mx-0 mt-2 mb-2 rounded-lg"></div>
            <p className="text-sm md:text-lg text-[#1f5156] opacity-80">
              Students
            </p>
          </div>

          {/* Subjects */}
          <div className="text-center lg:text-left">
            <p className="text-base md:text-xl lg:text-2xl text-[#1f5156] font-bold">
              {inView && <CountUp start={0} end={12} duration={1.5} suffix="+" />}
            </p>
            <div className="w-[80px] h-[3px] bg-red-400 mx-auto lg:mx-0 mt-2 mb-2 rounded-lg"></div>
            <p className="text-sm md:text-lg text-[#1f5156] opacity-80">
              Subjects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContent;
