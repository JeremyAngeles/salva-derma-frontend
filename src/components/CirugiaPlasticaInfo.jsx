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
            COLUMNA DERECHA: Íconos y separadores
            ========================================= */}
        <div className="w-full lg:w-[55%] flex flex-row items-center justify-between lg:pl-10">
          
          {/* Ítem 1: SEGURIDAD */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center">
              <img 
                src="/seguridad.svg" 
                alt="Seguridad" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-[#88807a] text-[11px] md:text-[13px] tracking-widest font-medium uppercase text-center">
              SEGURIDAD
            </span>
          </div>

          {/* Línea Divisoria */}
          <div className="w-px h-16 md:h-24 bg-[#c9a79e] opacity-50"></div>

          {/* Ítem 2: TECNOLOGÍA */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center">
              <img 
                src="/tecnologia.svg" 
                alt="Tecnología" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-[#88807a] text-[11px] md:text-[13px] tracking-widest font-medium uppercase text-center mt-2">
              TECNOLOGÍA
            </span>
          </div>

          {/* Línea Divisoria */}
          <div className="w-px h-16 md:h-24 bg-[#c9a79e] opacity-50"></div>

          {/* Ítem 3: ATENCIÓN PERSONALIZADA */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center">
              <img 
                src="/atención.svg" 
                alt="Atención Personalizada" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
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