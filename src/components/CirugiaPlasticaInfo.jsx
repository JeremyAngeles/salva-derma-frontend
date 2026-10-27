import React from 'react';

const CirugiaPlasticaInfo = () => {
  return (
    <section className="w-full bg-[#fcfbf9] pt-8 pb-16 md:pt-12 md:pb-24 font-principal overflow-hidden">
      {/* Contenedor más ancho (1350px) y gap más grande (lg:gap-32) para separar las columnas */}
      <div className="max-w-[1350px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos
            ========================================= */}
        {/* Forzado hacia la izquierda con -translate-x */}
        <div className="w-full lg:w-[45%] flex flex-col text-center lg:text-left items-center lg:items-start lg:-translate-x-8 xl:-translate-x-16">
          
          {/* Título forzado a 2 filas exactas bloqueando el salto de línea automático */}
          <h2 
            className="text-[1.6rem] min-[400px]:text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.5rem] text-[#053d57] leading-[1.1] mb-2 md:mb-3 tracking-wide"
            style={{ fontFamily: 'Alta, serif' }}
          >
            <span className="whitespace-nowrap">SI LO PUEDES SOÑAR, LO</span><br />
            <span className="whitespace-nowrap">PUEDES LOGRAR</span>
          </h2>
          
          {/* Párrafo subido y con las oraciones más juntas */}
          <p className="text-[#88807a] text-[15px] md:text-[16.5px] font-light leading-[1.15] max-w-[500px]">
            No todos los días vamos a poder salvarle la vida a alguien, pero cada día tenemos la oportunidad de influir en la vida de alguien.
          </p>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Íconos y separadores
            ========================================= */}
        {/* Forzado hacia la derecha con translate-x */}
        <div className="w-full lg:w-[50%] flex flex-row items-center justify-between lg:translate-x-8 xl:translate-x-12">
          
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