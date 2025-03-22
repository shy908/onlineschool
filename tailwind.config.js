/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Use 'media' for system preference
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Blue-800
        secondary: '#60A5FA', 
        textColor: '#1F2937', 
        lightText: '#4B5563', 
        bgLight: '#F9FAFB', 
        bgDark: '#E5E7EB', 
      },
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      keyframes: {
        slideInFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideInFromTop: 'slideInFromTop 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
