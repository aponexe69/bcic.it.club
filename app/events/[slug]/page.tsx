import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/motion/section";
import { TiltCard } from "@/components/motion/tilt-card";

const EVENT_DATA = {
  "cyber-matrix-2025": {
    name: "Cyber Matrix 2025",
    date: "Jan 18, 2025",
    type: "National CTF",
    description:
      "A full‑stack, story‑driven capture‑the‑flag featuring web, crypto, pwn and forensics challenges inspired by real‑world incidents.",
    winners: [
      { place: "1st", team: "Quantum Breakers" },
      { place: "2nd", team: "Root Access" },
      { place: "3rd", team: "BCIC NullByte" }
    ]
  },
  "bcic-devstorm": {
    name: "BCIC DevStorm",
    date: "Feb 10, 2025",
    type: "Hackathon",
    description:
      "A 24‑hour product sprint where teams design, build and deploy tools that make campus life smoother, safer or more fun.",
    winners: [
      { place: "1st", team: "EdgeCase" },
      { place: "2nd", team: "Kernel Panic" },
      { place: "3rd", team: "Pixel Pushers" }
    ]
  },
  "quantum-hack-2024": {
    name: "Quantum Hack 2024",
    date: "Aug 2024",
    type: "Hackathon",
    description:
      "Cross‑campus hackathon focused on automation, AI‑assisted tools, and education‑first products.",
    winners: [
      { place: "1st", team: "Gradient Descent" },
      { place: "2nd", team: "Neon Stack" },
      { place: "3rd", team: "BCIC Forge" }
    ]
  },
  "neon-robotics-league-2024": {
    name: "Neon Robotics League 2024",
    date: "Nov 2024",
    type: "Robotics",
    description:
      "Arena‑style robotics league featuring autonomous navigation, obstacle avoidance and precision control.",
    winners: [
      { place: "1st", team: "Nova Rover" },
      { place: "2nd", team: "Circuit Surge" },
      { place: "3rd", team: "BCIC MechCore" }
    ]
  }
} as const;

type EventSlug = keyof typeof EVENT_DATA;

export default function EventDetailPage({
  params
}: {
  params: { slug: EventSlug };
}) {
  const event = EVENT_DATA[params.slug];

  if (!event) {
    notFound();
  }

  return (
    <div className="mx-auto w-[94%] max-w-6xl space-y-10">
      <SectionReveal className="space-y-4">
        <Link
          href="/events"
          className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 hover:text-primary"
        >
          ← Back to events
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
              {event.type}
            </div>
            <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              {event.name}
            </h1>
          </div>
          <div className="text-xs text-slate-300">
            <div className="text-primary">{event.date}</div>
            <div>BCIC College Campus</div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr]">
        <TiltCard className="overflow-hidden">
          <div className="relative h-60 w-full">
            <Image
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
              alt="Event gallery preview"
              fill
              className="object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-4 left-4 text-xs text-slate-200">
              <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                Gallery
              </div>
              <div>Highlights from the arena and war‑room.</div>
            </div>
          </div>
          <div className="space-y-3 p-5 text-sm text-slate-300">
            <p>{event.description}</p>
            <p>
              The event blends competitive intensity with mentorship and
              workshops so even first‑timers leave with upgraded skills and
              stories.
            </p>
          </div>
        </TiltCard>
        <div className="space-y-6">
          <TiltCard className="p-5">
            <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
              Winners leaderboard
            </div>
            <div className="mt-3 space-y-2 text-sm text-slate-200">
              {event.winners.map((w) => (
                <div
                  key={w.team}
                  className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2"
                >
                  <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
                    {w.place}
                  </span>
                  <span>{w.team}</span>
                </div>
              ))}
            </div>
          </TiltCard>
          <TiltCard className="p-5">
            <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
              Certificates
            </div>
            <p className="mt-2 text-[12px] text-slate-300">
              Participants and winners can download their digital certificate
              bundles as PDF.
            </p>
            <button className="mt-3 inline-flex items-center justify-center rounded-full border border-primary/60 bg-primary/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
              Download certificate
            </button>
          </TiltCard>
        </div>
      </SectionReveal>
    </div>
  );
}


