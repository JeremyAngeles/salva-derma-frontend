import React from 'react';

const EsteticaEspecialistas = () => {
  return (
    <section className="relative w-full bg-white pt-16 md:pt-24 pb-20 font-principal">
      
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center relative z-10">
        
        {/* =========================================
            TÍTULO Y SUBTÍTULO
            ========================================= */}
        <h2 
          className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-[#053d57] leading-none mb-4"
          style={{ fontFamily: 'Alta, serif' }}
        >
          ESTÉTICA DE LA MANO DE ESPECIALISTAS
        </h2>
        <p className="text-[#88807a] text-[14px] md:text-[15px] lg:text-[16px] font-light leading-relaxed max-w-[700px] mx-auto mb-12 md:mb-16">
          Resaltamos la belleza respetando la naturalidad de cada rostro, siempre bajo<br className="hidden md:block"/>
          tratamientos seguros y con nuestros especialistas altamente capacitados
        </p>
      </div>

      {/* =========================================
          CONTENEDOR IMAGEN ANTES / DESPUÉS
          ========================================= */}
      <div className="relative w-full max-w-[1000px] mx-auto px-6 lg:px-12 mb-10">
        
        {/* Franja gris de fondo que cruza la pantalla */}
        <div className="absolute inset-x-0 top-[20%] md:top-[25%] bottom-[20%] md:bottom-[25%] bg-[#d3d3d3] z-0"></div>

        {/* Imagen / Contenedor dividido */}
        <div className="relative z-10 w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg flex flex-col sm:flex-row bg-white border-4 border-white">
          
          {/* ANTES */}
          <div className="relative w-full sm:w-1/2 h-[300px] md:h-[400px] lg:h-[450px]">
            <img 
              src="/antes-tratamiento.jpg" // Reemplaza con la mitad izquierda de la foto
              alt="Antes del tratamiento" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-gray-200 object-cover' }}
            />
            <div className="absolute inset-x-0 bottom-6 text-center">
              <span className="text-white font-semibold tracking-widest drop-shadow-md text-[14px] md:text-[16px]">ANTES</span>
            </div>
          </div>
          
          {/* Línea divisoria blanca (solo en pantallas grandes) */}
          <div className="hidden sm:block w-1 h-full bg-white absolute left-1/2 transform -translate-x-1/2 z-20"></div>

          {/* DESPUÉS */}
          <div className="relative w-full sm:w-1/2 h-[300px] md:h-[400px] lg:h-[450px]">
            <img 
              src="/despues-tratamiento.jpg" // Reemplaza con la mitad derecha de la foto
              alt="Después del tratamiento" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-gray-300 object-cover' }}
            />
            <div className="absolute inset-x-0 bottom-6 text-center">
              <span className="text-white font-semibold tracking-widest drop-shadow-md text-[14px] md:text-[16px]">DESPUÉS</span>
            </div>
          </div>

        </div>
      </div>

      {/* Puntitos de Slider */}
      <div className="flex justify-center items-center gap-3 mb-16 md:mb-20">
        <div className="w-3.5 h-3.5 rounded-full bg-[#d1b3ab]"></div>
        <div className="w-3.5 h-3.5 rounded-full border border-[#88807a]"></div>
        <div className="w-3.5 h-3.5 rounded-full border border-[#88807a]"></div>
        <div className="w-3.5 h-3.5 rounded-full border border-[#88807a]"></div>
        <div className="w-3.5 h-3.5 rounded-full border border-[#88807a]"></div>
      </div>

      {/* =========================================
          BOTÓN WHATSAPP Y REDES
          ========================================= */}
      <div className="flex flex-col items-center">
        
        {/* Botón WhatsApp */}
        <a 
          href="https://wa.me/51994060977" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-3 bg-[#d1b3ab] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full hover:bg-[#c59e93] transition-colors mb-8 shadow-md"
        >
          {/* Ícono de Teléfono Blanco (Limpio) */}
          <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
            <img 
              src="/iconotelefonoblanco.svg" 
              alt="Teléfono" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <span className="text-[22px] md:text-[26px] tracking-widest font-light mt-0.5">+51 994 060 977</span>
        </a>

        {/* Redes Sociales */}
        <div className="flex items-center gap-4">
          <span className="text-[#88807a] font-light text-[14px] md:text-[15px]">Síguenos en:</span>
          
          <div className="flex gap-3">
            {/* Facebook (Color, Sin fondo/borde, Hover animado) */}
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

export default EsteticaEspecialistas;