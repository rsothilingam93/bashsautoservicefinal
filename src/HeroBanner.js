import React, { useState, useEffect } from "react";

const HeroBanner = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/rsothilingam93/bashsautoservice/contents/images"
    )
      .then((res) => res.json())
      .then((files) => {
        const imageFiles = files.filter(
          (file) =>
            file.name.endsWith(".jpg") ||
            file.name.endsWith(".jpeg") ||
            file.name.endsWith(".png")
        );

        const urls = imageFiles.map((file) => file.download_url);
        setImages(urls);
      })
      .catch((err) => {
        console.error("Failed to fetch images", err);
      });
  }, []);

  if (images.length === 0) {
    return <p style={{ color: "white" }}>Loading vehicles...</p>;
  }

  const total = images.length;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const currentImage = images[currentIndex];

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Find Your Next Vehicle</h2>
      <p style={styles.subtitle}>{total} vehicles available</p>

      <div style={styles.cardWrapper}>
        <button onClick={prevImage} style={styles.arrow}>
          ◀
        </button>

        <div style={styles.card}>
          <img
            src={currentImage}
            alt={`Vehicle ${currentIndex + 1}`}
            style={styles.image}
          />
        </div>

        <button onClick={nextImage} style={styles.arrow}>
          ▶
        </button>
      </div>

      <p style={styles.footerText}>Check out our inventory for more</p>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100vw",
    margin: 0,
    padding: "60px 0",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#cccccc",
    marginBottom: "40px",
  },
  cardWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "320px",
    backgroundColor: "#2a2a2a",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  arrow: {
    fontSize: "2rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#ffffff",
    padding: "10px",
    transition: "color 0.2s",
  },
  footerText: {
    marginTop: "30px",
    fontSize: "1.1rem",
    color: "#bbbbbb",
    fontStyle: "italic",
  },
};

export default HeroBanner;
