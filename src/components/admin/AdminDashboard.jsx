import React, { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMoon,
  faSun,
  faUserCircle,
  faUsers,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import AdminSidebar from "./AdminSidebar";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const name = localStorage.getItem("name") || "Admin";
  const [theme, setTheme] = useState("light");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [unreadNotifications] = useState(3);
  const location = useLocation();

  const normalizedPath = location.pathname.replace(/\/+$/, "");
  const showOverview = normalizedPath === "/admin";

  const summaryCards = [
    {
      title: "Active Orders",
      value: 132,
      subtitle: "Orders received",
      change: "+20%",
    },
    {
      title: "Pending Orders",
      value: 52,
      subtitle: "Needs approval",
      change: "+10%",
    },
    {
      title: "Completed Orders",
      value: 56,
      subtitle: "This month",
      change: "+12%",
    },
    {
      title: "Hours of work done",
      value: 1425,
      subtitle: "Monthly total",
      change: "+20%",
    },
  ];

  const orderRequests = [
    {
      name: "Kristin Watson",
      time: "12 min ago",
      date: "25th Jan, 10:00am",
      pickup: "4517 Washington Ave.",
      dropoff: "1226 University Dr, Menlo Park",
      people: 2,
      tasks: 4,
    },
    {
      name: "Theresa Webb",
      time: "12 min ago",
      date: "25th Jan, 10:00am",
      pickup: "4517 Washington Ave.",
      dropoff: "1226 University Dr, Menlo Park",
      people: 2,
      tasks: 4,
    },
  ];

  return (
    <div className={`admin-dashboard ${theme} ${sidebarCollapsed ? "collapsed" : ""}`}>
      <AdminSidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
      />

      <main className="admin-main">
        <header className="admin-navbar top-navbar">
          <div className="navbar-left">
            <h1>Overview</h1>
            <p>Manage your team members and account permissions here.</p>
          </div>

          <div className="search-group">
            <input
              type="text"
              placeholder="Search orders, users, reports..."
            />
          </div>

          <div className="navbar-actions">
            <NavLink to="/admin/profile" className="admin-profile-btn">
              <span className="profile-avatar-icon">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              <span className="profile-info">
                <span className="profile-action-name">{name}</span>
                <span className="profile-action-role">Administrator</span>
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
                    <h2>Monthly Order Overview</h2>
                    <p>
                      Your sales performance is 70% better compared to last
                      month.
                    </p>
                  </div>
                  <span className="badge">132 Orders received</span>
                </div>
                <div className="chart-placeholder">Chart placeholder</div>
              </article>

              <article className="panel quick-stat-panel">
                <div className="metric-card accent">
                  <h3>70%</h3>
                  <p>Sales performance</p>
                  <small>Compared to last month</small>
                </div>

                <div className="metric-card">
                  <h3>$7,120</h3>
                  <p>This month&apos;s operational cost</p>
                </div>
              </article>
            </section>

            <section className="dashboard-bottom">
              <div className="panel orders-panel">
                <div className="panel-header space-between">
                  <div>
                    <h2>New order requests</h2>
                  </div>
                  <NavLink to="/admin/reports" className="see-all-link">
                    See all (52)
                  </NavLink>
                </div>

                <div className="request-list">
                  {orderRequests.map((order) => (
                    <div key={order.name} className="request-card">
                      <div className="request-card-top">
                        <div>
                          <h3>{order.name}</h3>
                          <p>{order.time}</p>
                        </div>
                        <span className="status-badge">Pickup</span>
                      </div>
                      <p>{order.date}</p>
                      <div className="request-info">
                        <div>
                          <strong>Pickup</strong>
                          <p>{order.pickup}</p>
                        </div>
                        <div>
                          <strong>Drop-off</strong>
                          <p>{order.dropoff}</p>
                        </div>
                      </div>
                      <div className="request-footer">
                        <span>
                          <FontAwesomeIcon icon={faUsers} /> {order.people}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faClipboardList} /> {order.tasks}
                        </span>
                        <button className="secondary-btn" type="button">
                          See order details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel completion-panel">
                <div className="panel-header space-between">
                  <div>
                    <h2>Order Completion/Cancellation Rate</h2>
                  </div>
                  <NavLink to="/admin/reports" className="see-all-link">
                    See report
                  </NavLink>
                </div>
                <div className="completion-metrics">
                  <div className="status-card success">
                    <strong>75%</strong>
                    <p>Completion rate this month</p>
                  </div>
                  <div className="status-card danger">
                    <strong>10%</strong>
                    <p>Cancellation rate below 10%</p>
                  </div>
                </div>
                <div className="mini-chart-placeholder">Chart placeholder</div>
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

export default AdminDashboard;
