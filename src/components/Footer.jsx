import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Aplicamos Montserrat directamente mediante style para forzar que el 100% del footer use esta fuente
    <footer 
      className="w-full bg-[#053d57] text-white py-16 md:py-20"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* COLUMNA 1: Logo y Correo centrados */}
        <div className="flex flex-col items-center text-center justify-center">
          <Link to="/" className="inline-block mb-4">
            <img
              src="/logo-salva.png"
              alt="Salvar Dermatoplástica"
              className="h-14 w-auto object-contain brightness-0 invert"
            />
          </Link>

          <div className="flex items-center justify-center gap-3 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm md:text-base font-light tracking-wide">salvar.peru@gmail.com</span>
          </div>
        </div>

        {/* COLUMNA 2: Explorar */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-6 tracking-wide">Explorar:</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" className="text-sm md:text-base font-light hover:text-gray-300 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span> Inicio
              </Link>
              <div className="w-full h-px bg-white/20 mt-3"></div>
            </li>
            <li>
              <Link to="/dermatologia" className="text-sm md:text-base font-light hover:text-gray-300 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span> Dermatología
              </Link>
              <div className="w-full h-px bg-white/20 mt-3"></div>
            </li>
            <li>
              <Link to="/cirugia" className="text-sm md:text-base font-light hover:text-gray-300 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span> Cirugía Plástica
              </Link>
              <div className="w-full h-px bg-white/20 mt-3"></div>
            </li>
            <li>
              <Link to="/tratamientos" className="text-sm md:text-base font-light hover:text-gray-300 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span> Tratamientos Estéticos
              </Link>
              <div className="w-full h-px bg-white/20 mt-3"></div>
            </li>
            <li>
              <Link to="/skinlounge" className="text-sm md:text-base font-light hover:text-gray-300 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span> SkinLounge - L.Faciales
              </Link>
              <div className="w-full h-px bg-white/20 mt-3"></div>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: Agenda tu cita */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-6 tracking-wide">Agenda tu cita:</h3>
          <ul className="flex flex-col gap-5 text-sm md:text-base font-light">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+51 994 060 977</span>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>AVENIDA Ignacio Merino 2475 - lince</span>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p>De Lunes a Viernes</p>
                <p>9am a 7pm</p>
                <p className="mt-2">Sábados</p>
                <p>9am a 6pm</p>
              </div>
            </li>
          </ul>
        </div>

        {/* COLUMNA 4: Síguenos en */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-6 tracking-wide">Síguenos en:</h3>
          <div className="flex gap-4 mb-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#053d57] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#053d57] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#053d57] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.72 5.48-1.2 1.47-2.99 2.5-4.88 2.87-2.02.4-4.14.07-5.88-1-1.63-1.02-2.82-2.58-3.32-4.4-.53-1.92-.35-4.05.5-5.8 1-2.07 2.94-3.56 5.14-4V12c-1.3.17-2.55.77-3.46 1.72-1 1.05-1.57 2.51-1.48 3.96.07 1.47.78 2.86 1.94 3.75 1.08.84 2.54 1.16 3.86 1 1.34-.14 2.58-.8 3.4-1.85.93-1.18 1.38-2.73 1.38-4.23V.02z"/></svg>
            </a>
          </div>
          <p className="text-xs md:text-sm font-light tracking-widest text-gray-300 uppercase">
            @SALVARDERMATOPLÁSTICA
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;