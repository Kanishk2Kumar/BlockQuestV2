"use client"; // Ensure this is a client-side component

import React, { useState } from "react";
import { motion } from "framer-motion";  // <-- Import motion from framer-motion
import confetti from "canvas-confetti";
import { FaGamepad } from "react-icons/fa";

const GamifiedButton = ({ onButtonClick }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setIsPressed(true);
    setClickCount((prev) => prev + 1);
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
    });

    setTimeout(() => setIsPressed(false), 200);
    if (onButtonClick) onButtonClick(clickCount + 1);
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)"
    }
  };

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={handleClick}
      className={`
        relative
        group
        px-8 py-4
        rounded-xl
        bg-gradient-to-r from-purple-600 to-blue-500
        hover:from-purple-500 hover:to-blue-400
        text-white font-bold text-lg
        transform transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
        shadow-lg hover:shadow-xl
        disabled:opacity-50 disabled:cursor-not-allowed
        sm:text-xl sm:px-10 sm:py-5
      `}
      aria-label="Interactive game button"
    >
      <span className="flex items-center justify-center space-x-2">
        <FaGamepad className="text-xl sm:text-2xl" />
        <span>Play Now!</span>
      </span>
      
      <div className="absolute -top-2 -right-2">
        <div className="bg-yellow-400 text-xs text-gray-900 font-bold px-2 py-1 rounded-full">
          {clickCount}
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
      </div>

      <div className="absolute inset-0 rounded-xl border-2 border-white/10" />
    </motion.button>
  );
};

export default GamifiedButton;
