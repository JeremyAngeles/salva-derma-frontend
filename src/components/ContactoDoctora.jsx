import React from 'react';

const ContactoDoctora = () => {
  return (
    <section 
      className="w-full font-principal overflow-hidden relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1792810329/jwlbnofvb3ot0smmutuc.jpg')" }}
    >
      
      {/* Amplié el max-w a 1350px para dar más margen y poder empujar a la derecha */}
      <div className="relative z-10 w-full max-w-[1350px] mx-auto px-6 lg:px-10 flex flex-col-reverse md:flex-row items-center pt-16 md:pt-24 pb-0">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Vacía
            ========================================= */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start items-end mt-10 md:mt-0">
        </div>

        {/* =========================================
            COLUMNA DERECHA: Textos y Contacto
            ========================================= */}
        {/* Usamos md:translate-x-8 lg:translate-x-16 para empujarlo físicamente más a la derecha */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right pb-12 md:pb-32 md:translate-x-8 lg:translate-x-16">
          
          <h2 
            className="text-white text-[2rem] sm:text-4xl md:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] mb-6 md:mb-8 drop-shadow-md tracking-wide"
            style={{ fontFamily: 'Alta, serif' }}
          >
            CADA PIEL TIENE SU<br />
            PROPIA HISTORIA, TE<br />
            AYUDAMOS A CONTARLA<br />
            DE LA MEJOR MANERA
          </h2>

          {/* Párrafo con texto MÁS GRANDE */}
          <p className="text-white text-[16px] md:text-[18px] lg:text-[21px] font-light leading-relaxed mb-10 max-w-[500px] drop-shadow-sm">
            Nuestra área de dermatología<br className="hidden md:block" />
            te brinda atención<br className="hidden md:block" />
            personalizada, experiencia y<br className="hidden md:block" />
            tratamientos seguros, siempre<br className="hidden md:block" />
            con empatía y<br className="hidden md:block" />
            acompañamiento en tu<br className="hidden md:block" />
            proceso.
          </p>

          {/* Botón de WhatsApp (Solo el ícono, sin bordes circulares) */}
          <a 
            href="https://wa.me/51994060977" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#dcc4bc] hover:bg-[#ceb5ac] text-white rounded-full py-3 px-6 md:px-8 flex items-center justify-center gap-3 shadow-md transition-all group mb-8 w-fit"
          >
            <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
              <img 
                src="/iconotelefonoblanco.svg" 
                alt="Teléfono WhatsApp" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-[1.3rem] md:text-[1.6rem] font-light tracking-wide">
              +51 994 060 977
            </span>
          </a>

          {/* Redes Sociales solo con sus íconos de color originales */}
          <div className="flex items-center gap-4 text-white drop-shadow-sm">
            <span className="text-[16px] md:text-[18px] font-light tracking-wide">
              Síguenos en:
            </span>
            <div className="flex gap-3 md:gap-4">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              {/* TikTok */}
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/tiktokcolor.svg" alt="TikTok" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactoDoctora;