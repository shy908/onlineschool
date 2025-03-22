import React from 'react';
import { servicesData } from '../../data/data.js';
import ServiceCard from './ServiceCard.jsx';

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-gradient-to-b from-bgLight via-[#f9f9f9] to-bgDark">
      <div className="w-[80%] mx-auto">
        <h1 className="text-4xl md:text-5xl text-primary font-bold text-center font-sans">
          Our Services
        </h1>
        <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
