import React, { useState, useEffect } from 'react';

const CadaPasoCirugia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Las 4 imágenes completas de Antes y Después
  const casos = [
    'https://res.cloudinary.com/da47iihxz/image/upload/v1793123758/pkvt5vdbhpfjg1ewl4fi.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1793123760/bvdxvdnxvvi1gof8rk9i.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1793123759/rxbhqzrkkzprofqnexif.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1793123759/ebl5bpkcvqh32etudong.jpg',
  ];

  // Efecto para que cambien automáticamente cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % casos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [casos.length]);

  // --- LÓGICA DE SWIPE (Deslizar a los lados para cambiar fotos en celular) ---
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
    <>
      {/* =========================================
          VISTA CELULAR Y TABLET (< lg)
          ========================================= */}
      <section 
        className="lg:hidden relative w-full pt-8 sm:pt-14 pb-12 font-principal overflow-hidden bg-white bg-[length:100%_auto] bg-top bg-no-repeat"
        style={{ backgroundImage: `url('https://res.cloudinary.com/da47iihxz/image/upload/v1793336756/isqcijszaberdhnxmvtv.png')` }}
      >
        <div className="relative z-10 w-full max-w-[720px] mx-auto flex flex-col">
          
          {/* Bloque superior derecho: Pegado más a la derecha y animado */}
          <div className="w-full pl-4 pr-2 min-[390px]:pr-3 sm:pr-6 ml-auto flex flex-col items-end text-right pt-2 sm:pt-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            
            {/* TÍTULO MODIFICADO: Letras juntas (tracking-tighter) y filas pegadas (leading-[0.85]) */}
            <h2 
              className="flex flex-col items-end text-right text-[#053d57] text-[1.45rem] min-[375px]:text-[1.6rem] min-[410px]:text-[1.8rem] sm:text-[2.6rem] leading-[0.85] tracking-tighter mb-3 sm:mb-4"
              style={{ fontFamily: 'Alta, serif' }}
            >
              <span className="whitespace-nowrap">CADA PASO TE</span>
              <span className="whitespace-nowrap">ACERCA MÁS A TU</span>
              <span className="whitespace-nowrap">SUEÑO</span>
            </h2>

            {/* Subtítulo forzado a 2 filas */}
            <h3 
              className="flex flex-col items-end text-right text-[#7c7570] text-[9.5px] min-[375px]:text-[10.5px] min-[410px]:text-[11.5px] sm:text-[15.5px] tracking-wider uppercase leading-[1.2] mb-4 sm:mb-6 font-light"
              style={{ fontFamily: 'Alta, serif' }}
            >
              <span className="whitespace-nowrap">PARA TODO LO DEMÁS, EXISTE</span>
              <span className="whitespace-nowrap">LA CIRUGÍA PLÁSTICA</span>
            </h3>

            {/* Párrafo en 8 filas exactas más pegado a la derecha */}
            <div className="flex flex-col items-end text-right text-[#7c7570] text-[9.2px] min-[375px]:text-[10px] min-[410px]:text-[11px] sm:text-[14.5px] font-light leading-[1.35] sm:leading-[1.4] ml-auto">
              <span className="whitespace-nowrap">La cirugía plástica, sea facial o corporal</span>
              <span className="whitespace-nowrap">es un universo en el cual el centro es el</span>
              <span className="whitespace-nowrap">paciente, no existen dos resultados</span>
              <span className="whitespace-nowrap">iguales, cada caso es único y se refleja</span>
              <span className="whitespace-nowrap">en el plan pre - operatorio y se define</span>
              <span className="whitespace-nowrap">según las características de cada</span>
              <span className="whitespace-nowrap">paciente, ese es el secreto de un buen</span>
              <span className="whitespace-nowrap">resultado y lo que nos diferencia.</span>
            </div>

          </div>

          {/* Bloque inferior: Card animado y con Swipe */}
          <div className="w-full max-w-[680px] mx-auto mt-10 min-[390px]:mt-12 sm:mt-16 px-4 sm:px-6 flex flex-col items-center opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            
            <div 
              className="w-full aspect-[2/1] sm:h-[300px] md:h-[340px] rounded-[1.4rem] overflow-hidden shadow-lg relative bg-white/40 backdrop-blur-sm border border-white/30 group touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {casos.map((imgUrl, index) => (
                <img 
                  key={index}
                  src={imgUrl} 
                  alt={`Caso Antes y Después ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  onError={(e) => { 
                    e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; 
                    e.target.className = 'absolute inset-0 w-full h-full bg-[#d8d4d0] object-cover'; 
                  }}
                />
              ))}

              {/* Etiquetas ANTES y DESPUÉS en Montserrat, con letras más juntas */}
              <div className="absolute bottom-3 sm:bottom-5 left-0 w-1/2 flex justify-center pointer-events-none z-20">
                <span 
                  className="text-white text-sm sm:text-xl lg:text-2xl font-medium tracking-[0.02em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  ANTES
                </span>
              </div>

              <div className="absolute bottom-3 sm:bottom-5 right-0 w-1/2 flex justify-center pointer-events-none z-20">
                <span 
                  className="text-white text-sm sm:text-xl lg:text-2xl font-medium tracking-[0.02em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  DESPUÉS
                </span>
              </div>
            </div>

            {/* Puntitos del Carrusel */}
            <div className="flex items-center justify-center gap-3 mt-4">
              {casos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ver caso ${index + 1}`}
                  className={`w-4 h-4 rounded-full transition-all shadow-sm ${
                    currentSlide === index
                      ? 'bg-[#c9a79e] border border-[#c9a79e]'
                      : 'bg-white/50 border-[1.5px] border-[#053d57] hover:bg-[#053d57]/30'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          VISTA PC (lg:) - ANIMADA
          ========================================= */}
      <section 
        className="hidden lg:block relative w-full py-16 md:py-24 font-principal overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://res.cloudinary.com/da47iihxz/image/upload/v1793123581/ftcssw1an8q8mnb9cy7b.jpg')` }}
      >
        
        {/* Capa sutil de protección para legibilidad */}
        <div className="absolute inset-0 bg-white/20 md:bg-white/10 pointer-events-none z-0"></div>

        {/* Contenedor principal alineado a la derecha */}
        <div className="relative z-10 max-w-[1350px] mx-auto px-6 lg:px-12 flex justify-center lg:justify-end">
          
          <div className="w-full lg:w-[62%] flex flex-col items-center lg:items-end text-center lg:text-right">
            
            {/* Textos con animación fade-up */}
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {/* TÍTULO MODIFICADO: Letras juntas (tracking-tighter) y filas pegadas (leading-[0.85]) */}
              <h2 
                className="text-[#053d57] text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] xl:text-[3.8rem] leading-[0.85] tracking-tighter mb-2 drop-shadow-sm"
                style={{ fontFamily: 'Alta, serif' }}
              >
                CADA PASO TE ACERCA<br />
                MÁS A TU SUEÑO
              </h2>

              <h3 
                className="text-[#7c7570] text-[15px] sm:text-[18px] md:text-[21px] tracking-wider uppercase mb-1 md:mb-1.5 font-light drop-shadow-sm"
                style={{ fontFamily: 'Alta, serif' }}
              >
                PARA TODO LO DEMÁS, EXISTE LA CIRUGÍA PLÁSTICA
              </h3>

              <p className="text-[#7c7570] text-[15px] md:text-[17px] font-light leading-snug tracking-tight max-w-[650px] mt-4 md:mt-6 mb-8 md:mb-10 drop-shadow-sm">
                La cirugía plástica, sea facial o corporal es un universo en el cual el
                centro es el paciente, no existen dos resultados iguales, cada caso
                es único y se refleja en el plan pre - operatorio y se define según
                las características de cada paciente, ese es el secreto de un buen
                resultado y lo que nos diferencia.
              </p>
            </div>

            {/* Contenedor de la Imagen y Puntitos con animación */}
            <div className="w-full max-w-[680px] flex flex-col items-center opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              
              <div className="w-full h-[250px] sm:h-[300px] md:h-[340px] rounded-[1.4rem] overflow-hidden shadow-lg relative bg-white/40 backdrop-blur-sm border border-white/30 group">
                {casos.map((imgUrl, index) => (
                  <img 
                    key={index}
                    src={imgUrl} 
                    alt={`Caso Antes y Después ${index + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    onError={(e) => { 
                      e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; 
                      e.target.className = 'absolute inset-0 w-full h-full bg-[#d8d4d0] object-cover'; 
                    }}
                  />
                ))}

                {/* Etiquetas ANTES y DESPUÉS en Montserrat, con letras más juntas */}
                <div className="absolute bottom-4 md:bottom-6 left-0 w-1/2 flex justify-center pointer-events-none z-20">
                  <span 
                    className="text-white text-sm sm:text-xl lg:text-2xl font-medium tracking-[0.02em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    ANTES
                  </span>
                </div>

                <div className="absolute bottom-4 md:bottom-6 right-0 w-1/2 flex justify-center pointer-events-none z-20">
                  <span 
                    className="text-white text-sm sm:text-xl lg:text-2xl font-medium tracking-[0.02em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    DESPUÉS
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 mt-4">
                {casos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Ver caso ${index + 1}`}
                    className={`w-4 h-4 rounded-full transition-all shadow-sm ${
                      currentSlide === index
                        ? 'bg-[#c9a79e] border border-[#c9a79e]'
                        : 'bg-white/50 border-[1.5px] border-[#053d57] hover:bg-[#053d57]/30'
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ESTILOS DE ANIMACIÓN */}
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
    </>
  );
};

export default CadaPasoCirugia;