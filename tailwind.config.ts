import { PiMagnifyingGlassBold } from "react-icons/pi";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'custom-bg': "url('/public/assets/MainBg.png')",
      },
      colors: {
        transparent: "transparent",
        orange: "#E94234",
        current: "currentColor",
        bgLight: "#F4F4F4",
        bgDark: "#E0E0E0",
        green: "#3A5154",
        gray: "#333333"
      },
      fontFamily: {
        inter: "var(--font-inter)",
        manrope: "var(--font-manrope)",
        suisse: ['Suisse Intl', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
};
export default config;
