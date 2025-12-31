import React, { useState } from "react";

const StudentDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const students = [
    { id: 1, name: "Amit Kumar", course: "Computer Science", year: 3 },
    { id: 2, name: "Neha Sharma", course: "Information Technology", year: 2 },
    { id: 3, name: "Rahul Verma", course: "Mechanical", year: 4 },
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f1f5f9;
        }

        .layout {
          display: flex;
          min-height: 100vh;
        }

        .sidebar {
          width: 220px;
          background: #1e293b;
          color: #fff;
          padding: 20px;
        }

        .sidebar h2 {
          text-align: center;
          margin-bottom: 30px;
        }

        .nav-item {
          padding: 10px;
          border-radius: 6px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .nav-item.active,
        .nav-item:hover {
          background: #334155;
        }

        .content {
          flex: 1;
          padding: 30px;
        }

        .cards {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .card {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          flex: 1;
          min-width: 180px;
          text-align: center;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        th, td {
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
          text-align: left;
        }

        th {
          background: #2563eb;
          color: #fff;
        }

        @media (max-width: 768px) {
          .layout {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            display: flex;
            justify-content: space-around;
          }
        }
      `}</style>

      <div className="layout">
        {/* SIDEBAR */}
        <div className="sidebar">
          <h2>🎓 Student Panel</h2>

          <div
            className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </div>

          <div
            className={`nav-item ${activePage === "students" ? "active" : ""}`}
            onClick={() => setActivePage("students")}
          >
            Students
          </div>

          <div
            className={`nav-item ${activePage === "profile" ? "active" : ""}`}
            onClick={() => setActivePage("profile")}
          >
            Profile
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          {activePage === "dashboard" && (
            <>
              <h2>Dashboard</h2>

              <div className="cards">
                <div className="card">
                  <h3>Total Students</h3>
                  <p>{students.length}</p>
                </div>
                <div className="card">
                  <h3>Courses</h3>
                  <p>5</p>
                </div>
                <div className="card">
                  <h3>Active Year</h3>
                  <p>2025</p>
                </div>
              </div>
            </>
          )}

          {activePage === "students" && (
            <>
              <h2>Student List</h2>

              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.id}>
                      <td>{s.name}</td>
                      <td>{s.course}</td>
                      <td>{s.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {activePage === "profile" && (
            <>
              <h2>Profile</h2>
              <p>Admin Name: John Doe</p>
              <p>Email: admin@college.com</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
