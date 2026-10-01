import React from 'react';

const ServicesSplit = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row mt-16 md:mt-24 lg:mt-80 font-principal">
      
      {/* =========================================
          LADO IZQUIERDO: CIRUGÍA PLÁSTICA
          ========================================= */}
      <div className="flex-1 bg-[#165a7a] relative px-4 md:px-6 lg:px-12 pb-12 md:pb-16 pt-10 lg:pt-0 flex flex-col items-center">
        
        {/* ÍCONO FLOTANTE (Posicionado de forma absoluta para la vista desktop) */}
        <div className="hidden lg:flex absolute top-[-3rem] left-1/4 w-20 h-20 rounded-full bg-[#75a7bc] items-center justify-center z-30 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5z" />
            <path d="M16 6l2 2" />
            <line x1="9" y1="5" x2="9" y2="5.01" />
            <line x1="5" y1="9" x2="5" y2="9.01" />
            <line x1="12" y1="12" x2="12" y2="12.01" />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 w-full max-w-xl mx-auto justify-center lg:items-end">
          
          {/* Miniaturas (Alineadas abajo en desktop) */}
          <div className="order-1 lg:order-1 flex flex-col items-center justify-center lg:justify-end gap-4 lg:gap-0 relative z-30 lg:pb-3">
            
            {/* Ícono para versión móvil (se oculta en desktop) */}
            <div className="lg:hidden w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#75a7bc] flex items-center justify-center relative z-20 shadow-lg flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5z" />
                <path d="M16 6l2 2" />
                <line x1="9" y1="5" x2="9" y2="5.01" />
                <line x1="5" y1="9" x2="5" y2="9.01" />
                <line x1="12" y1="12" x2="12" y2="12.01" />
              </svg>
            </div>
            
            {/* Contenedor de miniaturas alineado abajo */}
            <div className="flex flex-row lg:flex-col gap-2 md:gap-2.5 bg-white bg-opacity-20 p-2 md:p-2.5 rounded-[1.2rem] lg:rounded-[1.5rem] backdrop-blur-sm shadow-sm">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-300 rounded-[0.8rem] md:rounded-[1rem] overflow-hidden">
                <img src="/cp-thumb1.jpg" alt="Miniatura 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-300 rounded-[0.8rem] md:rounded-[1rem] overflow-hidden">
                <img src="/cp-thumb2.jpg" alt="Miniatura 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-300 rounded-[0.8rem] md:rounded-[1rem] overflow-hidden">
                <img src="/cp-thumb3.jpg" alt="Miniatura 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Caja grande de Antes y Después (Cirugía) */}
          <div className="order-2 lg:order-2 flex-1 w-full bg-white bg-opacity-20 rounded-[1.5rem] md:rounded-[2rem] p-2 md:p-3 lg:-mt-24 relative z-20 backdrop-blur-sm h-fit">
            <div className="rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden flex flex-col">
              <img 
                src="/antes-1.png" 
                alt="Cirugía Antes" 
                className="w-full h-auto block border-b-2 border-[#165a7a]" 
              />
              <img 
                src="/despues-1.png" 
                alt="Cirugía Después" 
                className="w-full h-auto block" 
              />
            </div>
          </div>
        </div>

        <h2 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-alta font-light tracking-widest text-center mt-10 md:mt-12 lg:mt-16">
          CIRUGÍA PLÁSTICA
        </h2>
      </div>

      {/* =========================================
          LADO DERECHO: DERMATOLOGÍA
          ========================================= */}
      <div className="flex-1 bg-[#d6b7a9] relative px-4 md:px-6 lg:px-12 pb-12 md:pb-16 pt-10 lg:pt-0 flex flex-col items-center">
        
         {/* ÍCONO FLOTANTE (Posicionado de forma absoluta para la vista desktop) */}
         <div className="hidden lg:flex absolute top-[-3rem] right-1/4 w-20 h-20 rounded-full bg-[#c9a696] items-center justify-center z-30 shadow-lg">
           <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
           </svg>
         </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 w-full max-w-xl mx-auto justify-center lg:items-end">
          
          {/* Miniaturas (Alineadas abajo en desktop) */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center lg:justify-end gap-4 lg:gap-0 relative z-30 lg:pb-3">
            
            {/* Ícono para versión móvil (se oculta en desktop) */}
            <div className="lg:hidden w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#c9a696] flex items-center justify-center relative z-20 shadow-lg flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
              </svg>
            </div>
            
            {/* Contenedor de miniaturas alineado abajo */}
            <div className="flex flex-row lg:flex-col gap-2 md:gap-2.5 bg-white bg-opacity-20 p-2 md:p-2.5 rounded-[1.2rem] lg:rounded-[1.5rem] backdrop-blur-sm shadow-sm">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-300 rounded-[0.8rem] md:rounded-[1rem] overflow-hidden">
                <img src="/derm-thumb1.jpg" alt="Miniatura 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-300 rounded-[0.8rem] md:rounded-[1rem] overflow-hidden">
                <img src="/derm-thumb2.jpg" alt="Miniatura 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-300 rounded-[0.8rem] md:rounded-[1rem] overflow-hidden">
                <img src="/derm-thumb3.jpg" alt="Miniatura 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Caja grande de Antes y Después (Dermatología) */}
          <div className="order-2 lg:order-1 flex-1 w-full bg-white bg-opacity-20 rounded-[1.5rem] md:rounded-[2rem] p-2 md:p-3 lg:-mt-24 relative z-20 backdrop-blur-sm h-fit">
            <div className="rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden flex flex-col">
              <img 
                src="/antes-2.png" 
                alt="Dermatología Antes" 
                className="w-full h-auto block border-b-2 border-[#d6b7a9]" 
              />
              <img 
                src="/despues-2.png" 
                alt="Dermatología Después" 
                className="w-full h-auto block" 
              />
            </div>
          </div>
          
        </div>

        <h2 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-alta font-light tracking-widest text-center mt-10 md:mt-12 lg:mt-16">
          DERMATOLOGÍA
        </h2>
      </div>

    </section>
  );
};

export default ServicesSplit;