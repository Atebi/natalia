/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('/bg.webp')",
      },

      colors: {
        primary: "#A37551",
        milk: "#B8B8B8",
        gray: "#555555",
        blackish: "#333333",
      },

      animation: {
        slideInRight: "slide-in-right 0.3s ease",
        "slide-down": "slide-down 1.5s ease",
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          // "50%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translate(0%,-100%)" },
          // "50%": {opacity: 0.5, transform: "translate(0%,-50%)" },
          "100%": { opacity: 1, transform: "translate(0%,0%)" },
        },
      },
    },
  },
  plugins: [],
};
