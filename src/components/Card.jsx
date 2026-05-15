import React from "react";
import "../styles/cardstyling.css";

export default function Card({
  title = "MEHENDI",
  description = "Friday, March 9th 2026 Rambagh, Jaipur 6pm Onwards",

  goldImage = "/z8fNGgEf83GUW8GN7ddabomNq0.avif",
  flower1Image = "/FLSOOveTOLX34LMuvOegzZoZ2eo.avif",
  flower2Image = "/flower2.png",

  backgroundColor = "transparent",
}) {
  return (
    <div
      className="card-content"
      style={{
        background: backgroundColor,
      }}
    >
      {/* Decorative Images */}
      <img className="gold" src={goldImage} alt="Gold" />

      <img className="flower1" src={flower1Image} alt="Flower" />

      <img className="flower2" src={flower2Image} alt="Flower" />

      {/* Text */}
      <div className="card-text">
        <p
          className="heading"
         
        >
          {title}
        </p>

        <p
         
        >
          {description}
        </p>
      </div>
    </div>
  );
}