import React from 'react';

const ContactoDoctorCirugia = () => {
  return (
    <section 
      className="relative w-full font-principal overflow-hidden py-44 md:py-72 bg-cover bg-center bg-no-repeat mb-[-1px]"
      style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1792812484/whrn2zv0r8qztefc3oia.jpg')" }}
    >
      
      {/* =========================================
          CONTENIDO PRINCIPAL
          ========================================= */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* Nombre del Doctor */}
        <h2 
          className="text-white text-[2.4rem] sm:text-[3rem] lg:text-[3.7rem] leading-none tracking-wide mb-2 drop-shadow-md"
          style={{ fontFamily: 'Alta, serif' }}
        >
          DR. HÉCTOR VARGAS
        </h2>

        {/* Especialidad en cursiva */}
        <p className="text-white/95 italic font-light text-[18px] md:text-[22px] tracking-wide mb-7 drop-shadow-md">
          Cirujano plástico
        </p>

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

        {/* Botón de Teléfono / WhatsApp con el ícono limpio a la izquierda */}
        <a 
          href="https://wa.me/51994060977" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#d8beb6] hover:bg-[#cbb0a7] text-white rounded-full py-3.5 px-7 md:px-9 flex items-center justify-center gap-4 shadow-lg transition-all duration-300 mb-8 w-fit"
        >
          <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center flex-shrink-0">
            <img 
              src="/iconotelefonoblanco.svg" 
              alt="Teléfono" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <span className="text-[20px] md:text-[25px] font-light tracking-wider">
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
    </section>
  );
};

export default ContactoDoctorCirugia;