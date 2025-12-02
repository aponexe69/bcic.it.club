import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/motion/section";
import { TiltCard } from "@/components/motion/tilt-card";
import { HologramLogo } from "@/components/visual/hologram-logo";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((m) => m.HeroScene),
  { ssr: false }
);

const activities = [
  {
    title: "Competitive Coding",
    description: "ICPC-style contests, DSA drills, and problem-solving sprints.",
    tag: "Algorithms"
  },
  {
    title: "Robotics & IoT",
    description: "From microcontrollers to autonomous bots — built in the lab.",
    tag: "Hardware"
  },
  {
    title: "Cybersecurity",
    description: "CTFs, red teaming simulations, and blue team defense drills.",
    tag: "Defense"
  },
  {
    title: "AI & Cloud",
    description: "Neural networks, MLOps pipelines, and scalable infra.",
    tag: "Intelligence"
  }
];

const projects = [
  {
    name: "Campus Sentinel",
    type: "Security Dashboard",
    detail: "Real-time anomaly detection for campus networks."
  },
  {
    name: "Aurora Botnet Lab",
    type: "Research",
    detail: "Safe simulation environment for threat analysis."
  },
  {
    name: "Nova Rover",
    type: "Robotics",
    detail: "Autonomous rover with vision-based navigation."
  }
];

