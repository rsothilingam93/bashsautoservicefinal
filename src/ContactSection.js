import React from "react";

const ContactSection = () => {
  return (
    <div id="contact" style={styles.container}>
      <h2 style={styles.heading}>Contact & Location</h2>
      <div style={styles.mapContainer}>
        <iframe
          title="Google Maps - Bash's Auto Service Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.535660871392!2d-80.3142141!3d43.3880934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4c7e8c62cb7b%3A0x3d64d2b2d30f3173!2s317+Elgin+St+N%2C+Cambridge%2C+ON+N1R+7H9!5e0!3m2!1sen!2sca!4v1647481167155!5m2!1sen!2sca"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>      
      </div>
      <div style={styles.info}>
        <p>
          <strong>
            <span role="img" aria-label="location">📍</span> Address:
          </strong>{" "}
          317 Elgin St N, Cambridge, ON N1R 7H9
        </p>
        <p>
          <strong>
            <span role="img" aria-label="phone">📞</span> Phone:
          </strong>{" "}
          (519) 622-9280
        </p>
        <p>
          <strong>
            <span role="img" aria-label="email">📧</span> Email:
          </strong>{" "}
          bashsauto@gmail.com
        </p>
        <p>
          <strong>
            <span role="img" aria-label="clock">🕒</span> Hours:
          </strong>{" "}
          Mon–Fri: 8am – 5pm | Sat & Sun: Closed
        </p>
        <a
            href="https://www.google.com/maps/dir/?api=1&destination=317+Elgin+St+N,+Cambridge,+ON+N1R+7H9"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "900px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "transparent", // Removed the black background color
    borderRadius: "0px",
    boxShadow: "none", // Removed the box shadow to maintain clean background
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#1e88e5",
    textAlign: "center",
  },
  mapContainer: {
    marginBottom: "20px",
    borderRadius: "0px",
    overflow: "hidden",
  },
  info: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#eee",
  },
  button: {
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 18px",
    backgroundColor: "#1e88e5",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default ContactSection;
