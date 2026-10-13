import React from 'react';

const ServicesSplit = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row mt-24 md:mt-32 font-principal">
      
      {/* =========================================
          LADO IZQUIERDO: CIRUGÍA PLÁSTICA
          ========================================= */}
      <div className="flex-1 bg-[#165a7a] px-4 md:px-6 lg:px-10 pb-12 md:pb-16 pt-0 flex flex-col items-center">
        
        <div className="w-full max-w-[600px] mx-auto flex flex-row gap-4 md:gap-6 lg:gap-8 items-start justify-center">
          
          {/* COLUMNA 1: Ícono + Miniaturas */}
          <div className="flex flex-col items-center w-[90px] md:w-[130px] shrink-0">
            
            {/* Ícono de Cirugía: TOTALMENTE LIMPIO, sin fondo ni contenedor de color */}
            <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] -mt-[40px] md:-mt-[55px] lg:-mt-[65px] mb-4 md:mb-6 z-20 flex items-center justify-center">
              <img 
                src="/cirugia-icono.svg" 
                alt="Ícono Cirugía Plástica" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Contenedor de Miniaturas */}
            <div className="w-full bg-white/20 p-2 md:p-3 rounded-[1rem] md:rounded-[1.5rem] flex flex-col gap-2 md:gap-3 backdrop-blur-sm shadow-md">
              <div className="w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden">
                <img src="/cp-thumb1.jpg" alt="Miniatura 1" className="w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
              </div>
              <div className="w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden">
                <img src="/cp-thumb2.jpg" alt="Miniatura 2" className="w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
              </div>
              <div className="w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden">
                <img src="/cp-thumb3.jpg" alt="Miniatura 3" className="w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
              </div>
            </div>
          </div>

          {/* COLUMNA 2: Caja grande de Antes y Después */}
          <div className="flex-1 flex flex-col bg-white/20 p-2 md:p-3 rounded-[1.2rem] md:rounded-[1.8rem] backdrop-blur-sm shadow-md -mt-4 md:-mt-8 z-10">
            <div className="rounded-[1rem] md:rounded-[1.2rem] overflow-hidden flex flex-col h-full">
              
              <div className="relative w-full aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]">
                <img src="/antes-1.png" alt="Cirugía Antes" className="absolute inset-0 w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
                <span className="absolute bottom-2 md:bottom-3 right-3 md:right-5 text-white text-[14px] md:text-[18px] font-medium tracking-wide drop-shadow-md">Antes</span>
              </div>
              
              <div className="w-full h-1.5 md:h-2 bg-[#165a7a] relative z-10"></div>
              
              <div className="relative w-full aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]">
                <img src="/despues-1.png" alt="Cirugía Después" className="absolute inset-0 w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
                <span className="absolute bottom-2 md:bottom-3 right-3 md:right-5 text-white text-[14px] md:text-[18px] font-medium tracking-wide drop-shadow-md">Después</span>
              </div>
              
            </div>
          </div>

        </div>

        <h2 className="text-white text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] tracking-widest text-center mt-8 md:mt-12" style={{ fontFamily: 'Alta, serif' }}>
          CIRUGÍA PLÁSTICA
        </h2>
      </div>

      {/* =========================================
          LADO DERECHO: DERMATOLOGÍA
          ========================================= */}
      <div className="flex-1 bg-[#d6b7a9] px-4 md:px-6 lg:px-10 pb-12 md:pb-16 pt-0 flex flex-col items-center mt-20 lg:mt-0">
        
        <div className="w-full max-w-[600px] mx-auto flex flex-row gap-4 md:gap-6 lg:gap-8 items-start justify-center">
          
          {/* COLUMNA 1: Caja grande de Antes y Después */}
          <div className="flex-1 flex flex-col bg-white/20 p-2 md:p-3 rounded-[1.2rem] md:rounded-[1.8rem] backdrop-blur-sm shadow-md -mt-4 md:-mt-8 z-10">
            <div className="rounded-[1rem] md:rounded-[1.2rem] overflow-hidden flex flex-col h-full">
              
              <div className="relative w-full aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]">
                <img src="/antes-2.png" alt="Dermatología Antes" className="absolute inset-0 w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
                <span className="absolute bottom-2 md:bottom-3 right-3 md:right-5 text-white text-[14px] md:text-[18px] font-medium tracking-wide drop-shadow-md">Antes</span>
              </div>
              
              <div className="w-full h-1.5 md:h-2 bg-[#d6b7a9] relative z-10"></div>
              
              <div className="relative w-full aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]">
                <img src="/despues-2.png" alt="Dermatología Después" className="absolute inset-0 w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
                <span className="absolute bottom-2 md:bottom-3 right-3 md:right-5 text-white text-[14px] md:text-[18px] font-medium tracking-wide drop-shadow-md">Después</span>
              </div>

            </div>
          </div>

          {/* COLUMNA 2: Ícono + Miniaturas */}
          <div className="flex flex-col items-center w-[90px] md:w-[130px] shrink-0">
            
            {/* Ícono Dermatología: TOTALMENTE LIMPIO, sin fondo ni contenedor de color */}
            <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] -mt-[40px] md:-mt-[55px] lg:-mt-[65px] mb-4 md:mb-6 z-20 flex items-center justify-center">
              <img 
                src="/derma-icono.svg" 
                alt="Ícono Dermatología" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Contenedor de Miniaturas */}
            <div className="w-full bg-white/20 p-2 md:p-3 rounded-[1rem] md:rounded-[1.5rem] flex flex-col gap-2 md:gap-3 backdrop-blur-sm shadow-md">
              <div className="w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden">
                <img src="/derm-thumb1.jpg" alt="Miniatura 1" className="w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
              </div>
              <div className="w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden">
                <img src="/derm-thumb2.jpg" alt="Miniatura 2" className="w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
              </div>
              <div className="w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden">
                <img src="/derm-thumb3.jpg" alt="Miniatura 3" className="w-full h-full object-cover" onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
              </div>
            </div>
          </div>
          
        </div>

        <h2 className="text-white text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] tracking-widest text-center mt-8 md:mt-12" style={{ fontFamily: 'Alta, serif' }}>
          DERMATOLOGÍA
        </h2>
      </div>

    </section>
  );
};

export default ServicesSplit;