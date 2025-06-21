// FallingLettersCanvas.jsx
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const FallingLettersCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Runner } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    engine.world.gravity.y = 0.3;

    const canvas = canvasRef.current;
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

    // Create boundaries
    const boundaries = [
      Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight + 50,
        window.innerWidth,
        100,
        { isStatic: true }
      ),
      Bodies.rectangle(-50, window.innerHeight / 2, 100, window.innerHeight, {
        isStatic: true,
      }),
      Bodies.rectangle(
        window.innerWidth + 50,
        window.innerHeight / 2,
        100,
        window.innerHeight,
        { isStatic: true }
      ),
    ];
    World.add(world, boundaries);

    // Letters
    const letters = [
      "A",
      "I",
      "G",
      "P",
      "T",
      "{}",
      "()",
      "[]",
      "<>",
      "/>",
      "||",
      "&&",
      "==",
      "++",
      "--",
      "ML",
      "AI",
      "LLM",
      "RAG",
    ];
    const fallingObjects = [];

    function createFallingLetter() {
      const letter = letters[Math.floor(Math.random() * letters.length)];
      const x = Math.random() * window.innerWidth;
      const size = Math.random() * 30 + 20;

      const body = Bodies.circle(x, -50, size / 2, {
        restitution: 0.3,
        friction: 0.001,
        frictionAir: 0.01,
        render: {
          fillStyle: `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.1)`,
          strokeStyle: `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.3)`,
          lineWidth: 1,
        },
      });

      body.render.text = {
        content: letter,
        color: `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.2)`,
        size: size * 0.6,
        family: "Geist, Inter, sans-serif",
      };

      World.add(world, body);
      fallingObjects.push(body);

      if (fallingObjects.length > 50) {
        const old = fallingObjects.shift();
        World.remove(world, old);
      }
    }

    // Render text overlay
    render.afterRender = () => {
      const ctx = canvas.getContext("2d");
      fallingObjects.forEach((body) => {
        if (body.render.text) {
          ctx.save();
          ctx.translate(body.position.x, body.position.y);
          ctx.rotate(body.angle);
          ctx.fillStyle = body.render.text.color;
          ctx.font = `${body.render.text.size}px ${body.render.text.family}`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(body.render.text.content, 0, 0);
          ctx.restore();
        }
      });
    };

    const interval = setInterval(createFallingLetter, 2000);
    for (let i = 0; i < 8; i++) setTimeout(createFallingLetter, i * 300);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      render.options.width = window.innerWidth;
      render.options.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="matter-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default FallingLettersCanvas;
