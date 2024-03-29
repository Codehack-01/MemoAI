/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        textColor: "#121111",
        
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "460px",
      sm: "460px",
      md: "768px",
      lg: "1024px",
      xl: "1280",
      
    },
  },
  plugins: [],
}

