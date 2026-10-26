import React, { useState } from 'react';

const ServicesSplit = () => {
  // =========================================
  // ESTADOS Y DATOS PARA CIRUGÍA PLÁSTICA (IZQUIERDA)
  // =========================================
  const casosCirugia = [
    { id: 1, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528788/1.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528845/1-mini.png' },
    { id: 2, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528789/2.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528845/2-mini.png' },
    { id: 3, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528789/3.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528845/3-mini.png' },
    { id: 4, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528789/4.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528844/4-mini.png' }
  ];

  const [mainCirugia, setMainCirugia] = useState(casosCirugia[0]);
  const [animandoCirugia, setAnimandoCirugia] = useState(false);

  const handleChangeCirugia = (caso) => {
    if (caso.id === mainCirugia.id || animandoCirugia) return;
    setAnimandoCirugia(true);
    setTimeout(() => {
      setMainCirugia(caso);
      setAnimandoCirugia(false);
    }, 250);
  };

  const thumbsCirugia = casosCirugia.filter(caso => caso.id !== mainCirugia.id);

  // =========================================
  // ESTADOS Y DATOS PARA DERMATOLOGÍA (DERECHA)
  // =========================================
  const casosDerma = [
    { id: 1, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528927/1-derma.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528899/1-mini-derma.png' },
    { id: 2, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528927/2-derma.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528899/2-mini-derma.png' },
    { id: 3, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528928/3-derma.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792529000/3-mini-derma.png' },
    { id: 4, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528928/4-derma.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528898/4-mini-derma.png' }
  ];

  const [mainDerma, setMainDerma] = useState(casosDerma[0]);
  const [animandoDerma, setAnimandoDerma] = useState(false);

  const handleChangeDerma = (caso) => {
    if (caso.id === mainDerma.id || animandoDerma) return;
    setAnimandoDerma(true);
    setTimeout(() => {
      setMainDerma(caso);
      setAnimandoDerma(false);
    }, 250);
  };

  const thumbsDerma = casosDerma.filter(caso => caso.id !== mainDerma.id);

  return (
    <section className="w-full flex flex-col lg:flex-row mt-24 md:mt-32 font-principal">
      
      {/* =========================================
          LADO IZQUIERDO: CIRUGÍA PLÁSTICA
          ========================================= */}
      <div 
        className="relative flex-1 px-4 md:px-6 lg:px-10 pb-4 md:pb-6 pt-0 flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1792797966/ymccrdcmzsfryyqlbzjw.png')" }}
      >
        <div className="relative z-10 w-full max-w-[600px] mx-auto flex flex-row gap-4 md:gap-6 lg:gap-8 items-stretch justify-center">
          
          {/* COLUMNA 1: Ícono arriba + Miniaturas alineadas abajo con la foto grande */}
          <div className="flex flex-col justify-between w-[90px] md:w-[130px] shrink-0">
            <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] -mt-[40px] md:-mt-[55px] lg:-mt-[65px] z-20 flex items-center justify-center drop-shadow-lg self-center">
              <img 
                src="/cirugia-icono.svg" 
                alt="Ícono Cirugía Plástica" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="w-full bg-white/20 p-2 md:p-3 rounded-[1rem] md:rounded-[1.5rem] flex flex-col gap-2 md:gap-3 backdrop-blur-md shadow-lg border border-white/10">
              {thumbsCirugia.map((thumb) => (
                <div 
                  key={thumb.id}
                  className="w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition-all duration-300 transform hover:scale-105 shadow-sm"
                  onClick={() => handleChangeCirugia(thumb)}
                >
                  <img 
                    src={thumb.thumb} 
                    alt={`Miniatura ${thumb.id}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: Caja grande interactiva más vertical hacia arriba */}
          <div className="flex-1 flex flex-col bg-white/20 p-2 md:p-3 rounded-[1.2rem] md:rounded-[1.8rem] backdrop-blur-md shadow-lg border border-white/10 -mt-6 md:-mt-10 z-10">
            <div className="rounded-[1rem] md:rounded-[1.2rem] overflow-hidden w-full h-full relative bg-black/40 aspect-[3/4.8]">
              <img 
                src={mainCirugia.full} 
                alt={`Cirugía Caso ${mainCirugia.id}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out ${
                  animandoCirugia ? 'opacity-0 scale-95 blur-[2px]' : 'opacity-100 scale-100 blur-0'
                }`} 
              />
            </div>
          </div>

        </div>

        {/* Título pegado a la caja */}
        <h2 
          className="relative z-10 text-white text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] tracking-tight text-center mt-1 md:mt-2 drop-shadow-md" 
          style={{ fontFamily: 'Alta, serif' }}
        >
          CIRUGÍA PLÁSTICA
        </h2>
      </div>

      {/* =========================================
          LADO DERECHO: DERMATOLOGÍA
          ========================================= */}
      <div 
        className="relative flex-1 px-4 md:px-6 lg:px-10 pb-4 md:pb-6 pt-0 flex flex-col items-center mt-16 lg:mt-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1792797965/kry2jr97ugxxj7o1tie1.png')" }}
      >
        <div className="relative z-10 w-full max-w-[600px] mx-auto flex flex-row gap-4 md:gap-6 lg:gap-8 items-stretch justify-center">
          
          {/* COLUMNA 1: Caja grande interactiva más vertical hacia arriba */}
          <div className="flex-1 flex flex-col bg-white/20 p-2 md:p-3 rounded-[1.2rem] md:rounded-[1.8rem] backdrop-blur-md shadow-lg border border-white/10 -mt-6 md:-mt-10 z-10">
            <div className="rounded-[1rem] md:rounded-[1.2rem] overflow-hidden w-full h-full relative bg-black/40 aspect-[3/4.8]">
              <img 
                src={mainDerma.full} 
                alt={`Dermatología Caso ${mainDerma.id}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out ${
                  animandoDerma ? 'opacity-0 scale-95 blur-[2px]' : 'opacity-100 scale-100 blur-0'
                }`} 
              />
            </div>
          </div>

          {/* COLUMNA 2: Ícono arriba + Miniaturas alineadas abajo con la foto grande */}
          <div className="flex flex-col justify-between w-[90px] md:w-[130px] shrink-0">
            <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] -mt-[40px] md:-mt-[55px] lg:-mt-[65px] z-20 flex items-center justify-center drop-shadow-lg self-center">
              <img 
                src="/derma-icono.svg" 
                alt="Ícono Dermatología" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="w-full bg-white/20 p-2 md:p-3 rounded-[1rem] md:rounded-[1.5rem] flex flex-col gap-2 md:gap-3 backdrop-blur-md shadow-lg border border-white/10">
              {thumbsDerma.map((thumb) => (
                <div 
                  key={thumb.id}
                  className="w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition-all duration-300 transform hover:scale-105 shadow-sm"
                  onClick={() => handleChangeDerma(thumb)}
                >
                  <img 
                    src={thumb.thumb} 
                    alt={`Miniatura ${thumb.id}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Título pegado a la caja */}
        <h2 
          className="relative z-10 text-white text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] tracking-tight text-center mt-1 md:mt-2 drop-shadow-md" 
          style={{ fontFamily: 'Alta, serif' }}
        >
          DERMATOLOGÍA
        </h2>
      </div>

    </section>
  );
};

export default ServicesSplit;