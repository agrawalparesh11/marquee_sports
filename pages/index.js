import React, { useState, useRef } from "react";
import Head from "next/head";

export default function Home() {
  const slides = [
    "/slides/slide1.jpg",
    "/slides/slide2.jpg",
    "/slides/slide3.jpg",
    "/slides/slide4.jpg",
    "/slides/slide5.jpg",
    "/slides/slide6.jpg",
    "/slides/slide7.jpg",
    "/slides/slide8.jpg",
    "/slides/slide9.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const endX = useRef(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (startX.current > endX.current + 50) {
      handleNext(); // Dragged left
    } else if (startX.current < endX.current - 50) {
      handlePrev(); // Dragged right
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    endX.current = e.clientX;
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#000",
        height: "100vh",
        overflow: "hidden",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {/* Set the Title */}
      <Head>
        <title>Marque Sports Co.</title>
        <meta name="description" content="A simple interactive slide presentation." />
      </Head>

      {/* Logo */}
      <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1000 }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: "150px", // Enlarged logo size
            height: "auto",
          }}
        />
      </div>

      {/* Contact Email */}
      <div
        style={{
          position: "absolute",
          top: "10px", // Move email to the top-right
          right: "10px",
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

      {/* Main Slide */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          style={{
            maxWidth: "90vw", // Dynamically adjust slide width
            maxHeight: "90vh", // Dynamically adjust slide height
            objectFit: "contain", // Ensure the entire image is visible
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        />

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
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
            zIndex: 1000,
          }}
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
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
            zIndex: 1000,
          }}
        >
          ›
        </button>
      </div>

      {/* Dots (Slide Indicators) */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: "12px",
              height: "12px",
              margin: "0 5px",
              borderRadius: "50%",
              backgroundColor: currentSlide === index ? "#fff" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
