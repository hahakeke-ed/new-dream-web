import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // layout.tsx에서 정의할 폰트 변수들과 연결합니다.
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        pacifico: ["var(--font-pacifico)"], 
      },
      // 고급스러운 등장을 위한 애니메이션 정의
      animation: {
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
