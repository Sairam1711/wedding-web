import React, { useEffect, useState } from "react";
import "../App.css";
import car1 from "/car1.png";
import templeImagem from "/uQ5GdDW5jaPT8LYNBYabSn2bj0.avif";
import templeImage from "/temple.avif";
import second from "/second.avif";
import three from "/three.avif";
import four from "/four.avif";
import light from "/nc35y7b0Zuw1Gp5B9Uyd0lzjxKM.avif";
import Component from "./Component";
import Grid from "./Grid";
import Route from "./Route";
import BrideAndGroom from "./BrideAndGroom";
export default function TempleCom() {
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 790);
    };

    checkScreen();
 console.log(window.innerWidth,790);
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <div className="temple-com">
      <img className="temple-image" src={templeImage} alt="Temple" />
      <div className="temple-body">
        <div className="light-container">
          <div className="temple-text">
            <h1 className="temple-title">SARAVANA</h1>
            <h2 className="temple-title">WEDS </h2>
            <h1 className="temple-title">MAHA</h1>
          </div>
          <div className="temple-text"></div>
          <div className="temple-text"></div>
          <img className="light-img" src={light} alt="Light" />
          <img className="light-img" src={light} alt="Light" />
          <img className="light-img" src={light} alt="Light" />
          <img className="light-img" src={light} alt="Light" />
          <img className="light-img" src={light} alt="Light" />
          <img className="light-img" src={light} alt="Light" />
          <img className="light-img" src={light} alt="Light" />
          <img className="light-img" src={light} alt="Light" />
          <img className="light-img" src={light} alt="Light" />
          <img className="light-img" src={light} alt="Light" />
        </div>
         { !isMobile &&<div className="light-container"></div>}
          <div className="light-container m"></div>
          <div className="light-container m" style={{height:!isMobile?"40vh":"0vh"}}></div>
        <Component />
        <div style={{height:"120vh"}}  className="light-container">
           <Grid />
            
        </div>
         <Route mapLink="https://maps.app.goo.gl/EpGrTyT14Tbo1Q1D7?g_st=aw" showicon={true} routeIcon={"/location-map-white-icon-symbol.png"} /> 
         <img className="car1" src="/NicePng_marriage-clipart-png_2499291.png" alt="" />
      
     
      </div>
    </div>
  );
}
