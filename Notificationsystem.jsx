import React, { useState } from "react";

const DashboardNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New user registered", read: false },
    { id: 2, text: "Server backup completed", read: false },
    { id: 3, text: "New comment on post", read: false },
  ]);

  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      text: "New system alert generated",
      read: false,
    };
    setNotifications([newNotification, ...notifications]);
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f1f5f9;
        }

        .dashboard {
          padding: 30px;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bell {
          position: relative;
          cursor: pointer;
          font-size: 26px;
        }

        .badge {
          position: absolute;
          top: -6px;
          right: -8px;
          background: red;
          color: #fff;
          font-size: 12px;
          border-radius: 50%;
          padding: 2px 6px;
        }

        .panel {
          position: absolute;
          right: 20px;
          top: 60px;
          width: 300px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          z-index: 100;
        }

        .panel-header {
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }

        .panel-body {
          max-height: 250px;
          overflow-y: auto;
        }

        .notification {
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
          cursor: pointer;
        }

        .notification.unread {
          background: #eff6ff;
          font-weight: bold;
        }

        .notification.read {
          background: #fff;
        }

        .actions {
          display: flex;
          justify-content: space-between;
          padding: 10px;
        }

        button {
          padding: 6px 10px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
        }

        button:hover {
          background: #1e40af;
        }
      `}</style>

      <div className="dashboard">
        <div className="top-bar">
          <h2>Dashboard</h2>

          <div className="bell" onClick={() => setOpen(!open)}>
            🔔
            {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
          </div>
        </div>

        <button onClick={addNotification}>➕ Add Notification</button>

        {open && (
          <div className="panel">
            <div className="panel-header">
              Notifications
              <span onClick={clearAll} style={{ cursor: "pointer" }}>
                Clear All
              </span>
            </div>

            <div className="panel-body">
              {notifications.length === 0 ? (
                <p style={{ padding: "12px" }}>No notifications</p>
              ) : (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`notification ${
                      n.read ? "read" : "unread"
                    }`}
                    onClick={() => markAsRead(n.id)}
                  >
                    {n.text}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardNotifications;
