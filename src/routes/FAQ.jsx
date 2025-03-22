import React, { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is there orientation for new learners?",
      answer:
        "Yes, there is a school orientation for all new learners at Maduyu Academy. This orientation is designed to provide them with everything they need to ensure a smooth and successful academic journey. It covers how to navigate the platform, access their lessons and learning content, and get comfortable with the online learning environment.",
    },
    {
      question: "When will learners receive their stationery and textbook lists?",
      answer:
        "Once learners are registered at Maduyu Academy, they will receive their stationery and textbook lists to help them prepare for the school year. This ensures they have everything they need for a successful start.",
    },
    {
      question: "Are textbooks required or is everything online?",
      answer:
        "While all subject content is integrated into our online learning platform, certain subjects still require textbooks. You can find these on the grade-specific textbook lists provided.",
    },
    {
      question: "If a student misses a live class, how do they catch up the lesson?",
      answer:
        "After each live lesson, learners have access to the lesson recordings, allowing them to re-watch the lessons as often as needed. This helps reinforce learning and provides flexibility for review.",
    },
    {
      question: "Are your lessons recorded for viewing at a later stage?",
      answer:
        "All lessons, including the live lessons, are recorded and available on the online learning platform for viewing 24/7.",
    },
    {
      question: "What are your school hours/ how long is the school day?",
      answer: "07:45 – 14:15 (These times vary slightly according to school and phase).",
    },
    {
      question: "Do learners get breaks between lessons?",
      answer:
        "Yes, learners have breaks between lessons. Each class includes a 5 to 10-minute break, and there is also a designated break time every day. The length of breaks may vary depending on the grade level, ensuring learners have time to rest and recharge.",
    },
    {
      question: "Does Maduyu Academy have a Code of Conduct?",
      answer:
        "Yes, Maduyu Academy has a Code of Conduct, which is outlined in the Terms and Conditions available on our website.",
    },
    {
      question: "What is the duration of a live lesson at Maduyu Academy?",
      answer:
        "Live lessons at Maduyu Academy typically range from 30 to 45 minutes, depending on the grade level of the learner.",
    },
    {
      question: "When will learners get their timetables?",
      answer:
        "Timetables are available weekly in the learner's calendar in our online learning platform.",
    },
    {
      question: "What will happen if there is loadshedding and the teacher can’t present a lesson?",
      answer:
        "In the event of load shedding, teachers will post an announcement in the course (provided they still have signal) and will upload a recording of the lesson as soon as possible.",
    },
    {
      question: "How does Maduyu Academy prevent cheating during online examinations?",
      answer:
        "We use world-class online proctoring software to ensure academic integrity during all online examinations, including those for ZIMSEC certification.",
    },
    {
      question: "Is there a lot of homework?",
      answer:
        "The amount of homework assigned varies by subject and is designed to align with curriculum requirements. Each piece of homework is prescribed to support learners in their studies effectively.",
    },
    {
      question: "How do the teachers communicate extra information to learners?",
      answer:
        "Teachers will communicate through the ‘Announcements’ section of each course or via the online learning platform inbox. Messages may be sent to individual learners or to the entire class. It’s important for both learners and parents to check these regularly to stay informed.",
    },
  ];
  return (
    <div className="faq-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <h2 className="text-3xl font-semibold mb-8 text-center text-primary">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="faq-item border-b border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left py-4 px-6 text-xl font-medium text-textColor hover:bg-[#f1f1f1] focus:outline-none flex justify-between items-center"
            >
              <span>{item.question}</span>
              <span className="ml-2">
                {activeIndex === index ? (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-up"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <polyline points="18 15 10 9 2 15"></polyline>
                  </motion.svg>
                ) : (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-down"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <polyline points="18 5 10 11 2 5"></polyline>
                  </motion.svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <motion.div
                className="px-6 py-4 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;