const events = [
  {
    name: "Cyber Matrix 2025",
    date: "Jan 18, 2025",
    type: "National CTF"
  },
  {
    name: "BCIC DevStorm",
    date: "Feb 10, 2025",
    type: "24h Hackathon"
  },
  {
    name: "Neon Robotics League",
    date: "Mar 02, 2025",
    type: "Robotics Championship"
  }
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="relative mx-auto flex w-[94%] max-w-6xl flex-col gap-10 pt-4 lg:flex-row lg:items-center">
        <div className="relative flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/70 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-primary shadow-soft-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span>BCIC College · IT Club</span>
          </div>
          <motion.h1
            className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            The{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-200 bg-clip-text text-transparent">
              Neon Intelligence
            </span>{" "}
            system of BCIC College.
          </motion.h1>
          <motion.p
            className="max-w-xl text-sm leading-relaxed text-slate-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A cinematic, future-forward IT club where students engineer code,
            robots, and cyber defenses that feel like they were built for 2050
            — not 2025.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <a
              href="#membership"
              className="group relative overflow-hidden rounded-full border border-primary/60 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/20 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-950 shadow-neon-shadow"
            >
              <span className="relative z-10">Join the club</span>
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
            <a
              href="#events"
              className="relative rounded-full border border-slate-500/60 bg-surface/70 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200 hover:border-primary/70 hover:text-primary"
            >
              Explore events
            </a>
          </motion.div>
          <motion.div
            className="mt-4 flex items-center gap-6 text-[11px] text-slate-400"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div>
              <div className="text-primary">80+ members</div>
              <div>Developers, hackers, builders.</div>
            </div>
            <div>
              <div className="text-primary">24/7 lab</div>
              <div>Robotics, cloud rigs, cyber ranges.</div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center justify-end gap-4">
            <HologramLogo />
            <div className="hidden h-32 flex-1 rounded-3xl border border-white/10 bg-surface/60 p-4 text-[11px] text-slate-300 shadow-soft-glow backdrop-blur-2xl sm:block">
              <div className="mb-1 text-[10px] uppercase tracking-[0.32em] text-slate-500">
                Live Telemetry
              </div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Latency</span>
                  <span className="text-primary">4 ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Compute Grid</span>
                  <span className="text-primary">97% online</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Status</span>
                  <span className="text-emerald-400">Shielded</span>
                </div>
              </div>
            </div>
          </div>
          <HeroScene />
        </div>
      </section>

      {/* ABOUT + ACTIVITIES */}
      <SectionReveal className="mx-auto w-[94%] max-w-6xl space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1.4fr,1.8fr]">
          <TiltCard className="p-6">
            <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
              About the club
            </div>
            <div className="mt-3 text-lg font-semibold text-slate-50">
              A micro-campus of{" "}
              <span className="text-primary">builders and tinkerers</span>.
            </div>
            <p className="mt-3 text-sm text-slate-300">
              BCIC College IT Club operates like a miniature R&D lab — with
              squads focused on algorithms, robotics, cyber defense, and
              human‑computer experiences. We host hackathons, internal tech
              reviews, and ship real tools that impact the campus.
            </p>
          </TiltCard>
          <div className="grid gap-4 sm:grid-cols-2">
            {activities.map((item) => (
              <TiltCard key={item.title} className="p-4">
                <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                  <span>{item.tag}</span>
                  <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-primary via-accent to-primary" />
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-50">
                  {item.title}
                </div>
                <p className="mt-1 text-[12px] text-slate-300">
                  {item.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ACHIEVEMENTS + EVENTS */}
      <SectionReveal
        id="events"
        className="mx-auto w-[94%] max-w-6xl space-y-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr,1.8fr]">
          <TiltCard className="p-6">
            <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
              Achievements
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
              <div>
                <div className="text-2xl font-semibold text-primary">12+</div>
                <div>Hackathon podiums</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary">5</div>
                <div>CTF titles</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary">40+</div>
                <div>Shipped projects</div>
              </div>
            </div>
          </TiltCard>
          <div className="space-y-3">
            {events.map((e) => (
              <TiltCard
                key={e.name}
                className="flex items-center justify-between gap-4 p-4"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    {e.type}
                  </div>
                  <div className="text-sm font-semibold text-slate-50">
                    {e.name}
                  </div>
                </div>
                <div className="text-[11px] text-slate-300">{e.date}</div>
              </TiltCard>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* PROJECTS PREVIEW */}
      <SectionReveal className="mx-auto w-[94%] max-w-6xl space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
              Latest projects
            </div>
            <div className="mt-1 text-sm text-slate-300">
              A living grid of experiments, tools, bots and research.
            </div>
          </div>
          <a
            href="/projects"
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary"
          >
            View all
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {projects.map((p) => (
            <TiltCard key={p.name} className="p-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                {p.type}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-50">
                {p.name}
              </div>
              <p className="mt-1 text-[12px] text-slate-300">{p.detail}</p>
            </TiltCard>
          ))}
        </div>
      </SectionReveal>

      {/* GALLERY PREVIEW */}
      <SectionReveal className="mx-auto w-[94%] max-w-6xl space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
              Gallery
            </div>
            <div className="mt-1 text-sm text-slate-300">
              Glimpses from hack nights, robotics scrims and capture-the-flag
              finals.
            </div>
          </div>
          <a
            href="/gallery"
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary"
          >
            Open gallery
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-4">
          <div className="row-span-2 h-56 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-slate-900 to-slate-950" />
          <div className="h-28 rounded-2xl bg-gradient-to-br from-slate-900 via-cyan-400/20 to-slate-950" />
          <div className="h-28 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-400/20 to-slate-950" />
          <div className="row-span-2 h-56 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-400/20 to-slate-950" />
        </div>
      </SectionReveal>

      {/* TESTIMONIALS + MEMBERSHIP CTA */}
      <SectionReveal
        id="membership"
        className="mx-auto w-[94%] max-w-6xl space-y-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr]">
          <TiltCard className="p-6">
            <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
              Voices from the grid
            </div>
            <div className="mt-3 space-y-4 text-sm text-slate-200">
              <div>
                “BCIC IT Club feels less like a club and more like a startup
                lab. We prototype late into the night, debug together, and ship
                things we&apos;re genuinely proud of.”
              </div>
              <div className="text-xs text-slate-400">
                — Core Member, Cybersecurity Cell
              </div>
            </div>
          </TiltCard>
          <TiltCard className="flex flex-col justify-between gap-4 p-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
                Membership
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-50">
                Plug into the <span className="text-primary">system</span>.
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Open to BCIC students who are serious about building, breaking
                and learning. No experience required — just curiosity.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/60 bg-primary/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-soft-glow hover:shadow-neon-shadow"
            >
              Apply now
            </a>
          </TiltCard>
        </div>
      </SectionReveal>
    </div>
  );
}


