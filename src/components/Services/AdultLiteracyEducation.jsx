import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';  // Import checkmark icon

const AdultLiteracyEducation = () => {
  return (
    <div className="pt-16 pb-16 bg-gradient-to-b from-bgLight via-[#f9f9f9] to-bgDark">
      <div className="w-[80%] mx-auto">
        <h1 className="text-4xl md:text-5xl text-primary font-bold text-center font-sans mb-12">
          Adult Literacy Education Program
        </h1>

        {/* Core Subjects Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Core Subjects</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-3" /> Adult Literacy
              </h3>
              <p className="text-lg text-textColor">Foundational reading and writing skills to empower adult learners with essential literacy skills.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-3" /> Basic Mathematics
              </h3>
              <p className="text-lg text-textColor">Essential numeracy skills, including fractions, decimals, and algebra to ensure confidence in mathematical tasks.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-3" /> English Communication Skills
              </h3>
              <p className="text-lg text-textColor">Verbal and written communication, focusing on grammar, vocabulary, and comprehension to improve everyday communication.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-3" /> Science and General Knowledge
              </h3>
              <p className="text-lg text-textColor">Introduction to science, history, geography, and cultural studies to foster a broader understanding of the world.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-3" /> Fact Checking and Research
              </h3>
              <p className="text-lg text-textColor">Critical thinking and information literacy skills to assess the credibility of information and sources.</p>
            </div>
          </div>
        </section>

        {/* Digital Literacy Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Digital Literacy</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-3" /> Computer Literacy
              </h3>
              <p className="text-lg text-textColor">Basic computer skills, including typing, email, and internet navigation to equip learners for the digital world.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-3" /> Online Safety and Security
              </h3>
              <p className="text-lg text-textColor">Best practices for online safety, security, and digital citizenship to protect learners in the online environment.</p>
            </div>
          </div>
        </section>

        {/* Life Skills and Entrepreneurship Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Life Skills and Entrepreneurship</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-3" /> Entrepreneurship Skills
              </h3>
              <p className="text-lg text-textColor">Introduction to business planning, marketing, and management to empower adults with entrepreneurial mindsets.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-3" /> Financial Literacy
              </h3>
              <p className="text-lg text-textColor">Basic personal finance skills, including budgeting and saving, to foster financial independence and security.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <FaCheckCircle className="text-primary mr-3" /> Law and Constitution
              </h3>
              <p className="text-lg text-textColor">Overview of the legal system, human rights, and civic responsibilities to create informed and engaged citizens.</p>
            </div>
          </div>
        </section>

        {/* Program Delivery Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Program Delivery</h2>
          <ul className="list-none pl-0 mt-6 text-lg text-textColor">
            <li className="flex items-center mb-4"><FaCheckCircle className="text-primary mr-3" /> Classroom Instruction: Face-to-face teaching and learning</li>
            <li className="flex items-center mb-4"><FaCheckCircle className="text-primary mr-3" /> Online Learning: Self-paced online courses and resources</li>
            <li className="flex items-center mb-4"><FaCheckCircle className="text-primary mr-3" /> Mentorship and Coaching: One-on-one support and guidance</li>
            <li className="flex items-center mb-4"><FaCheckCircle className="text-primary mr-3" /> Peer Learning and Support: Group discussions and activities</li>
          </ul>
        </section>

        {/* Assessment and Evaluation Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Assessment and Evaluation</h2>
          <ul className="list-none pl-0 mt-6 text-lg text-textColor">
            <li className="flex items-center mb-4"><FaCheckCircle className="text-primary mr-3" /> Formative Assessments: Ongoing evaluations to monitor progress</li>
            <li className="flex items-center mb-4"><FaCheckCircle className="text-primary mr-3" /> Summative Assessments: Final evaluations to measure achievement</li>
            <li className="flex items-center mb-4"><FaCheckCircle className="text-primary mr-3" /> Feedback Mechanisms: Regular feedback from instructors and peers</li>
          </ul>
        </section>

        {/* Certification and Recognition Section */}
        <section className="mt-12 mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Certification and Recognition</h2>
          <ul className="list-none pl-0 mt-6 text-lg text-textColor">
            <li className="flex items-center mb-4"><FaCheckCircle className="text-primary mr-3" /> Certificate of Completion: Awarded upon completing the program</li>
            <li className="flex items-center mb-4"><FaCheckCircle className="text-primary mr-3" /> Recognition of Prior Learning: Credit for existing skills and knowledge</li>
            <li className="flex items-center mb-4"><FaCheckCircle className="text-primary mr-3" /> Pathways to Further Education: Support for pursuing further education and training</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdultLiteracyEducation;
