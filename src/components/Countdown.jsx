import React, { useEffect, useState } from "react";

export default function Countdown() {
  // Set your wedding/event date here
const targetDate = new Date("2026-05-28T07:30:00");
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);

        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });

        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        marginTop:"5rem"
      }}
    >
      <div>
        <div style={{ transform: "none" }}>
          <p
            dir="auto"
            style={{
              fontFamily: '"Cormorant Upright", serif',
              fontSize: "40px",
              lineHeight: "100.1%",
              textAlign: "center",
              color: "rgb(231, 147, 0)",
        
            }}
          >
            The countdown begins
          </p>
        </div>

        <div>
          <p
            style={{
              color: "rgb(231, 147, 0)",
              fontFamily: '"Cormorant Upright", serif',
              fontWeight: 500,
              fontSize: "34px",
              textAlign: "center",
              letterSpacing: "2px",
            }}
          >
            {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:
            {timeLeft.seconds}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "500px", marginTop: "20px" }}>
        <div style={{ width: "100%", opacity: 1 }}>
          <div style={{ opacity: 1 }}>
            <div
              style={{
                transform: "none",
                opacity: 1,
              }}
            >
              <p
                style={{
                  fontFamily: '"Cormorant Upright", serif',
                  fontSize: "14px",
                  textAlign: "center",
                  color: "rgb(231, 147, 0)",
                  lineHeight: "1.6",
                }}
              >
                Our families are excited that you are able to join us in
                celebrating what we hope will be one of the happiest days of
                our lives.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <div style={{ transform: "none" }}>
          <p
            style={{
              fontFamily: '"Cormorant Upright", serif',
              fontSize: "14px",
              textAlign: "center",
              color: "rgb(231, 147, 0)",
            }}
          >
            © kanchipuram brothers 2025
          </p>
        </div>
      </div>
    </div>
  );
}