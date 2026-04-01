import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import InventorySidebar from "./InventorySidebar";
import "./InventoryDashboard.css";

const InventoryDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const username = localStorage.getItem("name") || "Inventory Admin";
  const role = localStorage.getItem("role") || "Inventory Manager";

  return (
    <div className={`inventory-layout ${darkMode ? "dark" : ""} ${sidebarCollapsed ? "collapsed" : ""}`}>
      <InventorySidebar collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)} />
      <div className="inventory-main">
        <header className="inventory-navbar">
          <div className="navbar-left">
            <button
              className="sidebar-toggle"
              type="button"
              onClick={() => setSidebarCollapsed((prev) => !prev)}
              aria-label="Toggle sidebar"
            >
              ☰
            </button>
            <div className="brand">ClaPos</div>
          </div>

          <div className="navbar-center">
            <div className="search-group">
              <input
                type="search"
                placeholder="Search products, suppliers, brands..."
                aria-label="Search inventory"
              />
            </div>
          </div>

          <div className="navbar-right">
            <button className="icon-btn" type="button" aria-label="Notifications">
              🔔
              <span className="badge">3</span>
            </button>
            <button
              className="icon-btn"
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              🌙
            </button>
            <div className="profile-pill">
              <div className="profile-avatar">{username.charAt(0).toUpperCase()}</div>
              <div className="profile-text">
                <span>{username}</span>
                <small>{role}</small>
              </div>
            </div>
          </div>
        </header>

        <main className="inventory-content">
          <section className="inventory-page-heading">
            <div>
              <h2>Inventory Dashboard</h2>
              <p>Full product details and stock performance in one place.</p>
            </div>
          </section>
          <section className="inventory-outlet">
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
};

export default InventoryDashboard;