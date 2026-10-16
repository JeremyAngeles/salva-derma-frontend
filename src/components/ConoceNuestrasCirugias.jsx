import React from 'react';

const ConoceNuestrasCirugias = () => {
  return (
    <section className="relative w-full font-principal overflow-hidden">
      
      {/* =========================================
          FONDO: Gris con imagen tenue arriba (88%) y claro abajo (12%)
          ========================================= */}
      <div className="absolute inset-0 flex flex-col z-0 pointer-events-none">
        {/* Parte superior gris con imagen de fondo en blanco y negro */}
        <div className="relative h-[88%] w-full bg-[#5c5c5c] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale opacity-25 mix-blend-luminosity"
            style={{ backgroundImage: `url('/cirugia-plastica-bg.jpg')` }} // Puedes usar la misma del hero u otra foto médica
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#4a4a4a]/80 via-[#6e6e6e]/70 to-[#7a7a7a]/90"></div>
        </div>
        
        {/* Parte inferior clara donde apoyan las tarjetas */}
        <div className="h-[12%] w-full bg-[#f4f2ef]"></div>
      </div>

      {/* =========================================
          CONTENIDO PRINCIPAL
          ========================================= */}
      <div className="relative z-10 max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-8">
        
        {/* Título Principal CORREGIDO: Usa la fuente principal (Montserrat) en font-light */}
        <h2 className="text-white text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] font-light text-center mb-8 md:mb-10 tracking-widest drop-shadow-sm leading-none">
          CONOCE NUESTRAS CIRUGÍAS
        </h2>

        {/* MARCO TRANSLÚCIDO ÚNICO QUE ENVUELVE AMBAS TARJETAS */}
        <div className="w-full bg-white/25 backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-[2.2rem] md:rounded-[3rem] shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
            
            {/* =========================================
                TARJETA 1: CIRUGÍA FACIAL
                ========================================= */}
            <div className="relative w-full h-[380px] sm:h-[430px] md:h-[470px] rounded-[1.8rem] md:rounded-[2.4rem] overflow-hidden bg-[#222222] group">
              
              {/* Imagen de fondo nítida */}
              <img 
                src="/cirugia-facial.jpg" 
                alt="Cirugía Facial" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full bg-[#262626]' }}
              />
              
              {/* Sombra muy sutil solo a la izquierda para asegurar lectura del texto sin tapar la foto */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none"></div>
              
              {/* Textos */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between p-7 sm:p-9 md:p-11">
                
                <h3 className="text-white text-[1.4rem] sm:text-[1.6rem] md:text-[1.85rem] font-bold uppercase tracking-wider leading-[1.15] drop-shadow-md">
                  CIRUGÍA<br />FACIAL
                </h3>
                
                <ul className="text-white font-light text-[12px] sm:text-[13.5px] md:text-[14.5px] tracking-wider flex flex-col gap-2.5 sm:gap-3 pl-4 list-disc marker:text-white drop-shadow">
                  <li>OTOPLASTIA</li>
                  <li>RINOSEPTOPLASTIA</li>
                  <li className="leading-snug">
                    ARMONIZACIÓN FACIAL<br />
                    (LIPOSUCCIÓN DE<br />
                    PAPADA + BICHECTOMIA)
                  </li>
                  <li className="leading-snug">
                    LIFTING FACIAL Y DE COLA<br />
                    DE CEJA
                  </li>
                </ul>

              </div>
            </div>

            {/* =========================================
                TARJETA 2: CIRUGÍA CORPORAL
                ========================================= */}
            <div className="relative w-full h-[380px] sm:h-[430px] md:h-[470px] rounded-[1.8rem] md:rounded-[2.4rem] overflow-hidden bg-[#222222] group">
              
              {/* Imagen de fondo nítida */}
              <img 
                src="/cirugia-corporal.jpg" 
                alt="Cirugía Corporal" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full bg-[#262626]' }}
              />
              
              {/* Sombra muy sutil solo a la izquierda */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none"></div>
              
              {/* Textos */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between p-7 sm:p-9 md:p-11">
                
                <h3 className="text-white text-[1.4rem] sm:text-[1.6rem] md:text-[1.85rem] font-bold uppercase tracking-wider leading-[1.15] drop-shadow-md">
                  CIRUGÍA<br />CORPORAL
                </h3>
                
                <ul className="text-white font-light text-[12px] sm:text-[13.5px] md:text-[14.5px] tracking-wider flex flex-col gap-3 sm:gap-3.5 pl-4 list-disc marker:text-white drop-shadow">
                  <li className="leading-relaxed">
                    AUMENTO Y<br />
                    REDUCCIÓN DE MAMAS
                  </li>
                  <li>LIPOABDOMINOPLASTIA</li>
                  <li>GINECOMASTIA</li>
                  <li>BRAQUIOPLASTIA</li>
                  <li>LIPOTRANSFERENCIA</li>
                </ul>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ConoceNuestrasCirugias;