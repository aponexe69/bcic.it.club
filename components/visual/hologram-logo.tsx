"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

// Minimal placeholder animation data to avoid a large JSON blob.
const placeholderAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "BCIC Hologram",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Pulse Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: 0 }, { t: 60, s: 360 }] },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [120, 120] }
        },
        {
          ty: "st",
          c: { a: 0, k: [0, 0.878, 1, 1] },
          o: { a: 0, k: 100 },
          w: 5
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }
  ]
};

export function HologramLogo() {
  return (
    <motion.div
      className="relative flex h-40 w-40 items-center justify-center rounded-3xl border border-cyan-400/40 bg-slate-950/40 shadow-neon-shadow backdrop-blur-2xl"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(0,224,255,0.3),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-4 rounded-2xl border border-cyan-300/40" />
      <div className="relative flex h-24 w-24 items-center justify-center">
        <Lottie
          play
          loop
          animationData={placeholderAnimation}
          style={{ width: "100%", height: "100%", filter: "drop-shadow(0 0 8px rgba(0,224,255,0.9))" }}
        />
        <span className="pointer-events-none absolute text-[10px] font-semibold tracking-[0.4em] text-cyan-200/85">
          BCIC
        </span>
      </div>
      <div className="absolute inset-x-8 -bottom-4 h-10 bg-gradient-to-t from-cyan-500/25 via-cyan-400/10 to-transparent blur-2xl" />
    </motion.div>
  );
}


