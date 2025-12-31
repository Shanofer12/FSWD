import React, { useState } from "react";

const RegistrationUI = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    event: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.event) {
      alert("Please fill all fields");
      return;
    }

    setShowModal(true);
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle, #0f2027, #203a43, #2c5364);
        }

        .form-box {
          background: #111;
          padding: 35px;
          width: 340px;
          border-radius: 16px;
          box-shadow: 0 0 30px #00f2ff;
          color: #fff;
        }

        .form-box h2 {
          text-align: center;
          color: #00f2ff;
          margin-bottom: 25px;
        }

        .form-box input,
        .form-box select {
          width: 100%;
          padding: 12px;
          margin-bottom: 18px;
          background: transparent;
          border: 1px solid #00f2ff;
          border-radius: 8px;
          color: #fff;
          outline: none;
        }

        .form-box button {
          width: 100%;
          padding: 12px;
          background: #00f2ff;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .form-box button:hover {
          background: #00c9d6;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.8);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-box {
          background: #111;
          padding: 30px;
          border-radius: 14px;
          text-align: center;
          color: #fff;
          box-shadow: 0 0 25px #00f2ff;
        }

        .modal-box button {
          margin-top: 20px;
          padding: 10px 20px;
          background: #00f2ff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>

      <div className="wrapper">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Event Register</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={data.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={data.email}
            onChange={handleChange}
          />

          <select name="event" value={data.event} onChange={handleChange}>
            <option value="">Choose Event</option>
            <option>Hackathon</option>
            <option>Web Workshop</option>
            <option>Tech Talk</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-box">
            <h3>✅ Registration Successful</h3>
            <p>Name: {data.name}</p>
            <p>Event: {data.event}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationUI;
