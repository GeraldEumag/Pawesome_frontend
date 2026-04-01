import React from "react";
import { NavLink } from "react-router-dom";
import "./ReceptionistSidebar.css"; // optional styling file

const ReceptionistSidebar = () => {
  return (
    <aside className="receptionist-sidebar">
      <h3>Receptionist Menu</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/receptionist/bookings" className={({ isActive }) => isActive ? "active" : ""}>
              📅 Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/receptionist/customers" className={({ isActive }) => isActive ? "active" : ""}>
              👥 Customers
            </NavLink>
          </li>
          <li>
            <NavLink to="/receptionist/schedule" className={({ isActive }) => isActive ? "active" : ""}>
              🗓️ Schedule
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default ReceptionistSidebar;