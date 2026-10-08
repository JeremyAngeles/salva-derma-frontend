import React from 'react';

const EsteticaEspecialistas = () => {
  return (
    <section className="relative w-full bg-[#faf9f8] pt-16 md:pt-24 pb-20 font-principal">
      
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
          BOTÓN WHATSAPP Y REDES (Reutilizado)
          ========================================= */}
      <div className="flex flex-col items-center">
        <a 
          href="https://wa.me/51994060977" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-3 bg-[#d1b3ab] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full hover:bg-[#c59e93] transition-colors mb-8 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[22px] md:text-[26px] tracking-widest font-light mt-0.5">+51 994 060 977</span>
        </a>

        <div className="flex items-center gap-4">
          <span className="text-[#88807a] font-light text-[14px] md:text-[15px]">Síguenos en:</span>
          <div className="flex gap-2.5">
            <a href="#" className="w-9 h-9 rounded-full border border-[#88807a] flex items-center justify-center text-[#88807a] hover:bg-[#88807a] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#88807a] flex items-center justify-center text-[#88807a] hover:bg-[#88807a] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#88807a] flex items-center justify-center text-[#88807a] hover:bg-[#88807a] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.37-1.92 1.62-4.5 2.28-6.9 1.83-2.56-.47-4.79-2.18-5.83-4.56-1.02-2.31-.96-5.04.14-7.3 1.09-2.25 3.32-3.9 5.81-4.26.17-.03.35-.04.53-.06v4.18c-1.6.21-3.08 1.43-3.5 3-.4 1.48.06 3.1 1.19 4.12 1.13 1.02 2.81 1.25 4.23.63 1.45-.63 2.37-2.13 2.39-3.7.04-5.63.02-11.26.03-16.89h1.18z"/></svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default EsteticaEspecialistas;