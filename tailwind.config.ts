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
        Thunderstorm : "url('/thunder.jpg')",
        Drizzle : "url('/drizzle.jpg')",
        Rain : "url('/rain.jpg')",
        Snow : "url('/Snow.jpg')",
        Atmosphere : "url('/atmosphere.jpg')",
        Clear : "url('/clear.jpg')",
        Clouds : "url('/clouds.jpg')"
      },
      backgroundColor: {
        "mac-red": "#FF5F57",
        "mac-yellow": "#FEBC2E",
        "mac-green": "#28C840",
        "cal-yellow": "#FF9F0A",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      height: {
        "30rem": "30rem",
        "22rem": "22rem",
      },
      colors: {
        "light-gray": "#9094A4",
        "navy" : "#1B2036"
      },
    },
  },
  safelist: ["text-6xl"],
  plugins: [],
};
export default config;
