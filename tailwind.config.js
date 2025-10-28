/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        red: {
          600: "#DC2626",
          700: "#B91C1C",
          900: "#7F1D1D",
        },
        green: {
          600: "#16A34A",
          700: "#15803D",
          900: "#14532D",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        bartle: ['"BBH Sans Bartle"', 'sans-serif'],
      },
      boxShadow: {
        glass: "0 4px 20px rgba(59, 130, 246, 0.1)",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
