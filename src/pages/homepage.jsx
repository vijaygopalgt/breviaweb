import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Worksec from "../components/worksec";
import Aboutsec from "../components/aboutsec";
import Blogsec from "../components/blogs";
import FAQSection from "../components/FAQsec";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#fffbf7] min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          className="text-center text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-breviaPurple text-sm md:text-base font-semibold mb-4">
            ⚡ Chennai’s Premier Startup for Website and App Development
          </p>

          <h1 className="text-gray-900 text-5xl xl:text-6xl font-bold mb-6 drop-shadow-lg">
            We Are Committed to <br />
            Elevating Your Business <br />
            to New Heights of Excellence
          </h1>

          <p className="text-gray-800 text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            At Brevia Studio, we specialize in crafting innovative digital solutions tailored
            for startups and businesses. Let's partner to elevate your brand and achieve your vision.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ScrollLink to="aboutsec" smooth={true} duration={800} offset={-50}>
              <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300">
                Let’s Go! 🚀
              </button>
            </ScrollLink>

            <ScrollLink to="worksec" smooth={true} duration={800} offset={-50}>
              <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                Discover Works
              </button>
            </ScrollLink>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <div id="aboutsec">
        <Aboutsec />
      </div>
      
      {/* FAQ Section */}
      <FAQSection />

      {/* Works Section */}
      <div id="worksec">
        <Worksec />
      </div>
      
      {/* Blog Section */}
      <Blogsec />
    </>
  );
};

export default HomePage;