import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/rsothilingam93/bashsautoservice/main/inventory.json")
      .then((res) => res.text())
      .then((text) => {
        try {
          const json = JSON.parse(text);
          setInventory(json);
        } catch (err) {
          console.error("JSON parse error:", err);
        }
      })
      .catch((err) => console.error("Failed to load inventory", err));
  }, []);
  

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Our Inventory</h1>
        <p style={styles.disclaimer}>* All prices are subject to tax.</p>
        <div style={styles.grid}>
          {inventory.map((car, idx) => (
            <CarCard key={idx} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Separate component to handle image rotation per car
const CarCard = ({ car }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const images = car.images || [];

  const nextImage = () => {
    setCurrentImgIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImgIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          src={images[currentImgIdx] || ""}
          alt="Car"
          style={styles.image}
        />
        {images.length > 1 && (
          <>
            <button onClick={prevImage} style={{ ...styles.arrow, left: "10px" }}>
              &#9664;
            </button>
            <button onClick={nextImage} style={{ ...styles.arrow, right: "10px" }}>
              &#9654;
            </button>
          </>
        )}
      </div>
      <div style={styles.info}>
        <p style={styles.price}>{car.price}</p>
        <p style={styles.detail}>
          <strong>Mileage:</strong> {car.mileage}
        </p>
        <p style={styles.detail}>
          <strong>Body Style:</strong> {car.bodyStyle}
        </p>
        <p style={styles.detail}>
          <strong>Transmission:</strong> {car.transmission}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "100px 20px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
    color: "#fff",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#1e88e5",
    textAlign: "center",
    marginBottom: "10px",
  },
  disclaimer: {
    color: "#bbb",
    fontSize: "14px",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
    transition: "transform 0.2s ease",
  },
  image: {
    maxWidth: "100%",          // scale to container width
    maxHeight: "100%",         // scale to container height
    objectFit: "contain",      // maintain aspect ratio without cropping
    display: "block",
  },
  info: {
    padding: "15px",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#4caf50",
    marginBottom: "10px",
  },
  detail: {
    fontSize: "16px",
    marginBottom: "6px",
    color: "#ccc",
  },
  imageContainer: {
    position: "relative",
    height: "250px",           // fixed height for all images
    display: "flex",           // centers the image
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    cursor: "pointer",
    zIndex: 2,
    fontSize: "18px",
    lineHeight: "30px",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default InventoryPage;
