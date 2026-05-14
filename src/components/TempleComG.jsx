import React from "react";
import "../App.css";

import Component from "./Component";
import Grid from "./Grid";
import Route from "./Route";

export default function TempleComD({
  brideName = "Saravana",
  groomName = "Mahalakshmi",
  bodyImage = "/temple.avif",
  bottomImbodyImageage = "/second.avif",
  carImage = "/car1.png",
  lightImage = "/nc35y7b0Zuw1Gp5B9Uyd0lzjxKM.avif",
  showCar = true,
  showRoute = true,
  children,
  title = "SEE THE ROUTE",
  subtitle = "Click to open the map",
  mapLink = "https://maps.google.com",
}) {
  return (
    <div className="temple-com">
      {/* Top Temple Image */}
      <img className={bodyImage!=="/three.avif"?"temple-image":"temple-image noH"} src={bodyImage} alt="Temple" />

      <div className="temple-body">
        {/* Lights */}

        {/* Extra Content */}
        {children}
        {showRoute && (
          <Route title={title} subtitle={subtitle} mapLink={mapLink} />
        )}
        {/* Car */}
        {showCar && (
          <div className="car">
            <img className="car1" src={carImage} alt="Car" />
          </div>
        )}
      </div>

      {/* Bottom Image */}
    </div>
  );
}
