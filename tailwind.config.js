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
          primario: '#053d57',   // Azul petróleo (Footer y fondos oscuros)
          secundario: '#78b5c5', // Celeste (Botón Reservas)
          acento: '#dfcdc1',     // Beige (Fondos de tarjetas)
          texto: '#4a4a4a',      // Gris oscuro para textos generales
          blanco: '#ffffff'
        }
      },
      fontFamily: {
        // "principal" es el nombre en clave. Tailwind aplicará esto a toda la web.
        principal: ['FuenteProyecto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}