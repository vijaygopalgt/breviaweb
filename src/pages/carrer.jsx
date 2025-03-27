import React from "react";

const Career = () => {
  const jobs = [
    { title: "React JS Developer", experience: "1-2 years", type: "Remote, Part-time", skills: "React.js, Tailwind CSS" },
    { title: "iOS Developer", experience: "2+ years", type: "Remote, Part-time", skills: "Swift" },
    { title: "SEO Specialist & Strategist", experience: "Expert Level", type: "Remote, Part-time", skills: "SEO, Digital Marketing" },
    { title: "Social Media Strategist", experience: "Growth Expert", type: "Remote, Part-time", skills: "Social Media Engagement" },
    { title: "Content Creator", experience: "Experienced in Digital Content", type: "Remote, Part-time", skills: "Content Writing, Video Editing" },
    { title: "Lead & Sales Operator", experience: "Target-based", type: "Remote, Part-time", skills: "Sales, Lead Generation" },
  ];

  return (
    <div className="bg-white text-black px-6 py-16">
      <h1 className="text-4xl xl:text-5xl font-bold mb-4 text-center">
        Craft your story at Brevia Studio
      </h1>
      <p className="text-gray-700 text-center max-w-2xl mx-auto">
        We seek passionate individuals to join our mission. If you're driven, innovative, and ready to take full ownership of your work, explore our career opportunities and become a part of Brevia Studio.
      </p>

      <div className="flex justify-center mt-6">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-purple-700">
          We Are Hiring!
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {["Website", "Android & iOS", "Advertising", "Social Media", "Strategy & Planning"].map((category) => (
          <button
            key={category}
            className="border border-gray-500 px-4 py-2 rounded-full text-gray-700 transition-all duration-300 hover:bg-gray-800 hover:text-white"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-10 space-y-6">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

const JobCard = ({ job }) => {
  return (
    <div className=" p-6 transition-shadow duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.experience}</p>
      <p className="text-gray-500 text-sm">{job.type}</p>
      <p className="text-gray-700 mt-2"><strong>Skills:</strong> {job.skills}</p>
      <div className="flex justify-end mt-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-purple-700 hover:scale-105">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Career;
