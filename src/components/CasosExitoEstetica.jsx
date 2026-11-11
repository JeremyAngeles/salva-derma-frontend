import React, { useState, useEffect } from 'react';

const CasosExitoEstetica = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const casos = [
    { id: 1, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696123/antes_y_despu%C3%A9s_estetica_1.jpg' },
    { id: 2, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696120/antes_y_despu%C3%A9s_estetica_2.jpg' },
    { id: 3, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696121/antes_y_despu%C3%A9s_estetica_3.jpg' },
    { id: 4, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696123/antes_y_despu%C3%A9s_estetica_4.jpg' }
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
    <section className="w-full bg-white font-principal pt-6 pb-0 md:pt-[140px] md:pb-[95px]">
      
      {/* =========================================
          VISTA CELULAR (< md)
          ========================================= */}
      <div className="md:hidden block">
        {/* FRANJA DE FONDO */}
        <div
          className="w-full bg-cover bg-center flex items-center py-12"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1792811388/ltdu5utjhfkbul0cfkjz.png')"
          }}
        >
          <div className="w-full max-w-[1100px] mx-auto px-6 flex flex-col items-center gap-10">

            {/* FOTO Y PUNTOS AGRUPADOS (Puntos debajo del card) */}
            <div className="flex flex-col items-center w-full max-w-[310px] sm:max-w-[340px] shrink-0">
              
              {/* FOTO VERTICAL */}
              <div 
                className="relative z-20 w-full h-[620px] sm:h-[660px] rounded-2xl overflow-hidden bg-white shadow-lg touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img src={casos[0].img} alt="layout" className="w-full h-full object-cover invisible pointer-events-none" />
                {casos.map((caso, index) => (
                  <img
                    key={caso.id}
                    src={caso.img}
                    alt={`Caso Estética ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      currentCase === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    onError={(e) => {
                      e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
                      e.target.className = 'absolute top-0 left-0 w-full h-full object-cover bg-[#dcc4bc]';
                    }}
                  />
                ))}
              </div>

              {/* PUNTOS EXCLUSIVOS PARA CELULAR */}
              <div className="flex gap-[13px] mt-4 z-20">
                {casos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    aria-label={`Ver caso ${index + 1}`}
                    className={`w-[18px] h-[18px] rounded-full border-[1.5px] transition-colors shadow-sm ${
                      currentCase === index
                        ? 'bg-[#cfaaa6] border-[#cfaaa6]'
                        : 'bg-transparent border-[#1b4a72] hover:bg-[#1b4a72]/10'
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            {/* TEXTOS */}
            <div className="relative z-10 flex flex-col items-center text-center text-white -mx-3">
              {/* ✅ Título en 3 filas (solo celular) */}
              <h2
                className="text-[clamp(19px,6.2vw,28px)] leading-[0.95] tracking-tighter font-light mb-5 drop-shadow-md whitespace-nowrap"
                style={{ fontFamily: 'Alta, serif' }}
              >
                QUERERTE ES ACEPTARTE<br />
                COMO ERES, PERO TAMBIÉN ES<br />
                CONSTRUIRTE COMO QUIERES.
              </h2>
              <div className="w-[150px] h-[3px] bg-[#cfaaa6] mb-6"></div>
              
              {/* ✅ Párrafo en Montserrat (celular) */}
              <p 
                className="text-white text-[15px] font-normal leading-[1.35] max-w-[620px] drop-shadow-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Nuestros tratamientos en dermatología estética
                buscan calidad y belleza, sin olvidar que la piel
                es un órgano complejo que tiene distintas capas
                y también posibles enfermedades. Nuestro
                objetivo es mejorar la piel con conocimiento y
                ciencia que nos brinda nuestra especialidad.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          VISTA PC ORIGINAL (>= md)
          ========================================= */}
      <div className="hidden md:block">
        {/* FRANJA DE FONDO */}
        <div
          className="w-full bg-cover bg-center min-h-[580px] flex items-center"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1792811388/ltdu5utjhfkbul0cfkjz.png')"
          }}
        >
          {/* Contenedor interno centrado */}
          <div className="w-full max-w-[1100px] mx-auto px-0 flex flex-row items-center justify-between gap-10 py-0">

            {/* FOTO VERTICAL */}
            <div 
              className="relative z-20 w-full max-w-[310px] h-[680px] -my-[50px] shrink-0 rounded-2xl overflow-hidden bg-white shadow-lg touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Imagen base invisible para mantener la estructura y altura correcta */}
              <img
                src={casos[0].img}
                alt="layout"
                className="w-full h-full object-cover invisible pointer-events-none"
              />

              {/* Mapeo de todas las imágenes con transición de opacidad (fade) */}
              {casos.map((caso, index) => (
                <img
                  key={caso.id}
                  src={caso.img}
                  alt={`Caso Estética ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    currentCase === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  onError={(e) => {
                    e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
                    e.target.className = 'absolute top-0 left-0 w-full h-full object-cover bg-[#dcc4bc]';
                  }}
                />
              ))}
            </div>

            {/* TEXTOS */}
            <div className="relative z-10 flex flex-col items-end text-right text-white ml-auto">
              
              <h2
                className="text-[42px] lg:text-[46px] leading-[0.9] tracking-tighter font-light mb-5 drop-shadow-md"
                style={{ fontFamily: 'Alta, serif' }}
              >
                QUERERTE ES ACEPTARTE<br />
                COMO ERES, PERO<br />
                TAMBIÉN ES CONSTRUIRTE<br />
                COMO QUIERES.
              </h2>

              {/* Línea divisoria */}
              <div className="w-[220px] h-[3px] bg-[#cfaaa6] mb-6"></div>

              {/* ✅ Párrafo en Montserrat (PC) */}
              <p 
                className="text-white text-[16px] lg:text-[17px] font-normal leading-[1.35] max-w-[720px] drop-shadow-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Nuestros tratamientos en dermatología estética<br className="block" />
                buscan calidad y belleza, sin olvidar que la piel<br className="block" />
                es un órgano complejo que tiene distintas capas<br className="block" />
                y también posibles enfermedades. Nuestro<br className="block" />
                objetivo es mejorar la piel con conocimiento y<br className="block" />
                ciencia que nos brinda nuestra especialidad.
              </p>

            </div>

          </div>
        </div>

        {/* PUNTOS ORIGINALES DE PC: debajo de la franja, a la derecha de la foto */}
        <div className="w-full max-w-[1060px] mx-auto px-0 pt-7 flex justify-start pl-[385px]">
          <div className="flex gap-[13px]">
            {casos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                aria-label={`Ver caso ${index + 1}`}
                className={`w-[18px] h-[18px] rounded-full border-[1.5px] transition-colors shadow-sm ${
                  currentCase === index
                    ? 'bg-[#cfaaa6] border-[#cfaaa6]'
                    : 'bg-transparent border-[#1b4a72] hover:bg-[#1b4a72]/10'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default CasosExitoEstetica;