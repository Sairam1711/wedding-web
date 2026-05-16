import {
  useEffect,
  useState,
  lazy,
  Suspense,
  useMemo,
  useRef,
} from "react";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 790);

  // Current Section
  const [currentSection, setCurrentSection] = useState(0);

  // Section Refs
  const sectionsRef = useRef([]);

  // WhatsApp Link
  const whatsappLink = useMemo(() => {
    return `https://wa.me/919940344758?text=${encodeURIComponent(
      message
    )}`;
  }, []);

  // Responsive Check
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

  // Lenis Smooth Scroll
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

  // Detect Current Section
  useEffect(() => {
    const onScroll = () => {
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // Auto Scroll Section by Section with Smooth Delay
const handleScrollButton = () => {
  const totalSections = sectionsRef.current.length;

  let nextSection = currentSection + 1;

  // Back to top after last section
  if (nextSection >= totalSections) {
    nextSection = 0;
  }

  const targetSection = sectionsRef.current[nextSection];

  if (!targetSection) return;

  const targetPosition =
    targetSection.getBoundingClientRect().top + window.scrollY;

  const startPosition = window.scrollY;

  const distance = targetPosition - startPosition;

  const duration = 10000; // Slow smooth scroll
  let start = null;

  const smoothAutoScroll = (timestamp) => {
    if (!start) start = timestamp;

    const progress = timestamp - start;

    const percentage = Math.min(progress / duration, 1);

    // Ease In Out
    const ease =
      percentage < 0.5
        ? 2 * percentage * percentage
        : 1 - Math.pow(-2 * percentage + 2, 2) / 2;

    window.scrollTo({
      top: startPosition + distance * ease,
    });

    if (progress < duration) {
      requestAnimationFrame(smoothAutoScroll);
    } else {
      setCurrentSection(nextSection);
    }
  };

  requestAnimationFrame(smoothAutoScroll);
};

  return (
    <Suspense fallback={<div className="loader">Loading...</div>}>

      {/* Section 1 */}
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <TempleCom />
      </div>

      {/* Section 2 */}
      <div ref={(el) => (sectionsRef.current[1] = el)}>
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
      </div>

      {/* Section 3 */}
      <div ref={(el) => (sectionsRef.current[2] = el)}>
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

          <Fireworks
            width={window.innerWidth - 20}
            height={window.innerHeight}
          />
        </TempleComD>
      </div>

      {/* Scroll Button */}
      <button className="scroll-btn" onClick={handleScrollButton}>
  <span className="arrow-icon">
    {currentSection === sectionsRef.current.length - 1 ? "⬆" : "⬇"}
  </span>      </button>
    </Suspense>
  );
}

export default App;