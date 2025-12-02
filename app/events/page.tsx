import Link from "next/link";
import { SectionReveal } from "@/components/motion/section";
import { TiltCard } from "@/components/motion/tilt-card";

const upcoming = [
  {
    slug: "cyber-matrix-2025",
    name: "Cyber Matrix 2025",
    date: "Jan 18, 2025",
    type: "National CTF",
    brief: "A high‑intensity capture‑the‑flag built around real‑world attacks."
  },
  {
    slug: "bcic-devstorm",
    name: "BCIC DevStorm",
    date: "Feb 10, 2025",
    type: "Hackathon",
    brief: "24 hours to design and deploy production‑grade campus tools."
  }
];

const past = [
  {
    slug: "quantum-hack-2024",
    name: "Quantum Hack 2024",
    highlight: "Top 3 finish, best cyber resilience award."
  },
  {
    slug: "neon-robotics-league-2024",
    name: "Neon Robotics League 2024",
    highlight: "Semi‑autonomous rover took 1st place."
  }
];

export default function EventsPage() {
  return (
    <div className="mx-auto w-[94%] max-w-6xl space-y-12">
      <SectionReveal className="space-y-4">
        <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
          Events · BCIC IT Club
        </div>
        <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
          High‑bandwidth{" "}
          <span className="text-primary">competitions & festivals</span>.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          From all‑night hackathons to cyber ranges and robotics leagues, our
          calendar is tuned for students who like to build fast and learn in
          public.
        </p>
      </SectionReveal>

      <SectionReveal className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Upcoming events
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {upcoming.map((event) => (
            <TiltCard key={event.slug} className="p-5">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-slate-400">
                <span>{event.type}</span>
                <span>{event.date}</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-50">
                {event.name}
              </div>
              <p className="mt-1 text-[12px] text-slate-300">{event.brief}</p>
              <Link
                href={`/events/${event.slug}`}
                className="mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.24em] text-primary"
              >
                View details
              </Link>
            </TiltCard>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
          Past events archive
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {past.map((event) => (
            <TiltCard key={event.slug} className="flex items-center justify-between gap-4 p-4">
              <div>
                <div className="text-sm font-semibold text-slate-50">
                  {event.name}
                </div>
                <div className="mt-1 text-[12px] text-slate-300">
                  {event.highlight}
                </div>
              </div>
              <Link
                href={`/events/${event.slug}`}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary"
              >
                Recap
              </Link>
            </TiltCard>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}


