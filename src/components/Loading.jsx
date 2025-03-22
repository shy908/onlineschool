import React, { useState, useEffect } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 50); // the time interval to control the speed of progress
      return () => clearInterval(timer);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50 text-white">
      <div className="relative">
        <svg className="w-24 h-24" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <circle className="text-gray-300" strokeWidth="4" fill="none" cx="18" cy="18" r="16" />
          <circle
            className="text-[#1f5256] animate-spin-slow"
            strokeWidth="4"
            fill="none"
            cx="18"
            cy="18"
            r="16"
            strokeDasharray={`${progress * 1.01}, 100`}
            strokeDashoffset="25"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold">{progress}%</span>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
