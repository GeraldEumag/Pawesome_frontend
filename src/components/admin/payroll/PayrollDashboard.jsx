import React from "react";
import { Outlet, Link } from "react-router-dom";

const PayrollDashboard = () => (
  <div style={{ display: "flex" }}>
    <aside style={{ width: "220px", background: "#f8f9fa", padding: "1rem" }}>
      <h2>Payroll</h2>
      <nav>
        <ul>
          <li><Link to="reports">Reports</Link></li>
          <li><Link to="staff">Staff</Link></li>
          <li><Link to="salaries">Salaries</Link></li>
          <li><Link to="payslip">Generate Payslip</Link></li>
        </ul>
      </nav>
    </aside>
    <main style={{ flex: 1, padding: "1rem" }}>
      <h2>Payroll Dashboard</h2>
      <Outlet />
    </main>
  </div>
);

export default PayrollDashboard;