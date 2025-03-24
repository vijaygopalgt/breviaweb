import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Worksec from "../components/worksec";
import Aboutsec from "../components/aboutsec"

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          className="text-center text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-breviaPurple text-sm md:text-base font-semibold mb-4">
            ⚡ Chennai’s Premier Startup for Website and App Development
          </p>

          <h1 className="text-gray-800 text-5xl xl:text-6xl font-bold mb-6 drop-shadow-lg">
            We Are Committed to <br />
            Elevating Your Business <br />
            to New Heights of Excellence
          </h1>

          <p className="text-gray-800 text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            At Brevia Studio, we specialize in crafting innovative digital solutions tailored
            for startups and businesses. Let's partner to elevate your brand and achieve your vision.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="#aboutsec"
    className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
  >
    Let’s Go! 🚀
  </a>

  <a
    href="#worksec"
    className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
  >
    Discover Works
  </a>
</div>

        </motion.div>
      </div>
      {}
       {/* About Section */}
       <Aboutsec />

{/* Works Section */}
<Worksec />
</>
  );
};

export default HomePage;
