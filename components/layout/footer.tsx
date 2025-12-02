"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative mt-10 flex justify-center">
      <div className="absolute inset-x-0 -top-16 h-24 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl" />
      <div className="relative w-[94%] max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-surface/80 px-6 py-6 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(0,224,255,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(13,148,136,0.35),_transparent_55%)]" />
        </div>
        <div className="grid gap-6 md:grid-cols-[2fr,1fr,1fr] md:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
              BCIC College IT Club
            </div>
            <div className="mt-2 text-lg font-semibold text-slate-50">
              Building the next generation of{" "}
              <span className="text-primary">neon-native</span> engineers.
            </div>
          </div>
          <div className="text-xs text-slate-400 space-y-1">
            <div className="font-semibold text-slate-300">Navigation</div>
            <div className="flex flex-col gap-1">
              <Link href="/events" className="hover:text-primary">
                Events
              </Link>
              <Link href="/projects" className="hover:text-primary">
                Projects
              </Link>
              <Link href="/members" className="hover:text-primary">
                Members
              </Link>
            </div>
          </div>
          <div className="text-xs text-slate-400 space-y-1">
            <div className="font-semibold text-slate-300">Connect</div>
            <div>Campus: BCIC College</div>
            <div>IT Lab · Innovation Wing</div>
            <div className="mt-1 text-[11px] text-slate-500">
              Crafted with precision for 60fps experiences.
            </div>
          </div>
        </div>
        <motion.div
          className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <div className="mt-3 flex flex-col items-center justify-between gap-3 text-[11px] text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} BCIC College IT Club.</div>
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
            <span>Neon Intelligence System · Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


