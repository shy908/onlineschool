import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50 text-white">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-400"></div>
      </div>
      <p className="mt-4 text-lg font-semibold">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
