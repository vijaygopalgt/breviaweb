import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Website design & development",
    description: "We create responsive, modern, and user-friendly websites tailored to your brand's needs.",
  },
  {
    id: 2,
    title: "App design & development",
    description: "From UI/UX design to full-stack development, we build apps that stand out.",
  },
  {
    id: 3,
    title: "Branding",
    description: "We help businesses establish a strong and memorable brand identity.",
  },
  {
    id: 4,
    title: "Search Engine Optimization",
    description: "Enhance your online visibility with effective SEO strategies and drive organic traffic.",
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div id="services" className="max-w-full mx-auto py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-black text-center mb-8">⚡ Services We Offer</h2>
      <div className="space-y-6">
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 border border-gray-300 rounded-lg cursor-pointer"
            onClick={() => toggleExpand(service.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-purple-600">{service.title}</h3>
              {expanded === service.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            {expanded === service.id && <p className="text-gray-700 mt-2">{service.description}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
