/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem', // 640px~
        md: '7rem', // 768px~
        lg: '12rem', // 1024px~
        xl: '12rem', // 1280px~
        '2xl': '14rem', // 1536px~
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
