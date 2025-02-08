"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline/next";

export default function Loading() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 20000); // 2-second delay

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null; // Hide loader after 2 seconds

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Spline scene="https://prod.spline.design/rztdSeBNKJ1f3jZA/scene.splinecode" />
      <h1 className="text-white text-2xl mt-4">Travelling Towards Hive Mind</h1>
    </div>
  );
}
