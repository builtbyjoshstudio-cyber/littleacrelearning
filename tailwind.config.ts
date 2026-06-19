import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBF7F0",
        cream: "#F3ECDD",
        sage: "#88A98C",
        forest: "#46604E",
        sand: "#DDB48A",
        terracotta: "#B5654A",
        ink: "#2E3A30",
        body: "#4a4a40",
        "body-soft": "#5b5a4f",
        muted: "#6f6a5e",
        "muted-soft": "#8a8275",
        // Age-band accents
        sprouts: {
          bg: "#F6E3D8",
          solid: "#C9714E",
          text: "#9c4d34",
        },
        saplings: {
          bg: "#F8EBCF",
          solid: "#E0A24B",
          text: "#9a6e1f",
        },
        branches: {
          bg: "#DCEBE4",
          solid: "#3F7A6B",
          text: "#2f5a4f",
        },
        bedtime: {
          bg: "#e6eee4",
          solid: "#46604E",
          text: "#46604E",
        },
      },
      fontFamily: {
        display: ["var(--font-baloo)", "cursive"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        "card-lg": "24px",
        cover: "16px",
        pill: "999px",
        tile: "12px",
      },
      boxShadow: {
        cover: "0 14px 30px rgba(70,96,78,.24)",
        hero: "0 24px 50px rgba(70,96,78,.28)",
        card: "0 6px 18px rgba(70,96,78,.08)",
        lift: "0 18px 38px rgba(70,96,78,.20)",
      },
      maxWidth: {
        prose: "680px",
        shell: "1200px",
      },
      keyframes: {
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        bob: "bob 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
