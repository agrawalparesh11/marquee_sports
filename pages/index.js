import React, { useState } from "react";

export default function Home() {
  const slides = [
    "/slides/slide1.jpg", // Ensure these paths are correct
    "/slides/slide2.jpg",
    "/slides/slide3.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: "#000", height: "100vh" }}>
      {/* Logo */}
      <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1000 }}>
        <img
          src="/logo.png" // Replace with your logo path
          alt="Logo"
          style={{ width: "100px", height: "auto" }}
        />
      </div>

      {/* Main Slide */}
      <div
        style={{
          height: "100vh", // Full viewport height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          style={{
            width: "75vw", // 75% of viewport width
            height: "75vh", // 75% of viewport height
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>

      {/* Navigation Buttons */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transform: "translateY(-50%)",
          padding: "0 20px",
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          ›
        </button>
      </div>

      {/* Contact Email */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          color: "#fff",
          zIndex: 1000,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px",
          borderRadius: "5px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <a
          href="mailto:agrawalparesh11@gmail.com"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          agrawalparesh11@gmail.com
        </a>
      </div>
    </div>
  );
}
