import React from 'react';

const CirugiasDeExito = () => {
  return (
    <section className="w-full bg-[#fcfbf9] py-16 md:py-24 font-principal">
      <div className="max-w-[1150px] mx-auto px-6 lg:px-8">
        
        {/* Título Principal */}
        <h2 
          className="text-[#053d57] text-[2.5rem] sm:text-[3.2rem] md:text-[4rem] text-center mb-12 md:mb-14 tracking-wide leading-none font-light"
          style={{ fontFamily: 'Alta, serif' }}
        >
          CIRUGÍAS DE ÉXITO
        </h2>

        {/* Cuadrícula Asimétrica (2x2 a la izquierda + 1 vertical larga a la derecha) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[270px_270px] gap-5 md:gap-6">
          
          {/* 1. OTOPLASTÍA (Arriba Izquierda) */}
          <div className="relative w-full h-[260px] lg:h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden shadow-md group bg-[#2b2b2b]">
            <img 
              src="/exito-otoplastia.jpg" 
              alt="Otoplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#3a3a3a]' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[16px] md:text-[18px] tracking-wider uppercase drop-shadow-md">
                OTOPLASTÍA
              </h3>
            </div>
          </div>

          {/* 2. BLEFAROPLASTÍA (Arriba Centro) */}
          <div className="relative w-full h-[260px] lg:h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden shadow-md group bg-[#2b2b2b]">
            <img 
              src="/exito-blefaroplastia.jpg" 
              alt="Blefaroplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#3a3a3a]' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[16px] md:text-[18px] tracking-wider uppercase drop-shadow-md">
                BLEFAROPLASTÍA
              </h3>
            </div>
          </div>

          {/* 3. ARMONIZACIÓN FACIAL (Columna Derecha Completa - Ocupa 2 filas en PC) */}
          <div className="relative w-full h-[450px] sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden shadow-md group bg-[#2b2b2b]">
            <img 
              src="/exito-armonizacion.jpg" 
              alt="Armonización Facial" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#3a3a3a]' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-7 text-center px-4">
              <h3 className="text-white font-bold text-[17px] md:text-[19px] tracking-wider uppercase leading-snug drop-shadow-md">
                ARMONIZACIÓN<br />FACIAL
              </h3>
            </div>
          </div>

          {/* 4. LIFTING FACIAL (Abajo Izquierda) */}
          <div className="relative w-full h-[260px] lg:h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden shadow-md group bg-[#2b2b2b]">
            <img 
              src="/exito-lifting.jpg" 
              alt="Lifting Facial" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#3a3a3a]' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[16px] md:text-[18px] tracking-wider uppercase drop-shadow-md">
                LIFTING FACIAL
              </h3>
            </div>
          </div>

          {/* 5. RINOSEPTOPLASTÍA (Abajo Centro) */}
          <div className="relative w-full h-[260px] lg:h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden shadow-md group bg-[#2b2b2b]">
            <img 
              src="/exito-rinoseptoplastia.jpg" 
              alt="Rinoseptoplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#3a3a3a]' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[16px] md:text-[18px] tracking-wider uppercase drop-shadow-md">
                RINOSEPTOPLASTÍA
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CirugiasDeExito;