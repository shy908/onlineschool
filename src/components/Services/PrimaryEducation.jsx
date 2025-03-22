import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryEducation = () => {
  return (
    <div className="pt-16 pb-16 bg-gradient-to-b from-bgLight via-[#f9f9f9] to-bgDark">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary font-bold text-center font-sans">
          Primary Education at Maduyu Academy
        </h1>
        <img
          src="https://images.pexels.com/photos/5905868/pexels-photo-5905868.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Primary Education"
          className="w-full h-auto object-cover mt-6 rounded-lg shadow-lg"
        />
        <p className="mt-6 text-base sm:text-lg md:text-xl text-textColor font-serif text-center leading-relaxed">
          Where curiosity meets creativity – Maduyu Academy equips young learners with the skills and confidence to excel in an ever-changing world.
        </p>

        {/* Subjects Section */}
        <section className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">
            Comprehensive Subject Offerings
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-textColor font-serif mt-4 text-center leading-relaxed">
            We provide a balanced mix of core and elective subjects to nurture both academic and creative abilities.
          </p>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mt-8">
            {/* Core Subjects */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">Core Subjects</h3>
              <ul className="list-disc pl-6 text-base sm:text-lg text-textColor space-y-2">
                <li>Mathematics</li>
                <li>English</li>
                <li>Indigenous Languages (Shona & Ndebele)</li>
                <li>Heritage Studies</li>
                <li>Science & Technology</li>
              </ul>
            </div>
            {/* Elective Subjects */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">Elective Subjects</h3>
              <ul className="list-disc pl-6 text-base sm:text-lg text-textColor space-y-2">
                <li>ICT (Information and Communication Technology)</li>
                <li>Agriculture</li>
                <li>Fareme</li>
                <li>Physical Education (P.E.)</li>
                <li>Creative Arts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">
            Why Choose Maduyu Academy?
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mt-8">
            {[
              {
                title: 'Personalized Learning',
                description:
                  'Tailored educational plans to meet the individual needs of every child, fostering both academic and personal growth.',
              },
              {
                title: 'Skill-Based Curriculum',
                description:
                  'Emphasis on practical skills and critical thinking, preparing students for real-world challenges and opportunities.',
              },
              {
                title: 'Nurturing Environment',
                description:
                  'A supportive atmosphere that encourages creativity, collaboration, and a love for lifelong learning.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-secondary">{item.title}</h3>
                <p className="mt-4 text-base sm:text-lg text-textColor leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="mt-12 text-center">
          <p className="text-base sm:text-xl text-textColor font-serif font-semibold leading-relaxed">
            Join us at Maduyu Academy and set your child on a path to success!
          </p>
          <Link to="/contact" aria-label="Go to contact page to enroll">
            <button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-primary text-white font-bold text-base sm:text-lg rounded-full shadow-md hover:bg-primary-dark transition-transform duration-300 hover:scale-105">
              Enroll Today
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default PrimaryEducation;
