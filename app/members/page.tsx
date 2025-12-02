import { SectionReveal } from "@/components/motion/section";
import { TiltCard } from "@/components/motion/tilt-card";

const members = [
  {
    name: "Arif Hasan",
    role: "Core · Backend",
    skills: ["Node.js", "PostgreSQL", "API design"]
  },
  {
    name: "Tasnia Kabir",
    role: "Core · Cybersecurity",
    skills: ["CTFs", "Network defense", "Forensics"]
  },
  {
    name: "Sakib Rahman",
    role: "Core · Robotics",
    skills: ["Arduino", "ROS", "Embedded C"]
  },
  {
    name: "Farhana Sultana",
    role: "Core · Frontend",
    skills: ["React", "Next.js", "UX"]
  },
  {
    name: "Zahid Hossain",
    role: "Member · Cloud",
    skills: ["Docker", "Kubernetes", "CI/CD"]
  },
  {
    name: "Nafisa Anika",
    role: "Member · Data",
    skills: ["Python", "Pandas", "ML basics"]
  }
];

export default function MembersPage() {
  return (
    <div className="mx-auto w-[94%] max-w-6xl space-y-10">
      <SectionReveal className="space-y-4">
        <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
          Members · BCIC IT Club
        </div>
        <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
          The humans inside the{" "}
          <span className="text-primary">neon system</span>.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          A mix of developers, designers, hardware engineers and security
          analysts who all share the same curiosity: how far can we push what
          students can build?
        </p>
      </SectionReveal>

      <SectionReveal className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
          Member directory
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {members.map((member) => (
            <TiltCard key={member.name} className="p-4">
              <div className="text-sm font-semibold text-slate-50">
                {member.name}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-primary">
                {member.role}
              </div>
              <div className="mt-2 flex flex-wrap gap-1 text-[11px] text-slate-300">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-900/70 px-2 py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}


