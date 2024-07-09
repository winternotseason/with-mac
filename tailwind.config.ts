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
        mongo : "url('/mongo.png')",
        safari : "url('/safari.png')",
      },
    },
  },
  plugins: [],
};
export default config;
