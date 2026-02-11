import React from "react";
import Navbar from "./Navbar.js"; 

const serviceList = [
  {
    title: "Safety Check",
    description: "A safety standards certificate confirms that your vehicle meets the minimum safety standards on the date the certificate was issued. You can’t put a licence plate on a vehicle without one."
  },
  {
    title: "Brake Service",
    description: "Fully functioning brake systems are crucial to the safety of your family and your passengers."
  },
  {
    title: "Oil Changes",
    description: "Our comprehensive oil change service will replace your oil and filter. We top up all fluids and give your vehicle a free check-over."
  },
  {
    title: "Steering and Suspension Systems",
    description: "The steering and suspension system is responsible for comfortable riding conditions. If you are concerned about unknown noises, squeaks or rattles, we would be happy to perform the diagnostics and repairs."
  },
  {
    title: "Alignments",
    description: "Schedule a wheel alignment service appointment with us today to help with optimal tire wear and vehicle handling. A tire alignment can help your tires perform properly and help them last longer."
  },
  {
    title: "Auto Sales",
    description: "We have been selling used cars, SUVs and trucks since 1996. Over the years, we have come to understand our client’s needs and expectations which we strive to meet."
  },
  {
    title: "Engine Diagnostics and Performance",
    description: "Our state-of-the-art diagnostic testing service takes the guesswork out of repairing your vehicle."
  },
  {
    title: "Seasonal Tire Changes and Sales",
    description: "We provide exceptional tire sales and service. We will efficiently do all your seasonal tires changes with balancing and installation at competitive prices. We sell all makes of quality tires and rims. For the budget-minded, we can access used parts as well."
  }
];

const ServicesPage = () => {
  return (
    <div>
      <Navbar /> {/* Ensure this is included */}
      <div style={styles.container}>
        <h1 style={styles.title}>Our Services</h1>
        {serviceList.map((service, idx) => (
          <div key={idx} style={styles.serviceCard}>
            <h2 style={styles.serviceTitle}>{service.title}</h2>
            <p style={styles.serviceDesc}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "100px 20px 40px", // leave room for navbar
    maxWidth: "900px",
    margin: "0 auto",
    color: "#fff"
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#1e88e5",
    textAlign: "center"
  },
  serviceCard: {
    marginBottom: "30px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#1c1c1c",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
  },
  serviceTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  serviceDesc: {
    fontSize: "16px",
    lineHeight: "1.6"
  }
};

export default ServicesPage;
