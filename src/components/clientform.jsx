import React, { useState } from "react";
import { motion } from "framer-motion";

const BecomeAClientForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    launchDate: "",
    budget: "",
    services: [],
    projectBrief: "",
    projectFile: null,
    agreeToTerms: false,
  });

  const serviceOptions = ["Website Development", "Mobile App Development", "UI/UX Design", "Branding", "Other"];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox" && name === "services") {
      setFormData((prev) => ({
        ...prev,
        services: checked ? [...prev.services, value] : prev.services.filter((s) => s !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, projectFile: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    onClose(); // Close form after submission
  };
  const handleClose = () => {
    console.log("Close button clicked!");
    onClose();
  };
  

  return (
    <motion.div
  className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 text-white flex flex-col p-8 z-50"
  initial={{ opacity: 0, x: "100%" }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: "100%" }}
  transition={{ type: "spring", stiffness: 100 }}
>



      <button onClick={onClose} className="self-end text-white p-2 text-2xl">✖</button>
      <h2 className="text-4xl font-bold">Become a Client?</h2>
      <div className="w-full bg-gray-700 h-2 rounded mt-4 mb-6">
        <div className="h-2 bg-purple-500 rounded" style={{ width: `${(step / 4) * 100}%` }}></div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        {step === 1 && (
          <>
            <h3 className="text-xl">Let's get to know you first</h3>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-600 rounded" />
            <input type="text" name="company" placeholder="Business Name" value={formData.company} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-600 rounded" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-600 rounded" />
            <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-600 rounded" />
            <button type="button" onClick={nextStep} className="p-3 bg-purple-600 text-white rounded">Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="text-xl">When do you want to launch your project?</h3>
            <input type="date" name="launchDate" value={formData.launchDate} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-600 rounded" />
            <h3 className="text-xl">What's your budget?</h3>
            <input type="text" name="budget" placeholder="Enter your budget" value={formData.budget} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-600 rounded" />
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="p-3 bg-gray-600 text-white rounded">Back</button>
              <button type="button" onClick={nextStep} className="p-3 bg-purple-600 text-white rounded">Next</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="text-xl">What services do you need?</h3>
            <div className="grid grid-cols-2 gap-2">
              {serviceOptions.map((service, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="checkbox" name="services" value={service} checked={formData.services.includes(service)} onChange={handleChange} className="w-5 h-5" />
                  <span>{service}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="p-3 bg-gray-600 text-white rounded">Back</button>
              <button type="button" onClick={nextStep} className="p-3 bg-purple-600 text-white rounded">Next</button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h3 className="text-xl">Provide a brief about your project</h3>
            <textarea name="projectBrief" placeholder="Describe your project..." value={formData.projectBrief} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-600 rounded h-32"></textarea>
            <input type="file" name="projectFile" onChange={handleChange} className="p-3 bg-gray-800 border border-gray-600 rounded" />
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} className="w-5 h-5" />
              <span>I agree to the Privacy Policy & Terms</span>
            </label>
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="p-3 bg-gray-600 text-white rounded">Back</button>
              <button type="submit" className="p-3 bg-green-600 text-white rounded">Submit</button>
            </div>
          </>
        )}
      </form>
    </motion.div>
    
  );
};

export default BecomeAClientForm;
