import React from 'react';

const ContactoStaff = () => {
  return (
    <section 
      className="w-full font-principal overflow-hidden relative bg-cover bg-center bg-no-repeat min-h-[700px] md:min-h-[850px] flex items-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793088625/d76epe6tvn07vzwnlqop.jpg')" }}
    >
      
      <div className="relative z-10 w-full max-w-[1350px] mx-auto px-6 lg:px-10 flex flex-col justify-center">
        
        <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Título: más arriba */}
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

          {/* Párrafo: más arriba y con las líneas más juntas (leading-[1.3]) */}
          <p className="relative -top-10 md:-top-20 text-white text-[15px] md:text-[18px] lg:text-[19px] font-light leading-[1.3] mb-16 md:mb-24 max-w-[450px] drop-shadow-sm">
            Agenda tu evaluación con nuestro staff<br className="hidden md:block" />
            altamente capacitado dentro y fuera del país.<br className="hidden md:block" />
            Para mayor información y citas, ¡contáctanos!
          </p>

          {/* Botón de WhatsApp: más grande, más abajo y más cerca de las redes */}
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
          {/* Redes Sociales: más grandes, más abajo y más cerca del teléfono */}
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
    </section>
  );
};

export default ContactoStaff;