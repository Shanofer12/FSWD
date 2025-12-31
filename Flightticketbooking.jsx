import React from "react";

function SkyJetBooking() {
  const startBooking = () => {
    const passenger = prompt("Passenger Full Name:");
    if (!passenger) return alert("Name is required!");

    const origin = prompt("From (City / Airport):");
    if (!origin) return alert("Origin is required!");

    const destination = prompt("To (City / Airport):");
    if (!destination) return alert("Destination is required!");

    const travelDate = prompt("Travel Date (DD/MM/YYYY):");
    if (!travelDate) return alert("Travel date is required!");

    const confirmation = confirm(
      `✈️ SKYJET CONFIRMATION\n\nPassenger: ${passenger}\nRoute: ${origin} → ${destination}\nDate: ${travelDate}\n\nProceed to book?`
    );

    if (confirmation) {
      alert(
        `✅ TICKET CONFIRMED\n\nPassenger: ${passenger}\n${origin} → ${destination}\nDate: ${travelDate}\n\nHappy Journey!`
      );
    } else {
      alert("❌ Booking cancelled.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.bookingCard}>
        <div style={styles.header}>
          ✈️ SkyJet
        </div>

        <div style={styles.content}>
          <h2 style={styles.title}>Book Your Flight</h2>
          <p style={styles.text}>
            Fast, secure and easy ticket booking using dialog boxes
          </p>

          <button style={styles.bookBtn} onClick={startBooking}>
            Start Booking
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  bookingCard: {
    width: "380px",
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
  },
  header: {
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    color: "#ffffff",
    padding: "20px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  content: {
    padding: "30px",
    textAlign: "center",
  },
  title: {
    color: "#1e293b",
    marginBottom: "10px",
  },
  text: {
    color: "#64748b",
    fontSize: "14px",
    marginBottom: "25px",
  },
  bookBtn: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default SkyJetBooking;
