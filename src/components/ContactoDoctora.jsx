import React from 'react';

const ContactoDoctora = () => {
  return (
    <section className="w-full bg-[#fafafa] font-principal overflow-hidden relative">
      
      {/* Círculos decorativos de fondo (similar a las ondas de la imagen) */}
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
            COLUMNA DERECHA: Textos y Contacto (Alineado a la derecha)
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

          {/* Botón de WhatsApp */}
          <a 
            href="https://wa.me/51994060977" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#dcc4bc] hover:bg-[#ceb5ac] text-white rounded-full py-3.5 px-8 flex items-center justify-center gap-4 shadow-md transition-all group mb-6 w-fit"
          >
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-normal tracking-wide">+51 994 060 977</span>
          </a>

          {/* Redes Sociales */}
          <div className="flex items-center gap-4 text-[#88807a]">
            <span className="text-[14px] font-light">Siguenos en:</span>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full border border-[#dcc4bc] flex items-center justify-center text-[#dcc4bc] hover:bg-[#dcc4bc] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#dcc4bc] flex items-center justify-center text-[#dcc4bc] hover:bg-[#dcc4bc] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#dcc4bc] flex items-center justify-center text-[#dcc4bc] hover:bg-[#dcc4bc] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.72 5.48-1.2 1.47-2.99 2.5-4.88 2.87-2.02.4-4.14.07-5.88-1-1.63-1.02-2.82-2.58-3.32-4.4-.53-1.92-.35-4.05.5-5.8 1-2.07 2.94-3.56 5.14-4V12c-1.3.17-2.55.77-3.46 1.72-1 1.05-1.57 2.51-1.48 3.96.07 1.47.78 2.86 1.94 3.75 1.08.84 2.54 1.16 3.86 1 1.34-.14 2.58-.8 3.4-1.85.93-1.18 1.38-2.73 1.38-4.23V.02z"/></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactoDoctora;