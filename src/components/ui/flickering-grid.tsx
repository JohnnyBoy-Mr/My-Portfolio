import React, { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlickeringGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.08,
  color = "#38bdf8",
  maxOpacity = 0.2,
  className,
  ...props
}: FlickeringGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rgbaColor = useMemo(() => {
    if (typeof window === "undefined") return "rgba(56,189,248,";

    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;

    const ctx = canvas.getContext("2d");
    if (!ctx) return "rgba(56,189,248,";

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);

    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;

    return `rgba(${r}, ${g}, ${b},`;
  }, [color]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame = 0;

    let cols = 0;
    let rows = 0;
    let squares = new Float32Array();

    const resize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / (squareSize + gridGap));
      rows = Math.ceil(height / (squareSize + gridGap));

      squares = new Float32Array(cols * rows);

      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const render = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const index = x * rows + y;

          if (Math.random() < flickerChance) {
            squares[index] = Math.random() * maxOpacity;
          }

          ctx.fillStyle = `${rgbaColor}${squares[index]})`;

          ctx.fillRect(
            x * (squareSize + gridGap),
            y * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [
    squareSize,
    gridGap,
    flickerChance,
    maxOpacity,
    rgbaColor,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}