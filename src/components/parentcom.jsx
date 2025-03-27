import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BecomeAClientForm from "./clientform";

const ParentComponent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="p-5">
      <button
        onClick={() => setIsFormOpen(true)}
        className="p-3 bg-blue-600 text-white rounded"
      >
        Become a Client
      </button>

      <AnimatePresence>
        {isFormOpen && <BecomeAClientForm onClose={() => setIsFormOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default ParentComponent;
