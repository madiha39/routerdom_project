import React from "react";
import {
  FaTachometerAlt,
  FaChartPie,
  FaUserGraduate,
  FaCogs,
  FaBookOpen,
  FaStar,
} from "react-icons/fa";

const links = [
  { key: "overview", label: "Overview", icon: <FaTachometerAlt /> },
  { key: "statistics", label: "Statistics", icon: <FaChartPie /> },
  { key: "students", label: "Students", icon: <FaUserGraduate /> },
  { key: "resources", label: "Resources", icon: <FaBookOpen /> },
  { key: "settings", label: "Settings", icon: <FaCogs /> },
];

const SideBar = ({ section, setSection }) => {
  return (
    <aside
      style={{
        minHeight: "100vh",
        width: "230px",
        background: "linear-gradient(180deg, #6a11cb 0%, #2575fc 100%)",
        color: "#fff",
        boxShadow: "2px 0 16px #0002",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 100,
        paddingTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="mb-4"
        style={{
          fontFamily: "Pacifico, cursive",
          fontSize: "1.7rem",
          letterSpacing: "2px",
          color: "#ffd700",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <FaStar className="me-2" />
        Dashboard
      </div>
      <nav className="w-100">
        <ul className="nav flex-column w-100">
          {links.map((link) => (
            <li className="nav-item w-100" key={link.key}>
              <button
                className={`nav-link d-flex align-items-center px-4 py-2 w-100 text-start ${
                  section === link.key ? "active" : ""
                }`}
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  borderRadius: "0.7rem",
                  marginBottom: "0.5rem",
                  background:
                    section === link.key
                      ? "rgba(255,215,0,0.15)"
                      : "transparent",
                  transition: "background 0.2s, color 0.2s",
                  gap: "0.8rem",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                }}
                onClick={() => setSection(link.key)}
              >
                <span style={{ fontSize: "1.2rem" }}>{link.icon}</span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <style>
        {`
          .nav-link.active, .nav-link:hover {
            color: #ffd700 !important;
            background: rgba(255,215,0,0.18) !important;
            font-weight: bold;
          }
        `}
      </style>
    </aside>
  );
};

export default SideBar;
