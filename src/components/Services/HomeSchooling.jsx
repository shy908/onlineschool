import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img5.jpg';

const HomeSchooling = () => {
  return (
    <div className="pt-16 pb-16 bg-gradient-to-b from-gray-100 via-white to-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl sm:text-3xl md:text-5xl text-primary font-extrabold leading-tight animate-fadeIn">
            Home Schooling at Maduyu Academy
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Personalized and flexible education programs designed for learners in a home environment. Tailored to meet each student's individual needs, Maduyu Academy offers a diverse range of subjects and programs.
          </p>
        </header>

        {/* Hero Image */}
        <div className="mt-10">
        <img
        src={img1}
        alt="A child learning at home through Maduyu Academy's homeschooling program"
        className="w-full h-100 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
      />

        </div>

        {/* How It Works Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-primary">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our homeschooling program offers one-on-one learning, where we customize the curriculum to your child's learning style. This includes hands-on experiences, digital tools, and resources to enhance their education.
          </p>
        </section>

        {/* Offerings Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-primary">Our Offerings</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-2xl font-semibold text-secondary">Core Subjects</h3>
              <ul className="mt-4 list-disc pl-6 text-lg text-gray-600 space-y-2">
                <li>Mathematics (various levels)</li>
                <li>English Language Arts (reading, writing, grammar)</li>
                <li>Science (biology, chemistry, physics)</li>
                <li>Social Studies (history, geography, civics)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-secondary">Elective Courses</h3>
              <ul className="mt-4 list-disc pl-6 text-lg text-gray-600 space-y-2">
                <li>Foreign Languages (Spanish, French, Mandarin)</li>
                <li>Arts and Music (painting, drawing, piano)</li>
                <li>Physical Education and Health</li>
                <li>Computer Programming and Coding</li>
                <li>Business and Entrepreneurship</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold text-secondary">Specialized Programs</h3>
              <ul className="mt-4 list-disc pl-6 text-lg text-gray-600 space-y-2">
                <li>Gifted and Talented: accelerated learning for advanced students</li>
                <li>Special Needs: tailored support for students with disabilities</li>
                <li>English as a Second Language (ESL): language support for non-native speakers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-secondary">Additional Services</h3>
              <ul className="mt-4 list-disc pl-6 text-lg text-gray-600 space-y-2">
                <li>Personalized Learning Plans</li>
                <li>Regular Progress Reports</li>
                <li>Parent Support and Resources</li>
                <li>Online Community for Students and Parents</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold text-secondary">Technology Integration</h3>
              <ul className="mt-4 list-disc pl-6 text-lg text-gray-600 space-y-2">
                <li>Online Learning Platform</li>
                <li>Virtual Classrooms and Live Instruction</li>
                <li>Digital Tools and Educational Apps</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-secondary">Assessment and Evaluation</h3>
              <ul className="mt-4 list-disc pl-6 text-lg text-gray-600 space-y-2">
                <li>Standardized Testing</li>
                <li>Project-Based Evaluations</li>
                <li>Portfolio Development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="mt-16 text-center">
          <p className="text-lg text-gray-600 font-serif">
            By offering a comprehensive and flexible homeschooling program, Maduyu Academy provides students with a high-quality education tailored to their individual needs and goals.
          </p>
          <p className="mt-8 text-xl font-semibold text-gray-700">
            Ready to unlock extraordinary?
          </p>
          <div className="mt-6 space-x-4">
            <Link to="/contact">
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-primary-dark hover:scale-105 transition-transform duration-300">
                Enrol Now
              </button>
            </Link>
            <Link to="/how-it-works">
              <button className="px-6 py-3 border border-primary text-primary font-semibold rounded-full shadow-md hover:bg-primary hover:text-white hover:scale-105 transition-transform duration-300">
                How It Works
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeSchooling;
