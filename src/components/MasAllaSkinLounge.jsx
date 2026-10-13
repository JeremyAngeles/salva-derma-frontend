import React from 'react';

const MasAllaSkinLounge = () => {
  return (
    <section className="relative w-full bg-[#f4f4f4] py-16 md:py-24 font-principal overflow-hidden">
      
      {/* =========================================
          CÍRCULOS DE FONDO (Marca de agua sutil)
          ========================================= */}
      <div className="absolute top-1/2 left-[30%] transform -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border-[30px] md:border-[50px] border-white/40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-[30%] transform -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] rounded-full border-[30px] md:border-[50px] border-white/30 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1250px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Imagen de la chica
            ========================================= */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img 
            src="/mas-alla-mujer.png" // Reemplaza con la imagen de la chica (idealmente en formato PNG sin fondo)
            alt="Mujer feliz cuidando su piel" 
            className="w-full max-w-[450px] lg:max-w-[550px] object-contain drop-shadow-xl"
            onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full max-w-[450px] h-[500px] bg-[#e8e4e1] rounded-3xl' }}
          />
        </div>

        {/* =========================================
            COLUMNA DERECHA: Textos, Lista y Contacto
            ========================================= */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
          
          {/* TÍTULO EN UNA SOLA FILA */}
          <h2 
            className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] xl:text-[4rem] text-[#053d57] mb-10 md:mb-14 tracking-wide leading-none whitespace-nowrap"
            style={{ fontFamily: 'Alta, serif' }}
          >
            MÁS ALLÁ DE UN FACIAL
          </h2>

          {/* Lista de Beneficios */}
          <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-12 w-full">
            
            {/* Ítem 1: RELAJACIÓN */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-5">
              <span className="text-[#88807a] text-[13px] md:text-[15px] font-medium tracking-wide uppercase">
                Relajación
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/relajación.svg" 
                  alt="Icono Relajación" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            {/* Ítem 2: MEJORA LA NUTRICIÓN... */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-5">
              <span className="text-[#88807a] text-[13px] md:text-[15px] font-medium tracking-wide text-right uppercase">
                Mejora la nutrición,<br />
                hidratación y calidad de la piel
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/piel.svg" 
                  alt="Icono Nutrición y Piel" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            {/* Ítem 3: POTENCIA TU SKINCARE */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-5">
              <span className="text-[#88807a] text-[13px] md:text-[15px] font-medium tracking-wide uppercase">
                Potencia tu skincare
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/skin.svg" 
                  alt="Icono Skincare" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

          </div>

          {/* Texto Descriptivo */}
          <p className="text-[#88807a] text-[13.5px] md:text-[15px] lg:text-[16px] font-light max-w-[420px] mb-6 md:mb-8 leading-relaxed">
            Si quieres conocer cada paso de nuestros<br className="hidden md:block"/>
            faciales SKIN LOUNGE y más detalles,<br className="hidden md:block"/>
            ¡escríbenos!
          </p>

          {/* Botón WhatsApp */}
          <a 
            href="https://wa.me/51994060977" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-[#d1b3ab] text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#c59e93] transition-colors mb-8 shadow-md"
          >
            {/* Ícono de Teléfono/WhatsApp (Limpio) */}
            <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
              <img 
                src="/iconotelefonoblanco.svg" 
                alt="Teléfono WhatsApp" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-[20px] md:text-[24px] tracking-widest font-light mt-0.5">+51 994 060 977</span>
          </a>

          {/* Redes Sociales */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <span className="text-[#88807a] font-light text-[14px] md:text-[15px]">Síguenos en:</span>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              {/* TikTok */}
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/tiktokcolor.svg" alt="TikTok" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MasAllaSkinLounge;