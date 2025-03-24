import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Aboutsec = () => {
  return (
    <div id="aboutsec" className="bg-white text-gray-800 py-24 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <p className="text-purple-600 font-semibold text-base mb-3">⚡ Who We Are</p>
          <h2 className="text-4xl xl:text-5xl font-bold text-gray-800">
            Brevia Studio
          </h2>
        </motion.div>

        {/* Right: Paragraph */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            We are a next-gen creative agency based in Chennai, blending design, technology, and strategy
            to craft impactful digital experiences. From startups to established enterprises, our
            passion lies in helping brands stand out in the digital world.
          </p>

          <Link
            to="/about"
            className="mt-6 inline-block bg-purple-600 text-white hover:bg-purple-800 px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            More About Us →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutsec;
