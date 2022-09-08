/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    lettterSpacing: {
      tight: '-0.015em',
    },
    extend: {
      height: {
        'half-screen': '50vh',
      },
    },
  },
  plugins: [],
};
