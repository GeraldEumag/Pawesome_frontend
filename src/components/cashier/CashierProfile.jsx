import React from "react";
import "./CashierProfile.css";

const CashierProfile = () => {
  const user = {
    name: "Cashier User",
    role: "Cashier",
    email: "cashier@example.com",
    phone: "+1 (555) 123-4567",
    since: "2025-01-15",
    branch: "Main Store",
  };

  return (
    <section className="cashier-profile-page">
      <div className="profile-header">
        <div>
          <p className="section-label">Profile</p>
          <h2>{user.name}</h2>
          <span className="role-badge">{user.role}</span>
        </div>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <h3>Contact Information</h3>
          <p><strong>Email</strong></p>
          <p>{user.email}</p>
          <p><strong>Phone</strong></p>
          <p>{user.phone}</p>
        </div>

        <div className="profile-card">
          <h3>Account Details</h3>
          <p><strong>Branch</strong></p>
          <p>{user.branch}</p>
          <p><strong>Member Since</strong></p>
          <p>{user.since}</p>
        </div>
      </div>

      <div className="profile-actions">
        <div className="action-card">
          <h4>Today’s Activity</h4>
          <p>Review recent orders and open sessions.</p>
        </div>
        <div className="action-card">
          <h4>Quick Settings</h4>
          <p>Update your cashier preferences and notifications.</p>
        </div>
      </div>
    </section>
  );
};

export default CashierProfile;
