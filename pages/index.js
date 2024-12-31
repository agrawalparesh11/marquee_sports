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

  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    endX.current = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;

    const dragDistance = startX.current - endX.current;

    if (dragDistance > 50) {
      handleNext(); // Drag Left
    } else if (dragDistance < -50) {
      handlePrev(); // Drag Right
    }
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#fff", // Set the background to white
        height: "100vh",
        overflow: "hidden",
      }}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
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
            width: "150px",
            height: "auto",
          }}
        />
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
        {/* Slide Container */}
        <div
          style={{
            position: "relative",
            width: "90vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Slide Image */}
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // Ensure the entire image is visible
              borderRadius: "10px",
            }}
          />

          {/* Dots (Slide Indicators) */}
          <div
            style={{
              position: "absolute",
              bottom: "10px", // Position dots within the slide container
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
                  backgroundColor: currentSlide === index ? "#000" : "rgba(0, 0, 0, 0.5)",
                  cursor: "pointer",
                }}
              ></div>
            ))}
          </div>
        </div>

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

      {/* Contact Email */}
      <div
        style={{
          position: "absolute",
          bottom: "10px", // Ensure it stays below the slide
          right: "10px",
          color: "#000",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // White background for email
          display: "inline-block",
          padding: "5px 10px",
          borderRadius: "5px",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
        }}
      >
        <a
          href="mailto:agrawalparesh11@gmail.com"
          style={{
            color: "#000", // Black text color
            textDecoration: "none",
          }}
        >
          CONTACT US: agrawalparesh11@gmail.com
        </a>
      </div>
    </div>
  );
}
