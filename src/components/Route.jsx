import React from "react";
import "../styles/Rout.css";

export default function Route({
  title = "",
  subtitle = "Click to open the map",
  mapLink = "https://maps.app.goo.gl/EpGrTyT14Tbo1Q1D7?g_st=aw",
  circleColor = "",
  textColor = "",
  backgroundColor = "transparent",
  showicon=false,
  routeIcon="/location-map-white-icon-symbol.png",
}) {
  return (
    <div
      className="route"
      style={{
        background: backgroundColor,
      }}
    >
      <h2
        style={{
          color: textColor,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: textColor,
        }}
      >
        {subtitle}
      </p>
<div className="icon">
   <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <div
          className="circle1"
         
        >
       
        </div>
           <div
            className="circle"
          >

            {showicon&&<img width={"100%"} src={routeIcon} alt="" />}
          </div>
      </a></div>
     
    </div>
  );
}