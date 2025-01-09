import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <div className="w-full pt-6 md:pt-8 lg:pt-10 bg-slate-100 overflow-visible min-h-screen flex items-start">
      <div className="flex justify-center flex-col w-4/5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;

