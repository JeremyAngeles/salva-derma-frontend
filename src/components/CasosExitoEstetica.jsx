import React from 'react';

const ContactoStaff = () => {
  return (
    <section className="w-full font-principal overflow-hidden relative mt-[-2px]">
      
      {/* =========================================
          VISTA CELULAR Y TABLET (< lg)
          ========================================= */}
      <div 
        className="lg:hidden relative w-full aspect-[629/880] bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-between pt-8 pb-3 px-6"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793751615/toppj3zf2tzbvyrofdrh.png')" }}
      >
        {/* Capa de protección sutil */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-0"></div>

        {/* TÍTULO Y PÁRRAFO SUPERIOR (En blanco, CENTRADO) */}
        <div className="relative z-10 flex flex-col items-center text-center w-full mt-2">
          
          {/* ✅ Título en 3 filas (solo celular/tablet) */}
          <h2 
            className="text-white text-[clamp(19px,6.2vw,28px)] leading-[1] tracking-tighter font-light drop-shadow-md mb-4 whitespace-nowrap"
            style={{ fontFamily: 'Alta, serif' }}
          >
            <span className="block">SALVAR DERMATOPLÁSTICA</span>
            <span className="block">ESPECIALISTAS EN</span>
            <span className="block">DERMATOLOGÍA CLÍNICA,</span>
            <span className="block">ESTÉTICA, LÁSER Y</span>
            <span className="block">TRICOLOGIA</span>
          </h2>

          {/* ✅ Párrafo en Montserrat (celular) */}
          <p
            className="text-white text-[15px] font-normal leading-[1.35] drop-shadow-md max-w-[340px] sm:max-w-[420px] mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Agenda tu evaluación con nuestro staff altamente capacitado dentro y fuera del país. Para mayor información y citas, ¡contáctanos!
          </p>

        </div>

        {/* BOTÓN WHATSAPP Y REDES SOCIALES */}
        <div className="relative z-10 flex flex-col items-center w-full mb-1">
          
          {/* Botón de WhatsApp centrado */}
          <a 
            href="https://wa.me/51994060977" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-[240px] sm:w-[280px] h-[44px] bg-[#d9c4bc] text-white rounded-full flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-transform mb-2.5"
          >
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <img 
                src="/iconotelefonoblanco.svg" 
                alt="Teléfono WhatsApp" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-[1rem] sm:text-[1.15rem] font-light tracking-wide whitespace-nowrap leading-none">
              +51 994 060 977
            </span>
          </a>

          {/* Redes Sociales centradas */}
          <div className="flex items-center gap-2.5 text-white drop-shadow-md">
            <span className="text-[11px] sm:text-[13px] font-light tracking-wide">
              Síguenos en:
            </span>
            <div className="flex gap-2">
              <a href="#" className="w-5 h-5 flex items-center justify-center">
                <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              <a href="#" className="w-5 h-5 flex items-center justify-center">
                <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              <a href="#" className="w-5 h-5 flex items-center justify-center">
                <img src="/tiktokcolor.svg" alt="TikTok" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================
          VISTA PC (lg:) - título intacto, párrafo en Montserrat
          ========================================= */}
      <div 
        className="hidden lg:flex w-full relative bg-cover bg-center bg-no-repeat min-h-[850px] items-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793088625/d76epe6tvn07vzwnlqop.jpg')" }}
      >
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-6 lg:px-10 flex flex-col justify-center">
          
          <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-center md:items-start text-center md:text-left">
            
            <h2 
              className="relative -top-8 md:-top-16 text-[#053d57] text-[1.8rem] sm:text-4xl md:text-[2.5rem] lg:text-[2.8rem] leading-[1.1] mb-6 md:mb-8 tracking-wide drop-shadow-sm"
              style={{ fontFamily: 'Alta, serif' }}
            >
              SALVAR DERMATOPLÁSTICA<br />
              ESPECIALISTAS EN<br />
              DERMATOLOGÍA CLÍNICA,<br />
              ESTÉTICA, LÁSER Y<br />
              TRICOLOGIA
            </h2>

            {/* ✅ Párrafo en Montserrat (PC) */}
            <p
              className="relative -top-10 md:-top-20 text-white text-[15px] md:text-[18px] lg:text-[19px] font-light leading-[1.3] mb-16 md:mb-24 max-w-[450px] drop-shadow-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Agenda tu evaluación con nuestro staff<br className="hidden md:block" />
              altamente capacitado dentro y fuera del país.<br className="hidden md:block" />
              Para mayor información y citas, ¡contáctanos!
            </p>

            <a 
              href="https://wa.me/51994060977" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative top-12 md:top-24 bg-[#dcc4bc] hover:bg-[#ceb5ac] text-white rounded-full py-4 px-8 md:px-10 flex items-center justify-center gap-4 shadow-md transition-all group mb-4 md:mb-5 w-fit"
            >
              <div className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center">
                <img 
                  src="/iconotelefonoblanco.svg" 
                  alt="Teléfono WhatsApp" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <span className="text-[1.5rem] md:text-[1.9rem] font-light tracking-wide">
                +51 994 060 977
              </span>
            </a>

            <div className="relative top-8 md:top-28 flex items-center gap-5 text-white drop-shadow-sm">
              <span className="text-[17px] md:text-[20px] font-light tracking-wide">
                Síguenos en:
              </span>
              <div className="flex gap-5 md:gap-6">
                <a href="#" className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/fblanco.svg" alt="Facebook" className="w-7 h-7 md:w-9 md:h-9 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
                <a href="#" className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/igblanco.svg" alt="Instagram" className="w-7 h-7 md:w-9 md:h-9 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
                <a href="#" className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/tiktokblanco.svg" alt="TikTok" className="w-7 h-7 md:w-9 md:h-9 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default ContactoStaff;