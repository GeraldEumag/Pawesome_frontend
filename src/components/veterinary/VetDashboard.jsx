import React from "react";
import { Outlet } from "react-router-dom";
import VeterinarySidebar from "./VeterinarySidebar";

const VetDashboard = () => (
  <div style={{ display: "flex" }}>
    <VeterinarySidebar />
    <main style={{ flex: 1, padding: "1rem" }}>
      <h2>🐶 Veterinary Dashboard</h2>
      <Outlet /> {/* Nested routes render here */}
    </main>
  </div>
);

export default VetDashboard;