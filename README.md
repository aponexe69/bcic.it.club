## BCIC College IT Club – Neon Intelligence System

Elite, cinematic, neon‑futuristic website for the BCIC College IT Club, built with Next.js (App Router), TypeScript, TailwindCSS, Framer Motion, react‑three‑fiber, and shadcn‑style components.

### Tech stack

- **Framework**: Next.js 14 (App Router) with React 18 + TypeScript  
- **Styling**: TailwindCSS with custom neon/glass theme  
- **Components**: Lightweight shadcn‑style primitives + Radix UI  
- **Animation**: Framer Motion (page + scroll + micro‑interactions)  
- **3D**: react‑three‑fiber + drei (hero circuit landscape)  
- **Media**: Next/Image, Lottie (hologram logo placeholder)

### Getting started

1. **Install dependencies**

```bash
npm install
```

2. **Run development server**

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

3. **Production build**

```bash
npm run build
npm start
```

### Project structure (high‑level)

- `app/` – App Router pages
  - `layout.tsx` – global layout, navbar, footer, particles, cursor glow
  - `page.tsx` – Home (hero, activities, achievements, events, projects, gallery preview, membership)
  - `about/page.tsx` – timeline, advisor/committee, skills map
  - `events/page.tsx` – upcoming + past events
  - `events/[slug]/page.tsx` – event detail with gallery, winners, certificate CTA
  - `projects/page.tsx` – project showcase + GitHub section
  - `members/page.tsx` – members grid with skill tags
  - `gallery/page.tsx` – masonry‑style gallery
  - `contact/page.tsx` – glassmorphic contact form + map glow
- `components/`
  - `layout/` – `navbar`, `footer`
  - `motion/` – `SectionReveal`, `TiltCard`
  - `visual/` – `FloatingParticles`, `CursorGlow`, `HologramLogo`
  - `three/` – `HeroScene` (react‑three‑fiber circuit grid)
- `lib/utils.ts` – `cn` helper  
- `tailwind.config.ts` – custom theme (primary/accent/dark/surface, glass, neon shadows)

### SEO & social

- Base SEO metadata is defined in `app/layout.tsx` using Next.js `Metadata`.
- To customize for deployment, change the `metadataBase`, `title`, and `description` there.

### Deploying to Vercel

1. Push this project to GitHub (or any Git provider).  
2. Go to Vercel, click **New Project**, and import the repo.  
3. Framework: **Next.js**, build command `next build`, output `.next` (defaults).  
4. Set **NODE_VERSION** to a recent LTS (e.g. `20`) if needed; no extra env vars required.  
5. Deploy – Vercel will auto‑detect the Next.js app and run the correct build pipeline.

# bcic.it.club

