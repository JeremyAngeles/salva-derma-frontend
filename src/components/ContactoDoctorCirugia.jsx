import React from 'react';

const ContactoDoctorCirugia = () => {
  return (
    <div className="w-full bg-[#f4f2ef] overflow-hidden font-principal">
      
      {/* =========================================
          VISTA CELULAR Y TABLET (< lg)
          ========================================= */}
      <section 
        className="lg:hidden relative w-full aspect-[540/645] min-h-[470px] sm:min-h-[640px] bg-cover bg-top bg-no-repeat flex flex-col justify-center mb-[-1px]"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793338257/ryex09txpmoje64es39i.png')"
        }}
      >
        <div className="relative z-10 w-full max-w-[700px] mx-auto pl-6 min-[390px]:pl-7 sm:pl-12 pr-4 pt-10 sm:pt-14 pb-6 flex flex-col items-start text-left">
          
          {/* Nombre del Doctor en 2 filas */}
          <h2 
            className="text-white text-[2.1rem] min-[390px]:text-[2.45rem] sm:text-[3.5rem] leading-[0.95] tracking-wide mb-1 drop-shadow-md"
            style={{ fontFamily: 'Alta, serif' }}
          >
            DR. HÉCTOR<br />
            VARGAS
          </h2>

          {/* Especialidad en cursiva */}
          <p className="text-white/95 italic font-light text-[14.5px] min-[390px]:text-[16px] sm:text-[22px] tracking-wide mb-4 sm:mb-6 drop-shadow-sm">
            Cirujano plástico
          </p>

          {/* Pastillas de CMP y RNE apiladas una debajo de la otra */}
          <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6 w-[160px] min-[390px]:w-[175px] sm:w-[230px]">
            <div className="bg-[#85aebf]/85 backdrop-blur-sm text-white py-1.5 sm:py-2.5 rounded-xl text-[13px] min-[390px]:text-[14px] sm:text-[17px] font-light tracking-wider shadow-md text-center">
              CMP 68988
            </div>
            <div className="bg-[#85aebf]/85 backdrop-blur-sm text-white py-1.5 sm:py-2.5 rounded-xl text-[13px] min-[390px]:text-[14px] sm:text-[17px] font-light tracking-wider shadow-md text-center">
              RNE 42156
            </div>
          </div>

          {/* Texto de llamada a la acción en 2 filas */}
          <p className="text-white font-light text-[11.5px] min-[390px]:text-[12.5px] sm:text-[16px] leading-[1.3] mb-4 sm:mb-6 drop-shadow-md">
            Evaluemos tu intervención<br />
            quirúrgica en consulta.
          </p>

          {/* Botón de Teléfono / WhatsApp */}
          <a 
            href="https://wa.me/51994060977" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#d3b6ad] to-[#ead8d2] hover:opacity-95 active:scale-95 text-white rounded-full py-2 sm:py-3.5 pl-3 pr-5 sm:pl-4 sm:pr-8 flex items-center justify-start gap-2.5 sm:gap-4 shadow-lg transition-all duration-300 mb-5 sm:mb-7 w-fit"
          >
            <div className="w-7 h-7 min-[390px]:w-8 min-[390px]:h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
              <img 
                src="/iconotelefonoblanco.svg" 
                alt="Teléfono" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-[18px] min-[390px]:text-[20px] sm:text-[27px] font-light tracking-wide whitespace-nowrap">
              +51 994 060 977
            </span>
          </a>

          {/* Redes Sociales */}
          <div className="flex items-center gap-3 sm:gap-4 text-white drop-shadow-md">
            <span className="text-[11.5px] min-[390px]:text-[12.5px] sm:text-[15px] font-light tracking-wide">
              Síguenos en:
            </span>
            <div className="flex gap-2.5 sm:gap-3.5">
              <a href="#" className="w-6 h-6 min-[390px]:w-7 min-[390px]:h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              <a href="#" className="w-6 h-6 min-[390px]:w-7 min-[390px]:h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              <a href="#" className="w-6 h-6 min-[390px]:w-7 min-[390px]:h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/tiktokcolor.svg" alt="TikTok" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          VISTA PC (lg:) - INTACTA SIN CAMBIOS
          ========================================= */}
      <div className="hidden lg:flex w-full justify-center">
        <section 
          className="relative font-principal bg-cover bg-center bg-no-repeat mb-[-1px] flex flex-col justify-center shrink-0"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793124405/gcomgmzvzilazcr5mspi.jpg')",
            width: '1905px', 
            height: '990px',
            minWidth: '1900px',
            minHeight: '990px'
          }}
        >
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Bloque del Doctor con nombre más grande y súper juntos */}
            <div className="flex flex-col items-center md:items-start -mt-20 md:-mt-28">
              <h2 
                className="text-white text-[2.8rem] sm:text-[3.5rem] lg:text-[4.3rem] leading-[0.85] tracking-wide -mb-2 drop-shadow-md"
                style={{ fontFamily: 'Alta, serif' }}
              >
                DR. HÉCTOR VARGAS
              </h2>

              <p className="text-white/95 italic font-light text-[19px] md:text-[23px] tracking-wide drop-shadow-md">
                Cirujano plástico
              </p>
            </div>

            {/* Bloque inferior completo más abajo con mt-14 md:mt-20 */}
            <div className="flex flex-col items-center md:items-start mt-14 md:mt-20 w-full">
              
              {/* Pastillas de CMP y RNE */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <div className="bg-[#85aebf]/85 backdrop-blur-sm text-white px-7 py-2.5 rounded-xl text-[14px] md:text-[16px] font-light tracking-wider shadow-md">
                  CMP 68988
                </div>
                <div className="bg-[#85aebf]/85 backdrop-blur-sm text-white px-7 py-2.5 rounded-xl text-[14px] md:text-[16px] font-light tracking-wider shadow-md">
                  RNE 42156
                </div>
              </div>

              {/* Texto de llamada a la acción */}
              <p className="text-white font-light text-[15px] md:text-[16.5px] leading-relaxed mb-6 max-w-[380px] drop-shadow-md">
                Evaluemos tu intervención quirúrgica en<br className="hidden sm:block" />
                consulta.
              </p>

              {/* Botón de Teléfono / WhatsApp más grande */}
              <a 
                href="https://wa.me/51994060977" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#d8beb6] hover:bg-[#cbb0a7] text-white rounded-full py-4 px-9 md:px-11 flex items-center justify-center gap-4 shadow-lg transition-all duration-300 mb-8 w-fit"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/iconotelefonoblanco.svg" 
                    alt="Teléfono" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <span className="text-[24px] md:text-[30px] font-light tracking-wider">
                  +51 994 060 977
                </span>
              </a>

              {/* Redes Sociales */}
              <div className="flex items-center gap-4 text-white drop-shadow-md">
                <span className="text-[14px] md:text-[15px] font-light tracking-wide">
                  Síguenos en:
                </span>
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

    </div>
  );
};

export default ContactoDoctorCirugia;