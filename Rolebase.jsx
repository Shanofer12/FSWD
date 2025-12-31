import React, { useState } from "react";

const RoleBasedLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [loggedInRole, setLoggedInRole] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password || !loginData.role) {
      setError("⚠️ All fields are required");
      return;
    }

    setError("");
    setLoggedInRole(loginData.role);
  };

  const logout = () => {
    setLoggedInRole(null);
    setLoginData({ email: "", password: "", role: "" });
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f1f5f9;
        }

        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          background: white;
          padding: 30px;
          width: 340px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          text-align: center;
        }

        input, select {
          width: 100%;
          padding: 10px;
          margin-bottom: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #1e40af;
        }

        .error {
          color: red;
          margin-bottom: 10px;
        }

        .dashboard {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          text-align: center;
        }
      `}</style>

      <div className="container">
        {!loggedInRole ? (
          <form className="card" onSubmit={handleLogin}>
            <h2>Login</h2>

            {error && <p className="error">{error}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
            />

            <select
              name="role"
              value={loginData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>

            <button type="submit">Login</button>
          </form>
        ) : (
          <div className="dashboard">
            <h2>
              {loggedInRole === "Admin"
                ? "👑 Admin Dashboard"
                : "👤 User Dashboard"}
            </h2>
            <p>Welcome, {loggedInRole}!</p>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default RoleBasedLogin;
