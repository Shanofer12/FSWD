import React, { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!user.name) newErrors.name = "Name is required";
    if (!user.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!user.age) newErrors.age = "Age is required";
    if (!user.bio) newErrors.bio = "Bio is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("✅ Profile updated successfully!");
      setErrors({});
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f6f8;
        }

        .profile-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-card {
          background: #fff;
          padding: 30px;
          width: 380px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .profile-card h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .profile-card input,
        .profile-card textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 6px;
          border-radius: 6px;
          border: 1px solid #ccc;
          outline: none;
        }

        .profile-card textarea {
          resize: none;
          height: 80px;
        }

        .error {
          color: red;
          font-size: 13px;
          margin-bottom: 10px;
        }

        .success {
          color: green;
          text-align: center;
          margin-bottom: 15px;
        }

        .profile-card button {
          width: 100%;
          padding: 12px;
          background: #4f46e5;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        .profile-card button:hover {
          background: #4338ca;
        }
      `}</style>

      <div className="profile-container">
        <form className="profile-card" onSubmit={handleSubmit}>
          <h2>Edit Profile</h2>

          {success && <p className="success">{success}</p>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={user.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error">{errors.age}</p>}

          <textarea
            name="bio"
            placeholder="Short Bio"
            value={user.bio}
            onChange={handleChange}
          />
          {errors.bio && <p className="error">{errors.bio}</p>}

          <button type="submit">Save Profile</button>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
