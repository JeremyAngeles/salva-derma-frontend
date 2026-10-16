import React from 'react';

const ContactoDoctorCirugia = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#043d57] via-[#014462] to-[#014462] font-principal overflow-hidden pb-12">
      
      {/* =========================================
          ELEMENTOS DE FONDO (Silueta cirugía + Aros)
          ========================================= */}
      {/* Imagen tenue del doctor operando en el centro-izquierda */}
      <div 
        className="absolute inset-y-0 left-[12%] md:left-[20%] w-[350px] md:w-[500px] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity pointer-events-none z-0"
        style={{ backgroundImage: "url('/dr-hector-bg-operando.png')" }} 
      ></div>

      {/* Círculos decorativos de fondo a la derecha */}
      <div className="absolute top-1/2 right-[-5%] transform -translate-y-1/2 w-[500px] h-[500px] md:w-[680px] md:h-[680px] rounded-full border-[40px] md:border-[55px] border-white/5 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-[-12%] transform -translate-y-1/2 w-[700px] h-[700px] md:w-[950px] md:h-[950px] rounded-full border-[40px] md:border-[55px] border-white/5 pointer-events-none z-0"></div>

      {/* =========================================
          CONTENIDO PRINCIPAL
          ========================================= */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 pt-16 md:pt-24 pb-0 flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
        
        {/* COLUMNA IZQUIERDA: Información del Doctor y Contacto */}
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left pb-8 md:pb-12">
          
          {/* Nombre del Doctor */}
          <h2 
            className="text-white text-[2.4rem] sm:text-[3rem] lg:text-[3.7rem] leading-none tracking-wide mb-2 drop-shadow-sm"
            style={{ fontFamily: 'Alta, serif' }}
          >
            DR. HÉCTOR VARGAS
          </h2>

          {/* Especialidad en cursiva */}
          <p className="text-white/90 italic font-light text-[18px] md:text-[22px] tracking-wide mb-7">
            Cirujano plástico
          </p>

          {/* Pastillas de CMP y RNE */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <div className="bg-[#85aebf]/85 backdrop-blur-sm text-white px-7 py-2.5 rounded-xl text-[14px] md:text-[16px] font-light tracking-wider shadow-sm">
              CMP 68988
            </div>
            <div className="bg-[#85aebf]/85 backdrop-blur-sm text-white px-7 py-2.5 rounded-xl text-[14px] md:text-[16px] font-light tracking-wider shadow-sm">
              RNE 42156
            </div>
          </div>

          {/* Texto de llamada a la acción */}
          <p className="text-white/95 font-light text-[15px] md:text-[16.5px] leading-relaxed mb-6 max-w-[380px]">
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
          <div className="flex items-center gap-4 text-white">
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

        {/* COLUMNA DERECHA: Foto del Doctor (Pegada abajo) */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end self-end">
          <img 
            src="/dr-hector-vargas.png" 
            alt="Dr. Héctor Vargas - Cirujano Plástico" 
            className="w-full max-w-[340px] md:max-w-[420px] lg:max-w-[460px] object-contain object-bottom drop-shadow-2xl"
            onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full max-w-[380px] h-[460px] bg-white/10 rounded-t-3xl' }}
          />
        </div>

      </div>
    </section>
  );
};

export default ContactoDoctorCirugia;