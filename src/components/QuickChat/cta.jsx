import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div
      className="w-full flex items-center justify-center text-white py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8IWbST-0Lnve7JGMrhm9tiqI9ODrkeA2wQ&s')`,
      }}
    >
      <div className="mx-8 w-full max-w-7xl text-center lg:text-left px-6 lg:px-12 flex flex-col lg:flex-row lg:justify-between items-center bg-black bg-opacity-50 py-12 rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="lg:max-w-3xl mb-8 lg:mb-0">
          <p className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
            Transform Your Learning Experience Online!
          </p>
          <p className="text-lg md:text-2xl">
            Join <span className="font-extrabold text-secondary">MADUYU ACADEMY</span>, your gateway to interactive online schooling. 
            Explore exciting subjects, learn from passionate educators, and unlock your potential—all from the comfort of your home!
          </p>
        </div>

        {/* Button Section */}
        <div className="w-full lg:w-auto">
          <Link
            to="/contact"
            className="flex items-center justify-center bg-primary text-bgLight font-semibold text-base md:text-lg rounded-lg py-3 px-8 shadow-lg transition-transform transform hover:scale-105 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Contact Us
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-2 duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
