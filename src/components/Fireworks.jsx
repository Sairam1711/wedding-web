import React, { useEffect, useRef } from "react";

export default function Fireworks({
  width = 500,
  height = 500,
  top = "0px",
  left = "0px",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let rockets = [];

    const MAX_PARTICLES = 400;

    let SCREEN_WIDTH = width;
    let SCREEN_HEIGHT = height;

    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;

    class Particle {
      constructor(pos) {
        this.pos = {
          x: pos?.x || 0,
          y: pos?.y || 0,
        };

        this.vel = {
          x: 0,
          y: 0,
        };

        this.shrink = 0.97;
        this.size = 2;
        this.resistance = 1;
        this.gravity = 0;
        this.alpha = 1;
        this.fade = 0;
        this.color = 0;
        this.flick = false;
      }

      update() {
        this.vel.x *= this.resistance;
        this.vel.y *= this.resistance;

        this.vel.y += this.gravity;

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        this.size *= this.shrink;

        this.alpha -= this.fade;
      }

      render() {
        if (!this.exists()) return;

        ctx.save();

        ctx.globalCompositeOperation = "lighter";

        const x = this.pos.x;
        const y = this.pos.y;
        const r = this.size / 2;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          0.1,
          x,
          y,
          r
        );

        gradient.addColorStop(
          0.1,
          `rgba(255,255,255,${this.alpha})`
        );

        gradient.addColorStop(
          0.8,
          `hsla(${this.color},100%,50%,${this.alpha})`
        );

        gradient.addColorStop(
          1,
          `hsla(${this.color},100%,50%,0.1)`
        );

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
          this.pos.x,
          this.pos.y,
          this.flick
            ? Math.random() * this.size
            : this.size,
          0,
          Math.PI * 2
        );

        ctx.fill();

        ctx.restore();
      }

      exists() {
        return this.alpha >= 0.1 && this.size >= 1;
      }
    }

    class Rocket extends Particle {
      constructor(x) {
        super({
          x,
          y: SCREEN_HEIGHT,
        });

        this.explosionColor = 0;
      }

      explode() {
        const count = Math.random() * 10 + 80;

        for (let i = 0; i < count; i++) {
          const particle = new Particle(this.pos);

          const angle = Math.random() * Math.PI * 2;

          const speed =
            Math.cos(Math.random() * Math.PI / 2) * 15;

          particle.vel.x = Math.cos(angle) * speed;
          particle.vel.y = Math.sin(angle) * speed;

          particle.size = 10;

          particle.gravity = 0.2;
          particle.resistance = 0.92;
          particle.shrink =
            Math.random() * 0.05 + 0.93;

          particle.flick = true;
          particle.color = this.explosionColor;

          particles.push(particle);
        }
      }
    }

    const launch = () => {
      if (rockets.length < 5) {
        const rocket = new Rocket(
          Math.random() * SCREEN_WIDTH
        );

        rocket.explosionColor =
          Math.floor(Math.random() * 360);

        rocket.vel.y = Math.random() * -3 - 4;
        rocket.vel.x = Math.random() * 4 - 2;

        rocket.size = 6;
        rocket.gravity = 0.01;

        rockets.push(rocket);
      }
    };

    const loop = () => {
      // Transparent background
      ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

      rockets = rockets.filter((rocket) => {
        rocket.update();
        rocket.render();

        if (
          rocket.pos.y < SCREEN_HEIGHT / 3 ||
          rocket.vel.y >= 0
        ) {
          rocket.explode();
          return false;
        }

        return true;
      });

      particles = particles.filter((particle) => {
        particle.update();

        if (particle.exists()) {
          particle.render();
          return true;
        }

        return false;
      });

      requestAnimationFrame(loop);
    };

    const interval = setInterval(launch, 700);

    loop();

    return () => {
      clearInterval(interval);
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        pointerEvents: "none",
        zIndex: 10,
        background: "transparent",
      }}
    />
  );
}