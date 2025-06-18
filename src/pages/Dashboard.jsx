import React, { useState } from "react";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  // Set the default section to "overview"
  const [section, setSection] = useState("overview");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SideBar section={section} setSection={setSection} />
      <MainContent section={section} />
    </div>
  );
};

export default Dashboard;
