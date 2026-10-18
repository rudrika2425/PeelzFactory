// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "peelz-dark": "#3B4A3F",
        "peelz-aqua": "#B2D8D8",
        "peelz-sage": "#D4E1A6",
        "peelz-forest": "#A8C3A6",
        "peelz-white": "#FFFFFF",
        "peelz-offwhite": "#F9F9F9",
      },
    },
  },
  plugins: [],
}
