import React from "react";
import { Outlet } from "react-router-dom";
import ReceptionistSidebar from "./ReceptionistSidebar";

const ReceptionistDashboard = () => (
  <div style={{ display: "flex" }}>
    <ReceptionistSidebar />
    <main style={{ flex: 1, padding: "1rem" }}>
      <h2>🛎️ Receptionist Dashboard</h2>
      <Outlet /> {/* Nested routes render here */}
    </main>
  </div>
);

export default ReceptionistDashboard;