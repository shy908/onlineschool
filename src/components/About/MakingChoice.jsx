import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MakingChoice() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-12 px-8 mt-12 bg-gray-100 rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <motion.h2
        className="text-4xl font-semibold text-primary mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Making the Right Choice
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-textColor mb-8 leading-relaxed text-center"
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
          to="/services"
          className="inline-block px-10 py-4 text-lg font-medium text-white bg-primary rounded-lg shadow-md
           hover:bg-secondary transition-transform transform hover:scale-105"
        >
          Explore Our Services
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default MakingChoice;
