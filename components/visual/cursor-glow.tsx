"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, { stiffness: 80, damping: 20, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 20, mass: 0.4 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX - 150);
      y.set(e.clientY - 150);
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[-5] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(0,224,255,0.36),_transparent_60%)] mix-blend-screen blur-3xl"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}


