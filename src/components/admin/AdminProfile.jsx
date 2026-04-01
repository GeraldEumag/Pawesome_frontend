import React from "react";
import "./AdminDashboard.css";

const AdminProfile = () => {
  const name = localStorage.getItem("name") || "Admin User";
  const email = localStorage.getItem("email") || "admin@pawesome.com";
  const role = localStorage.getItem("role") || "Administrator";

  return (
    <div className="admin-profile-page">
      <section className="panel admin-profile-panel">
        <div className="panel-header space-between">
          <div>
            <h2>Admin Profile</h2>
            <p>Manage your own account details and quick profile actions.</p>
          </div>
        </div>

        <div className="userinfo-grid">
          <div className="userinfo-summary panel">
            <div className="profile-summary">
              <div className="profile-avatar">{name.charAt(0)}</div>
              <div>
                <h3>{name}</h3>
                <p className="profile-role">{role}</p>
                <p className="userinfo-email">{email}</p>
              </div>
            </div>

            <div className="userinfo-details">
              <div className="detail-row">
                <span className="detail-label">Role</span>
                <strong>{role}</strong>
              </div>
              <div className="detail-row">
                <span className="detail-label">Team access</span>
                <strong>All departments</strong>
              </div>
              <div className="detail-row">
                <span className="detail-label">Last login</span>
                <strong>Today, 08:35 AM</strong>
              </div>
              <div className="detail-row">
                <span className="detail-label">Member since</span>
                <strong>Jan 2024</strong>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Quick actions</h3>
            </div>
            <ul className="admin-actions-list">
              <li>Update password</li>
              <li>Manage notifications</li>
              <li>View activity logs</li>
              <li>Adjust account preferences</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminProfile;
