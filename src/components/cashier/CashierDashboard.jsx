import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CashierSidebar from "./CashierSidebar";
import "./CashierDashboard.css";

const CashierDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [started, setStarted] = useState(location.pathname !== "/cashier");

  const username = "Cashier User";
  const role = "Cashier";

  const handleStart = () => {
    setStarted(true);
    navigate("/cashier/pos");
  };

  return (
    <div className={`cashier-layout ${sidebarCollapsed ? "collapsed" : ""} ${darkMode ? "dark" : ""}`}>
      <CashierSidebar collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)} />
      <div className="cashier-main">
        <header className="cashier-navbar">
          <div className="navbar-left">
            <button
              className="sidebar-toggle"
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
                placeholder="Search products, customers..."
                aria-label="Search"
              />
            </div>
          </div>

          <div className="navbar-right">
            <button className="icon-btn" aria-label="Notifications">
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
              <div className="profile-avatar">C</div>
              <div className="profile-text">
                <span>{username}</span>
                <small>{role}</small>
              </div>
            </div>
          </div>
        </header>

        <main className="cashier-content">
          {!started ? (
            <section className="welcome-screen">
              <div className="welcome-panel">
                <div className="welcome-badge">Welcome</div>
                <h1>Welcome to your cashier dashboard</h1>
                <p>
                  Start your point of sale flow from here. Click the button to
                  proceed to POS and begin processing orders.
                </p>
                <button className="get-started-btn" onClick={handleStart}>
                  Get Started
                </button>
              </div>
            </section>
          ) : (
            <section className="outlet-area">
              <Outlet />
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default CashierDashboard;