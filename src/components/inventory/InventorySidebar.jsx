import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxes,
  faWarehouse,
  faHistory,
  faChartBar,
  faSignOutAlt,
  faListCheck,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./InventorySidebar.css";

const InventorySidebar = ({ collapsed, onToggleCollapse }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <aside className={`inventory-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-logo">
        <FontAwesomeIcon icon={faWarehouse} className="logo-icon" />
        {!collapsed && (
          <div className="logo-text">
            <h2>Inventory</h2>
            <p>Stock admin</p>
          </div>
        )}
        <button className="collapse-btn" type="button" onClick={onToggleCollapse}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/inventory/products" className={({ isActive }) => (isActive ? "active" : "") }>
              <FontAwesomeIcon icon={faBoxes} className="nav-icon" />
              <span className="sidebar-text">Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inventory/stock" className={({ isActive }) => (isActive ? "active" : "") }>
              <FontAwesomeIcon icon={faListCheck} className="nav-icon" />
              <span>Stock Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inventory/history" className={({ isActive }) => (isActive ? "active" : "") }>
              <FontAwesomeIcon icon={faHistory} className="nav-icon" />
              <span>History</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inventory/reports" className={({ isActive }) => (isActive ? "active" : "") }>
              <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
              <span>Reports</span>
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

export default InventorySidebar;
