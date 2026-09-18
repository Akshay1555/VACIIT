/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1B1220',
        violet: {
          50: '#F5EEF6',
          100: '#E7D6EC',
          400: '#7A2E86',
          600: '#5C1470',
          700: '#4B1257',
          900: '#2E0A38'
        },
        magenta: {
          500: '#A31E8C',
          600: '#8A1878'
        },
        gold: {
          400: '#E3B65A',
          500: '#D9A441'
        },
        cream: {
          50: '#FBF8F2',
          100: '#F5EFE4'
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        prose: '68ch'
      }
    }
  },
  plugins: []
};
