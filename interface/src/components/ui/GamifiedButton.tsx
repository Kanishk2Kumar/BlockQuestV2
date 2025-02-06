"use client"; // Ensure this is a client-side component

import React, { useState } from "react";
import { motion } from "framer-motion";  
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
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
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
        px-4 py-2
        rounded-lg
        bg-gradient-to-r from-purple-600 to-blue-500
        hover:from-purple-500 hover:to-blue-400
        text-white font-semibold text-sm
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
        shadow-md hover:shadow-lg
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      aria-label="Interactive game button"
    >
      <span className="flex items-center justify-center space-x-2">
        <FaGamepad className="text-sm" />
        <span>Play</span>
      </span>
      
      <div className="absolute -top-2 -right-2">
        <div className="bg-yellow-400 text-xs text-gray-900 font-bold px-2 py-1 rounded-full">
          {clickCount}
        </div>
      </div>
    </motion.button>
  );
};

export default GamifiedButton;
