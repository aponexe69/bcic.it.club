import { SectionReveal } from "@/components/motion/section";
import { TiltCard } from "@/components/motion/tilt-card";

const projects = [
  {
    name: "Campus Sentinel",
    type: "Security Dashboard",
    stack: "Next.js · FastAPI · PostgreSQL · Tailwind",
    description:
      "Full‑stack monitoring system visualizing network anomalies, login patterns and endpoint health in real‑time."
  },
  {
    name: "Nova Rover",
    type: "Robotics",
    stack: "ROS · OpenCV · Jetson Nano",
    description:
      "Autonomous rover platform for indoor mapping, line‑following and obstacle avoidance."
  },
  {
    name: "Aurora Cloud Lab",
    type: "Cloud Playground",
    stack: "Kubernetes · Terraform · Prometheus",
    description:
      "Internal cloud environment for students to experiment with infrastructure, observability and DevOps practices."
  },
  {
    name: "CipherForge",
    type: "CTF Platform",
    stack: "Django · Redis · Docker",
    description:
      "Challenge hosting platform for in‑house cyber drills and public capture‑the‑flag events."
  }
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-[94%] max-w-6xl space-y-10">
      <SectionReveal className="space-y-4">
        <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
          Projects · BCIC IT Club
        </div>
        <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
          A living showcase of{" "}
          <span className="text-primary">code, bots & research</span>.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Our projects range from security and automation to robotics and cloud
          — with GitHub‑backed workflows and real users on campus.
        </p>
      </SectionReveal>

      <SectionReveal className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <TiltCard key={project.name} className="p-5">
            <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              {project.type}
            </div>
            <div className="mt-2 text-sm font-semibold text-slate-50">
              {project.name}
            </div>
            <div className="mt-1 text-[11px] text-primary">{project.stack}</div>
            <p className="mt-2 text-[12px] text-slate-300">
              {project.description}
            </p>
          </TiltCard>
        ))}
      </SectionReveal>

      <SectionReveal className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
          GitHub integration
        </div>
        <TiltCard className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-200">
            <div>
              <div>GitHub organization</div>
              <div className="text-[12px] text-primary">
                github.com/bcic-it-club
              </div>
            </div>
            <button className="rounded-full border border-primary/60 bg-primary/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
              View repos
            </button>
          </div>
          <div className="mt-3 grid gap-3 text-[12px] text-slate-300 sm:grid-cols-3">
            <div>
              <div className="text-primary">30+</div>
              <div>Active repositories</div>
            </div>
            <div>
              <div className="text-primary">10+</div>
              <div>Core maintainers</div>
            </div>
            <div>
              <div className="text-primary">1000+</div>
              <div>Commits per year</div>
            </div>
          </div>
        </TiltCard>
      </SectionReveal>
    </div>
  );
}


