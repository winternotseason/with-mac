import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mac: "url('/macos-bg.jpg')",
        calculator: "url('/calculator.png')",
        calendar: "url('/calendar.png')",
        vscode: "url('/vs-code.png')",
        melon: "url('/melon.png')",
        kakao: "url('/kakao.png')",
        mongo: "url('/mongo.png')",
        safari: "url('/safari.png')",
      },
      backgroundColor: {
        "mac-red": "#FF5F57",
        "mac-yellow": "#FEBC2E",
        "mac-green": "#28C840",
        "cal-yellow" : "#FF9F0A"
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      height: {
        "30rem": "30rem",
      },
      colors : {
        
      }
    },
  },
  plugins: [],
};
export default config;
