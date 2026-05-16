/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customDark: {
          bg: '#262628',
          sidebar: '#1e1e20',
          card: '#323235',
          border: '#3f3f42'
        }
      }
    }
  }
}
