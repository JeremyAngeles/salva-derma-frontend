import React, { useState } from 'react';

const ServicesSplit = () => {
  // =========================================
  // ESTADOS Y DATOS PARA CIRUGÍA PLÁSTICA (IZQUIERDA)
  // =========================================
  // Definimos todos los casos disponibles
  const casosCirugia = [
    {
      id: 1,
      full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528788/1.png',
      thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528845/1-mini.png'
    },
    {
      id: 2,
      full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528789/2.png',
      thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528845/2-mini.png'
    },
    {
      id: 3,
      full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528789/3.png',
      thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528845/3-mini.png'
    },
    {
      id: 4,
      full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528789/4.png',
      thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528844/4-mini.png'
    }
  ];

  // Estado para la imagen principal de Cirugía (por defecto la primera)
  const [mainCirugia, setMainCirugia] = useState(casosCirugia[0]);

  // Las miniaturas serán todas excepto la que está como principal
  const thumbsCirugia = casosCirugia.filter(caso => caso.id !== mainCirugia.id);

  // =========================================
  // ESTADOS Y DATOS PARA DERMATOLOGÍA (DERECHA)
  // =========================================
  const casosDerma = [
    {
      id: 1,
      full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528927/1-derma.png',
      thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528899/1-mini-derma.png'
    },
    {
      id: 2,
      full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528927/2-derma.png',
      thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528899/2-mini-derma.png'
    },
    {
      id: 3,
      full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528928/3-derma.png',
      thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528900/3-mini-derma.png'
    },
    {
      id: 4,
      full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528928/4-derma.png',
      thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528898/4-mini-derma.png'
    }
  ];

  // Estado para la imagen principal de Dermatología (por defecto la primera)
  const [mainDerma, setMainDerma] = useState(casosDerma[0]);

  // Las miniaturas serán todas excepto la que está como principal
  const thumbsDerma = casosDerma.filter(caso => caso.id !== mainDerma.id);

  return (
    <section className="w-full flex flex-col lg:flex-row mt-24 md:mt-32 font-principal">
      
      {/* =========================================
          LADO IZQUIERDO: CIRUGÍA PLÁSTICA
          ========================================= */}
      <div className="flex-1 bg-[#165a7a] px-4 md:px-6 lg:px-10 pb-12 md:pb-16 pt-0 flex flex-col items-center">
        
        <div className="w-full max-w-[600px] mx-auto flex flex-row gap-4 md:gap-6 lg:gap-8 items-start justify-center">
          
          {/* COLUMNA 1: Ícono + Miniaturas */}
          <div className="flex flex-col items-center w-[90px] md:w-[130px] shrink-0">
            
            {/* Ícono de Cirugía: TOTALMENTE LIMPIO */}
            <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] -mt-[40px] md:-mt-[55px] lg:-mt-[65px] mb-4 md:mb-6 z-20 flex items-center justify-center">
              <img 
                src="/cirugia-icono.svg" 
                alt="Ícono Cirugía Plástica" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Contenedor de Miniaturas Dinámicas */}
            <div className="w-full bg-white/20 p-2 md:p-3 rounded-[1rem] md:rounded-[1.5rem] flex flex-col gap-2 md:gap-3 backdrop-blur-sm shadow-md">
              {thumbsCirugia.map((thumb) => (
                <div 
                  key={thumb.id}
                  className="w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition-all duration-300"
                  onClick={() => setMainCirugia(thumb)}
                >
                  <img 
                    src={thumb.thumb} 
                    alt={`Miniatura ${thumb.id}`} 
                    className="w-full h-full object-cover" 
                    onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: Caja grande interactiva */}
          <div className="flex-1 flex flex-col bg-white/20 p-2 md:p-3 rounded-[1.2rem] md:rounded-[1.8rem] backdrop-blur-sm shadow-md -mt-4 md:-mt-8 z-10">
            <div className="rounded-[1rem] md:rounded-[1.2rem] overflow-hidden w-full h-full relative">
              <img 
                src={mainCirugia.full} 
                alt={`Cirugía Caso ${mainCirugia.id}`} 
                className="w-full h-auto object-cover transition-opacity duration-500" 
                onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} 
              />
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
          
          {/* COLUMNA 1: Caja grande interactiva */}
          <div className="flex-1 flex flex-col bg-white/20 p-2 md:p-3 rounded-[1.2rem] md:rounded-[1.8rem] backdrop-blur-sm shadow-md -mt-4 md:-mt-8 z-10">
            <div className="rounded-[1rem] md:rounded-[1.2rem] overflow-hidden w-full h-full relative">
              <img 
                src={mainDerma.full} 
                alt={`Dermatología Caso ${mainDerma.id}`} 
                className="w-full h-auto object-cover transition-opacity duration-500" 
                onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} 
              />
            </div>
          </div>

          {/* COLUMNA 2: Ícono + Miniaturas */}
          <div className="flex flex-col items-center w-[90px] md:w-[130px] shrink-0">
            
            {/* Ícono Dermatología: TOTALMENTE LIMPIO */}
            <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] -mt-[40px] md:-mt-[55px] lg:-mt-[65px] mb-4 md:mb-6 z-20 flex items-center justify-center">
              <img 
                src="/derma-icono.svg" 
                alt="Ícono Dermatología" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Contenedor de Miniaturas Dinámicas */}
            <div className="w-full bg-white/20 p-2 md:p-3 rounded-[1rem] md:rounded-[1.5rem] flex flex-col gap-2 md:gap-3 backdrop-blur-sm shadow-md">
              {thumbsDerma.map((thumb) => (
                <div 
                  key={thumb.id}
                  className="w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition-all duration-300"
                  onClick={() => setMainDerma(thumb)}
                >
                  <img 
                    src={thumb.thumb} 
                    alt={`Miniatura ${thumb.id}`} 
                    className="w-full h-full object-cover" 
                    onError={(e) => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} 
                  />
                </div>
              ))}
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