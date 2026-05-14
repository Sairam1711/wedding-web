import React from "react";
import imageFrame from "/54JwjUrKR8txnFhN4dFmme3FzoQ.avif";
import image1 from "/DSC09090.jpeg";
import image2 from "/DSC09110.jpeg";
import image3 from "/DSC09121.jpeg";
export default function Frame() {
  return (
    <div className="framebody">
      <div class="slider">
        <div class="slide-track">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />

          <img src={image1} alt="Image 1" />
        </div>
      </div>
      <div className="frame">
          <img  src={imageFrame} alt="Frame" />
      </div>
    
    </div>
  );
}
