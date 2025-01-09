import React from "react";
import { FaArrowRight, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is visible
    triggerOnce: true, // Animation occurs only once
  });

  return (
    <div
      ref={ref}
      className="py-16 bg-gradient-to-b from-white via-[#f9f9f9] to-[#eef2f5]"
    >
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#ffdd40] rounded-full flex items-center justify-center">
              <FaAward className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-[#1f5156] font-semibold">
              Your Success, Our Commitment
            </h1>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 font-bold leading-tight text-[#1f5156]">
            Learn Anytime, Anywhere.
          </h1>
          <p className="mt-4 text-[#1f5154] text-base lg:text-lg">
            Our mission is to provide a personalized and high-quality learning
            experience that nurtures curiosity, fosters academic excellence, and
            equips students with the skills for lifelong success. Whether you're
            beginning your educational journey or preparing for higher studies,
            MADUYU ACADEMY is here to guide you every step of the way.
          </p>
          <Link
            to="/contact"
            className="text-white bg-[#1f5152] hover:bg-[#0d2c2d] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-lg rounded-xl sm:w-auto group"
          >
            Learn More
            <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div>
            {/* Card 1 */}
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold text-[#1f5152] opacity-5">
                01
              </h1>
              <div className="-mt-10">
                <h1 className="text-xl text-opacity-70 mb-3 text-black font-bold">
                  Flexible Schedule
                </h1>
                <p className="w-[90%] lg:w-[70%] text-base text-[#1f5254] font-semibold opacity-70">
                  Enjoy the freedom to learn at your own pace, whenever it fits
                  your schedule. Whether you're a busy professional or a
                  student, our flexible learning options let you progress at
                  your own speed.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="mt-8 w-full">
              <h1 className="text-6xl lg:text-7xl font-bold text-[#1f5152] opacity-5">
                02
              </h1>
              <div className="-mt-10">
                <h1 className="text-xl text-opacity-70 mb-3 text-black font-bold">
                  Affordable Pricing
                </h1>
                <p className="w-[90%] lg:w-[70%] text-base text-[#1f5254] font-semibold opacity-70">
                  Quality education should be accessible to everyone. Our
                  affordable pricing ensures you can get started or enhance your
                  skills without breaking the bank, with options to suit any
                  budget.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
