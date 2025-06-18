import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg mb-4 shadow"
      style={{
        background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
        animation: "navbarFadeIn 1s ease",
      }}
    >
      <style>
        {`
          @keyframes navbarFadeIn {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .navbar-brand {
            font-family: 'Pacifico', cursive;
            font-size: 2rem;
            letter-spacing: 2px;
            color: #fff !important;
            text-shadow: 1px 2px 8px #0002;
            transition: color 0.3s;
          }
          .navbar-brand:hover {
            color: #ffd700 !important;
          }
          .nav-link {
            color: #fff !important;
            font-weight: 500;
            margin: 0 0.5rem;
            position: relative;
            transition: color 0.3s;
          }
          .nav-link.active, .nav-link:hover {
            color: #ffd700 !important;
          }
          .nav-link.active::after, .nav-link:hover::after {
            width: 100%;
            background: #ffd700;
          }
          .nav-link::after {
            content: '';
            display: block;
            width: 0;
            height: 3px;
            border-radius: 2px;
            background: #fff;
            transition: width 0.3s, background 0.3s;
            margin-top: 3px;
          }
          .navbar-toggler {
            border: none;
            outline: none;
            box-shadow: none;
          }
          .navbar-toggler-icon {
            background-image: linear-gradient(90deg, #ffd700 0%, #fff 100%);
          }
        `}
      </style>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <Link
                  className={`nav-link${
                    location.pathname === link.to ? " active" : ""
                  }`}
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
