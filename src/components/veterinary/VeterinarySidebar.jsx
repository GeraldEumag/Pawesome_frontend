import React from "react";
import { NavLink } from "react-router-dom";
import "./VeterinarySidebar.css"; // optional styling file

const VeterinarySidebar = () => {
  return (
    <aside className="veterinary-sidebar">
      <h3>Veterinary Menu</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/vet/appointments" className={({ isActive }) => isActive ? "active" : ""}>
              📅 Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="/vet/patients" className={({ isActive }) => isActive ? "active" : ""}>
              🐾 Patients
            </NavLink>
          </li>
          <li>
            <NavLink to="/vet/records" className={({ isActive }) => isActive ? "active" : ""}>
              📋 Medical Records
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default VeterinarySidebar;