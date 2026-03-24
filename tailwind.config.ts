import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        bg2: "#0F1C2E",
        card: "#1C1F26",
        accent: "#00AEEF",
        accent2: "#0082C8",
        "text-main": "#EAEAEA",
        "text-muted": "#A0A0A0",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,174,239,0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(0,174,239,0.45)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease both",
      },
    },
  },
  plugins: [],
};
export default config;
