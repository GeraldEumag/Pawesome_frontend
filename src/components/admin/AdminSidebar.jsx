import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faHistory,
  faChartBar,
  faSignOutAlt,
  faUserCircle,
  faBars,
  faUser,
  faBuilding,
  faMoneyBillWave,
  faChevronDown,
  faChevronRight,
  faDollarSign,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import "./AdminSidebar.css";

const AdminSidebar = ({ collapsed, onToggleCollapse }) => {
  const [payrollExpanded, setPayrollExpanded] = React.useState(false);
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
    <aside className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <button className="collapse-btn" onClick={onToggleCollapse}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {!collapsed && (
          <div className="sidebar-logo">
            <FontAwesomeIcon icon={faBuilding} />
            <span>Admin Portal</span>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Dashboard"
            >
              <FontAwesomeIcon icon={faHome} />
              {!collapsed && <span>Dashboard</span>}
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink
              to="/admin/users"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Users"
            >
              <FontAwesomeIcon icon={faUsers} />
              {!collapsed && <span>Users</span>}
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink
              to="/admin/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Profile"
            >
              <FontAwesomeIcon icon={faUser} />
              {!collapsed && <span>Profile</span>}
            </NavLink>
          </li>

          <li className="nav-item">
            <div 
              className="nav-dropdown-header"
              onClick={() => !collapsed && setPayrollExpanded(!payrollExpanded)}
              title="Payroll"
            >
              <FontAwesomeIcon icon={faMoneyBillWave} />
              {!collapsed && <span>Payroll</span>}
              {!collapsed && (
                <FontAwesomeIcon 
                  icon={payrollExpanded ? faChevronDown : faChevronRight} 
                  className="dropdown-arrow"
                />
              )}
            </div>
            {!collapsed && (
              <ul className={`nav-sublist ${payrollExpanded ? 'expanded' : ''}`}>
                <li className="nav-subitem">
                  <NavLink
                    to="/admin/payroll"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    title="Payroll Overview"
                  >
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span>Payroll Overview</span>
                  </NavLink>
                </li>
                <li className="nav-subitem">
                  <NavLink
                    to="/admin/payroll/salaries"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    title="Salary Management"
                  >
                    <FontAwesomeIcon icon={faDollarSign} />
                    <span>Salary Management</span>
                  </NavLink>
                </li>
                <li className="nav-subitem">
                  <NavLink
                    to="/admin/payroll/reports"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    title="Payroll Reports"
                  >
                    <FontAwesomeIcon icon={faFileInvoiceDollar} />
                    <span>Payroll Reports</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <NavLink
              to="/admin/history"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="History"
            >
              <FontAwesomeIcon icon={faHistory} />
              {!collapsed && <span>History</span>}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/admin/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
              title="Reports"
            >
              <FontAwesomeIcon icon={faChartBar} />
              {!collapsed && <span>Reports</span>}
            </NavLink>
          </li>

          </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout} title="Logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
