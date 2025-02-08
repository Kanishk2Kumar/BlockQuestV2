// Currently No use of this page: Can be Used In About Section
import Image from "next/image";
import { motion } from "framer-motion"; 

const Chains = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white mt-8 px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold font-quantico mb-4">
        Chains to Conquer
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        Embark on an epic journey through the blockchain universe, overcoming
        obstacles and forging your path to decentralization.
      </p>

      {/* Image (Animated from Below) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start below
        animate={{ opacity: 1, y: 0 }} // Move up
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        className="w-full max-w-5xl mt-10 flex justify-center"
      >
        <Image
          src="/images/Chains.png"
          alt="chains"
          width={1200} // Adjust as needed
          height={600} // Adjust as needed
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Chains;
