import React from "react";
import { NavLink } from "react-router-dom";
import "./ManagerSidebar.css"; // optional styling file

const ManagerSidebar = () => {
  return (
    <aside className="manager-sidebar">
      <h3>Manager Menu</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/manager/attendance" className={({ isActive }) => isActive ? "active" : ""}>
              📅 Attendance
            </NavLink>
          </li>
          <li>
            <NavLink to="/manager/reports" className={({ isActive }) => isActive ? "active" : ""}>
              📊 Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="/manager/staff" className={({ isActive }) => isActive ? "active" : ""}>
              👥 Staff
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default ManagerSidebar;