/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        assistant: ["var(--font-assistant)"],
        "funnel-display": ["var(--font-funnel-display)"],
      },
    },
  },
  plugins: [],
};
