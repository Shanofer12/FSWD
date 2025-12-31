import React from "react";

function CabBookingApp() {

  const bookCab = () => {
    const customerName = prompt("Enter Customer Name:");
    if (!customerName) return alert("Customer name is required!");

    const pickup = prompt("Enter Pickup Location:");
    if (!pickup) return alert("Pickup location is required!");

    const drop = prompt("Enter Drop Location:");
    if (!drop) return alert("Drop location is required!");

    const cabType = prompt(
      "Select Cab Type:\n1. Mini\n2. Sedan\n3. SUV"
    );
    if (!cabType) return alert("Cab type is required!");

    const distance = prompt("Enter Distance (in km):");
    if (!distance || isNaN(distance)) {
      return alert("Please enter a valid distance!");
    }

    const confirmRide = confirm(
      `🚕 CAB BOOKING DETAILS\n\nCustomer: ${customerName}\nPickup: ${pickup}\nDrop: ${drop}\nCab Type: ${cabType}\nDistance: ${distance} km\n\nConfirm ride?`
    );

    if (confirmRide) {
      alert(
        `✅ CAB BOOKED SUCCESSFULLY!\n\nCustomer: ${customerName}\nRoute: ${pickup} → ${drop}\nCab Type: ${cabType}\n\nYour cab is on the way 🚕`
      );
    } else {
      alert("❌ Cab booking cancelled.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>🚕 CityRide</div>

        <div style={styles.content}>
          <h2 style={styles.title}>Online Cab Booking</h2>
          <p style={styles.subtitle}>
            Book a cab using JavaScript Dialog Boxes
          </p>

          <button style={styles.button} onClick={bookCab}>
            Book Cab
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
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
    backgroundColor: "#064e3b",
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
    backgroundColor: "#16a34a",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default CabBookingApp;
