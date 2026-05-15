import { useEffect, useState, lazy, Suspense, useMemo } from "react";
import Lenis from "@studio-freight/lenis";

import "./App.css";

// Lazy Load Components
const BrideAndGroom = lazy(() => import("./components/BrideAndGroom"));
const TempleCom = lazy(() => import("./components/TempleCom"));
const TempleComD = lazy(() => import("./components/TempleComG"));
const Frame = lazy(() => import("./components/Frame"));
const Countdown = lazy(() => import("./components/Countdown"));
const Fireworks = lazy(() => import("./components/Fireworks"));

const message = `
Wishing the beautiful Bride & Groom a lifetime of love, happiness, and togetherness.
May your new journey be filled with joy, laughter, and endless blessings.
Congratulations on your wedding!`;

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 790
  );

  // Optimized WhatsApp Link
  const whatsappLink = useMemo(() => {
    return `https://wa.me/919940344758?text=${encodeURIComponent(message)}`;
  }, []);

  // Responsive Check (Optimized)
  useEffect(() => {
    let timeout;

    const checkScreen = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsMobile(window.innerWidth <= 790);
      }, 100);
    };

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
      clearTimeout(timeout);
    };
  }, []);

  // Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <Suspense fallback={<div className="loader">Loading...</div>}>
      {/* First Section */}
      <TempleCom />

      {/* RSVP Section */}
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

      {/* Countdown Section */}
      <TempleComD
        bodyImage={
          isMobile
            ? "/tkkXhQriBw9Rr0mZOj2I9jY7IA.avif"
            : "/three.avif"
        }
        showCar={false}
        showRoute={false}
      >
        <div className="section4">
          <Countdown />
        </div>

        {/* Render fireworks only in desktop */}
        {!isMobile && (
          <Fireworks
            width={window.innerWidth}
            height={window.innerHeight}
          />
        )}
      </TempleComD>
    </Suspense>
  );
}

export default App;