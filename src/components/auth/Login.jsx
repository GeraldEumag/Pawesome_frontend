import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Static accounts: username → role
  const accounts = {
    admin: { role: "admin", name: "Administrator", password: "admin123" },
    payroll: { role: "payroll", name: "Payroll Manager", password: "payroll123" },
    customer: { role: "customer", name: "Customer", password: "customer123" },
    receptionist: { role: "receptionist", name: "Receptionist", password: "reception123" },
    vet: { role: "vet", name: "Veterinarian", password: "vet123" },
    inventory: { role: "inventory", name: "Inventory Manager", password: "inventory123" },
    cashier: { role: "cashier", name: "Cashier", password: "cashier123" },
    manager: { role: "manager", name: "Manager", password: "manager123" }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const username = formData.username.toLowerCase();
      
      if (accounts[username]) {
        const account = accounts[username];
        
        // For demo purposes, accept any password for valid usernames
        // In production, you'd validate: account.password === formData.password
        
        // Save authentication data
        localStorage.setItem("token", "static-token");
        localStorage.setItem("role", account.role);
        localStorage.setItem("name", account.name);
        localStorage.setItem("username", username);
        
        if (formData.rememberMe) {
          localStorage.setItem("rememberMe", "true");
        }

        // Show success message
        alert(`Welcome back, ${account.name}!`);
        
        // Redirect to role-based dashboard
        navigate(`/${account.role}`);
      } else {
        setErrors({ 
          username: "Invalid username or password",
          password: "Invalid username or password"
        });
      }
      
      setIsSubmitting(false);
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-content">
          <div className="login-header">
            <div className="logo">
              <h1>PAWESOME</h1>
              <span>RETREAT INC.</span>
            </div>
            <h2>Welcome Back</h2>
            <p>Sign in to access your account and manage your pet care services</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-section">
              <div className="section-header">
                <span className="section-icon">🔐</span>
                <h3>Sign In</h3>
              </div>
              
              <div className="form-group">
                <label htmlFor="username">Username *</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={errors.username ? "error" : ""}
                  placeholder="Enter your username"
                  disabled={isSubmitting}
                />
                {errors.username && <span className="error-message">{errors.username}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <div className="password-input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? "error" : ""}
                    placeholder="Enter your password"
                    disabled={isSubmitting}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                    disabled={isSubmitting}
                  >
                    {showPassword ? "👁️‍🗨️" : "👁️"}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#forgot-password" className="forgot-password">Forgot password?</a>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="login-btn" disabled={isSubmitting}>
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>
          
          <div className="register-link">
            <span>Don't have an account?</span>
            <Link to="/register" className="link">Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;