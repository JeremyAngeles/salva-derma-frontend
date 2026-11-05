import React, { useState, useEffect } from 'react';

const EsteticaEspecialistas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const casos = [
    {
      id: 1,
      antes: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139681/rjg5egyek8fk4eamqecq.png",
      despues: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139691/w4tpg2iitlmu7wloey6q.png"
    },
    {
      id: 2,
      antes: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139691/g3wguky1cilh2jw7aiwv.png",
      despues: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139690/nodbk5p5ymdxwezzoerw.png"
    },
    {
      id: 3,
      antes: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139690/lanvpqo7ccrh2fsowxwl.png",
      despues: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139689/ry1l2gmnsf6gls56kuew.png"
    },
    {
      id: 4,
      antes: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139689/i5cqfyzbwfbpcd3uqlxc.png",
      despues: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139681/uwst36igldkhuxvqtmaf.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % casos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [casos.length]);

  // --- LÓGICA DE SWIPE (Deslizar con el dedo) ---
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
      setCurrentSlide((prev) => (prev + 1) % casos.length); // Siguiente
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + casos.length) % casos.length); // Anterior
    }
  };

  return (
    <section className="relative w-full bg-white pt-[8vw] md:pt-[6vw] lg:pt-24 pb-[10vw] lg:pb-20 font-principal overflow-hidden">
      
      {/* Contenedor de títulos con animación */}
      <div className="max-w-[1400px] mx-auto px-[3vw] lg:px-12 text-center relative z-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <h2 
          className="text-[5.0vw] lg:text-[3.6rem] xl:text-[4.2rem] text-[#053d57] leading-none mb-[2.5vw] lg:mb-4 whitespace-nowrap"
          style={{ fontFamily: 'Alta, serif' }}
        >
          ESTÉTICA DE LA MANO DE ESPECIALISTAS
        </h2>

        {/* Subtítulo CELULAR Y TABLET (3 filas fijas) */}
        <p className="lg:hidden text-[#88807a] text-[3.2vw] font-medium leading-snug mx-auto mb-[5vw]">
          <span className="block whitespace-nowrap">Resaltamos la belleza respetando la naturalidad de</span>
          <span className="block whitespace-nowrap">cada rostro, siempre bajo tratamientos seguros y con</span>
          <span className="block whitespace-nowrap">nuestros especialistas altamente capacitados</span>
        </p>

        {/* Subtítulo PC (sin cambios) */}
        <p className="hidden lg:block text-[#88807a] text-[16px] font-medium leading-snug max-w-[700px] mx-auto mb-16">
          Resaltamos la belleza respetando la naturalidad de cada rostro, siempre bajo<br />
          tratamientos seguros y con nuestros especialistas altamente capacitados
        </p>
      </div>

      {/* Carrusel con Swipe y Animación */}
      <div 
        className="relative w-full mb-[6vw] lg:mb-10 opacity-0 animate-fade-up touch-pan-y"
        style={{ animationDelay: '0.4s' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Franja gris */}
        <div className="absolute inset-x-0 top-[18%] bottom-[19%] lg:top-[25%] lg:bottom-[25%] bg-[#d3d3d3] z-0"></div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-[3.2vw] lg:px-12">
          <div className="w-[99%] lg:w-full mx-auto rounded-[3vw] lg:rounded-[2rem] overflow-hidden shadow-lg flex flex-row bg-[#e8e4e1] relative">
            
            {casos.map((caso, index) => (
              <div 
                key={caso.id}
                className={`absolute inset-0 w-full h-full flex flex-row transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="relative w-1/2 h-[38vw] lg:h-[450px]">
                  <img 
                    src={caso.antes} 
                    alt={`Antes del tratamiento ${index + 1}`} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#d8d4d0] object-cover' }}
                  />
                  <div className="absolute bottom-[2.4vw] lg:bottom-6 left-0 w-full flex justify-center pointer-events-none">
                    <span 
                      className="text-white text-sm sm:text-xl lg:text-2xl font-medium tracking-[0.02em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      ANTES
                    </span>
                  </div>
                </div>
                
                <div className="block w-[0.4vw] lg:w-1 h-full bg-white absolute left-1/2 transform -translate-x-1/2 z-20"></div>

                <div className="relative w-1/2 h-[38vw] lg:h-[450px]">
                  <img 
                    src={caso.despues} 
                    alt={`Después del tratamiento ${index + 1}`} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#d8d4d0] object-cover' }}
                  />
                  <div className="absolute bottom-[2.4vw] lg:bottom-6 left-0 w-full flex justify-center pointer-events-none">
                    <span 
                      className="text-white text-sm sm:text-xl lg:text-2xl font-medium tracking-[0.02em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      DESPUÉS
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="w-full h-[38vw] lg:h-[450px] pointer-events-none"></div>

          </div>
        </div>
      </div>

      {/* Puntos */}
      <div className="flex justify-center items-center gap-[2.4vw] lg:gap-3 mb-[8vw] lg:mb-20">
        {casos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ver caso ${index + 1}`}
            className={`w-[3.2vw] h-[3.2vw] lg:w-3.5 lg:h-3.5 rounded-full transition-colors duration-300 ${
              currentSlide === index
                ? 'bg-[#d1b3ab]'
                : 'border border-[#053d57] lg:border-[#88807a] hover:bg-[#d1b3ab]/50'
            }`}
          />
        ))}
      </div>

      {/* Botón y redes con animación */}
      <div className="flex flex-col items-center opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        {/* Botón teléfono con icono limpio y grande */}
        <a 
          href="https://wa.me/51994060977" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-4 bg-gradient-to-r from-[#d1b3ab] to-[#efe0dc] text-white px-7 py-3.5 rounded-full hover:bg-[#c59e93] transition-colors mb-[5vw] lg:mb-8 shadow-md w-auto"
        >
          <img 
            src="/iconotelefonoblanco.svg" 
            alt="Teléfono" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="text-[5vw] sm:text-2xl lg:text-[26px] tracking-wide font-light">
            +51 994 060 977
          </span>
        </a>

        {/* Redes */}
        <div className="flex items-center gap-[2.5vw] lg:gap-4">
          <span className="text-[#88807a] font-light text-[2.6vw] lg:text-[15px]">Síguenos en:</span>
          
          <div className="flex gap-[1.8vw] lg:gap-3">
            <a href="#" className="w-[4.6vw] h-[4.6vw] lg:w-8 lg:h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </a>
            
            <a href="#" className="w-[4.6vw] h-[4.6vw] lg:w-8 lg:h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </a>
            
            <a href="#" className="w-[4.6vw] h-[4.6vw] lg:w-8 lg:h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img src="/tiktokcolor.svg" alt="TikTok" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </a>
          </div>
        </div>
      </div>

      {/* Estilos de animación */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </section>
  );
};

export default EsteticaEspecialistas;