import React, { useState, useEffect } from 'react';

/* ============================================================
   🎛️ TAMAÑO DEL TÍTULO EN CELULAR
   Cambia este número para hacerlo más grande o más pequeño.
   - Más grande = letras más grandes (ej: 4.8)
   - Más pequeño = letras más chicas (ej: 4.2)
   Si ves que alguna fila se corta por los lados, bájalo un poquito.
   Solo afecta celular (tablet y PC no cambian).
   ============================================================ */
const TITULO_CELULAR = 4.6;

const BG_IMG =
  'https://res.cloudinary.com/cgfzvuli/image/upload/v1792531259/04_-_FONDO_antes_despues.png';

const CasosExito = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const casos = [
    { id: 1, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793082266/errzembqrosryvi4oexv.png' },
    { id: 2, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793082637/cmfv74npcqr7gtgucim1.png' },
    { id: 3, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793082640/venm3yaflm3irfbadzqn.png' },
    { id: 4, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793082626/spvrd9wryuju1sk64atn.png' },
    { id: 5, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793082635/v8w0jcyi6wakpbiv1vdk.png' },
    { id: 6, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793082630/p4jtuuns4mrs9r6pl0ju.png' },
    { id: 7, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793082632/r1s7w2swzvv5apjod6n7.png' },
    { id: 8, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793082628/q6paz1utzz2s50piug2z.png' },
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
    <section className="relative w-full py-16 md:py-28 font-principal overflow-hidden flex flex-col items-center">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${BG_IMG}')` }}
      ></div>

      <div className="absolute inset-0 bg-white/10 lg:bg-white/40 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 flex flex-col items-center text-center">

        {/* TÍTULO: leading-[0.85] y lg:leading-[0.9] para pegar mucho más la distancia entre las 3 filas */}
        <h2
          className="text-[length:var(--tit)] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] text-[#053d57] leading-[0.85] lg:leading-[0.9] mb-5 w-full uppercase tracking-tighter drop-shadow-sm lg:drop-shadow-none flex flex-col items-center"
          style={{ fontFamily: 'Alta, serif', '--tit': `${TITULO_CELULAR}vw` }}
        >
          <span className="block whitespace-nowrap">PORQUE NUESTRA UNIDAD DERMOLÁSER VA</span>
          <span className="block whitespace-nowrap">MÁS ALLÁ DE LA ESTÉTICA, ES SALUD... IMPACTA</span>
          <span className="block whitespace-nowrap">EN TU PIEL, IMPACTA EN TUS EMOCIONES.</span>
        </h2>

        {/* Párrafo: Se le agregó la tipografía Montserrat para asegurar que sea igual en celular y PC */}
        <p 
          className="text-[#88807a] text-[13px] md:text-[17px] font-normal md:font-light leading-[1.15] mb-10 max-w-[750px] drop-shadow-sm md:drop-shadow-none"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Te dejamos algunos de nuestros casos de éxito, siempre realizado con nuestros<br className="hidden md:block" />
          protocolos combinados. Nuestra clave es combinar más de 1 tecnología.
        </p>

        {/* CARD DE FOTOS CON EVENTOS TÁCTILES */}
        <div 
          className="w-full max-w-[850px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl bg-white relative z-20 transition-all duration-500 border border-gray-100 touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full relative flex items-center justify-center bg-gray-50 lg:h-[420px]">
            
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
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute top-0 left-0 w-full h-full object-cover bg-[#ebdcd5]'; }}
              />
            ))}

            {/* Textos Flotantes de ANTES y DESPUÉS con letras muy juntas */}
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

        {/* Puntitos indicadores */}
        <div className="flex gap-3 mt-8 md:mt-10 relative z-20 bg-white/50 md:bg-transparent p-2 md:p-0 rounded-full">
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

export default CasosExito;