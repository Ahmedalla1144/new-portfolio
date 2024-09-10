import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient: "linear-gradient(to right ,#13ADC7, #945DD6)",
        "gradient-title": "linear-gradient(121.57deg, rgb(255, 255, 255) 17.77%, rgba(255, 255, 255, 0.66) 60.15%);",
      },
      screens: {
        ss: "445px",
        xs: "550px",
      },
    },
  },
  plugins: [],
};
export default config;
