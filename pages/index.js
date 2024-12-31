import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  const slides = [
    "/slides/slide1.jpg",
    "/slides/slide2.jpg",
    "/slides/slide3.jpg",
  ];

  return (
    <div>
      <h1>Interactive Presentation</h1>
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          style={{ width: "100%", height: "400px", objectFit: "contain", marginBottom: "20px" }}
        />
      ))}
    </div>
  );
}