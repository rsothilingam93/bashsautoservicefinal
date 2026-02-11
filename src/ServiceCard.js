import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaPhoneAlt, FaFileAlt, FaCar } from "react-icons/fa";

function ServiceCard({ title, icon, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const icons = {
    calendar: <FaCalendarAlt />,
    phone: <FaPhoneAlt />,
    "file-text": <FaFileAlt />,
    car: <FaCar />,
  };

  const baseStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px",
    marginBottom: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    background: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
    boxShadow: isHovered
      ? "0px 6px 15px rgba(0, 0, 0, 0.3)"
      : "0px 4px 10px rgba(0, 0, 0, 0.2)",
    textDecoration: "none",
    color: "inherit",
  };

  const iconStyle = {
    fontSize: "24px",
    color: "#1e88e5",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "10px",
    borderRadius: "50%",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "550",
    color: "white",
    marginLeft: "10px",
  };

  const chevronStyle = {
    fontSize: "18px",
    color: "gray",
  };

  const content = (
    <div
      className="service-card"
      style={baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-card-icon" style={iconStyle}>
        {icons[icon]}
      </div>
      <span className="service-card-title" style={titleStyle}>
        {title}
      </span>
      <div className="service-card-chevron" style={chevronStyle}>→</div>
    </div>
  );

  // Handle internal and external links
  if (link?.startsWith("http") || link?.startsWith("tel:")) {
    return (
      <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
        {content}
      </a>
    );
  }

  if (link) {
    return (
      <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
        {content}
      </Link>
    );
  }

  return content;
}

export default ServiceCard;
