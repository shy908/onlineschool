import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ParentRole() {
  return (
    <div>
      <motion.div
        className="mt-8 py-10 px-8 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }} // Ensure the animation only happens once
      >
        {/* Text Section */}
        <div className="flex-1">
          <motion.h2
            className="text-3xl font-extrabold text-[#1f5152] mb-6 text-center md:text-left"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 120 }}
          >
            Your Role as a Parent
          </motion.h2>
          <motion.p
            className="text-lg text-[#1f5254] mb-6 leading-relaxed text-center md:text-left"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            As a parent, your support plays a crucial role in your child's success.
            You can help by staying engaged, motivating them to stay organized, and
            encouraging their curiosity in learning. Our platform allows you to track
            your child's progress and provide necessary guidance.
          </motion.p>
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.button
              className="mt-4 px-8 py-3 text-white bg-[#1f5152] rounded-lg shadow-md transform hover:bg-[#0d2c2d] hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <motion.img
            src="https://www.asuprepdigital.org/wp-content/uploads/2024/03/how-to-switch-to-online-school.jpg"
            alt="Online School"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>
      </motion.div>

      {/* New Connecting with Teachers Section */}
      <motion.div
        className="mt-8 py-10 px-8 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }} // Ensure the animation only happens once
      >
        {/* Text Section */}
        <div className="flex-1">
          <motion.h2
            className="text-3xl font-extrabold text-[#1f5152] mb-6 text-center md:text-left"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 120 }}
          >
            Connecting with Teachers
          </motion.h2>
          <motion.p
            className="text-lg text-[#1f5254] mb-6 leading-relaxed text-center md:text-left"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            You can reach out to your child’s teachers about anything, at any time.
            You’ll also be invited to teacher/parent meetings at the end of every term.
            Our teachers will also reach out to you if your child needs support to stay on track,
            and we will automatically schedule additional academic support classes to help your child
            achieve their best.
          </motion.p>
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ParentRole;
