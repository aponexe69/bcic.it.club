 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/members", label: "Members" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -96 : 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto mt-4 w-[94%] max-w-6xl rounded-2xl border border-white/10 bg-surface/70 backdrop-blur-2xl shadow-soft-glow">
        <div className="flex items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-primary/70 via-accent/50 to-slate-900 shadow-neon-shadow">
              <div className="absolute inset-1 rounded-[0.9rem] bg-black/60 backdrop-blur-md" />
              <span className="relative flex h-full w-full items-center justify-center text-xs font-semibold tracking-[0.18em] text-primary">
                BCIC
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
                IT Club
              </div>
              <div className="text-sm font-medium text-slate-100">
                Neon Intelligence System
              </div>
            </div>
          </Link>
          <nav className="hidden gap-5 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 md:flex">
            {NAV_LINKS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-1 py-1 transition-colors hover:text-primary"
                  )}
                >
                  <span>{item.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-primary via-accent to-primary shadow-neon-shadow"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative overflow-hidden rounded-full border border-primary/50 bg-gradient-to-r from-primary/30 via-accent/10 to-transparent px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary hover:shadow-neon-shadow"
            >
              <span className="relative z-10">Join the System</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: "linear"
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}


