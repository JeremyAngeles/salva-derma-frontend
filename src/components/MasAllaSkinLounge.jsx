import React from 'react';

const MasAllaSkinLounge = () => {
  return (
    <section className="relative w-full bg-[#f4f4f4] py-16 md:py-24 font-principal overflow-hidden">
      
      {/* =========================================
          CÍRCULOS DE FONDO (Marca de agua sutil)
          ========================================= */}
      <div className="absolute top-1/2 left-[30%] transform -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border-[30px] md:border-[50px] border-white/40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-[30%] transform -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] rounded-full border-[30px] md:border-[50px] border-white/30 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1250px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Imagen de la chica
            ========================================= */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img 
            src="/mas-alla-mujer.png" // Reemplaza con la imagen de la chica (idealmente en formato PNG sin fondo)
            alt="Mujer feliz cuidando su piel" 
            className="w-full max-w-[450px] lg:max-w-[550px] object-contain drop-shadow-xl"
            onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full max-w-[450px] h-[500px] bg-[#e8e4e1] rounded-3xl' }}
          />
        </div>

        {/* =========================================
            COLUMNA DERECHA: Textos, Lista y Contacto
            ========================================= */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
          
          {/* TÍTULO EN UNA SOLA FILA */}
          <h2 
            className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] xl:text-[4rem] text-[#053d57] mb-10 md:mb-14 tracking-wide leading-none whitespace-nowrap"
            style={{ fontFamily: 'Alta, serif' }}
          >
            MÁS ALLÁ DE UN FACIAL
          </h2>

          {/* Lista de Beneficios */}
          <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-12 w-full">
            
            {/* Ítem 1 */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-5">
              <span className="text-[#88807a] text-[13px] md:text-[15px] font-medium tracking-wide">RELAJACIÓN</span>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#7ca1b4] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Ítem 2 */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-5">
              <span className="text-[#88807a] text-[13px] md:text-[15px] font-medium tracking-wide text-right">
                MEJORA LA NUTRICIÓN,<br />
                HIDRATACIÓN Y CALIDAD DE LA PIEL
              </span>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#7ca1b4] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>

            {/* Ítem 3 */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-5">
              <span className="text-[#88807a] text-[13px] md:text-[15px] font-medium tracking-wide">POTENCIA TU SKINCARE</span>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#7ca1b4] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>

          </div>

          {/* Texto Descriptivo */}
          <p className="text-[#88807a] text-[13.5px] md:text-[15px] lg:text-[16px] font-light max-w-[420px] mb-6 md:mb-8 leading-relaxed">
            Si quieres conocer cada paso de nuestros<br className="hidden md:block"/>
            faciales SKIN LOUNGE y más detalles,<br className="hidden md:block"/>
            ¡escríbenos!
          </p>

          {/* Botón WhatsApp */}
          <a 
            href="https://wa.me/51994060977" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-[#d1b3ab] text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#c59e93] transition-colors mb-8 shadow-md"
          >
            {/* Ícono de Teléfono/WhatsApp */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[20px] md:text-[24px] tracking-widest font-light mt-0.5">+51 994 060 977</span>
          </a>

          {/* Redes Sociales */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <span className="text-[#88807a] font-light text-[14px] md:text-[15px]">Síguenos en:</span>
            <div className="flex gap-2.5">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#88807a] flex items-center justify-center text-[#88807a] hover:bg-[#88807a] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#88807a] flex items-center justify-center text-[#88807a] hover:bg-[#88807a] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#88807a] flex items-center justify-center text-[#88807a] hover:bg-[#88807a] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.37-1.92 1.62-4.5 2.28-6.9 1.83-2.56-.47-4.79-2.18-5.83-4.56-1.02-2.31-.96-5.04.14-7.3 1.09-2.25 3.32-3.9 5.81-4.26.17-.03.35-.04.53-.06v4.18c-1.6.21-3.08 1.43-3.5 3-.4 1.48.06 3.1 1.19 4.12 1.13 1.02 2.81 1.25 4.23.63 1.45-.63 2.37-2.13 2.39-3.7.04-5.63.02-11.26.03-16.89h1.18z"/></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MasAllaSkinLounge;