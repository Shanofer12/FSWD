import React from "react";

function HotelReservationApp() {

  const reserveRoom = () => {
    const guestName = prompt("Enter Guest Name:");
    if (!guestName) return alert("Guest name is required!");

    const roomType = prompt(
      "Enter Room Type:\n1. Single\n2. Double\n3. Deluxe"
    );
    if (!roomType) return alert("Room type is required!");

    const checkIn = prompt("Enter Check-in Date (DD/MM/YYYY):");
    if (!checkIn) return alert("Check-in date is required!");

    const checkOut = prompt("Enter Check-out Date (DD/MM/YYYY):");
    if (!checkOut) return alert("Check-out date is required!");

    const nights = prompt("Number of Nights:");
    if (!nights || isNaN(nights)) {
      return alert("Please enter a valid number of nights!");
    }

    const confirmBooking = confirm(
      `🏨 HOTEL RESERVATION DETAILS\n\nGuest: ${guestName}\nRoom Type: ${roomType}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nNights: ${nights}\n\nConfirm reservation?`
    );

    if (confirmBooking) {
      alert(
        `✅ RESERVATION CONFIRMED!\n\nGuest: ${guestName}\nRoom: ${roomType}\nStay: ${nights} night(s)\n\nEnjoy your stay!`
      );
    } else {
      alert("❌ Reservation cancelled.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>🏨 Grand Stay Hotel</div>

        <div style={styles.content}>
          <h2 style={styles.title}>Hotel Reservation System</h2>
          <p style={styles.subtitle}>
            Book rooms using JavaScript dialog boxes
          </p>

          <button style={styles.button} onClick={reserveRoom}>
            Reserve Room
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(135deg, #f59e0b, #f97316)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, Arial, sans-serif",
  },
  card: {
    width: "380px",
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#1f2937",
    color: "#ffffff",
    textAlign: "center",
    padding: "18px",
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  content: {
    padding: "30px",
    textAlign: "center",
  },
  title: {
    marginBottom: "8px",
    color: "#111827",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "25px",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#f97316",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default HotelReservationApp;
