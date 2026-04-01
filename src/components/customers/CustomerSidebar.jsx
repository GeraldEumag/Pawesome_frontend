import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarCheck,
  faPaw,
  faShoppingCart,
  faRobot,
  faSignOutAlt,
  faBars,
  faIdBadge, // ✅ User Info icon
} from "@fortawesome/free-solid-svg-icons";
import "./CustomerSidebar.css";

const CustomerSidebar = ({ collapsed, onToggleCollapse }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <div className={`customer-sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Logo + Toggle */}
      <div className="sidebar-logo">
        <FontAwesomeIcon icon={faHome} className="logo-icon" />
        {!collapsed && <h2>Pawesome</h2>}
        <button
          className="collapse-btn"
          type="button"
          onClick={onToggleCollapse}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Navigation */}
      <ul className="sidebar-nav">
        <li>
          {/* ✅ Dashboard points to /customer */}
          <NavLink to="/customer">
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
            <span className="sidebar-text">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customer/bookings">
            <FontAwesomeIcon icon={faCalendarCheck} className="nav-icon" />
            <span className="sidebar-text">Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customer/pets">
            <FontAwesomeIcon icon={faPaw} className="nav-icon" />
            <span className="sidebar-text">My Pets</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customer/store">
            <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
            <span className="sidebar-text">Store</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customer/chatbot">
            <FontAwesomeIcon icon={faRobot} className="nav-icon" />
            <span className="sidebar-text">ChatBot</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customer/userinfo">
            <FontAwesomeIcon icon={faIdBadge} className="nav-icon" />
            <span className="sidebar-text">User Info</span>
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

export default CustomerSidebar;