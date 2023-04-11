/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      white: '#ffff',
      bg: 'var(--bg-color)',
      black: '#000000',
    },
  },
  plugins: [],
}
