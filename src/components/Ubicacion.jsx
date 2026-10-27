import React from 'react';

const Ubicacion = () => {
  return (
    <section 
      className="relative w-full py-24 bg-cover bg-center bg-no-repeat overflow-hidden font-principal flex flex-col items-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792529043/contacto.png')" }}
    >
      
      {/* SE ELIMINÓ EL FILTRO/CAPA BLANCA (bg-white/40) PARA QUE EL FONDO SE VEA NATURAL */}

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Título y Subtítulo */}
        <div className="text-center max-w-4xl px-6 mb-16 flex flex-col items-center">
          {/* Título dividido en 2 líneas exactamente */}
          <h2 
            className="text-3xl md:text-5xl text-[#053d57] font-light tracking-wide leading-[1.1] mb-5 drop-shadow-sm"
            style={{ fontFamily: 'Alta, serif' }}
          >
            TODOS LOS CAMINOS<br />
            CONDUCEN A SALVAR
          </h2>
          {/* Subtítulo con interlineado más junto (leading-[1.2]) */}
          <p className="text-[#7c7570] text-lg md:text-[22px] font-medium leading-[1.2]">
            Ubicados estratégicamente en el corazón de la ciudad, a 10 minutos del <br />
            centro empresarial de San Isidro, contamos con estacionamiento externo.
          </p>
        </div>

        {/* Contenedor Principal (Mapa a la izquierda, Info a la derecha) */}
        <div className="w-full max-w-[1200px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Mapa de Google Maps with hover animation (Ocupa 7 columnas) */}
          <div className="lg:col-span-7 bg-white p-3 rounded-[2.5rem] shadow-xl border border-gray-200 group overflow-hidden">
            {/* Altura del mapa incrementada */}
            <div className="w-full h-[450px] md:h-[550px] lg:h-[620px] rounded-[2rem] overflow-hidden relative">
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

          {/* COLUMNA DERECHA: Dirección, Horarios y Teléfono (Ocupa 5 columnas) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Dirección */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <img 
                  src="/iconolugarcolor.svg" 
                  alt="Ubicación de Salvar" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <p className="text-[#6b625c] text-base md:text-lg font-normal leading-snug">
                  Av. Ignacio Merino 2475<br />
                  Lince
                </p>
              </div>
            </div>

            <hr className="border-gray-300 my-1" />

            {/* Horario de Atención */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[#c59e93] font-semibold text-lg">Horario de atención:</h4>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src="/iconorelojcolor.svg" 
                    alt="Reloj" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <p className="text-[#6b625c] text-sm md:text-base font-light">
                  <strong className="font-semibold">Lunes a viernes</strong><br />
                  9am a 7pm
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src="/iconorelojcolor.svg" 
                    alt="Reloj" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <p className="text-[#6b625c] text-sm md:text-base font-light">
                  <strong className="font-semibold">Sábados</strong><br />
                  9am a 6pm
                </p>
              </div>
            </div>

            <hr className="border-gray-300 my-1" />

            {/* Reservas al */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#c59e93] font-semibold text-lg">Reservas al:</h4>
              <a 
                href="https://wa.me/51994060977" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#dcc4bc] hover:bg-[#ceb5ac] text-white rounded-full py-4 px-6 md:px-8 flex items-center shadow-md transition-all duration-300 group"
              >
                {/* Ícono de teléfono */}
                <div className="absolute left-6 md:left-8 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center pointer-events-none">
                  <img 
                    src="/iconotelefonoblanco.svg" 
                    alt="Teléfono" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                
                {/* Número */}
                <span className="w-full text-center text-xl md:text-2xl font-semibold tracking-wide">
                  +51 994 060 977
                </span>
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-4 mt-2">
              <span className="text-[#6b625c] text-sm md:text-base">Síguenos en:</span>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center hover:scale-110 transition-transform duration-300">
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