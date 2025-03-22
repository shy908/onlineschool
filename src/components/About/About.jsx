import React from "react";
import { FaArrowRight, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="py-16 bg-gradient-to-b from-white via-bgLight to-bgDark"
    >
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <FaAward className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-lg text-textColor font-semibold">
              Your Success, Our Commitment
            </h1>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-textColor">
            Learn Anytime, Anywhere.
          </h1>
          <p className="mt-4 text-lightText text-base lg:text-lg leading-relaxed">
            Our mission is to provide a personalized and high-quality learning
            experience that nurtures curiosity, fosters academic excellence, and
            equips students with the skills for lifelong success. Whether
            you're beginning your educational journey or preparing for higher
            studies, MADUYU ACADEMY is here to guide you every step of the way.
          </p>
          <Link
            to="/contact"
            className="text-white bg-primary hover:bg-secondary inline-flex items-center justify-center
             w-full px-6 py-3 mt-6 text-lg shadow-md rounded-lg sm:w-auto transition-all group"
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
              <h1 className="text-6xl lg:text-7xl font-bold text-textColor opacity-10 tracking-wide">
                01
              </h1>
              <div className="-mt-10">
                <h2 className="text-lg font-bold text-textColor mb-2">
                  Flexible Schedule
                </h2>
                <p className="w-[90%] lg:w-[70%] text-sm sm:text-base text-lightText">
                  Enjoy the freedom to learn at your own pace, whenever it fits
                  your schedule. Whether you're a busy professional or a
                  student, our flexible learning options let you progress at
                  your own speed.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="mt-10">
              <h1 className="text-6xl lg:text-7xl font-bold text-textColor opacity-10 tracking-wide">
                02
              </h1>
              <div className="-mt-10">
                <h2 className="text-lg font-bold text-textColor mb-2">
                  Affordable Pricing
                </h2>
                <p className="w-[90%] lg:w-[70%] text-sm sm:text-base text-lightText">
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
