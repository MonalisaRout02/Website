/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
 
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel-decorative': ['"Cinzel Decorative"', 'cursive'],
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUpOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slideUpIn: 'slideUp 0.5s ease-in-out forwards',
        slideUpOut: 'slideUpOut 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [ 
  ],
}