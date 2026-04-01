import React, { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMoon,
  faSun,
  faUserCircle,
  faHome,
  faShoppingCart,
  faReceipt,
  faChartBar,
  faCog,
  faSignOutAlt,
  faBars,
  faUser,
  faCalendarAlt,
  faCreditCard,
  faCashRegister,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import CashierSidebar from "./CashierSidebar";
import "./CashierDashboard.css";

const CashierDashboard = () => {
  const name = localStorage.getItem("name") || "Cashier";
  const [theme, setTheme] = useState("light");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [unreadNotifications] = useState(4);
  const location = useLocation();

  const normalizedPath = location.pathname.replace(/\/+$/, "");
  const showOverview = normalizedPath === "/cashier";

  const summaryCards = [
    {
      title: "Today's Sales",
      value: "$3,247",
      subtitle: "Total revenue",
      change: "+12%",
    },
    {
      title: "Transactions",
      value: 89,
      subtitle: "Completed today",
      change: "+8",
    },
    {
      title: "Average Order",
      value: "$36.50",
      subtitle: "Per transaction",
      change: "+$2.30",
    },
    {
      title: "Customers Served",
      value: 67,
      subtitle: "Unique customers",
      change: "+15",
    },
  ];

  const recentTransactions = [
    {
      id: "TRX-001",
      customer: "John Smith",
      amount: "$125.50",
      items: 3,
      payment: "Credit Card",
      time: "10:23 AM",
      status: "completed",
    },
    {
      id: "TRX-002",
      customer: "Sarah Johnson",
      amount: "$89.25",
      items: 2,
      payment: "Cash",
      time: "10:45 AM",
      status: "completed",
    },
    {
      id: "TRX-003",
      customer: "Mike Davis",
      amount: "$234.80",
      items: 5,
      payment: "Credit Card",
      time: "11:02 AM",
      status: "completed",
    },
  ];

  return (
    <div className={`cashier-dashboard ${theme} ${sidebarCollapsed ? "collapsed" : ""}`}>
      <CashierSidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
      />

      <main className="cashier-main">
        <header className="cashier-navbar top-navbar">
          <div className="navbar-left">
            <h1>Point of Sale</h1>
            <p>Process transactions and manage sales</p>
          </div>

          <div className="search-group">
            <input
              type="text"
              placeholder="Search products, customers, transactions..."
            />
          </div>

          <div className="navbar-actions">
            <NavLink to="/cashier/profile" className="cashier-profile-btn">
              <span className="profile-avatar-icon">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              <span className="profile-info">
                <span className="profile-action-name">{name}</span>
                <span className="profile-action-role">Cashier</span>
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
                    <h2>Recent Transactions</h2>
                    <p>Latest sales and payment processing</p>
                  </div>
                  <span className="badge">Today</span>
                </div>
                <div className="transaction-list">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="transaction-item">
                      <div className="transaction-header">
                        <div className="transaction-info">
                          <h3>{transaction.id}</h3>
                          <p>{transaction.customer}</p>
                        </div>
                        <div className="transaction-amount">
                          <strong>{transaction.amount}</strong>
                          <span className={`status-badge ${transaction.status}`}>
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                      <div className="transaction-details">
                        <span>
                          <FontAwesomeIcon icon={faShoppingCart} /> {transaction.items} items
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCreditCard} /> {transaction.payment}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCalendarAlt} /> {transaction.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="panel quick-stat-panel">
                <div className="metric-card accent">
                  <h3>$3,247</h3>
                  <p>Today's Revenue</p>
                  <small>+12% from yesterday</small>
                </div>

                <div className="metric-card">
                  <h3>89</h3>
                  <p>Transactions</p>
                </div>

                <div className="metric-card">
                  <h3>67</h3>
                  <p>Customers</p>
                </div>
              </article>
            </section>

            <section className="dashboard-bottom">
              <div className="panel sales-panel">
                <div className="panel-header space-between">
                  <div>
                    <h2>Payment Methods</h2>
                  </div>
                  <NavLink to="/cashier/payments" className="see-all-link">
                    View details
                  </NavLink>
                </div>

                <div className="payment-methods">
                  <div className="payment-method-item">
                    <div className="payment-icon">
                      <FontAwesomeIcon icon={faCreditCard} />
                    </div>
                    <div className="payment-info">
                      <h4>Credit Card</h4>
                      <p>45 transactions</p>
                    </div>
                    <div className="payment-amount">$2,156.75</div>
                  </div>
                  
                  <div className="payment-method-item">
                    <div className="payment-icon">
                      <FontAwesomeIcon icon={faCashRegister} />
                    </div>
                    <div className="payment-info">
                      <h4>Cash</h4>
                      <p>32 transactions</p>
                    </div>
                    <div className="payment-amount">$890.25</div>
                  </div>
                  
                  <div className="payment-method-item">
                    <div className="payment-icon">
                      <FontAwesomeIcon icon={faReceipt} />
                    </div>
                    <div className="payment-info">
                      <h4>Other</h4>
                      <p>12 transactions</p>
                    </div>
                    <div className="payment-amount">$200.00</div>
                  </div>
                </div>
              </div>

              <div className="panel performance-panel">
                <div className="panel-header space-between">
                  <div>
                    <h2>Sales Performance</h2>
                  </div>
                  <NavLink to="/cashier/analytics" className="see-all-link">
                    View analytics
                  </NavLink>
                </div>
                
                <div className="sales-metrics">
                  <div className="status-card success">
                    <strong>$36.50</strong>
                    <p>Average Order</p>
                    <small>+$2.30 increase</small>
                  </div>
                  <div className="status-card info">
                    <strong>89</strong>
                    <p>Transactions</p>
                    <small>+8 from yesterday</small>
                  </div>
                </div>
                
                <div className="mini-chart-placeholder">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <span>Sales Trend</span>
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

export default CashierDashboard;