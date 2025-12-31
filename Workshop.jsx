import React, { useState } from "react";

const WorkshopRegistration = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    workshop: "",
    level: "",
    notes: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.workshop || !form.level) {
      setError("⚠️ Please fill all required fields");
      return;
    }

    setError("");
    alert("✅ Workshop Registration Successful!");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #eef2f7;
        }

        .main {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          display: flex;
          gap: 30px;
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          max-width: 800px;
          width: 100%;
        }

        .form-box, .preview-box {
          flex: 1;
        }

        h2 {
          margin-bottom: 15px;
          text-align: center;
        }

        input, select, textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        textarea {
          resize: none;
          height: 70px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: #fff;
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
          text-align: center;
          margin-bottom: 10px;
        }

        .preview-box {
          background: #f9fafb;
          padding: 20px;
          border-radius: 10px;
        }

        .preview-box p {
          margin: 8px 0;
        }

        @media (max-width: 700px) {
          .container {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="main">
        <div className="container">
          {/* FORM */}
          <form className="form-box" onSubmit={handleSubmit}>
            <h2>Workshop Registration</h2>

            {error && <p className="error">{error}</p>}

            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
            />

            <select
              name="workshop"
              value={form.workshop}
              onChange={handleChange}
            >
              <option value="">Select Workshop *</option>
              <option>React Basics</option>
              <option>Advanced JavaScript</option>
              <option>UI/UX Design</option>
            </select>

            <select
              name="level"
              value={form.level}
              onChange={handleChange}
            >
              <option value="">Skill Level *</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <textarea
              name="notes"
              placeholder="Additional Notes (optional)"
              value={form.notes}
              onChange={handleChange}
            />

            <button type="submit">Register</button>
          </form>

          {/* LIVE PREVIEW */}
          <div className="preview-box">
            <h2>Live Preview</h2>
            <p><strong>Name:</strong> {form.name || "-"}</p>
            <p><strong>Email:</strong> {form.email || "-"}</p>
            <p><strong>Workshop:</strong> {form.workshop || "-"}</p>
            <p><strong>Level:</strong> {form.level || "-"}</p>
            <p><strong>Notes:</strong> {form.notes || "-"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkshopRegistration;
