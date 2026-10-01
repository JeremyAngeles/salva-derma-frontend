/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marca: {
          primario: '#053d57',
          secundario: '#78b5c5',
          acento: '#dfcdc1',
          texto: '#4a4a4a',
          blanco: '#ffffff'
        }
      },
      fontFamily: {
        // Textos generales
        principal: ['MontserratLocal', 'sans-serif'],
        // Títulos
        alta: ['Alta', 'serif'], 
      },
    },
  },
  plugins: [],
}