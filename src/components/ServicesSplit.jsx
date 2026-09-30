import React from 'react';

const ServicesSplit = () => {
  return (
    // Se aumentó significativamente el margen superior (mt-56 md:mt-72 lg:mt-80) para separarlo del Hero
    <section className="w-full flex flex-col lg:flex-row mt-56 md:mt-72 lg:mt-80 font-principal">
      
      {/* =========================================
          LADO IZQUIERDO: CIRUGÍA PLÁSTICA
          ========================================= */}
      <div className="flex-1 bg-[#165a7a] relative px-6 md:px-12 pb-16 pt-0 flex flex-col items-center">
        
        <div className="flex gap-4 md:gap-6 w-full max-w-xl mx-auto justify-center">
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#75a7bc] flex items-center justify-center -mt-8 md:-mt-10 relative z-20 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5z" />
                <path d="M16 6l2 2" />
                <line x1="9" y1="5" x2="9" y2="5.01" />
                <line x1="5" y1="9" x2="5" y2="9.01" />
                <line x1="12" y1="12" x2="12" y2="12.01" />
              </svg>
            </div>
            
            <div className="flex flex-col gap-2.5 bg-white bg-opacity-20 p-2.5 rounded-[1.5rem] mt-10 md:mt-12 backdrop-blur-sm">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-[1rem] overflow-hidden">
                <img src="/cp-thumb1.jpg" alt="Miniatura 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-[1rem] overflow-hidden">
                <img src="/cp-thumb2.jpg" alt="Miniatura 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-[1rem] overflow-hidden">
                <img src="/cp-thumb3.jpg" alt="Miniatura 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white bg-opacity-20 rounded-[2rem] p-3 -mt-20 md:-mt-24 relative z-20 backdrop-blur-sm h-[480px] md:h-[550px] flex flex-col">
            <div className="rounded-[1.5rem] overflow-hidden flex flex-col h-full">
              <div className="flex-1 relative border-b-2 border-[#165a7a]">
                <img src="/cp-antes.jpg" alt="Cirugía Antes" className="w-full h-full object-cover" />
                <span className="absolute bottom-3 right-4 text-white font-medium text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Antes</span>
              </div>
              <div className="flex-1 relative">
                <img src="/cp-despues.jpg" alt="Cirugía Después" className="w-full h-full object-cover" />
                <span className="absolute bottom-3 right-4 text-white font-medium text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Después</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-white text-5xl md:text-[3.5rem] font-serif font-light tracking-widest text-center mt-12 md:mt-16">
          CIRUGÍA PLÁSTICA
        </h2>
      </div>

      {/* =========================================
          LADO DERECHO: DERMATOLOGÍA
          ========================================= */}
      <div className="flex-1 bg-[#d6b7a9] relative px-6 md:px-12 pb-16 pt-0 flex flex-col items-center">
        
        <div className="flex gap-4 md:gap-6 w-full max-w-xl mx-auto justify-center">
          
          <div className="flex-1 bg-white bg-opacity-20 rounded-[2rem] p-3 -mt-20 md:-mt-24 relative z-20 backdrop-blur-sm h-[480px] md:h-[550px] flex flex-col">
            <div className="rounded-[1.5rem] overflow-hidden flex flex-col h-full">
              <div className="flex-1 relative border-b-2 border-[#d6b7a9]">
                <img src="/derm-antes.jpg" alt="Dermatología Antes" className="w-full h-full object-cover" />
                <span className="absolute bottom-3 right-4 text-white font-medium text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Antes</span>
              </div>
              <div className="flex-1 relative">
                <img src="/derm-despues.jpg" alt="Dermatología Después" className="w-full h-full object-cover" />
                <span className="absolute bottom-3 right-4 text-white font-medium text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Después</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c9a696] flex items-center justify-center -mt-8 md:-mt-10 relative z-20 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
              </svg>
            </div>
            
            <div className="flex flex-col gap-2.5 bg-white bg-opacity-20 p-2.5 rounded-[1.5rem] mt-10 md:mt-12 backdrop-blur-sm">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-[1rem] overflow-hidden">
                <img src="/derm-thumb1.jpg" alt="Miniatura 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-[1rem] overflow-hidden">
                <img src="/derm-thumb2.jpg" alt="Miniatura 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-[1rem] overflow-hidden">
                <img src="/derm-thumb3.jpg" alt="Miniatura 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
        </div>

        <h2 className="text-white text-5xl md:text-[3.5rem] font-serif font-light tracking-widest text-center mt-12 md:mt-16">
          DERMATOLOGÍA
        </h2>
      </div>

    </section>
  );
};

export default ServicesSplit;