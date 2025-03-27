import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import projectImg from "../assets/1.jpeg";

const projects = [
  {
    year: "2024",
    client: "Sriharan Balan, MD",
    title: "Madura Travel Services (P) Ltd.",
    description:
      "Developed a custom WordPress website with booking functionality for a travel agency in Chennai.",
    link: "/works/madura-travel",
    image: projectImg,
  },
  {
    year: "2023",
    client: "Dept. of CSE, XYZ University",
    title: "Research Paper Portal",
    description:
      "Created a portal for students and professors to upload and browse published research papers.",
    link: "/works/research-portal",
    image: projectImg,
  },
  {
    year: "2022",
    client: "TechSphere Pvt Ltd.",
    title: "Corporate Website Revamp",
    description:
      "Redesigned and developed their corporate site to improve branding, UX, and SEO performance.",
    link: "/works/techsphere",
    image: projectImg,
  },
  {
    year: "2021",
    client: "Local Startup — XYZ Tools",
    title: "E-commerce Platform",
    description:
      "Built an end-to-end e-commerce website for a tool manufacturing startup with integrated payments.",
    link: "/works/xyz-tools",
    image: projectImg,
  },
];

// Lighter background shades of purple
const purpleShades = ["bg-purple-600", "bg-purple-500", "bg-purple-400", "bg-purple-300"];

const WorksSection = () => {
  const sectionRef = useRef(null);

  return (
    <div id="worksec" className="min-h-[300vh] w-full bg-white px-4 py-20" ref={sectionRef}>
      {/* Sticky Header */}
      <div className=" bg-white z-50 text-center pb-12">
        <p className="text-breviaPurple font-semibold mb-2">⚡ Our works</p>
        <h2 className="text-4xl xl:text-5xl font-bold text-breviaPurple">
          Our Top Latest Works
        </h2>
      </div>

      {/* Cards */}
      <div className="relative h-[200vh]">
        {projects.map((project, index) => {
          const cardRef = useRef(null);
          const { scrollYProgress } = useScroll({
            target: cardRef,
            offset: ["start center", "end start"],
          });
          const translateY = useTransform(scrollYProgress, [0, 1], [80 * index, 0]);
          const bgShade = purpleShades[index % purpleShades.length];

          return (
            <motion.div
              key={index}
              ref={cardRef}
              style={{
                y: translateY,
                zIndex: 10 + index,
              }}
              className={`sticky top-20 mx-auto w-full min-h-[22rem] ${bgShade} border-gray-300 rounded-xl p-8 shadow-xl`}
            >
              <div className="flex items-center justify-between h-full">
              {/* Left Content */}
<div className="flex-1 pr-4 h-60 flex flex-col justify-between">
  <div>
    <p className="text-sm font-semibold text-black mb-2">
      {project.year} — {project.client}
    </p>
    <h3 className="text-lg font-bold mb-3">{project.title}</h3>
    <p className="text-black">{project.description}</p>
  </div>

  <div>
    <a
      href={project.link}
      className="inline-block text-black underline font-semibold hover:text-purple-800"
    >
      View More →
    </a>
  </div>
</div>



                {/* Right Image */}
                <div className="w-60 h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorksSection;
