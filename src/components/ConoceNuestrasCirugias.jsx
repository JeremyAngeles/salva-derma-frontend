import React from 'react';

const ConoceNuestrasCirugias = () => {
  return (
    <section className="relative w-full font-principal overflow-hidden">
      
      {/* =========================================
          FONDO: SOLO LA IMAGEN, 100% LIMPIA, SIN NADA ENCIMA
          ========================================= */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792615981/01_-_FONDO.png')` }}
      ></div>

      {/* =========================================
          CONTENIDO PRINCIPAL
          ========================================= */}
      <div className="relative z-10 max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-16 md:pb-20">
        
        {/* Título Principal */}
        <h2 className="text-white text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] font-light text-center mb-8 md:mb-10 tracking-widest drop-shadow-md leading-none">
          CONOCE NUESTRAS CIRUGÍAS
        </h2>

        {/* MARCO TRANSLÚCIDO ÚNICO QUE ENVUELVE AMBAS TARJETAS */}
        <div className="w-full bg-white/40 backdrop-blur-md p-3 sm:p-4 md:p-5 rounded-[2.2rem] md:rounded-[3rem] shadow-xl border border-white/50">
          
          {/* AQUÍ ESTÁ EL CAMBIO: md:grid-cols-2 fuerza a que estén en una sola fila */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            
            {/* =========================================
                TARJETA 1: CIRUGÍA FACIAL
                ========================================= */}
            <div className="relative w-full h-[380px] sm:h-[430px] md:h-[470px] rounded-[1.8rem] md:rounded-[2.4rem] overflow-hidden bg-[#222222] group shadow-inner">
              
              {/* Imagen de fondo Facial (Cloudinary) */}
              <img 
                src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792615767/02_-_FACIAL.png" 
                alt="Cirugía Facial" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full bg-[#262626]' }}
              />
              
              {/* Sombra interna para el texto de la tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none"></div>
              
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
            <div className="relative w-full h-[380px] sm:h-[430px] md:h-[470px] rounded-[1.8rem] md:rounded-[2.4rem] overflow-hidden bg-[#222222] group shadow-inner">
              
              {/* Imagen de fondo Corporal (Cloudinary) */}
              <img 
                src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792615768/03_-_CORPORAL.png" 
                alt="Cirugía Corporal" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full bg-[#262626]' }}
              />
              
              {/* Sombra interna para el texto de la tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none"></div>
              
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