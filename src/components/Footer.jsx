import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
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
            {/* Ícono de Correo más grande (de w-5 a w-7) */}
            <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
              <img src="/correo.svg" alt="Correo" className="w-full h-full object-contain" />
            </div>
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
              {/* Ícono de Teléfono más grande */}
              <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                <img src="/iconotelefonoblanco.svg" alt="Teléfono" className="w-full h-full object-contain" />
              </div>
              <span>+51 994 060 977</span>
            </li>
            <li className="flex items-start gap-3">
              {/* Ícono de Ubicación más grande */}
              <div className="w-7 h-7 flex-shrink-0 mt-0.5 flex items-center justify-center">
                <img src="/icono-lugar-blanco.png" alt="Ubicación" className="w-full h-full object-contain" />
              </div>
              <span>AVENIDA Ignacio Merino 2475 - lince</span>
            </li>
            <li className="flex items-start gap-3">
              {/* Ícono de Reloj más grande */}
              <div className="w-7 h-7 flex-shrink-0 mt-0.5 flex items-center justify-center">
                <img src="/icono-reloj-blanco.png" alt="Horario" className="w-full h-full object-contain" />
              </div>
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
          
          {/* Contenedor de redes sociales con íconos limpios y más grandes */}
          <div className="flex gap-5 mb-6">
            {/* Facebook Blanco */}
            <a href="#" className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img src="/fblanco.svg" alt="Facebook" className="w-full h-full object-contain" />
            </a>
            {/* Instagram Blanco */}
            <a href="#" className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img src="/igblanco.svg" alt="Instagram" className="w-full h-full object-contain" />
            </a>
            {/* TikTok Blanco */}
            <a href="#" className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img src="/tiktokblanco.svg" alt="TikTok" className="w-full h-full object-contain" />
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