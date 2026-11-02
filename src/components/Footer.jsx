import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* =====================================================
          CELULAR Y TABLET (todo en vw, igualito al diseño)
          ===================================================== */}
      <footer
        className="lg:hidden w-full bg-[#014462] text-white pt-[3.4vw] pb-[5vw]"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {/* Logo */}
        <div className="flex justify-center">
          <Link to="/" className="inline-block">
            <img
              src="/logo-salva.png"
              alt="Salvar Dermatoplástica"
              className="h-[7.2vw] w-auto object-contain brightness-0 invert"
            />
          </Link>
        </div>

        {/* Correo */}
        <div className="flex items-center justify-center gap-[1.4vw] mt-[4.2vw]">
          <div className="w-[3vw] h-[3vw] flex-shrink-0 flex items-center justify-center">
            <img src="/correo.svg" alt="Correo" className="w-full h-full object-contain" />
          </div>
          <span className="text-[2.2vw] font-light tracking-wide whitespace-nowrap">salvar.peru@gmail.com</span>
        </div>

        {/* Columnas */}
        <div className="flex items-start pl-[10vw] mt-[7vw]">

          {/* Explorar */}
          <div className="w-[26.7vw] flex-shrink-0">
            <h3 className="text-[2.6vw] font-semibold tracking-wide leading-none mb-[3vw] whitespace-nowrap">Explorar:</h3>
            <ul className="w-[18vw] flex flex-col">
              {[
                { to: '/', label: 'Inicio' },
                { to: '/nosotros', label: 'Nosotros' },
                { to: '/dermatologia', label: 'Dermatología' },
                { to: '/cirugia', label: 'Cirugía Plástica' },
                { to: '/tratamientos', label: 'T. Estéticos' },
                { to: '/skinlounge', label: 'SkinLounge' },
              ].map((item, i, arr) => (
                <li key={item.to} className="mb-[1.4vw]">
                  <Link
                    to={item.to}
                    className="text-[1.7vw] font-light flex items-center gap-[1.4vw] whitespace-nowrap leading-none pb-[1.1vw]"
                  >
                    <span className="w-[0.45vw] h-[0.45vw] rounded-full bg-white"></span>
                    {item.label}
                  </Link>
                  {i !== arr.length - 1 && <div className="w-full h-[0.25vw] bg-[#8fd0e8]"></div>}
                </li>
              ))}
            </ul>
          </div>

          {/* Agenda tu cita */}
          <div className="w-[31.5vw] flex-shrink-0">
            <h3 className="text-[2.6vw] font-semibold tracking-wide leading-none mb-[3vw] whitespace-nowrap">Agenda tu cita:</h3>
            <ul className="flex flex-col gap-[3.6vw] text-[1.75vw] font-light leading-[1.4]">

              <li className="flex items-center gap-[1.6vw]">
                <div className="w-[3.2vw] h-[3.2vw] flex-shrink-0 flex items-center justify-center">
                  <img src="/iconotelefonoblanco.svg" alt="Teléfono" className="w-full h-full object-contain" />
                </div>
                <span className="whitespace-nowrap">+51 994 060 977</span>
              </li>

              <li className="flex items-start gap-[1.6vw]">
                <div className="w-[3.2vw] h-[3.2vw] flex-shrink-0 flex items-center justify-center">
                  <img src="/icono-lugar-blanco.png" alt="Ubicación" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="block whitespace-nowrap">AVENIDA Ignacio</span>
                  <span className="block whitespace-nowrap text-[#8fd0e8]">Merino 2475 - lince</span>
                </div>
              </li>

              <li className="flex items-start gap-[1.6vw]">
                <div className="w-[3.2vw] h-[3.2vw] flex-shrink-0 flex items-center justify-center">
                  <img src="/icono-reloj-blanco.png" alt="Horario" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="block whitespace-nowrap">De Lunes a Viernes</span>
                  <span className="block whitespace-nowrap">9am  a 7pm</span>
                  <span className="block whitespace-nowrap mt-[1.4vw]">Sábados</span>
                  <span className="block whitespace-nowrap">9am a 6pm</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Síguenos en */}
          <div className="flex-1">
            <h3 className="text-[2.6vw] font-semibold tracking-wide leading-none mb-[3vw] whitespace-nowrap">Síguenos en:</h3>

            <div className="flex gap-[1.4vw] mb-[3vw]">
              <a href="#" className="w-[3vw] h-[3vw] flex items-center justify-center">
                <img src="/fblanco.svg" alt="Facebook" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-[3vw] h-[3vw] flex items-center justify-center">
                <img src="/igblanco.svg" alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-[3vw] h-[3vw] flex items-center justify-center">
                <img src="/tiktokblanco.svg" alt="TikTok" className="w-full h-full object-contain" />
              </a>
            </div>

            <p className="text-[1.6vw] font-light tracking-wide text-[#bfe3f0] uppercase whitespace-nowrap">
              @SALVARDERMATOPLÁSTICA
            </p>
          </div>

        </div>
      </footer>

      {/* =====================================================
          PC (sin cambios)
          ===================================================== */}
      <footer 
        className="hidden lg:block w-full bg-[#014462] text-white py-16 md:py-20"
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
                <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                  <img src="/iconotelefonoblanco.svg" alt="Teléfono" className="w-full h-full object-contain" />
                </div>
                <span>+51 994 060 977</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <img src="/icono-lugar-blanco.png" alt="Ubicación" className="w-full h-full object-contain" />
                </div>
                <span>AVENIDA Ignacio Merino 2475 - lince</span>
              </li>
              <li className="flex items-start gap-3">
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
            
            <div className="flex gap-5 mb-6">
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/fblanco.svg" alt="Facebook" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/igblanco.svg" alt="Instagram" className="w-full h-full object-contain" />
              </a>
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
    </>
  );
};

export default Footer;