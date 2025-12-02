import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00E0FF",
        accent: "#13F8FF",
        dark: "#05060A",
        surface: "#0A0F1F"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(0,224,255,0.18), transparent 60%), radial-gradient(circle at bottom, rgba(19,248,255,0.08), transparent 55%)"
      },
      boxShadow: {
        "neon-shadow": "0 0 40px rgba(0,224,255,0.45)",
        "soft-glow": "0 0 60px rgba(19,248,255,0.25)"
      },
      blur: {
        "deep-blur": "24px"
      },
      borderColor: {
        "hologram-border": "rgba(0,224,255,0.45)"
      },
      animation: {
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "orbit-slow": "orbitSlow 12s linear infinite"
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: 0.7, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.04)" }
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        orbitSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;


