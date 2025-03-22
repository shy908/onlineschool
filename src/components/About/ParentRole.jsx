import React from "react";
import { motion } from "framer-motion";

function ParentRole() {
  return (
    <div className="bg-gray-50 py-10">
      {/* Your Role as a Parent Section */}
      <motion.div
        className="py-10 px-8 bg-white rounded-lg shadow-lg max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {/* Text Section */}
        <div className="flex-1">
          <motion.h2
            className="text-4xl font-bold text-[#1f5152] mb-6 text-center md:text-left"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            Your Role as a Parent
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6 leading-relaxed text-center md:text-left"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            As a parent, your involvement is critical for your child's success. Stay engaged, keep them motivated, and track their progress using our platform. Together, we can foster a love for learning.
          </motion.p>
          <motion.button
            className="px-8 py-3 text-white bg-primary rounded-lg shadow-lg hover:bg-secondary hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
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

      {/* Connecting with Teachers Section */}
      <motion.div
        className="mt-12 py-10 px-8 bg-white rounded-lg shadow-lg max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {/* Text Section */}
        <div className="flex-1">
          <motion.h2
            className="text-4xl font-bold text-primary mb-6 text-center md:text-left"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            Connecting with Teachers
          </motion.h2>
          <motion.p
            className="text-lg text-textColor mb-6 leading-relaxed text-center md:text-left"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Stay in touch with your child’s teachers anytime and participate in term-end meetings. If your child needs support, our teachers will assist by scheduling extra academic sessions to ensure their progress.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default ParentRole;
