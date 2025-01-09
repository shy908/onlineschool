import React, { useState } from 'react';
import { coursesData } from '../../data/data.js';
import CourseCard from './CourseCard';

const Courses = () => {
  const [visibleCourses, setVisibleCourses] = useState(6); // State for controlling visible courses

  const handleViewMore = () => {
    setVisibleCourses(coursesData.length); // Show all courses when "View More" is clicked
  };

  return (
    <div className="pt-16 pb-16 relative bg-slate-100">
      <div className="w-[80%] pt-8 pb-8 mx-auto">
        <h1 className="text-4xl md:text-5xl text-[#1f5254] font-bold text-center">Our Courses</h1>
        <div className="md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* Render the courses */}
          {coursesData.slice(0, visibleCourses).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View More button */}
        {visibleCourses < coursesData.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleViewMore}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
            >
              View More Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
