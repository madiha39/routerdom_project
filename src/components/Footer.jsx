import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaCalculator,
  FaChartLine,
  FaLightbulb,
  FaStar,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="mt-5"
      style={{
        background: "linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)",
        color: "#fff",
        padding: "2rem 0 1rem 0",
        boxShadow: "0 -2px 16px #0002",
      }}
    >
      <div className="container text-center">
        <div className="mb-3">
          <a
            href="https://facebook.com"
            className="mx-2 text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="mx-2 text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="mx-2 text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:info@mathinstitute.edu"
            className="mx-2 text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          {/* Extra icons for decoration */}
          <span className="mx-2">
            <FaCalculator size={22} color="#ffd700" />
          </span>
          <span className="mx-2">
            <FaChartLine size={22} color="#0dcaf0" />
          </span>
          <span className="mx-2">
            <FaLightbulb size={22} color="#198754" />
          </span>
        </div>
        <div>
          <span style={{ fontFamily: "Pacifico, cursive", fontSize: "1.3rem" }}>
            <FaStar className="me-2" color="#ffd700" />
            Institute of Mathematics
          </span>
        </div>
        <div className="mt-2" style={{ fontSize: "0.95rem", opacity: 0.85 }}>
          <FaCopyright className="me-1" />
          {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
