import React from "react";
import { Outlet } from "react-router-dom";
import ManagerSidebar from "./ManagerSidebar";

const ManagerDashboard = () => (
  <div style={{ display: "flex" }}>
    <ManagerSidebar />
    <main style={{ flex: 1, padding: "1rem" }}>
      <h2>📋 Manager Dashboard</h2>
      <Outlet /> {/* Nested routes render here */}
    </main>
  </div>
);

export default ManagerDashboard;