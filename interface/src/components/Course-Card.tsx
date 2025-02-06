import React from "react";
import GamifiedButton from "../components/ui/GamifiedButton"; // Import the GamifiedButton

const CourseCard = ({ title, description, level, progress, image }) => {
  const handleGameButtonClick = (clickCount) => {
    console.log(`Game Button clicked, count: ${clickCount}`);
  };

  return (
    <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto mt-8 relative">
      {/* Course Image & Details */}
      <div className="flex items-center gap-6">
        <img src={image} alt={title} className="w-48 h-48 rounded-lg" />
        <div className="flex-1">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-lg text-gray-400">{level.join(" • ")}</p>
          <p className="text-lg mt-4">{description}</p>
          <div className="mt-4">
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-blue-400 text-xl font-semibold mt-2">{progress}% completed</p>
          </div>
        </div>
      </div>

      {/* Gamified Button at Bottom Right */}
      <div className="absolute bottom-4 right-4">
        <GamifiedButton onButtonClick={handleGameButtonClick} />
      </div>
    </div>
  );
};

export default CourseCard;
