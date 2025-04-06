/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        easter: {
          primary: '#FDF2F8',
          secondary: '#FFFBEB',
          accent: '#8B5CF6',
        },
      },
    },
  },
  plugins: [],
};
