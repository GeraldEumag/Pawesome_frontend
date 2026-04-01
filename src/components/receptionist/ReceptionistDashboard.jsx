import React, { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMoon,
  faSun,
  faUserCircle,
  faHome,
  faCalendarAlt,
  faUsers,
  faPhone,
  faClipboardList,
  faCog,
  faSignOutAlt,
  faBars,
  faUser,
  faClock,
  faCheckCircle,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import ReceptionistSidebar from "./ReceptionistSidebar";
import "./ReceptionistDashboard.css";

const ReceptionistDashboard = () => {
  const name = localStorage.getItem("name") || "Receptionist";
  const [theme, setTheme] = useState("light");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [unreadNotifications] = useState(8);
  const location = useLocation();

  const normalizedPath = location.pathname.replace(/\/+$/, "");
  const showOverview = normalizedPath === "/receptionist";

  const summaryCards = [
    {
      title: "Today's Appointments",
      value: 24,
      subtitle: "Scheduled",
      change: "+3",
    },
    {
      title: "Check-ins",
      value: 18,
      subtitle: "Completed",
      change: "+5",
    },
    {
      title: "Waiting Room",
      value: 6,
      subtitle: "Currently waiting",
      change: "-2",
    },
    {
      title: "Calls Received",
      value: 47,
      subtitle: "Today",
      change: "+12",
    },
  ];

  const todayAppointments = [
    {
      id: "APT-001",
      customer: "John Smith",
      pet: "Buddy (Dog)",
      time: "9:00 AM",
      service: "General Checkup",
      status: "checked-in",
    },
    {
      id: "APT-002", 
      customer: "Sarah Johnson",
      pet: "Luna (Cat)",
      time: "10:30 AM",
      service: "Vaccination",
      status: "waiting",
    },
    {
      id: "APT-003",
      customer: "Mike Davis",
      pet: "Max (Dog)",
      time: "11:00 AM",
      service: "Grooming",
      status: "confirmed",
    },
  ];

  return (
    <div className={`receptionist-dashboard ${theme} ${sidebarCollapsed ? "collapsed" : ""}`}>
      <ReceptionistSidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
      />

      <main className="receptionist-main">
        <header className="receptionist-navbar top-navbar">
          <div className="navbar-left">
            <h1>Reception Desk</h1>
            <p>Manage appointments and customer check-ins</p>
          </div>

          <div className="search-group">
            <input
              type="text"
              placeholder="Search appointments, customers, pets..."
            />
          </div>

          <div className="navbar-actions">
            <NavLink to="/receptionist/profile" className="receptionist-profile-btn">
              <span className="profile-avatar-icon">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              <span className="profile-info">
                <span className="profile-action-name">{name}</span>
                <span className="profile-action-role">Receptionist</span>
              </span>
            </NavLink>

            <button className="icon-btn notification-btn" type="button">
              <FontAwesomeIcon icon={faBell} />
              {unreadNotifications > 0 && (
                <span className="notification-badge">
                  {unreadNotifications}
                </span>
              )}
            </button>

            <button
              className="theme-toggle-btn"
              type="button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </button>
          </div>
        </header>

        {showOverview ? (
          <>
            <section className="overview-cards">
              {summaryCards.map((card) => (
                <div key={card.title} className="overview-card">
                  <div>
                    <h3>{card.value}</h3>
                    <p>{card.title}</p>
                  </div>
                  <span>{card.change}</span>
                </div>
              ))}
            </section>

            <section className="dashboard-grid">
              <article className="panel overview-panel">
                <div className="panel-header">
                  <div>
                    <h2>Today's Appointments</h2>
                    <p>Manage and track patient appointments</p>
                  </div>
                  <span className="badge">Live</span>
                </div>
                <div className="appointment-list">
                  {todayAppointments.map((appointment, index) => (
                    <div key={index} className="appointment-item">
                      <div className="appointment-header">
                        <div className="appointment-info">
                          <h3>{appointment.id}</h3>
                          <p>{appointment.customer} - {appointment.pet}</p>
                        </div>
                        <div className="appointment-time">
                          <strong>{appointment.time}</strong>
                          <span className={`status-badge ${appointment.status}`}>
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                      <div className="appointment-details">
                        <span>
                          <FontAwesomeIcon icon={faCalendarAlt} /> {appointment.service}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faClock} /> {appointment.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="panel quick-stat-panel">
                <div className="metric-card accent">
                  <h3>24</h3>
                  <p>Total Appointments</p>
                  <small>+3 from yesterday</small>
                </div>

                <div className="metric-card">
                  <h3>18</h3>
                  <p>Check-ins</p>
                </div>

                <div className="metric-card">
                  <h3>6</h3>
                  <p>Waiting</p>
                </div>
              </article>
            </section>

            <section className="dashboard-bottom">
              <div className="panel checkin-panel">
                <div className="panel-header space-between">
                  <div>
                    <h2>Recent Check-ins</h2>
                  </div>
                  <NavLink to="/receptionist/checkins" className="see-all-link">
                    View all check-ins
                  </NavLink>
                </div>

                <div className="checkin-list">
                  <div className="checkin-item">
                    <div className="checkin-icon">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <div className="checkin-info">
                      <h4>John Smith</h4>
                      <p>Buddy - General Checkup</p>
                    </div>
                    <div className="checkin-time">8:45 AM</div>
                  </div>
                  
                  <div className="checkin-item">
                    <div className="checkin-icon">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <div className="checkin-info">
                      <h4>Emily Wilson</h4>
                      <p>Whiskers - Dental Cleaning</p>
                    </div>
                    <div className="checkin-time">9:15 AM</div>
                  </div>
                  
                  <div className="checkin-item">
                    <div className="checkin-icon">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <div className="checkin-info">
                      <h4>Robert Brown</h4>
                      <p>Bella - Vaccination</p>
                    </div>
                    <div className="checkin-time">10:00 AM</div>
                  </div>
                </div>
              </div>

              <div className="panel performance-panel">
                <div className="panel-header space-between">
                  <div>
                    <h2>Desk Performance</h2>
                  </div>
                  <NavLink to="/receptionist/analytics" className="see-all-link">
                    View analytics
                  </NavLink>
                </div>
                
                <div className="desk-metrics">
                  <div className="status-card success">
                    <strong>75%</strong>
                    <p>Check-in Rate</p>
                    <small>Above target</small>
                  </div>
                  <div className="status-card info">
                    <strong>47</strong>
                    <p>Calls Handled</p>
                    <small>+12 today</small>
                  </div>
                </div>
                
                <div className="mini-chart-placeholder">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <span>Activity Trend</span>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="dashboard-content">
            <Outlet />
          </section>
        )}
      </main>
    </div>
  );
};

export default ReceptionistDashboard;