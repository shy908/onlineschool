import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MakingChoice() {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-10 px-6 mt-10 bg-gray-100 rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <motion.h2
        className="text-3xl font-bold text-[#1f5152] mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Making the Right Choice
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-[#1f5254] mb-6 leading-relaxed text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Choosing the right educational platform is an important decision. With
        our variety of courses and flexible learning options, you can trust
        that you are making a choice that will help you achieve your personal
        and academic goals. Let us guide you on this learning journey.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.div
        className="text-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        viewport={{ once: true }}
      >
        <Link
          to="/courses"
          className="inline-block px-8 py-3 text-lg font-medium text-white bg-[#1f5152] rounded-lg shadow-md hover:bg-[#0d2c2d] transition-transform transform hover:scale-105"
        >
          Explore Our Courses
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default MakingChoice;
