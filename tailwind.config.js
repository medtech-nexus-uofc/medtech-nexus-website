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
      colors: {
        boneWhite: "#FFF4EC",
        sadBeige: "#E5E0DA",
        paleBlue: "#C7D9DD",
        deepIceBlue: "#36A0C3",
        pistachio: "#9EC8B9",
        seaGreen: "#57A6A1",
        carrot: "#F3A26D",
        grapefruit: "#ED775A",
        bocchiPink: "#FEBBCC",
        rosePink: "#F67280",
      },
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
