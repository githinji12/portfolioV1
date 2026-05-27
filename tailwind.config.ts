import type { Config } from "tailwindcss";
 

const config: Config = {
      darkMode: "class", 
  content: [
    
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-inter)"] },
      colors: {
        dark: { 900: "#050507", 800: "#0a0a0c", 700: "#121216" },
        brand: { cyan: "#22d3ee", blue: "#6366f1", purple: "#a855f7" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        noise: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`,
      },
      animation: { float: "float 10s ease-in-out infinite", pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-30px) rotate(5deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;