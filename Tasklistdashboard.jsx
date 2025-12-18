import React, { useState } from "react";

function TaskDashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: "Segoe UI", sans-serif;
        }

        .app {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          width: 420px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          overflow: hidden;
        }

        .header {
          background: linear-gradient(135deg, #43cea2, #185a9d);
          color: white;
          padding: 20px;
          text-align: center;
        }

        .header h2 {
          margin: 0;
        }

        .content {
          padding: 20px;
        }

        .input-group {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .input-group input {
          flex: 1;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .input-group button {
          padding: 10px 16px;
          background: #185a9d;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        .input-group button:hover {
          background: #0f3c6e;
        }

        .task-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .task-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f1f4f9;
          padding: 12px 14px;
          border-radius: 10px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .task-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }

        .task-text {
          font-size: 14px;
          color: #333;
        }

        .delete-btn {
          background: transparent;
          border: none;
          color: #e74c3c;
          font-weight: bold;
          cursor: pointer;
          font-size: 14px;
        }

        .delete-btn:hover {
          color: #c0392b;
        }

        .empty {
          text-align: center;
          color: #888;
          font-size: 14px;
          margin-top: 10px;
        }
      `}</style>

      <div className="app">
        <div className="card">
          <div className="header">
            <h2>📌 Task Dashboard</h2>
            <p>Organize your daily work</p>
          </div>

          <div className="content">
            <div className="input-group">
              <input
                type="text"
                placeholder="Type a new task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button onClick={addTask}>Add</button>
            </div>

            {tasks.length === 0 ? (
              <p className="empty">No tasks yet. Add one above 👆</p>
            ) : (
              <div className="task-list">
                {tasks.map((t, index) => (
                  <div className="task-item" key={index}>
                    <span className="task-text">{t}</span>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(index)}
                    >
                      ✖
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskDashboard;
