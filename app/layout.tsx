import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingParticles } from "@/components/visual/floating-particles";
import { CursorGlow } from "@/components/visual/cursor-glow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BCIC College IT Club – Neon Intelligence System",
  description:
    "The official BCIC College IT Club. A futuristic hub for coding, robotics, cybersecurity, and innovation.",
  metadataBase: new URL("https://bcic-it-club.example.com"),
  openGraph: {
    title: "BCIC College IT Club",
    description:
      "A cinematic, neon-futuristic home for the next generation of innovators.",
    type: "website",
    url: "https://bcic-it-club.example.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "BCIC College IT Club",
    description:
      "A cinematic, neon-futuristic home for the next generation of innovators."
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-dark text-slate-100 overflow-x-hidden"
        )}
      >
        <div className="fixed inset-0 -z-20 bg-hero-gradient" />
        <FloatingParticles />
        <CursorGlow />
        <Navbar />
        <main className="relative z-10 pt-24 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


