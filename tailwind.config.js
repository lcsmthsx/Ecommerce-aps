/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ['var(--font-poppins)'],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        back: '#12141E',
        primary: '#4F4F4F',
        secondary: '#414141',
        text1: '#666666',
        indig: '#4B0082',
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
        modern: "url('../public/modern.png')",
      },
    },
  },
  plugins: [],
};
