import React, { useState, useEffect } from 'react';

const BG_IMG =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793073268/izypihwvkgtbsphqblqo.png';

const TratamientosLaserList = () => {
  const tratamientos = [
    {
      titulo: "DISTINTOS TIPOS DE CICATRICES:",
      descripcion: "De acné, queloides, por accidentes, cortes\ny postquirúrgicas."
    },
    {
      titulo: "ENFERMEDADES INFLAMATORIAS Y ROJECES :",
      descripcion: "Acné, rosácea y telangiectasias."
    },
    {
      titulo: "MANCHAS FACIALES:",
      descripcion: "Pecas, melasma, manchas postinflamatorias,\nlentigo y nevus de Ota."
    },
    {
      titulo: "MANCHAS CORPORALES:",
      descripcion: "En axilas, espalda e ingle."
    },
    {
      titulo: "ALTERACIONES DE LA PIEL:",
      descripcion: "Verrugas, lunares, acrocordones, estrías\ny queratosis."
    },
    {
      titulo: "ONICOMICOSIS",
      descripcion: ""
    },
    {
      titulo: "REJUVENECIMIENTO FACIAL:",
      descripcion: "Líneas de expresión, flacidez, poros dilatados,\ntextura de piel, etc."
    }
  ];

  const imagenesCarrusel = [
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792809827/jitmumcc0pcjnywzpenf.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792809827/wsyn2srophcs32xe7ovd.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792809827/tylg0m7as8g0mwgobzua.jpg'
  ];

  const [currentImg, setCurrentImg] = useState(0);

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
      setCurrentImg((prev) => (prev === imagenesCarrusel.length - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentImg((prev) => (prev === 0 ? imagenesCarrusel.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === imagenesCarrusel.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [imagenesCarrusel.length]);

  return (
    <section className="relative w-full lg:py-28 font-principal overflow-hidden bg-[#fcfbf9] lg:bg-transparent">

      {/* Fondo PC (igual que el original) */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${BG_IMG}')` }}
      ></div>

      {/* Capa de protección (solo PC) */}
      <div className="hidden lg:block absolute inset-0 bg-black/10 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-0 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 lg:gap-28 items-stretch">

        {/* =========================================
            COLUMNA IZQUIERDA: Textos y Lista
            ========================================= */}
        <div className="relative flex flex-col h-full justify-center px-6 sm:px-14 pt-12 sm:pt-16 pb-[210px] sm:pb-[280px] lg:px-0 lg:py-4">

          {/* Fondo SOLO celular/tablet (en PC no existe) */}
          <div
            className="lg:hidden absolute inset-0 -z-10 bg-cover bg-no-repeat bg-[position:left_center]"
            style={{ backgroundImage: `url('${BG_IMG}')` }}
          ></div>

          {/* Título */}
          <h2
            className="whitespace-nowrap text-[2rem] min-[400px]:text-[2.4rem] sm:text-5xl lg:text-[3rem] text-white leading-tight mb-3 sm:mb-5 lg:mb-6 drop-shadow-md text-center lg:text-left"
            style={{ fontFamily: 'Alta, serif' }}
          >
            TRATAMIENTOS LÁSER
          </h2>

          {/* Párrafo introductorio */}
          <p className="text-white text-[14px] min-[400px]:text-[15px] sm:text-xl lg:text-lg font-light leading-snug lg:leading-relaxed mb-8 sm:mb-12 lg:mb-10 max-w-[300px] sm:max-w-[520px] lg:max-w-[95%] mx-auto lg:mx-0 text-center lg:text-left drop-shadow-sm">
            Nuestra unidad nos permite tratar distintas enfermedades y mejorar la piel de manera precisa:
          </p>

          {/* Lista de tratamientos */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-5 flex-1 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-none mx-auto lg:mx-0">
            {tratamientos.map((item, index) => (
              <div key={index} className="flex flex-col drop-shadow-sm">
                <h3
                  className="text-white font-bold text-[13.5px] min-[400px]:text-[14.5px] sm:text-lg lg:text-[15px] tracking-wide uppercase leading-snug"
                  style={{ paddingLeft: '1.25rem', textIndent: '-1.25rem' }}
                >
                  <span
                    className="inline-block w-2.5 h-2.5 lg:w-[11px] lg:h-[11px] rounded-full bg-white shadow-sm align-baseline"
                    style={{ marginRight: '0.5rem', textIndent: 0 }}
                  ></span>
                  {item.titulo}
                </h3>

                {item.descripcion && (
                  <p className="pl-5 text-white/90 font-light text-[13px] min-[400px]:text-[14px] sm:text-base lg:text-[15px] mt-1 leading-snug">
                    {item.descripcion.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* =========================================
            COLUMNA DERECHA: Carrusel
            Celular/tablet: se monta sobre el fondo (margen negativo)
            ========================================= */}
        <div className="relative z-20 w-full h-full min-h-[500px] sm:min-h-[620px] lg:min-h-[750px] max-w-[500px] mx-auto lg:ml-auto px-6 sm:px-0 pt-0 pb-10 sm:pb-14 lg:pb-0 -mt-[170px] sm:-mt-[230px] lg:mt-0 flex">

          <div className="w-full flex rounded-[2.2rem] bg-[#e3cbc5] border border-white/30 p-4 md:p-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">

            {/* Contenedor del carrusel con eventos táctiles agregados */}
            <div 
              className="relative w-full rounded-[1.6rem] overflow-hidden ring-1 ring-[#c9a79f]/40 bg-white/20 touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {imagenesCarrusel.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Tratamiento láser ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImg ? 'opacity-100' : 'opacity-0'
                  }`}
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
                />
              ))}

              <div className="absolute bottom-6 left-0 w-full flex justify-center gap-3 z-20">
                {imagenesCarrusel.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImg(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      currentImg === idx ? 'bg-white w-3 h-3 scale-110' : 'bg-white/50 w-3 h-3 hover:bg-white/80'
                    }`}
                    aria-label={`Ver imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TratamientosLaserList;