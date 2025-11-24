/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A2A5B',
        'secondary': '#00BFFF',
        'accent': '#FFD700',
        'background': '#F9FAFB',
        'card': '#FFFFFF',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
      },
    },
  },
  plugins: [],
}
