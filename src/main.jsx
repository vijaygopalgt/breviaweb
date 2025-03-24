import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // ✅ Make sure this matches the exact file name
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<div className="bg-white text-gray-800 min-h-screen">
  {/* everything else inside */}
</div>

