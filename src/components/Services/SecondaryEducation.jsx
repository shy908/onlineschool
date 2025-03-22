import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryEducation = () => {
  return (
    <div className="pt-16 pb-16 bg-gradient-to-b from-bgLight via-[#f9f9f9] to-bgDark">
      <div className="w-[80%] mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl text-primary font-bold text-center font-sans">
          Secondary Education at Maduyu Academy
        </h1>

        {/* Subject Sections */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold text-primary text-center">
            Our Secondary Subjects
          </h2>

          <p className="text-lg text-textColor font-serif mt-4 text-center">
            A rich selection of subjects to guide students in discovering their interests and excelling in their academic journey.
          </p>

          {/* Core and Elective Subjects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Core Subjects */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4">Core Subjects</h3>
              <ul className="list-disc pl-6 text-lg text-textColor space-y-2">
                <li>English</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>Biology</li>
                <li>Geography</li>
                <li>History</li>
                <li>Physics</li>
                <li>Chemistry</li>
              </ul>
            </div>

            {/* Elective Subjects */}
            <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-secondary mb-4">Elective Subjects</h3>
              <ul className="list-disc pl-6 text-lg text-textColor space-y-2">
                <li>Shona</li>
                <li>Heritage</li>
                <li>Family and Religious Studies</li>
                <li>Commerce</li>
                <li>Accounts</li>
                <li>Business Studies</li>
                <li>Physical Education (PE)</li>
                <li>Fashion (Textile Technology and Design)</li>
                <li>Building Technology Design</li>
                <li>Crop Science</li>
              </ul>
            </div>
          </div>
        </section>

        {/* About the Curriculum Section */}
        <section className="mt-12 text-center">
          <p className="text-lg text-textColor font-serif px-4 md:px-8">
            At Maduyu Academy, our secondary education curriculum offers a broad and engaging selection of subjects designed to develop both academic excellence and practical skills. By combining core subjects with various electives, students can explore different fields while building a strong foundation for their future studies and careers.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="mt-12 text-center">
          <p className="text-lg text-textColor font-serif mb-4">
            Ready to take the next step in your academic journey?
          </p>
          <Link to='/contact'>
          <button className="mt-6 px-8 py-3 bg-primary text-white font-bold text-lg rounded-full shadow-md hover:bg-primary-dark transition-transform duration-300 hover:scale-105">
            Enroll Today
          </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default SecondaryEducation;
