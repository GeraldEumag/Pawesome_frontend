import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faFileAlt,
  faHistory,
  faMoneyBill,
  faCalendarCheck,
  faChartBar,
  faCog,
  faSignOutAlt,
  faUserCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./AdminSidebar.css";

const AdminSidebar = ({ collapsed, onToggleCollapse }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");

    // Redirect to landing page
    navigate("/");
  };

  return (
    <div className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Logo + Toggle */}
      <div className="sidebar-logo">
        <FontAwesomeIcon icon={faHome} className="logo-icon" />
        {!collapsed && <h2>Pawesome</h2>}
        <button
          className="collapse-btn"
          onClick={onToggleCollapse}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Navigation */}
      <ul className="sidebar-nav">
        <li>
          <NavLink to="/admin" end>
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
            <span className="sidebar-text">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/profile">
            <FontAwesomeIcon icon={faUserCircle} className="nav-icon" />
            <span className="sidebar-text">Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users">
            <FontAwesomeIcon icon={faUsers} className="nav-icon" />
            <span className="sidebar-text">User Management</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users/create">
            <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
            <span className="sidebar-text">Create User</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/reports">
            <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
            <span className="sidebar-text">Reports</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/login-history">
            <FontAwesomeIcon icon={faHistory} className="nav-icon" />
            <span className="sidebar-text">Login History</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/payroll">
            <FontAwesomeIcon icon={faMoneyBill} className="nav-icon" />
            <span className="sidebar-text">Payroll</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/reports/attendance">
            <FontAwesomeIcon icon={faCalendarCheck} className="nav-icon" />
            <span className="sidebar-text">Attendance</span>
          </NavLink>
        </li>
      </ul>

      {/* Logout pinned at bottom */}
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
          <span className="sidebar-text">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;