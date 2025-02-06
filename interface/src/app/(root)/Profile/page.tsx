"use client"; // Ensure the component is treated as a client-side component

import React, { useState } from "react";
import { FiShare2, FiDownload, FiAward, FiBook, FiClock } from "react-icons/fi";
import { BiChip } from "react-icons/bi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsLightningCharge } from "react-icons/bs";

const BlockchainLearningProfile = () => {
  const [user] = useState({
    name: "Alex Johnson",
    level: 15,
    totalPoints: 2500,
    bio: "Passionate blockchain developer focusing on DeFi and Smart Contracts",
    profilePicture: '/Logo.png'
  });

  const [courses] = useState({
    inProgress: [
      {
        id: 1,
        title: "Advanced Smart Contracts",
        progress: 75,
        thumbnail: "Advanced Smart Contracts",
        timeLeft: "2 hours"
      },
      {
        id: 2,
        title: "DeFi Protocols Development",
        progress: 45,
        thumbnail: "DeFi Protocols Development",
        timeLeft: "4 hours"
      }
    ],
    completed: [
      {
        id: 3,
        title: "Blockchain Fundamentals",
        completionDate: "2024-01-15",
        thumbnail: "Blockchain Fundamentals"
      }
    ]
  });

  const [badges] = useState([
    {
      id: 1,
      name: "Blockchain Beginner",
      earned: true,
      description: "Completed foundation courses"
    },
    {
      id: 2,
      name: "Smart Contract Master",
      earned: true,
      description: "Developed 5 smart contracts"
    },
    {
      id: 3,
      name: "Cryptography Explorer",
      earned: false,
      description: "Complete advanced cryptography course"
    },
    {
      id: 4,
      name: "DApp Developer",
      earned: false,
      description: "Build 3 decentralized applications"
    }
  ]);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Profile Section */}
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full object-cover border-4 border-primary bg-muted flex items-center justify-center">
              <span className="text-foreground text-xl">{user.profilePicture}</span>
            </div>
            <div>
              <h1 className="text-heading font-heading text-foreground">{user.name}</h1>
              <p className="text-muted-foreground">{user.bio}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="bg-primary px-3 py-1 rounded-full text-primary-foreground text-sm">
                  Level {user.level}
                </span>
                <span className="bg-secondary px-3 py-1 rounded-full text-secondary-foreground text-sm">
                  {user.totalPoints} XP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2">
              <FiBook className="text-chart-1 text-2xl" />
              <h3 className="font-heading">Total Courses</h3>
            </div>
            <p className="text-3xl font-bold mt-2 text-foreground">
              {courses.inProgress.length + courses.completed.length}
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2">
              <IoIosCheckmarkCircle className="text-chart-2 text-2xl" />
              <h3 className="font-heading">Completed</h3>
            </div>
            <p className="text-3xl font-bold mt-2 text-foreground">
              {courses.completed.length}
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2">
              <BsLightningCharge className="text-chart-3 text-2xl" />
              <h3 className="font-heading">In Progress</h3>
            </div>
            <p className="text-3xl font-bold mt-2 text-foreground">
              {courses.inProgress.length}
            </p>
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-heading font-heading mb-6">Achievement Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`p-4 rounded-lg border ${badge.earned ? "border-primary" : "border-muted"} 
                transition-all duration-300 hover:shadow-lg cursor-pointer
                ${badge.earned ? "bg-gradient-to-br from-primary/10 to-secondary/10" : "bg-muted"}`}
              >
                <div className="flex flex-col items-center text-center">
                  <BiChip className={`text-4xl ${badge.earned ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="mt-2 font-heading text-sm">{badge.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Progress Section */}
        <div className="space-y-6">
          <h2 className="text-heading font-heading">In-Progress Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.inProgress.map((course) => (
              <div key={course.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="w-full h-48 bg-muted flex items-center justify-center">
                  <span className="text-foreground text-xl">{course.thumbnail}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg mb-2">{course.title}</h3>
                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <FiClock />
                      <span>{course.timeLeft} left</span>
                    </div>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-heading font-heading mt-8">Completed Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.completed.map((course) => (
              <div key={course.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="w-full h-48 bg-muted flex items-center justify-center">
                  <span className="text-foreground text-xl">{course.thumbnail}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
  Completed on {new Date(course.completionDate).toISOString().split('T')[0]}
</p>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
                      <FiDownload />
                      <span>Certificate</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-muted text-muted-foreground px-4 py-2 rounded-lg">
                      <FiShare2 />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainLearningProfile;
