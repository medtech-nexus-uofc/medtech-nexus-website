/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        assistant: ["var(--font-assistant)"],
        "funnel-display": ["var(--font-funnel-display)"],
      },
      colors: {},
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        "::-webkit-scrollbar": {
          width: "5px",
          height: "5px",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#2e3842",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#cccccc",
        },
        "::-webkit-details-marker": {
          display: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
