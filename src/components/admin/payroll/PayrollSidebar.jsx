import React from "react";
import { NavLink } from "react-router-dom";
import "./PayrollSidebar.css"; // optional styling file

const PayrollSidebar = () => {
  return (
    <aside className="payroll-sidebar">
      <h3>Payroll Menu</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/payroll" end className={({ isActive }) => isActive ? "active" : ""}>
              💰 Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/payroll/reports" className={({ isActive }) => isActive ? "active" : ""}>
              📊 Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="/payroll/staff" className={({ isActive }) => isActive ? "active" : ""}>
              👥 Staff
            </NavLink>
          </li>
          <li>
            <NavLink to="/payroll/salaries" className={({ isActive }) => isActive ? "active" : ""}>
              💵 Salaries
            </NavLink>
          </li>
          <li>
            <NavLink to="/payroll/payslip" className={({ isActive }) => isActive ? "active" : ""}>
              🧾 Generate Payslip
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default PayrollSidebar;