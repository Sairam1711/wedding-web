import React from "react";
import "../styles/ThingsToKnow.css";

export default function ThingsToKnow() {
  return (
    <div className="ThinktoKnow">

      <div className="things-header">
        <h1 className="ThinktoKnowh1">
          Things to know
        </h1>

        <p className="things-description">
          To help you feel at ease and enjoy every moment of the celebrations,
          we’ve gathered a few thoughtful details we’d love for you to know
          before the big day.
        </p>
      </div>

      <div className="things-cards">

        {/* Hashtag */}
        <div className="things-card">

          <img
            src="/5y8vl5sZQRnq3EHTA5uUoYOFwI.png"
            alt="Hashtag"
            className="things-icon"
          />

          <h2 className="things-title">
            Hashtag
          </h2>

          <p className="things-text">
            While posting photos on social media please use the hashtag - #abkan
          </p>

        </div>

        {/* Weather */}
        <div className="things-card">

          <img
            src="/ySjcx5lvJ1tclhTZAudrTerk.png"
            alt="Weather"
            className="things-icon"
          />

          <h2 className="things-title">
            Weather
          </h2>

          <p className="things-text">
            It will be mostly sunny with temperature reaching up to 28 degrees
            at the venue
          </p>

        </div>

        {/* Staff */}
        <div className="things-card">

          <img
            src="/fYRKGxDRZ6jYoWaWFqoL0kvBV2M.png"
            alt="Staff"
            className="things-icon"
          />

          <h2 className="things-title">
            Staff
          </h2>

          <p className="things-text">
            We recommend the nearby hotel called Bhola Bhawan near the venue
            for the staff members
          </p>

        </div>

        {/* Parking */}
        <div className="things-card">

          <img
            src="/a6hem7eXgySxttf4hkfazX1KQg.png"
            alt="Parking"
            className="things-icon"
          />

          <h2 className="things-title">
            Parking
          </h2>

          <p className="things-text">
            Valet parking for all our guests will be available at the venue
          </p>

        </div>

      </div>

    </div>
  );
}