import React, { useState, useRef, useEffect } from 'react';
import HomeSchooling from './HomeSchooling';
import PrimaryEducation from './PrimaryEducation';
import SecondaryEducation from './SecondaryEducation';
import HighSchoolEducation from './HighSchoolEducation';
import ProfessionalCourses from './ProfessionalCourses';
import AdultLiteracyEducation from './AdultLiteracyEducation';

const AllServices = () => {
  const [activeTab, setActiveTab] = useState('homeSchooling');

  const sectionsRef = {
    homeSchooling: useRef(null),
    primaryEducation: useRef(null),
    secondaryEducation: useRef(null),
    highSchoolEducation: useRef(null),
    professionalCourses: useRef(null),
    adultLiteracyEducation: useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'homeSchooling':
        return <HomeSchooling />;
      case 'primaryEducation':
        return <PrimaryEducation />;
      case 'secondaryEducation':
        return <SecondaryEducation />;
      case 'highSchoolEducation':
        return <HighSchoolEducation />;
      case 'professionalCourses':
        return <ProfessionalCourses />;
      case 'adultLiteracyEducation':
        return <AdultLiteracyEducation />;
      default:
        return <HomeSchooling />;
    }
  };

  return (
    <div className="py-16 bg-bgLight">
      {/* Tab Navigation */}
      <div className="tabs-navigation sticky top-20 bg-white shadow-md z-10 mb-8 flex overflow-x-auto whitespace-nowrap scrollbar-hide">
        {Object.keys(sectionsRef).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              const section = sectionsRef[tab].current;
              section && section.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-6 py-3 text-sm md:text-base lg:text-lg rounded-lg font-semibold transition-colors duration-300 ${
              activeTab === tab
                ? 'text-primary border-b-2 border-primary'
                : 'text-textColor hover:bg-secondary hover:text-white'
            }`}
          >
            {tab.replace(/([A-Z])/g, ' $1').toUpperCase()}
          </button>
        ))}
      </div>

      {/* Tab Content Sections */}
      <div className="tab-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div id="homeSchooling" ref={sectionsRef.homeSchooling} className="scroll-section">
          <HomeSchooling />
        </div>
        <div id="primaryEducation" ref={sectionsRef.primaryEducation} className="scroll-section">
          <PrimaryEducation />
        </div>
        <div id="secondaryEducation" ref={sectionsRef.secondaryEducation} className="scroll-section">
          <SecondaryEducation />
        </div>
        <div id="highSchoolEducation" ref={sectionsRef.highSchoolEducation} className="scroll-section">
          <HighSchoolEducation />
        </div>
        <div id="professionalCourses" ref={sectionsRef.professionalCourses} className="scroll-section">
          <ProfessionalCourses />
        </div>
        <div id="adultLiteracyEducation" ref={sectionsRef.adultLiteracyEducation} className="scroll-section">
          <AdultLiteracyEducation />
        </div>
      </div>
    </div>
  );
};

export default AllServices;
