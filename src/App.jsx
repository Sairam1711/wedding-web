import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import "./App.css";
import BrideAndGroom from "./components/BrideAndGroom";
import TempleCom from "./components/TempleCom";
import TempleComD from "./components/TempleComG";
import Frame from "./components/Frame";
import Route from "./components/Route";
import ThingsToKnow from "./components/ThingsToKnow";
import Countdown from "./components/Countdown";
import Fireworks from "./components/Fireworks";
const message = `
Wishing the beautiful Bride & Groom a lifetime of love, happiness, and togetherness.
May your new journey be filled with joy, laughter, and endless blessings.
Congratulations on your wedding!`;

const whatsappLink = `https://wa.me/919940344758?text=${encodeURIComponent(message)}`;
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 790);
    };

    checkScreen();
    console.log(window.innerWidth, 790);
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <TempleCom />

      <TempleComD
        bodyImage="/second.avif"
        carImage="/PngItem_61124.png"
        title="Please RSVP"
        subtitle="Click to message on WhatsApp"
        mapLink={whatsappLink}
        routeIcon="/WhatsAppLogo.png"
        showRoute={true}
      >
        <div className="section2">
          <BrideAndGroom />
          <Frame />
        </div>
      </TempleComD>

      <TempleComD
        bodyImage={
          isMobile ? "/tkkXhQriBw9Rr0mZOj2I9jY7IA.avif" : "/three.avif"
        }
        showCar={false}
        showRoute={false}
      >
        <div className="section4">
          <Countdown />
        </div>
        <Fireworks
          width={window.innerWidth - 100}
          height={window.innerHeight}
        />
      </TempleComD>
    </>
  );
}

export default App;
