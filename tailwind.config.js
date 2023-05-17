// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    // Example content paths...
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFD370',
        secondary: '#333333',
        warning: '#D87355'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
