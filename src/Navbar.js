import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // On home page, scroll smoothly to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Not on home page - navigate to home and scroll after render
      navigate("/?scrollTo=contact");
    }
  };

  const styles = {
    navbar: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(10px)",
      width: "100%",
      padding: "12px 0",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 10,
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    },
    navContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 30px",
    },
    navLogo: {
      width: "36px",
      height: "36px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "24px",
      margin: 0,
      padding: 0,
    },
    navItem: {
      fontWeight: 500,
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1995/1995470.png"
          alt="Logo"
          style={styles.navLogo}
        />
        <ul style={styles.navLinks}>
          <li style={styles.navItem}><Link to="/" className="nav-link">Home</Link></li>
          <li style={styles.navItem}><Link to="/ServicesPage" className="nav-link">Services</Link></li>
          <li style={styles.navItem}>
            {/* Use a button or a tag with onClick for custom behavior */}
            <a href="#contact" className="nav-link" onClick={handleContactClick}>
              Contact
            </a>
          </li>
          <li style={styles.navItem}><Link to="/Inventory" className="nav-link">Inventory</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
