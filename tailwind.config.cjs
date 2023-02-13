/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      text1: "#111827",
      text2: "#4b5563",
      text3: "#737373",
    },
    extend: {
      backgroundImage: {
        linerBG:
          "linear-gradient(315deg, hsla(202, 42%, 49%, 1) 0%, hsla(335, 69%, 47%, 1) 100%)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        edTech: {
          primary: "#cc256b",

          secondary: "#488CB2",

          accent: "#737373",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
