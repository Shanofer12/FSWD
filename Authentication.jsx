import React, { useState } from "react";

const AuthSystem = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      setError("⚠️ Please fill all fields");
      return;
    }

    if (
      credentials.email === "admin@example.com" &&
      credentials.password === "12345"
    ) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("❌ Invalid email or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ email: "", password: "" });
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f8fafc;
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
          width: 330px;
          border-radius: 12px;
          box-shadow: 0 12px 25px rgba(0,0,0,0.1);
          text-align: center;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #16a34a;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #15803d;
        }

        .error {
          color: red;
          margin-bottom: 10px;
        }

        .success {
          color: green;
        }
      `}</style>

      <div className="container">
        {!isAuthenticated ? (
          <form className="card" onSubmit={handleLogin}>
            <h2>Login</h2>

            {error && <p className="error">{error}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />

            <button type="submit">Login</button>
          </form>
        ) : (
          <div className="card">
            <h2 className="success">✅ Login Successful</h2>
            <p>Welcome to the dashboard!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthSystem;
