// pages/allCourses.js
import React from 'react';
import CourseCard from '../../../components/Course-Card';

const courses = [
  {
    title: "Solidity: Beginner to Intermediate Smart Contracts",
    description: "Get up to speed with the basics of Solidity.",
    level: ["Solidity", "Beginner", "Intermediate"],
    progress: 0,
    image: "logo.svg",
  },
  {
    title: "Solidity: Beginner to Intermediate Smart Contracts",
    description: "Get up to speed with the basics of Solidity.",
    level: ["Solidity", "Beginner", "Intermediate"],
    progress: 0,
    image: "logo.svg",
  },
  {
    title: "Solidity: Beginner to Intermediate Smart Contracts",
    description: "Get up to speed with the basics of Solidity.",
    level: ["Solidity", "Beginner", "Intermediate"],
    progress: 0,
    image: "logo.svg",
  },
  // Add more courses here if needed
];

const AllCourses = () => {
  return (
    <div className="bg-gray-1000 min-h-screen p-10 text-white">
      <h1 className="text-3xl font-bold text-center mb-10">All Courses</h1>
      <div className="flex flex-col items-center">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;