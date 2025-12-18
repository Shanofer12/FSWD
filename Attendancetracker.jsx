import React, { useState } from "react";

function AttendanceTracker() {
  const [students, setStudents] = useState([
    { id: 1, name: "Sahana", status: "Absent" },
    { id: 2, name: "Harivarshini", status: "Absent" },
    { id: 3, name: "Shanofer", status: "Absent" },
    { id: 4, name: "Nithya", status: "Absent" }
  ]);

  const markAttendance = (id, status) => {
    setStudents(
      students.map(student =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const presentCount = students.filter(s => s.status === "Present").length;

  return (
    <>
      <style>{`
        body {
          background: #f4f6f9;
          font-family: "Segoe UI", sans-serif;
        }

        .attendance-container {
          width: 70%;
          margin: 50px auto;
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          margin-bottom: 15px;
          color: #333;
        }

        .summary {
          text-align: center;
          margin-bottom: 20px;
          font-weight: 600;
          color: #555;
        }

        .summary span {
          color: green;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          background: #2f80ed;
          color: white;
          padding: 12px;
        }

        td {
          padding: 12px;
          text-align: center;
          border-bottom: 1px solid #ddd;
        }

        .status {
          font-weight: bold;
        }

        .present {
          color: green;
        }

        .absent {
          color: red;
        }

        button {
          padding: 6px 12px;
          margin: 0 4px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        }

        .present-btn {
          background: #27ae60;
          color: white;
        }

        .absent-btn {
          background: #e74c3c;
          color: white;
        }

        button:hover {
          opacity: 0.85;
        }
      `}</style>

      <div className="attendance-container">
        <h1>📋 Attendance Tracker</h1>

        <div className="summary">
          Present: <span>{presentCount}</span> / {students.length}
        </div>

        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Status</th>
              <th>Mark</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td
                  className={`status ${
                    student.status === "Present" ? "present" : "absent"
                  }`}
                >
                  {student.status}
                </td>
                <td>
                  <button
                    className="present-btn"
                    onClick={() =>
                      markAttendance(student.id, "Present")
                    }
                  >
                    Present
                  </button>
                  <button
                    className="absent-btn"
                    onClick={() =>
                      markAttendance(student.id, "Absent")
                    }
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AttendanceTracker;
