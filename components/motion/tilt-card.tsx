"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]), {
    stiffness: 200,
    damping: 20
  });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]), {
    stiffness: 200,
    damping: 20
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border border-white/5 bg-surface/70 backdrop-blur-2xl shadow-soft-glow transition-[box-shadow,transform] duration-500 hover:shadow-neon-shadow",
        className
      )}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-700 hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}


