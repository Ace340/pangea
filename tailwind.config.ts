import { Barlow_Condensed, Bebas_Neue } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [    
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: {
          DEFAULT: '#191716',
        },
        white: {
          DEFAULT: '#E0E2DB',
        },
        grey: {
          DEFAULT: '6B717E',
        },
        yellow: {
          DEFAULT: 'F08700',
        }
      },
      fontFamily: {
        barlow: ["BARLOW CONDENSED", "sans-serif"],
        bebas: ["BEBAS NEUE", "sans-serif"],
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
