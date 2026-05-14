import React from "react";
import "../styles/BrideAndGroom.css";

export default function BrideAndGroom() {
  return (
    <div className="bride-groom-container">

      {/* Heading */}
      <div className="bride-groom-heading">

        <p className="bride-groom-subtitle">
          meet the
        </p>

        <h1 className="bride-groom-title">
          bride and groom
        </h1>

      </div>

      {/* Description */}
      <div className="bride-groom-description-container">

        <p className="bride-groom-description">
          We are both so delighted that you are able to join us in celebrating
          what we hope will be one of the happiest days of our lives. The
          affection shown to us by so many people since our Nichayathartham has
          been incredibly moving, and has touched us both deeply. We would like
          to take this opportunity to thank everyone most sincerely for their
          kindness. We are looking forward to seeing you at the wedding.
        </p>

      </div>

    </div>
  );
}