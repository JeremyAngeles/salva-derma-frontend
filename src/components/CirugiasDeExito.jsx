import React, { useState } from 'react';

const CirugiasDeExito = () => {
  const [modalType, setModalType] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galeriaCirugias = {
    otoplastia: {
      titulo: "OTOPLASTÍA",
      fotos: [
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812779/p9bmnzxjrxaeq4azr4zh.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812779/ce5rbh9lggez3edjthof.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812779/fkd4ud5dfq3hkslzkbsm.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812778/nlkiydpef7n30f3xx0xe.jpg"
      ]
    },
    blefaroplastia: {
      titulo: "BLEFAROPLASTÍA",
      fotos: [
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812773/gbbs7pi0he4hfvxfg2mg.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812773/gognvyrpotf6ohvhpcvo.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812773/byqz0f6uskuxgwgms4zq.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812773/pczqrigrpwo6dpgbqc1a.jpg"
      ]
    },
    armonizacion: {
      titulo: "ARMONIZACIÓN FACIAL",
      fotos: [
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812770/bumhyvjq1m0jahaudhmi.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812770/mahupocg6ywwbiwrt0cl.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812770/obrulpfl9kgmoqzycumf.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812769/nybm0x9ytsbu9npdbyrg.jpg"
      ]
    },
    lifting: {
      titulo: "LIFTING FACIAL",
      fotos: [
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812776/vazkn7p2qrmqdhi0r4vy.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812776/eduiaxjwabvly9nsoys8.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812776/sszdhxja0syokzcdrjg9.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812776/voqptyvx9swqeqfceqqp.jpg"
      ]
    },
    rinoseptoplastia: {
      titulo: "RINOSEPTOPLASTÍA",
      fotos: [
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812781/ujsjmjwr841ofgdrw3s8.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812781/pygpcw42bpyi088xonth.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812782/xcjcyfawlazm0fw79ifv.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812782/onwrm9qez8rr8fgcjyqn.jpg"
      ]
    }
  };

  const abrirModal = (tipo) => {
    setModalType(tipo);
    setCurrentImageIndex(0);
  };

  const cerrarModal = () => {
    setModalType(null);
  };

  const siguienteFoto = (e) => {
    e.stopPropagation();
    if (modalType) {
      const total = galeriaCirugias[modalType].fotos.length;
      setCurrentImageIndex((prev) => (prev + 1) % total);
    }
  };

  const anteriorFoto = (e) => {
    e.stopPropagation();
    if (modalType) {
      const total = galeriaCirugias[modalType].fotos.length;
      setCurrentImageIndex((prev) => (prev - 1 + total) % total);
    }
  };

  return (
    <section className="w-full bg-[#fcfbf9] py-16 md:py-24 font-principal relative">
      <div className="max-w-[1150px] mx-auto px-6 lg:px-8">
        
        {/* Título Principal */}
        <h2 
          className="text-[#053d57] text-[2.5rem] sm:text-[3.2rem] md:text-[4rem] text-center mb-12 md:mb-14 tracking-wide leading-none font-light"
          style={{ fontFamily: 'Alta, serif' }}
        >
          CIRUGÍAS DE ÉXITO
        </h2>

        {/* Cuadrícula Asimétrica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[270px_270px] gap-5 md:gap-6">
          
          {/* 1. OTOPLASTÍA */}
          <div 
            onClick={() => abrirModal('otoplastia')}
            className="relative w-full h-[260px] lg:h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden shadow-md group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616263/otoplastia.png" 
              alt="Otoplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[16px] md:text-[18px] tracking-wider uppercase drop-shadow-md">
                OTOPLASTÍA
              </h3>
            </div>
          </div>

          {/* 2. BLEFAROPLASTÍA */}
          <div 
            onClick={() => abrirModal('blefaroplastia')}
            className="relative w-full h-[260px] lg:h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden shadow-md group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616263/BLEFARO.png" 
              alt="Blefaroplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[16px] md:text-[18px] tracking-wider uppercase drop-shadow-md">
                BLEFAROPLASTÍA
              </h3>
            </div>
          </div>

          {/* 3. ARMONIZACIÓN FACIAL */}
          <div 
            onClick={() => abrirModal('armonizacion')}
            className="relative w-full h-[450px] sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden shadow-md group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616262/ARMONIZACI%C3%93N_FACIAL.png" 
              alt="Armonización Facial" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-7 text-center px-4">
              <h3 className="text-white font-bold text-[17px] md:text-[19px] tracking-wider uppercase leading-snug drop-shadow-md">
                ARMONIZACIÓN<br />FACIAL
              </h3>
            </div>
          </div>

          {/* 4. LIFTING FACIAL */}
          <div 
            onClick={() => abrirModal('lifting')}
            className="relative w-full h-[260px] lg:h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden shadow-md group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616264/LIFTING_FACIAL.png" 
              alt="Lifting Facial" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[16px] md:text-[18px] tracking-wider uppercase drop-shadow-md">
                LIFTING FACIAL
              </h3>
            </div>
          </div>

          {/* 5. RINOSEPTOPLASTÍA */}
          <div 
            onClick={() => abrirModal('rinoseptoplastia')}
            className="relative w-full h-[260px] lg:h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden shadow-md group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616264/RINOSEPTOPLASTIA.png" 
              alt="Rinoseptoplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

      {/* =========================================
          POP-UP / MODAL CON ANIMACIONES SUAVES
          ========================================= */}
      {modalType && (
        <div 
          onClick={cerrarModal}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-[800px] bg-white rounded-[2rem] overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col items-center transform transition-all duration-300 scale-100 animate-scaleUp"
          >
            {/* Botón de Cierre */}
            <button 
              onClick={cerrarModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-xl transition-colors z-20 shadow-sm"
              aria-label="Cerrar modal"
            >
              &times;
            </button>

            {/* Título del Modal */}
            <h3 
              className="text-[#053d57] text-2xl md:text-3xl tracking-wide font-light mb-6 uppercase text-center"
              style={{ fontFamily: 'Alta, serif' }}
            >
              {galeriaCirugias[modalType].titulo}
            </h3>

            {/* Contenedor de la Imagen con Transición de Fundido (Fade) */}
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] rounded-[1.5rem] overflow-hidden bg-gray-50 shadow-inner flex items-center justify-center">
              {galeriaCirugias[modalType].fotos.map((imgUrl, idx) => (
                <img 
                  key={idx}
                  src={imgUrl} 
                  alt={`${galeriaCirugias[modalType].titulo} ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain p-2 transition-all duration-700 ease-in-out ${
                    idx === currentImageIndex 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-95 pointer-events-none z-0'
                  }`}
                />
              ))}

              {/* Botón Anterior */}
              <button 
                onClick={anteriorFoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center text-xl transition-colors backdrop-blur-sm z-20 shadow-md"
                aria-label="Foto anterior"
              >
                &#10094;
              </button>

              {/* Botón Siguiente */}
              <button 
                onClick={siguienteFoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center text-xl transition-colors backdrop-blur-sm z-20 shadow-md"
                aria-label="Siguiente foto"
              >
                &#10095;
              </button>
            </div>

            {/* Indicadores de puntos (Dots) */}
            <div className="flex gap-3 mt-6">
              {galeriaCirugias[modalType].fotos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    currentImageIndex === idx 
                      ? 'bg-[#053d57] w-3.5 h-3.5 scale-110 shadow-sm' 
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a foto ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Estilos CSS sencillos integrados para las animaciones suaves */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </section>
  );
};

export default CirugiasDeExito;