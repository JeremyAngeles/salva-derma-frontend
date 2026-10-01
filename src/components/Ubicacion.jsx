import React from 'react';

const Ubicacion = () => {
  return (
    <section className="relative w-full py-24 bg-[#f4f2ef] overflow-hidden font-principal flex flex-col items-center">
      
      {/* Título y Subtítulo */}
      <div className="text-center max-w-3xl px-6 mb-16">
        {/* AQUÍ EL CAMBIO: Fuente Alta aplicada al título */}
        <h2 
          className="text-3xl md:text-5xl text-[#053d57] font-light tracking-wide mb-4"
          style={{ fontFamily: 'Alta, serif' }}
        >
          TODOS LOS CAMINOS CONDUCEN A SALVAR
        </h2>
        <p className="text-[#7c7570] text-sm md:text-base font-light leading-relaxed">
          Ubicados estratégicamente en el corazón de la ciudad, a 10 minutos del centro empresarial de San Isidro, contamos con estacionamiento externo.
        </p>
      </div>

      {/* Contenedor Principal (Mapa a la izquierda, Info a la derecha) */}
      <div className="w-full max-w-[1200px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA: Mapa de Google Maps (Ocupa 7 columnas) */}
        <div className="lg:col-span-7 bg-white p-3 rounded-[2.5rem] shadow-xl border border-gray-200">
          <div className="w-full h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden relative">
            <iframe 
              title="Ubicacion Salvar Dermatoplastica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.859871587634!2d-77.03456!3d-12.08643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c512345679%3A0x123456789abcdef!2sAv.%20Ignacio%20Merino%202475%2C%20Lince%2015073!5e0!3m2!1ses!2spe!4v1650000000000!5m2!1ses!2spe" 
              className="w-full h-full border-0 filter grayscale contrast-125 opacity-90"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* COLUMNA DERECHA: Dirección, Horarios y Teléfono (Ocupa 5 columnas) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Dirección */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border border-[#d2b5ac] flex-shrink-0 flex items-center justify-center text-[#c59e93]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[#6b625c] text-base md:text-lg font-normal leading-snug">
                Av. Ignacio Merino 2475<br />
                Lince
              </p>
            </div>
          </div>

          <hr className="border-gray-300 my-1" />

          {/* Horario de Atención */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#c59e93] font-semibold text-lg">Horario de atención:</h4>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#d2b5ac] flex-shrink-0 flex items-center justify-center text-[#c59e93]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[#6b625c] text-sm md:text-base font-light">
                <strong className="font-semibold">Lunes a viernes</strong><br />
                9am a 7pm
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#d2b5ac] flex-shrink-0 flex items-center justify-center text-[#c59e93]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[#6b625c] text-sm md:text-base font-light">
                <strong className="font-semibold">Sábados</strong><br />
                9am a 6pm
              </p>
            </div>
          </div>

          <hr className="border-gray-300 my-1" />

          {/* Reservas al (Botón grande rosado/crema) */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#c59e93] font-semibold text-lg">Reservas al:</h4>
            <a 
              href="tel:+51994060977" 
              className="bg-[#dcc4bc] hover:bg-[#ceb5ac] text-white rounded-full py-4 px-8 flex items-center justify-center gap-4 shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#c59e93]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-semibold tracking-wide">+51 994 060 977</span>
            </a>
          </div>

          {/* Redes sociales inferiores */}
          <div className="flex items-center gap-4 mt-2">
            <span className="text-[#6b625c] text-sm md:text-base">Siguenos en:</span>
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 rounded-full border border-[#c59e93] text-[#c59e93] flex items-center justify-center hover:bg-[#c59e93] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#c59e93] text-[#c59e93] flex items-center justify-center hover:bg-[#c59e93] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#c59e93] text-[#c59e93] flex items-center justify-center hover:bg-[#c59e93] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.72 5.48-1.2 1.47-2.99 2.5-4.88 2.87-2.02.4-4.14.07-5.88-1-1.63-1.02-2.82-2.58-3.32-4.4-.53-1.92-.35-4.05.5-5.8 1-2.07 2.94-3.56 5.14-4V12c-1.3.17-2.55.77-3.46 1.72-1 1.05-1.57 2.51-1.48 3.96.07 1.47.78 2.86 1.94 3.75 1.08.84 2.54 1.16 3.86 1 1.34-.14 2.58-.8 3.4-1.85.93-1.18 1.38-2.73 1.38-4.23V.02z"/></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Ubicacion;