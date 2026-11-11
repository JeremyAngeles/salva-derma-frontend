import React, { useState, useEffect } from 'react';

const CasosExitoAlopecia = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const casos = [
    { id: 1, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793086352/etlg0xgopotwvei2pbni.png' },
    { id: 2, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793086361/v43wu60bwgrn9zvxatah.png' },
    { id: 3, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793086354/itgcrgwtt4e0xrcfkkve.png' },
    { id: 4, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793086367/qeby8xeztxheirwjt7hg.png' }
  ];

  // Lógica para deslizar con el dedo (Swipe)
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentCase((prev) => (prev === casos.length - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentCase((prev) => (prev === 0 ? casos.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % casos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [casos.length]);

  return (
    <section className="relative w-full py-14 sm:py-20 lg:py-28 bg-[#fafafa] font-principal flex flex-col items-center z-0 overflow-hidden lg:overflow-visible">

      {/* Franja gris de PC */}
      <div className="hidden lg:block absolute top-[60%] left-0 w-full h-[350px] bg-[#e6e6e6] transform -translate-y-1/2 -z-10"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">

        {/* Título — letras más juntas (tracking-tighter) y filas pegadas (leading-[0.85]) */}
        <h2
          className="text-[4.0vw] sm:text-[3.6vw] lg:text-[2.2rem] text-[#053d57] leading-[0.85] mb-3 sm:mb-5 max-w-[900px] tracking-tighter uppercase whitespace-nowrap lg:whitespace-normal"
          style={{ fontFamily: 'Alta, serif' }}
        >
          LA ALOPECIA SÍ SE PUEDE TRATAR. NO CON MITOS,<br />
          NO CON PROMESAS, CON DERMATOLOGÍA Y<br />
          PROTOCOLOS CLÍNICOS REALES.
        </h2>

        {/* Subtítulo — ahora con fuente Montserrat */}
        <p 
          className="text-[#88807a] text-[clamp(11px,2.6vw,20px)] lg:text-base font-medium leading-[1.2] mb-6 sm:mb-10 lg:mb-12 max-w-[700px]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Nuestro staff de dermatólogos capacitados en tricología te<br />
          presentan algunos de nuestros casos de éxito.
        </p>

        {/* Card + franja gris (celular/tablet) */}
        <div 
          className="relative w-full max-w-[850px] touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Franja gris detrás del card (solo celular/tablet) */}
          <div className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[62%] bg-[#e6e6e6] -z-10"></div>

          {/* Contenedor de las fotos con transición de opacidad (fade) */}
          <div className="w-full rounded-[1.2rem] sm:rounded-[2rem] overflow-hidden shadow-2xl bg-white relative transition-all duration-500 border border-gray-100">
            <div className="w-full lg:h-[420px] relative flex items-center justify-center bg-gray-50">
              
              {/* Imagen base invisible para dar altura estructural en móvil */}
              <img
                src={casos[0].img}
                alt="layout"
                className="block w-full h-auto lg:h-full lg:object-cover invisible pointer-events-none"
              />

              {/* Mapeo de todas las imágenes para la transición fluida (fade) */}
              {casos.map((caso, index) => (
                <img
                  key={caso.id}
                  src={caso.img}
                  alt={`Caso de éxito ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full lg:object-cover transition-opacity duration-1000 ease-in-out ${
                    currentCase === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute top-0 left-0 w-full h-full object-cover bg-[#d9d9d9]' }}
                />
              ))}

              {/* Etiquetas ANTES y DESPUÉS en Montserrat, con letras más juntas */}
              <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-0 w-1/2 flex justify-center pointer-events-none z-20">
                <span
                  className="text-white text-sm sm:text-xl lg:text-2xl font-medium tracking-[0.02em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  ANTES
                </span>
              </div>

              <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 right-0 w-1/2 flex justify-center pointer-events-none z-20">
                <span
                  className="text-white text-sm sm:text-xl lg:text-2xl font-medium tracking-[0.02em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  DESPUÉS
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Puntitos indicadores */}
        <div className="flex gap-3 mt-7 sm:mt-10 relative z-20">
          {casos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCase(index)}
              className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all border border-[#bc9b92] ${
                currentCase === index ? 'bg-[#bc9b92] scale-110' : 'bg-transparent hover:bg-[#bc9b92]/30'
              }`}
              aria-label={`Ver caso ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CasosExitoAlopecia;