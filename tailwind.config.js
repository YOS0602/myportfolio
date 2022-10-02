/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
    extend: {
      colors: {
        'nice-gray': '#333333',
        c1: '#3F51B5',
        c2: '#FFCC80',
        c3: '#E8F5E9',
        c4: '#C6B7A4',
        c5: '#E4E0DC',
        cbg: '#F9F9FA',
      },
    },
  },
  plugins: [],
}
