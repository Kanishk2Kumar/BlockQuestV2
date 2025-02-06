"use client";
import React, { useState } from "react";
import CourseCard from "../../../components/Course-Card";

const categories = ["Ethereum", "Solana", "Polygon", "Hyperledger"];

// Course data categorized
const courseData = {
  Ethereum: [
    {
      title: "Solidity: Beginner to Intermediate Smart Contracts",
      description: "Get up to speed with the basics of Solidity.",
      level: ["Solidity", "Beginner", "Intermediate"],
      progress: 30,
      image: "ethereum.svg",
    },
    {
      title: "Advanced Ethereum Development",
      description: "Deep dive into Ethereum smart contract development.",
      level: ["Ethereum", "Advanced"],
      progress: 50,
      image: "ethereum.svg",
    },
  ],
  Solana: [
    {
      title: "Solana Smart Contracts with Rust",
      description: "Learn how to build smart contracts using Rust for Solana.",
      level: ["Solana", "Rust", "Beginner"],
      progress: 20,
      image: "solana.svg",
    },
    {
      title: "Building dApps on Solana",
      description: "Create decentralized applications on the Solana blockchain.",
      level: ["Solana", "dApps"],
      progress: 40,
      image: "solana.svg",
    },
  ],
  Polygon: [
    {
      title: "Deploying Smart Contracts on Polygon",
      description: "Learn how to deploy and interact with smart contracts on Polygon.",
      level: ["Polygon", "Smart Contracts"],
      progress: 60,
      image: "polygon.svg",
    },
    {
      title: "Polygon dApp Development",
      description: "Build scalable decentralized applications on Polygon.",
      level: ["Polygon", "dApps"],
      progress: 35,
      image: "polygon.svg",
    },
  ],
  Hyperledger: [
    {
      title: "Introduction to Hyperledger Fabric",
      description: "Explore enterprise blockchain solutions with Hyperledger Fabric.",
      level: ["Hyperledger", "Beginner"],
      progress: 45,
      image: "hyperledger.svg",
    },
    {
      title: "Hyperledger Chaincode Development",
      description: "Learn how to write chaincode for Hyperledger applications.",
      level: ["Hyperledger", "Chaincode"],
      progress: 55,
      image: "hyperledger.svg",
    },
  ],
};

const AllCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ethereum");
  const courses = courseData[selectedCategory]; // Get courses based on selected category

  return (
    <div className="bg-gray-1000 min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-10">All Courses</h1>

      {/* Category Selection Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-lg text-white ${
              selectedCategory === category ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid layout for course cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
