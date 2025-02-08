import Spline from "@splinetool/react-spline/next";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const words = "In a galaxy torn by an Interstellar Blockchain War, rival factions fight for control over the Blockchain Nebula. Each planet, powered by a different blockchain, holds the key to ultimate energy source. As a Cadet of the Intergalactic Resistance, your mission is to conquer challenges, master blockchain technology, and reclaim the universe from centralization’s grasp. The fate of the decentralized world is in your hands!"

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[85vh] bg-black">
      {/* Left Content */}
      <div className="w-full md:w-1/3 text-center md:text-left space-y-6 relative z-10 ml-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-quantico">
          Welcome Trooper
          {/* Welcome <span className="text-red-400">Tr</span><span className="text-red-500">oop</span><span className="text-red-800">ers</span>  */}
        </h1>
        <TextGenerateEffect duration={2} filter={false} words={words} />
        <Link href="/all-courses">
        <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 text-lg font-bold text-black bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 font-quantico">
          <RocketLaunchIcon className="w-6 h-6 text-purple-700 rotate-12" />
          Start Journey
        </button>
        </Link>
      </div>

      {/* Right: Spline 3D Model with Corner Fade Effect */}
      <div
        className="w-full md:w-3/5 flex justify-center h-[90vh]"
        style={{
          WebkitMaskImage: "radial-gradient(circle, black 25%, rgba(0,0,0,0) 75%)",
          maskImage: "radial-gradient(circle, black 50%, rgba(0,0,0,0) 80%)",
        }}
      >
        <Spline
          scene="https://prod.spline.design/aK43z3d53KzQoTc3/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
