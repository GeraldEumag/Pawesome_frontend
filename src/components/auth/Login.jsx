import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Static accounts: username → role
  const accounts = {
    admin: "admin",
    payroll: "payroll",
    customer: "customer",
    receptionist: "receptionist",
    vet: "vet",
    inventory: "inventory",
    cashier: "cashier",
    manager: "manager",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (accounts[username]) {
      const role = accounts[username];
      // Save fake token + role
      localStorage.setItem("token", "static-token");
      localStorage.setItem("role", role);
      localStorage.setItem("name", username);

      // Redirect to role-based dashboard
      // ✅ Ensure customer goes to /customer, admin to /admin, etc.
      navigate(`/${role}`);
    } else {
      alert("Invalid static account. Try: admin, customer, cashier, vet, etc.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Static Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
            placeholder="e.g. admin, customer, cashier, vet"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;