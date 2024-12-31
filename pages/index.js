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
        backgroundColor: "#000",
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
        <style>
          {`
            @media (max-width: 600px) {
              .header-container {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 10px;
              }
              .logo {
                margin-bottom: 10px;
              }
              .email {
                align-self: flex-end;
              }
            }
          `}
        </style>
      </Head>

      {/* Header Container */}
      <div className="header-container" style={{ position: "absolute", top: "10px", left: "10px", right: "10px", zIndex: 1000 }}>
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="logo"
          style={{
            width: "150px",
            height: "auto",
          }}
        />

        {/* Contact Email */}
        <div
          className="email"
          style={{
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Snug background around the email
            display: "inline-block", // Ensure the background only covers the text
            padding: "5px 10px",
            borderRadius: "5px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
          }}
        >
          <a
            href="mailto:agrawalparesh11@gmail.com"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            agrawalparesh11@gmail.com
          </a>
        </div>
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
