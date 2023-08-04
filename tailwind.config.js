/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#55ecb5",

        text: "#1c030c",

        secondary: "#cdf3f9",

        accent: "#19e134",

        neutral: "#1a1a2e",

        "base-100": "#fdf1f6",

        info: "#9eb3e0",

        success: "#22aa7f",

        warning: "#f0a824",

        error: "#fb467f",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
};
