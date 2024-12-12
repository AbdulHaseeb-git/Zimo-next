
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#16a34a', // Green
          dark: '#10b981',  // Dark Green
        },
        background: {
          light: '#f9fafb', // Light background
          dark: '#111827',  // Dark background
        },
        text: {
          light: '#111827', // Dark text for light mode
          dark: '#f9fafb',  // Light text for dark mode
        },
        linkHover: {
          light: '#fbbf24', // Yellow for light theme
          dark: '#fbbf24',  // Yellow for dark theme (same)
        },
      },
    },
  },
  plugins: [],
};
