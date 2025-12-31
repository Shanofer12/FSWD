import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

/* ---------- Navbar ---------- */
const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>🎓 Student Dashboard</h2>
      <div>
        <NavLink to="/" style={styles.link}>Dashboard</NavLink>
        <NavLink to="/students" style={styles.link}>Students</NavLink>
        <NavLink to="/reports" style={styles.link}>Reports</NavLink>
        <NavLink to="/settings" style={styles.link}>Settings</NavLink>
      </div>
    </nav>
  );
};

/* ---------- Pages ---------- */
const Dashboard = () => (
  <Page title="Dashboard">
    <p>Welcome to the student management dashboard.</p>
  </Page>
);

const Students = () => {
  const students = ["Arun", "Meera", "Rahul", "Sneha"];
  return (
    <Page title="Students">
      <ul>
        {students.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </Page>
  );
};

const Reports = () => (
  <Page title="Reports">
    <p>Student performance reports will be shown here.</p>
  </Page>
);

const Settings = () => (
  <Page title="Settings">
    <p>Manage dashboard preferences.</p>
  </Page>
);

/* ---------- Reusable Page Wrapper ---------- */
const Page = ({ title, children }) => (
  <div style={styles.card}>
    <h1>{title}</h1>
    {children}
  </div>
);

/* ---------- Styles ---------- */
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1e293b",
    color: "#fff",
  },
  link: {
    marginLeft: "15px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  card: {
    width: "100%",
    maxWidth: "700px",
    padding: "25px",
    backgroundColor: "#f8fafc",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
};

export default StudentDashboard;
