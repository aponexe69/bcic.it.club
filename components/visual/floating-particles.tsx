 "use client";

import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  size: 4 + (i % 6),
  duration: 18 + (i % 8),
  delay: (i * 0.37) % 5,
  xStart: (i * 37) % 100,
  xEnd: ((i * 59) % 100) - 10
}));

export function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan-400/25 blur-[2px]"
          style={{
            width: p.size,
            height: p.size,
            top: `${(p.id * 29) % 100}%`,
            left: `${p.xStart}%`
          }}
          animate={{
            x: [`0%`, `${p.xEnd}%`],
            y: ["0%", "-40%"],
            opacity: [0, 0.9, 0]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            duration: p.duration,
            delay: p.delay
          }}
        />
      ))}
    </div>
  );
}


