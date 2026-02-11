import React, { useState } from "react";
import Navbar from "./Navbar.js";
import "./App.css";

const AppointmentsPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build mailto link with encoded subject and body
    const subject = encodeURIComponent(`Appointment Request - ${form.name}`);

    const body = encodeURIComponent(
      `Hi there! I'd like to book a service appointment.\nName: ${form.name}\nEmail: ${form.email}\nDate: ${form.date}\nTime: ${form.time}\nReason: ${form.reason}`
    );

    // Open user's email client with pre-filled email
    window.location.href = `mailto:bashsauto@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Book your appointment today!</h1>

        {!submitted ? (
          <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label}>
              Your Name
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={styles.input}
              />
            </label>

            <label style={styles.label}>
              Email
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={styles.input}
              />
            </label>

            <label style={styles.label}>
              Reason
              <input
                type="reason"
                name="reason"
                required
                value={form.reason}
                onChange={handleChange}
                placeholder="What is the reason for your appointment?"
                style={styles.input}
              />
            </label>

            <label style={styles.label}>
              Choose Date
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                style={styles.input}
              />
            </label>

            <label style={styles.label}>
              Select Time
              <select
                name="time"
                required
                value={form.time}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="" disabled>
                  Select a time slot
                </option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>

            <button type="submit" style={styles.button}>
              Book Appointment
            </button>
          </form>
        ) : (
          <div style={styles.confirmation}>
            <h2>Thank you, {form.name}!</h2>
            <p>Please follow your email app to complete your booking. Your appointment will be booked for:</p>
            <p>
              <strong>{form.date}</strong> at <strong>{form.time}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "100px 20px 40px",
    maxWidth: "480px",
    margin: "0 auto",
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#121212",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#1e88e5",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "4px",
    color: "#ddd",
  },
  input: {
    marginTop: "6px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    backgroundColor: "#222",
    color: "#eee",
    outline: "none",
    transition: "background-color 0.3s ease",
  },
  select: {
    marginTop: "6px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    backgroundColor: "#222",
    color: "#eee",
    outline: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  button: {
    marginTop: "10px",
    padding: "14px",
    backgroundColor: "#1e88e5",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "700",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 6px 15px rgba(30, 136, 229, 0.7)",
    transition: "background-color 0.3s ease",
  },
  confirmation: {
    textAlign: "center",
    color: "#1e88e5",
  },
};

export default AppointmentsPage;
