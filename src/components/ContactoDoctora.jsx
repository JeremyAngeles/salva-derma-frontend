import React from 'react';

const ContactoDoctora = () => {
  return (
    <section className="w-full bg-[#fafafa] font-principal overflow-hidden relative">
      
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-1/2 left-1/2 md:left-[30%] transform -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border-[40px] border-[#f0f3f5] z-0 opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 md:left-[30%] transform -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border-[40px] border-[#f0f3f5] z-0 opacity-40"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col-reverse md:flex-row items-center pt-16 md:pt-24 pb-0">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Foto de la Doctora
            ========================================= */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start items-end mt-10 md:mt-0">
          <img 
            src="/doctora-derma.png" // Reemplaza con la foto de la doctora sin fondo
            alt="Doctora Dermatóloga" 
            className="w-full max-w-[350px] lg:max-w-[450px] object-contain drop-shadow-xl"
          />
        </div>

        {/* =========================================
            COLUMNA DERECHA: Textos y Contacto
            ========================================= */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right pb-10 md:pb-24">
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-[#053d57] leading-[1.2] mb-6 max-w-[550px]"
            style={{ fontFamily: 'Alta, serif' }}
          >
            CADA PIEL TIENE SU<br />
            PROPIA HISTORIA, TE<br />
            AYUDAMOS A CONTARLA<br />
            DE LA MEJOR MANERA
          </h2>

          <p className="text-[#88807a] text-[15px] md:text-base font-light leading-relaxed mb-10 max-w-[480px]">
            Nuestra área de dermatología te brinda atención personalizada, experiencia y tratamientos seguros, siempre con empatía y acompañamiento en tu proceso.
          </p>

          {/* Botón de WhatsApp con Ícono de Teléfono */}
          <a 
            href="https://wa.me/51994060977" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#dcc4bc] hover:bg-[#ceb5ac] text-white rounded-full py-3.5 px-8 flex items-center justify-center gap-4 shadow-md transition-all group mb-6 w-fit"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <img 
                src="/iconotelefonoblanco.svg" 
                alt="Teléfono WhatsApp" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-xl md:text-2xl font-normal tracking-wide">+51 994 060 977</span>
          </a>

          {/* Redes Sociales con Íconos Personalizados */}
          <div className="flex items-center gap-4 text-[#88807a]">
            <span className="text-[14px] font-light">Siguenos en:</span>
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

export default ContactoDoctora;