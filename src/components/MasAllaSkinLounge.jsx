import React from 'react';

const MasAllaSkinLounge = () => {
  return (
    <div className="w-full flex justify-center bg-[#faf9f8] overflow-hidden">
      <section 
        className="relative font-principal bg-cover bg-center bg-no-repeat mb-[-1px] flex flex-col justify-center shrink-0"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793141017/djvxwdu86hy6fbefpjps.jpg')",
          width: '1900px', 
          height: '960px',
          minWidth: '1900px',
          minHeight: '960px'
        }}
      >
        
        <div className="relative z-10 max-w-[1250px] w-full mx-auto px-6 lg:px-12 flex justify-center md:justify-end">
          
          {/* =========================================
              CONTENEDOR DE TEXTOS, LISTA Y CONTACTO (Centrado/Derecha)
              ========================================= */}
          <div className="w-full md:w-[60%] lg:w-[55%] flex flex-col items-center md:items-end text-center md:text-right mt-16 md:mt-0">
            
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
              <div className="flex items-center justify-center md:justify-end gap-5 md:gap-6">
                <span className="text-[#5a5550] text-[17px] md:text-[20px] font-bold tracking-wide uppercase">
                  Relajación
                </span>
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/relajación.svg" 
                    alt="Icono Relajación" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>

              {/* Ítem 2: MEJORA LA NUTRICIÓN... */}
              <div className="flex items-center justify-center md:justify-end gap-5 md:gap-6">
                <span className="text-[#5a5550] text-[17px] md:text-[20px] font-bold tracking-wide text-right uppercase leading-tight">
                  Mejora la nutrición,<br />
                  hidratación y calidad de la piel
                </span>
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/piel.svg" 
                    alt="Icono Nutrición y Piel" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>

              {/* Ítem 3: POTENCIA TU SKINCARE */}
              <div className="flex items-center justify-center md:justify-end gap-5 md:gap-6">
                <span className="text-[#5a5550] text-[17px] md:text-[20px] font-bold tracking-wide uppercase">
                  Potencia tu skincare
                </span>
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/skin.svg" 
                    alt="Icono Skincare" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>

            </div>

            {/* Texto Descriptivo (Más redondito/negrita y más junto con leading-snug) */}
            <p className="text-[#88807a] text-[14px] md:text-[16px] lg:text-[17px] font-medium max-w-[420px] mb-6 md:mb-8 leading-snug">
              Si quieres conocer cada paso de nuestros faciales SKIN LOUNGE y más detalles, ¡escríbenos!
            </p>

            {/* Botón WhatsApp */}
            <a 
              href="https://wa.me/51994060977" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-[#d1b3ab] text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#c59e93] transition-colors mb-8 shadow-md"
            >
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
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/tiktokcolor.svg" alt="TikTok" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default MasAllaSkinLounge;