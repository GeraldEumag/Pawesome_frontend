import React, { useState } from "react";
import "./CreateUser.css";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "Customer",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API (Laravel) for user creation
    console.log("Creating user:", formData);
    alert(`User ${formData.firstName} ${formData.lastName} created!`);
  };

  return (
    <div className="create-user">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit} className="create-user-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="Customer">Customer</option>
            <option value="Administrator">Administrator</option>
            <option value="Staff">Staff</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="create-btn">
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;