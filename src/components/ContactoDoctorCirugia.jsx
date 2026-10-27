import React from 'react';

const ContactoDoctorCirugia = () => {
  return (
    <div className="w-full flex justify-center bg-[#f4f2ef] overflow-hidden">
      <section 
        className="relative font-principal bg-cover bg-center bg-no-repeat mb-[-1px] flex flex-col justify-center shrink-0"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793124405/gcomgmzvzilazcr5mspi.jpg')",
          width: '1900px', 
          height: '990px',
          minWidth: '1900px',
          minHeight: '990px'
        }}
      >
        
        {/* =========================================
            CONTENIDO PRINCIPAL
            ========================================= */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Bloque del Doctor con nombre más grande y súper juntos */}
          <div className="flex flex-col items-center md:items-start -mt-20 md:-mt-28">
            {/* Nombre del Doctor más grande */}
            <h2 
              className="text-white text-[2.8rem] sm:text-[3.5rem] lg:text-[4.3rem] leading-[0.85] tracking-wide -mb-2 drop-shadow-md"
              style={{ fontFamily: 'Alta, serif' }}
            >
              DR. HÉCTOR VARGAS
            </h2>

            {/* Especialidad en cursiva ultra pegada al nombre */}
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
    </div>
  );
};

export default ContactoDoctorCirugia;