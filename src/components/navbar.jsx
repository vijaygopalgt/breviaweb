import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Works", path: "/works" },
    { name: "Careers", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white text-gray-800 px-6 py-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-breviaPurple">
  Brevia.
</Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-gray-700 hover:text-breviaPurple transition font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link
          to="/contact"
          className="bg-breviaPurple text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
        >
          Become a client
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white px-6 py-4 flex flex-col space-y-4 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-breviaPurple transition font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-breviaPurple text-white px-4 py-2 rounded-full text-center font-semibold"
          >
            Become a client
          </Link>
          <ParentComponent />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
