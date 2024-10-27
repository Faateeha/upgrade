/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          100: '#EAECF0',
          200: '#F6F9F8',
          300: '#646161',
          400: '#646060',
          500: '#454747',
          600: '#A5A5A5',
          700: 'DCDCDC',
          800: '#676666'
        },
        green: {
          100: '#03A300',
          200: '#2D907A',
          300: '#004852',
          400: '#006022',
          500: '#00B512',
          600: '#04684C',
          700: '#014526',
          800: '#003B47',
          900: '#454747',
          1000: 'A1A1A1'
        },
        blue: {
          100: '#001027'
        },
        yellow: {
          100: '#E2FF54'
        }
      },
      backgroundImage: {
        'custom-image': "url('../src/assets/bg.png')",
      },
      backgroundPosition: {
        'custom-position': '50%',
      },
      backgroundSize: {
        'custom-size': 'cover',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
      backgroundColor: {
        'custom-lightgray': '#D3D3D3', // equivalent to lightgray
      },
    },
    },
  
  plugins: [],
};


