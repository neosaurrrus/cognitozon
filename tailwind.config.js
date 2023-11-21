/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        'cognito-blue': '#1A96F3',
        'cognito-gray': '#A1A1A1',
      },
    },
  },
  plugins: [],
}

