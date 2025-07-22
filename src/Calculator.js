import React, { useState } from "react";

const Calculator = () => {
  const [speedLimit, setSpeedLimit] = useState("");
  const [actualSpeed, setActualSpeed] = useState("");
  const [fine, setFine] = useState(null);

  const calculateFine = () => {
    const limit = parseInt(speedLimit, 10);
    const speed = parseInt(actualSpeed, 10);
    const overSpeed = speed - limit;

    if (isNaN(limit) || isNaN(speed) || limit <= 0 || speed <= 0) {
      setFine("Please enter valid numbers above zero.");
      return;
    }

    if (overSpeed <= 0) {
      setFine("✅ No fine – within the speed limit.");
    } else {
      const fineAmount = overSpeed * 10; // simple logic
      setFine(`⚠️ Over by ${overSpeed} km/h – Estimated fine: ₹${fineAmount}`);
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.header}>Bike Speeding Ticket Calculator</h2>
      <input
        style={styles.input}
        type="number"
        placeholder="Speed limit (km/h)"
        value={speedLimit}
        onChange={(e) => setSpeedLimit(e.target.value)}
      />
      <input
        style={styles.input}
        type="number"
        placeholder="Actual speed (km/h)"
        value={actualSpeed}
        onChange={(e) => setActualSpeed(e.target.value)}
      />
      <button style={styles.button} onClick={calculateFine}>
        Calculate Fine
      </button>
      {fine && <div style={styles.result}>{fine}</div>}
    </div>
  );
};

const styles = {
  card: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "30px 20px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    boxSizing: "border-box", // ✅ Ensures internal padding behaves properly
  },

  header: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box", // ✅ Prevents overflow
  },

  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#444",
  },
};

export default Calculator;
