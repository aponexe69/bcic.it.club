import Image from "next/image";
import { SectionReveal } from "@/components/motion/section";
import { TiltCard } from "@/components/motion/tilt-card";

const photos = [
  "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
  "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
  "https://images.pexels.com/photos/374748/pexels-photo-374748.jpeg",
  "https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg"
];

export default function GalleryPage() {
  return (
    <div className="mx-auto w-[94%] max-w-6xl space-y-10">
      <SectionReveal className="space-y-4">
        <div className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
          Gallery · BCIC IT Club
        </div>
        <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
          Moments from{" "}
          <span className="text-primary">hack nights & arenas</span>.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          A visual log from our hackathons, robotics leagues, overnight build
          sessions and cyber drills.
        </p>
      </SectionReveal>

      <SectionReveal className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
          Highlights
        </div>
        <TiltCard className="p-3">
          <div className="columns-2 gap-3 md:columns-3">
            {photos.map((src) => (
              <div
                key={src}
                className="relative mb-3 overflow-hidden rounded-2xl bg-slate-900"
              >
                <Image
                  src={src}
                  alt="IT club event"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </TiltCard>
      </SectionReveal>
    </div>
  );
}


