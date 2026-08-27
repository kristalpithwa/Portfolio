"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { BubbleBody } from "@/types";

const FallingLettersCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Runner, Events } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    engine.world.gravity.y = 0.35;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const render = Render.create({
      canvas,
      engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    const createBoundaries = () => [
      Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight + 50,
        window.innerWidth + 200,
        100,
        { isStatic: true },
      ),
      Bodies.rectangle(
        -50,
        window.innerHeight / 2,
        100,
        window.innerHeight * 2,
        {
          isStatic: true,
        },
      ),
      Bodies.rectangle(
        window.innerWidth + 50,
        window.innerHeight / 2,
        100,
        window.innerHeight * 2,
        { isStatic: true },
      ),
    ];

    let boundaries = createBoundaries();
    World.add(world, boundaries);

    const techStack = [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "React",
      "JavaScript",
      "Tailwind",
      "Redux",
      "iOS",
      "Android",
      "Firebase",
      "Git",
      "Node.js",
      "GraphQL",
      "Swift",
      "Kotlin",
      "CI/CD",
      "REST API",
      "Docker",
    ];

    const fallingObjects: BubbleBody[] = [];

    function createFallingBubble() {
      const tech = techStack[Math.floor(Math.random() * techStack.length)];
      const x = Math.random() * (window.innerWidth - 80) + 40;

      // Calculate compact bubble radius and font size based on label length
      const charCount = tech.length;
      let radius = 18;
      let fontSize = 6.5;

      if (charCount <= 4) {
        radius = Math.random() * 2 + 14; // 14 - 16px
        fontSize = 7;
      } else if (charCount <= 7) {
        radius = Math.random() * 2 + 18; // 18 - 20px
        fontSize = 6.5;
      } else if (charCount <= 10) {
        radius = Math.random() * 2 + 22; // 22 - 24px
        fontSize = 6;
      } else {
        radius = Math.random() * 3 + 26; // 26 - 29px
        fontSize = 5.5;
      }

      const hue = Math.floor(Math.random() * 85 + 185); // 185 (cyan) to 270 (purple)

      const body = Bodies.circle(x, -50, radius, {
        restitution: 0.4,
        friction: 0.002,
        frictionAir: 0.016,
        render: {
          fillStyle: `hsla(${hue}, 85%, 65%, 0.03)`,
          strokeStyle: `hsla(${hue}, 90%, 75%, 0.15)`,
          lineWidth: 1,
        },
      }) as BubbleBody;

      body.customBubble = {
        tech,
        radius,
        hue,
        fontSize,
        fontFamily: "var(--font-geist), system-ui, -apple-system, sans-serif",
      };

      World.add(world, body);
      fallingObjects.push(body);

      if (fallingObjects.length > 40) {
        const old = fallingObjects.shift();
        if (old) {
          World.remove(world, old);
        }
      }
    }

    const afterRenderHandler = () => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      fallingObjects.forEach((body) => {
        if (!body.customBubble) return;
        const { tech, radius, hue, fontSize, fontFamily } = body.customBubble;

        ctx.save();
        ctx.translate(body.position.x, body.position.y);
        ctx.rotate(body.angle);

        // 1. Draw bubble specular highlight (glass sheen)
        const gradient = ctx.createRadialGradient(
          -radius * 0.35,
          -radius * 0.35,
          radius * 0.05,
          0,
          0,
          radius,
        );
        gradient.addColorStop(0, `hsla(${hue}, 100%, 95%, 0.18)`);
        gradient.addColorStop(0.3, `hsla(${hue}, 90%, 75%, 0.05)`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, radius - 1, 0, Math.PI * 2);
        ctx.fill();

        // 2. Draw glossy light reflection dot
        ctx.beginPath();
        ctx.ellipse(
          -radius * 0.38,
          -radius * 0.38,
          radius * 0.25,
          radius * 0.12,
          -Math.PI / 4,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
        ctx.fill();

        // 3. Draw subtle secondary bottom-right reflection curve
        ctx.beginPath();
        ctx.ellipse(
          radius * 0.35,
          radius * 0.35,
          radius * 0.2,
          radius * 0.08,
          -Math.PI / 4,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = `hsla(${hue}, 100%, 90%, 0.08)`;
        ctx.fill();

        // 4. Draw tech stack name inside bubble
        ctx.font = `600 ${fontSize}px ${fontFamily}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Subtle glow effect behind text
        ctx.shadowColor = `hsla(${hue}, 100%, 70%, 0.25)`;
        ctx.shadowBlur = 2;
        ctx.fillStyle = `hsla(${hue}, 95%, 90%, 0.45)`;
        ctx.fillText(tech, 0, 1);

        ctx.restore();
      });
    };

    Events.on(render, "afterRender", afterRenderHandler);

    const interval = setInterval(createFallingBubble, 1900);
    for (let i = 0; i < 5; i++) {
      setTimeout(createFallingBubble, i * 300);
    }

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      render.options.width = window.innerWidth;
      render.options.height = window.innerHeight;

      World.remove(world, boundaries);
      boundaries = createBoundaries();
      World.add(world, boundaries);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      Events.off(render, "afterRender", afterRenderHandler);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="matter-canvas"
      style={{
        top: 0,
        left: 0,
        zIndex: 0,
        position: "fixed",
        pointerEvents: "none",
      }}
    />
  );
};

export default FallingLettersCanvas;
