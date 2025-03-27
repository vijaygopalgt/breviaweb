import React, { useState } from "react";

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [expandedValue, setExpandedValue] = useState(null);

  const toggleValue = (value) => {
    setExpandedValue(expandedValue === value ? null : value);
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section with Left-Right Layout */}
      <div className="flex justify-center py-4">
        <h3
          className={`text-lg font-semibold text-gray-600 px-4 py-2 rounded-full transition duration-300 ${
            hovered
            ? "bg-purple-600 text-white scale-105 shadow-2xl"
            : "border-purple-600 text-purple-600"
                }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          About Us
        </h3>
      </div>
      <div className="flex flex-col items-center text-center px-6 md:px-16 py-16">
        <h1 className="text-4xl xl:text-5xl font-bold text-gray-900">
          Inside Brevia Studio: The Creative Digital Agency 🎨🚀
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Discover Brevia Studio, where our creative team designs unique digital experiences 
          to elevate your brand. Join us and make an impact!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
        {/* Left - Heading */}
        <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 md:w-1/2">
          Innovative Strategies for Digital Success
        </h1>

        {/* Right - Paragraph with Adjusted Font Size */}
        <p className="text-gray-600 md:w-1/2 mt-4 md:mt-0 text-lg leading-relaxed">
          Brevia Studio takes a smart and creative approach to help brands grow in the digital world. 
          We use fresh ideas, industry knowledge, and creative skills to build digital experiences that attract audiences 
          and grow businesses.
        </p>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="grid md:grid-cols-3 gap-6 px-8 md:px-16 py-12">
        {/* Mission */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-gray-600 mt-2 text-base leading-relaxed">
            Our mission is to craft unique digital experiences that connect with your audience. 
            We aim to strengthen your brand and grow your business with creative, customized solutions.
          </p>
        </div>

        {/* Vision */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="text-gray-600 mt-2 text-base leading-relaxed">
            Our vision is to become a top creative digital agency known for outstanding design and 
            development. We strive to set new industry standards by always innovating and exploring new 
            possibilities in digital creativity.
          </p>
        </div>

        {/* Values with Expandable Sections */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <div className="mt-2">
            {[
              { title: "Creativity", content: "We embrace bold ideas to craft unique and engaging digital experiences." },
              { title: "Innovation", content: "We stay ahead of trends, using cutting-edge technology to create solutions that stand out." },
              { title: "Integrity", content: "We build trust through transparency and ethical business practices." },
              { title: "Excellence", content: "We strive for perfection in every project, ensuring top-quality results." },
              { title: "Collaboration", content: "We believe teamwork and shared ideas drive innovation and success." },
            ].map((value, index) => (
              <div key={index} className="mt-2">
                <button
                  className="text-gray-900 font-semibold w-full flex justify-between items-center px-4 py-2 "
                  onClick={() => toggleValue(value.title)}
                >
                  {value.title}
                  <span>{expandedValue === value.title ? "-" : "+"}</span>
                </button>
                {expandedValue === value.title && (
                  <div className=" text-gray-700 p-3 mt-2 rounded-md text-sm leading-relaxed">
                    {value.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
