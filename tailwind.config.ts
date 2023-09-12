import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      cardDark: "#161629",
      primary: "#6016FC",
      green: "#16FCD2",
      hightlight: "#221048",
      white: "#FFFFFF",
      dark: "#0B0B22",
      red: "#FC165B",
    },
  },
};

export default config;
