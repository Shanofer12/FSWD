import React, { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    bio: "",
    gender: "",
    interests: [],
    country: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((item) => item !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        file: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted!");
  };

  // Inline CSS styles
  const styles = {
    page: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "20px",
    },
    form: {
      background: "rgba(255, 255, 255, 0.85)",
      padding: "25px",
      borderRadius: "12px",
      width: "350px",
      boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    },
    label: {
      display: "block",
      marginTop: "10px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginTop: "5px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    group: {
      display: "flex",
      gap: "15px",
      marginTop: "5px",
    },
    button: {
      width: "100%",
      padding: "10px",
      marginTop: "20px",
      backgroundColor: "#4c6ef5",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Registration Form</h2>

        {/* Text Field */}
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          style={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Password Field */}
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          name="password"
          style={styles.input}
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Text Area */}
        <label style={styles.label}>Bio:</label>
        <textarea
          name="bio"
          style={styles.input}
          value={formData.bio}
          onChange={handleChange}
        ></textarea>

        {/* Radio Buttons */}
        <label style={styles.label}>Gender:</label>
        <div style={styles.group}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />{" "}
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>

        {/* Checkboxes */}
        <label style={styles.label}>Interests:</label>
        <div style={styles.group}>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Sports"
              onChange={handleChange}
            />{" "}
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Music"
              onChange={handleChange}
            />{" "}
            Music
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Travel"
              onChange={handleChange}
            />{" "}
            Travel
          </label>
        </div>

        {/* Dropdown */}
        <label style={styles.label}>Country:</label>
        <select
          name="country"
          style={styles.input}
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
        </select>

        {/* File Upload */}
        <label style={styles.label}>Upload File:</label>
        <input
          type="file"
          name="file"
          style={styles.input}
          onChange={handleChange}
        />

        {/* Submit */}
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;

