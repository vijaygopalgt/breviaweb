import React, { useState } from "react";
import ClientForm from "../components/clientform";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-white text-black px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl xl:text-5xl font-bold">Say hi 👋 to the team</h1>
          <h2 className="text-3xl font-bold text-purple-600 mt-2">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            For general inquiries, please fill out the form to get in touch. If you already have the details of your project, mosey on over to our "Become a client" for a more detailed, step-by-step process. It’s like a treasure map, but for projects!
          </p>

          <div className="mt-6">
            <button
              className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-purple-700"
              onClick={() => setIsFormOpen(true)}
            >
              Become a client
            </button>
          </div>

          <div className="mt-6">
            <p className="text-gray-600">Hate filling forms?</p>
            <a href="mailto:hello@breviastudio.com" className="text-purple-600 font-semibold hover:underline">
              hello@breviastudio.com
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <ClientForm />
      </div>

      {/* Modal for Become a Client Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsFormOpen(false)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">Become a Client</h2>
            <ClientForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
