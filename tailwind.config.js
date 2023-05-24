/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      screens: {
        sm: "320px",
        mm: "375px",
        ml: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "2560px",
      },
    },
    extend: {},
  },
  plugins: [],
};
