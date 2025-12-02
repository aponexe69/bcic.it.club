import { SectionReveal } from "@/components/motion/section";
import { TiltCard } from "@/components/motion/tilt-card";

export default function ContactPage() {
  return (
    <div className="mx-auto w-[94%] max-w-6xl space-y-10">
      <SectionReveal className="space-y-4">
        <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
          Contact · BCIC IT Club
        </div>
        <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
          Connect with the{" "}
          <span className="text-primary">IT club core team</span>.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Whether you&apos;re a student, alumni, sponsor or collaborator, we&apos;d
          love to hear from you. Share your idea, event or question and we&apos;ll
          get back from the grid.
        </p>
      </SectionReveal>

      <SectionReveal className="grid gap-8 lg:grid-cols-[1.4fr,1.6fr]">
        <TiltCard className="p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Glassmorphic contact form
          </div>
          <form className="mt-4 space-y-4 text-sm text-slate-200">
            <div>
              <label className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Name
              </label>
              <input
                className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
                placeholder="you@bcic.edu"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
                placeholder="Tell us how you’d like to collaborate."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-primary/60 bg-primary/20 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary shadow-soft-glow hover:shadow-neon-shadow"
            >
              Send to grid
            </button>
          </form>
        </TiltCard>
        <div className="space-y-4">
          <TiltCard className="p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Campus coordinates
            </div>
            <div className="mt-2 text-sm text-slate-200">
              <div>BCIC College</div>
              <div>IT Lab · Innovation Wing</div>
              <div className="mt-1 text-[12px] text-slate-400">
                Meet us during club hours or drop an email to schedule a
                session.
              </div>
            </div>
          </TiltCard>
          <TiltCard className="flex items-center justify-center p-0">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/25 via-slate-900 to-slate-950">
              <div className="absolute inset-6 rounded-2xl border border-cyan-400/40" />
              <div className="absolute inset-10 rounded-full border border-cyan-500/40" />
              <div className="absolute inset-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-neon-shadow" />
              <div className="absolute inset-x-10 bottom-6 text-center text-[11px] uppercase tracking-[0.24em] text-slate-200">
                Animated map glow · Campus zone
              </div>
            </div>
          </TiltCard>
        </div>
      </SectionReveal>
    </div>
  );
}


