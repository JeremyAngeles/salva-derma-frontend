import React from 'react';

const CirugiaPlasticaInfo = () => {
  return (
    <section className="w-full bg-[#fcfbf9] py-16 md:py-24 font-principal">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-10">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos
            ========================================= */}
        <div className="w-full lg:w-[45%] flex flex-col text-center lg:text-left">
          <h2 
            className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-[#053d57] leading-[1.1] mb-6 tracking-wide"
            style={{ fontFamily: 'Alta, serif' }}
          >
            SI LO PUEDES SOÑAR, LO<br className="hidden lg:block"/>
            PUEDES LOGRAR
          </h2>
          <p className="text-[#88807a] text-[15px] md:text-[16.5px] font-light leading-relaxed max-w-[500px] mx-auto lg:mx-0">
            No todos los días vamos a poder salvarle la vida a
            alguien, pero cada día tenemos la oportunidad de
            influir en la vida de alguien.
          </p>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Íconos con separadores
            ========================================= */}
        <div className="w-full lg:w-[55%] flex flex-row items-center justify-between lg:pl-10">
          
          {/* Ítem 1: SEGURIDAD */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 text-[#c9a79e] mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span className="text-[#88807a] text-[11px] md:text-[13px] tracking-widest font-medium uppercase text-center">
              SEGURIDAD
            </span>
          </div>

          {/* Línea Divisoria */}
          <div className="w-px h-16 md:h-24 bg-[#c9a79e] opacity-50"></div>

          {/* Ítem 2: TECNOLOGÍA */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 text-[#c9a79e] mb-4 relative">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M15 3l6 6-11 11-6-6 11-11z" />
                <path d="M16 8l-8 8" />
                <path d="M8.5 15.5L5 19" />
              </svg>
              {/* Tres puntitos decorativos debajo del bisturí */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 text-[#c9a79e]">
                <span className="w-1 h-1 rounded-full bg-current"></span>
                <span className="w-1 h-1 rounded-full bg-current"></span>
                <span className="w-1 h-1 rounded-full bg-current"></span>
              </div>
            </div>
            <span className="text-[#88807a] text-[11px] md:text-[13px] tracking-widest font-medium uppercase text-center mt-2">
              TECNOLOGÍA
            </span>
          </div>

          {/* Línea Divisoria */}
          <div className="w-px h-16 md:h-24 bg-[#c9a79e] opacity-50"></div>

          {/* Ítem 3: ATENCIÓN PERSONALIZADA */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 text-[#c9a79e] mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* Corazón */}
                <path d="M12 9c-1.5-3-6-3-6 0 0 4 6 7 6 7s6-3 6-7c0-3-4.5-3-6 0z" />
                {/* Manos (trazos simplificados para simular sostener) */}
                <path d="M6 15c-2 0-3 1-3 3v2h6v-3l3-2" />
                <path d="M18 15c2 0 3 1 3 3v2h-6v-3l-3-2" />
              </svg>
            </div>
            <span className="text-[#88807a] text-[11px] md:text-[13px] tracking-widest font-medium uppercase text-center max-w-[120px] leading-snug">
              ATENCIÓN<br/>PERSONALIZADA
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CirugiaPlasticaInfo;