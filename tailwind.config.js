/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      screens: {
        'xs': '475px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      colors:{
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'tertiary': 'rgb(var(--color-tertiary) / <alpha-value>)',
        'primaryLight': 'rgb(var(--color-primary-light) / <alpha-value>)',
        'navbar': 'rgb(var(--color-navbar) / <alpha-value>)',
      },
      animation:{
        floating: "floating var(--delay) linear infinite",
        explode: "explode 10s linear infinite"
      },
      keyframes:{
        floating: {
          '0%': {
            transform: 'rotate(0deg) translate(-10px) rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg) translate(-10px) rotate(-360deg)'
          }
        },
        explode:{
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: "scale(1.2)"
          },
          '100%': {
            transform: 'scale(0.3)'
          }
        }
      }
    },
    
  },
  
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}
