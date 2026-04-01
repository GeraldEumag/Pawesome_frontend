import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import CustomerSidebar from "./CustomerSidebar";
import "./CustomerDashboard.css"; // use the dashboard CSS, not chatbot

const CustomerDashboard = () => {
  const name = localStorage.getItem("name") || "Customer";
  const [theme, setTheme] = useState("light");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={`customer-dashboard ${theme} ${sidebarCollapsed ? "collapsed" : ""}`}>
      <CustomerSidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
      />

      <main className="customer-main">
        {/* Top navbar */}
        <header className="customer-navbar top-navbar">
          <div className="navbar-left">
            <h1>Welcome back, {name}</h1>
            <p>Here’s your pet hotel summary.</p>
          </div>
          <div className="navbar-right">
            <NavLink to="/customer/bookings" className="add-btn">
              + New Booking
            </NavLink>
            <button className="icon-btn">🔔</button>
            <div className="profile">
              <span className="profile-name">{name}</span>
              <span className="profile-role">Customer</span>
            </div>
            <button
              className="theme-toggle-btn"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </header>

        {/* Second navbar */}
        <header className="customer-navbar action-navbar">
          <input type="text" placeholder="Search..." className="search-bar" />
        </header>

        {/* Nested routes render here */}
        <section className="dashboard-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default CustomerDashboard;