import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faHistory, faChartBar, faUserCircle, faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import "./CashierSidebar.css";

const CashierSidebar = ({ collapsed, onToggleCollapse }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <aside className={`cashier-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-logo">
        <FontAwesomeIcon icon={faCashRegister} className="logo-icon" />
        {!collapsed && (
          <div className="logo-text">
            <h2>Cashier</h2>
            <p>POS panel</p>
          </div>
        )}
        <button className="collapse-btn" type="button" onClick={onToggleCollapse}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/cashier/pos" className={({ isActive }) => (isActive ? "active" : "") }>
              <FontAwesomeIcon icon={faCashRegister} className="nav-icon" />
              <span>POS</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cashier/history" className={({ isActive }) => (isActive ? "active" : "") }>
              <FontAwesomeIcon icon={faHistory} className="nav-icon" />
              <span>History</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cashier/reports" className={({ isActive }) => (isActive ? "active" : "") }>
              <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
              <span>Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cashier/profile" className={({ isActive }) => (isActive ? "active" : "") }>
              <FontAwesomeIcon icon={faUserCircle} className="nav-icon" />
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button type="button" className="logout-btn" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default CashierSidebar;
