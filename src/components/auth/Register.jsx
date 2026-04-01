import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save static "account" in localStorage
    localStorage.setItem("token", "static-token");
    localStorage.setItem("name", formData.name);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("role", formData.role);

    alert("Registration successful!");

    // Redirect to role-based dashboard
    navigate(`/${formData.role}`);
  };

  return (
    <div className="auth-container" style={{ padding: "2rem" }}>
      <h2>Register (Static)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="customer">Customer</option>
          <option value="receptionist">Receptionist</option>
          <option value="vet">Vet</option>
          <option value="manager">Manager</option>
          <option value="cashier">Cashier</option>
          <option value="admin">Admin</option>
          <option value="payroll">Payroll</option>
          <option value="inventory">Inventory</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;