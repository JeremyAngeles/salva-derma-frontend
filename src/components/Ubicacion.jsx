import React from 'react';
import { Link } from 'react-router-dom';

const Ubicacion = () => {
  return (
    <section 
      className="relative w-full py-16 md:py-24 bg-cover bg-center bg-no-repeat overflow-hidden font-principal flex flex-col items-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792529043/contacto.png')" }}
    >
      
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Título y Subtítulo */}
        <div className="text-center max-w-4xl px-6 mb-10 md:mb-16 flex flex-col items-center">
          <h2 
            className="text-[2.0rem] sm:text-[2.4rem] md:text-5xl text-[#053d57] font-light tracking-wide leading-[1.1] mb-4 md:mb-5 drop-shadow-sm text-center"
            style={{ fontFamily: 'Alta, serif' }}
          >
            TODOS LOS CAMINOS<br />
            CONDUCEN A SALVAR
          </h2>
          
          {/* Subtítulo forzado exactamente a 2 filas en PC */}
          <p className="text-[#7c7570] text-sm sm:text-base md:text-[22px] font-medium leading-[1.3] md:leading-[1.2] max-w-[850px]">
            Ubicados estratégicamente en el corazón de la ciudad, a 10 minutos del<br className="hidden md:block" />
            centro empresarial de San Isidro, contamos con estacionamiento externo.
          </p>
        </div>

        {/* Contenedor Principal */}
        <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* =========================================
              DIRECCIÓN (Arriba del mapa SOLO en Celular y Tablet)
              ========================================= */}
          <div className="lg:hidden flex items-center justify-center gap-3 w-full mb-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
              <img 
                src="/iconolugarcolor.svg" 
                alt="Ubicación de Salvar" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div>
              <p className="text-[#6b625c] text-sm sm:text-base font-normal whitespace-nowrap">
                Av. Ignacio Merino 2475, Lince
              </p>
            </div>
          </div>

          {/* COLUMNA IZQUIERDA: Mapa de Google Maps */}
          <div className="lg:col-span-7 bg-white p-2.5 sm:p-3 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border border-gray-200 group overflow-hidden w-full">
            <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[620px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative">
              <iframe 
                title="Ubicacion Salvar Dermatoplastica"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.859871587634!2d-77.03456!3d-12.08643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c512345679%3A0x123456789abcdef!2sAv.%20Ignacio%20Merino%202475%2C%20Lince%2015073!5e0!3m2!1ses!2spe!4v1650000000000!5m2!1ses!2spe" 
                className="w-full h-full border-0 grayscale contrast-[1.10] opacity-90 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* COLUMNA DERECHA: Horarios, Teléfono y Redes */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full px-2 sm:px-0">
            
            {/* Dirección (SOLO visible en PC dentro de la columna derecha) */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <img 
                  src="/iconolugarcolor.svg" 
                  alt="Ubicación de Salvar" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <p className="text-[#6b625c] text-base md:text-lg font-normal whitespace-nowrap">
                  Av. Ignacio Merino 2475, Lince
                </p>
              </div>
            </div>

            {/* CAJA DE HORARIO DE ATENCIÓN */}
            <div className="w-full max-w-[420px] lg:max-w-none border border-[#d2bcbc] rounded-[1.5rem] p-3 sm:p-5 flex flex-col gap-3 sm:gap-4 bg-white/40 backdrop-blur-sm">
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="hidden sm:block flex-1 h-[1px] bg-[#d2bcbc]"></div>
                <h4 className="text-[#c59e93] font-semibold text-sm sm:text-lg tracking-wide uppercase">
                  Horario de atención:
                </h4>
                <div className="hidden sm:block flex-1 h-[1px] bg-[#d2bcbc]"></div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 items-center">
                
                {/* Lunes a viernes */}
                <div className="flex items-center justify-start gap-2 sm:gap-3 bg-white/50 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src="/iconorelojcolor.svg" 
                      alt="Reloj" 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <p className="text-[#6b625c] text-[11px] sm:text-sm font-light text-left leading-tight">
                    <strong className="font-semibold block mb-0.5">Lunes a viernes</strong>
                    9am a 7pm
                  </p>
                </div>

                {/* Sábados */}
                <div className="flex items-center justify-start gap-2 sm:gap-3 bg-white/50 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src="/iconorelojcolor.svg" 
                      alt="Reloj" 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <p className="text-[#6b625c] text-[11px] sm:text-sm font-light text-left leading-tight">
                    <strong className="font-semibold block mb-0.5">Sábados</strong>
                    9am a 6pm
                  </p>
                </div>

              </div>
            </div>

            {/* Reservas al (Número y icono grandes y proporcionados) */}
            <div className="flex flex-col items-center lg:items-start gap-2.5 w-full max-w-[420px] lg:max-w-none">
              <h4 className="text-[#c59e93] font-semibold text-base sm:text-lg">Reservas al:</h4>
              <a 
                href="https://wa.me/51994060977" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-[#dcc4bc] to-[#ceb5ac] hover:opacity-95 text-white rounded-full py-3.5 px-8 shadow-md transition-all duration-300 w-auto"
              >
                <img 
                  src="/iconotelefonoblanco.svg" 
                  alt="Teléfono" 
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain flex-shrink-0"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                
                <span className="text-2xl sm:text-3xl font-light tracking-wide">
                  +51 994 060 977
                </span>
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-1">
              <span className="text-[#6b625c] text-sm md:text-base font-light">Síguenos en:</span>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
                <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/tiktokcolor.svg" alt="TikTok" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Ubicacion;