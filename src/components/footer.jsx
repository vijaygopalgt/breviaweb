import React from "react";
import { Instagram, Linkedin } from "lucide-react"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-10">
      {/* Main Sections */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Brevia.</h2>
          <p className="text-sm leading-relaxed">
            At Brevia Studio, we are dedicated to creating unique and impactful digital experiences. As a full-service creative design agency, we specialize in designing, developing, branding, and SEO. Our mission is to elevate your brand's presence and drive your business forward with innovative, tailor-made solutions.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Links with Lucide Icons */}
            <a
              href="https://www.instagram.com/breviastudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-purple-300 transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/breviastudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-purple-300 transition"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/works" className="hover:underline">Works</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/works" className="hover:underline">Works</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Get in Touch</h3>
          <p>Chennai, Tamil Nadu, India</p>
          <p>WhatsApp: +91 7305 421312</p>
          <p>Phone: +91 73976 70826</p>
          <p>Email: hello@breviastudio.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-purple-600 pt-4">
        <p>© Brevia Studio 2025 — All rights are reserved.</p>
        <p>
          <a href="/disclaimer" className="hover:underline">Disclaimer</a> /{" "}
          <a href="/privacy-policy" className="hover:underline">Privacy & Policy</a> /{" "}
          <a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
