import { SectionReveal } from "@/components/motion/section";
import { TiltCard } from "@/components/motion/tilt-card";

const timeline = [
  {
    year: "2021",
    title: "Club inception",
    detail: "Formed by a small squad of developers and hardware tinkerers."
  },
  {
    year: "2022",
    title: "First national finals",
    detail: "Qualified for national-level hackathons and CTFs."
  },
  {
    year: "2023",
    title: "Robotics & cyber cells",
    detail: "Dedicated sub-teams for robotics, cyber defense and AI."
  },
  {
    year: "2024",
    title: "Neon Intelligence System",
    detail: "Reimagined as a futuristic, research-driven IT lab."
  }
];

const committee = [
  {
    role: "Faculty Advisor",
    name: "Dr. Ayesha Rahman",
    focus: "Systems, Research Guidance"
  },
  {
    role: "President",
    name: "Rahim Ahmed",
    focus: "Leadership, Product Direction"
  },
  {
    role: "Vice President",
    name: "Nusrat Jahan",
    focus: "Community, Events & Ops"
  },
  {
    role: "Technical Lead",
    name: "Mahin Chowdhury",
    focus: "Engineering, Architecture"
  }
];

const skills = [
  { label: "Full‑stack Web", level: 85 },
  { label: "Robotics & IoT", level: 70 },
  { label: "Cybersecurity", level: 78 },
  { label: "AI / ML", level: 72 },
  { label: "Cloud & DevOps", level: 68 }
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-[94%] max-w-6xl space-y-14">
      <SectionReveal className="space-y-4">
        <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
          About · BCIC College IT Club
        </div>
        <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
          A future‑ready{" "}
          <span className="text-primary">R&D playground</span> for students.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          The IT Club at BCIC College exists to give students a place to think
          beyond assignments — to ship real projects, explore advanced systems,
          and work in squads the way modern engineering teams do.
        </p>
      </SectionReveal>

      <SectionReveal className="grid gap-10 lg:grid-cols-[1.4fr,1.6fr]">
        <div className="space-y-6">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Timeline
          </div>
          <div className="relative ml-2 border-l border-cyan-500/40 pl-6">
            <div className="absolute left-[-7px] top-0 h-3 w-3 rounded-full bg-primary shadow-neon-shadow" />
            {timeline.map((step, index) => (
              <div
                key={step.year}
                className="relative mb-6 last:mb-0 last:border-none"
              >
                <div className="absolute -left-8 top-1 h-[1px] w-6 bg-gradient-to-r from-primary/70 to-transparent" />
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  {step.year}
                </div>
                <div className="text-sm font-semibold text-slate-50">
                  {step.title}
                </div>
                <p className="mt-1 text-[12px] text-slate-300">
                  {step.detail}
                </p>
                {index !== timeline.length - 1 && (
                  <div className="absolute -left-[9px] top-7 h-10 w-px bg-gradient-to-b from-cyan-400/80 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Advisor & Committee
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {committee.map((member) => (
              <TiltCard key={member.name} className="p-4">
                <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                  {member.role}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-50">
                  {member.name}
                </div>
                <div className="mt-1 text-[12px] text-slate-300">
                  {member.focus}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="space-y-6">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
          Skills map
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.4fr,1.6fr]">
          <TiltCard className="flex items-center justify-center p-6">
            <div className="relative h-52 w-52">
              <div className="absolute inset-4 rounded-full border border-cyan-500/60" />
              <div className="absolute inset-0 rounded-full border border-cyan-500/30" />
              <div className="absolute inset-10 rounded-full border border-slate-500/30" />
              <div className="absolute inset-20 rounded-full border border-slate-700/40" />
              <div className="absolute inset-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
              <div className="absolute inset-0 animate-[orbitSlow_14s_linear_infinite]">
                <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-neon-shadow" />
              </div>
            </div>
          </TiltCard>
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill.label} className="space-y-1 text-sm">
                <div className="flex items-center justify-between text-[12px] text-slate-300">
                  <span>{skill.label}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary shadow-neon-shadow"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}


