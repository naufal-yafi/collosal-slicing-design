import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      cardDark: "#161629",
      primary: "#6016FC",
      green: "#16FCD2",
      hightlight: "#221048",
      white: "#FFFFFF",
      dark: "#0B0B22",
      red: "#FC165B",
      yellow: "#FCA016",
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
        pop: "pop 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            opacity: "0.2",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
            opacity: "0.2",
          },
          "60%": {
            transform: "translate(-20px, 20px) scale(0.8)",
            opacity: "0.23",
          },
          "100%": {
            transform: "translate(30px, -50px) scale(1)",
            opacity: "0.2",
          },
        },
        pop: {
          "0%": {
            opacity: "0.14",
          },
          "80%": {
            opacity: ".18",
          },
          "100%": {
            opacity: "0.14",
          },
        },
      },
    },
  },
};

export default config;
