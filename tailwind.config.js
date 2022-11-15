/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'inner': 'inset 1.5px 1.2px 4px 1.3px rgba(0,0,0,0.75)'
      },
      animation: {
        spin: 'spin 10s linear infinite',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        robotoMono: ['Robot Mono', 'monospace'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
