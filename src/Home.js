// Home.js
import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import ContactSection from "./ContactSection";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar"; // ✅ Importing Navbar
import "./App.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (anchor) {
        const targetId = anchor.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    // Scroll to contact if URL has ?scrollTo=contact
    const params = new URLSearchParams(location.search);
    if (params.get("scrollTo") === "contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        // Small timeout to ensure DOM is ready
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    return () => document.removeEventListener("click", handleSmoothScroll);
  }, [location.search]);

  return (
    <div className="home" style={styles.app}>
      <Navbar />

      <div id="home" style={styles.header}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logoText}>Welcome to Bash's Auto Service</h1>
        </div>
      </div>

      <div id="services" style={styles.serviceCardsContainer}>
        <ServiceCard
          title="Schedule a Servicing Appointment"
          icon="calendar"
          link="/appointment"
        />
        <ServiceCard
          title="Book a Test Drive"
          icon="phone"
          link="tel:+15196229280"
        />
        <ServiceCard
          title="View our Inventory"
          icon="car"
          link="/inventory"
        />
      </div>

      <div style={styles.welcomeSection}>
        <h2 style={styles.sectionTitle}>Welcome to Bash's Auto Service</h2>
        <p style={styles.welcomeText}>
          We have been in the business of providing customers with over 150 high quality pre-owned vehicles in Cambridge, ON.
        </p>
        <p style={styles.welcomeText}>
          Our highly trained technicians are on-site to help share, as well as answer, any questions.
        </p>
      </div>

      <HeroBanner />

      <div style={styles.testimonialSection}>
        <h2 style={styles.testimonialTitle}>Customer Testimonials</h2>
        <div style={styles.testimonialsContainer}>
          <TestimonialCard
            text="I have taken all my vehicles to Bash's auto for many years..."
            author="Mark TenEycke"
          />
          <TestimonialCard
            text="Bash's Auto has always been quick to schedule appointments..."
            author="Josh Learn"
          />
          <TestimonialCard
            text="Bash is the most kind, respectful honest man you will ever deal with..."
            author="Sandy Pereira"
          />
        </div>
      </div>

      <div id="contact" style={styles.contactSection}>
        <ContactSection />
      </div>
    </div>
  );
};

const TestimonialCard = ({ text, author }) => (
  <div style={styles.testimonialCard}>
    <p style={styles.testimonialText}>{`"${text}"`}</p>
    <p style={styles.testimonialAuthor}>- {author}</p>
  </div>
);

// Styles
const styles = {
  app: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#121212",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    minHeight: "100vh",
    justifyContent: "flex-start",
  },
  header: {
    textAlign: "center",
    marginTop: "100px",
    marginBottom: "50px",
    padding: "1px",
    width: "100%",
    position: "relative",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logoText: {
    fontSize: "45px",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#1e88e5",
    marginTop: "10px",
    zIndex: 5,
  },
  serviceCardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1000px",
    gap: "30px",
    padding: "20px",
    boxSizing: "border-box",
  },
  welcomeSection: {
    backgroundColor: "#1e1e1e",
    padding: "40px 20px",
    marginTop: "40px",
    marginBottom: "60px",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    maxWidth: "1000px",
    width: "100%",
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: "28px",
    color: "#fff",
    marginBottom: "20px",
  },
  welcomeText: {
    fontSize: "18px",
    color: "#ddd",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  testimonialSection: {
    width: "100%",
    backgroundColor: "#222",
    padding: "40px 20px",
    marginTop: "50px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
  },
  testimonialTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "30px",
  },
  testimonialsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  testimonialCard: {
    backgroundColor: "#333",
    color: "#ddd",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    width: "280px",
    maxWidth: "100%",
  },
  testimonialText: {
    fontSize: "16px",
    marginBottom: "15px",
    fontStyle: "italic",
  },
  testimonialAuthor: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  contactSection: {
    marginTop: "50px",
    width: "100%",
    backgroundColor: "transparent",
    padding: "20px",
    boxSizing: "border-box",
  },
};

export default Home;
