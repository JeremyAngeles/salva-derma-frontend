import React, { useState, useEffect } from 'react';

const CasosExitoAlopecia = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const casos = [
    { id: 1, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793086352/etlg0xgopotwvei2pbni.png' },
    { id: 2, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793086361/v43wu60bwgrn9zvxatah.png' },
    { id: 3, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793086354/itgcrgwtt4e0xrcfkkve.png' },
    { id: 4, img: 'https://res.cloudinary.com/da47iihxz/image/upload/v1793086367/qeby8xeztxheirwjt7hg.png' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % casos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [casos.length]);

  return (
    <section className="relative w-full py-14 sm:py-20 lg:py-28 bg-[#fafafa] font-principal flex flex-col items-center z-0 overflow-hidden lg:overflow-visible">

      {/* Franja gris de PC (igual que antes) */}
      <div className="hidden lg:block absolute top-[60%] left-0 w-full h-[350px] bg-[#e6e6e6] transform -translate-y-1/2 -z-10"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">

        {/* Título: 3 filas en celular/tablet, igual que antes en PC */}
        <h2
          className="text-[4.0vw] sm:text-[3.6vw] lg:text-[2.2rem] text-[#053d57] leading-[1.3] mb-3 sm:mb-5 max-w-[900px] tracking-wide uppercase whitespace-nowrap lg:whitespace-normal"
          style={{ fontFamily: 'Alta, serif' }}
        >
          LA ALOPECIA SÍ SE PUEDE TRATAR. NO CON MITOS,<br />
          NO CON PROMESAS, CON DERMATOLOGÍA Y<br />
          PROTOCOLOS CLÍNICOS REALES.
        </h2>

        {/* Subtítulo */}
        <p className="text-[#88807a] text-[clamp(11px,2.6vw,20px)] lg:text-base font-medium leading-relaxed mb-6 sm:mb-10 lg:mb-12 max-w-[700px]">
          Nuestro staff de dermatólogos capacitados en tricología te<br />
          presentan algunos de nuestros casos de éxito.
        </p>

        {/* Card + franja gris (celular/tablet) */}
        <div className="relative w-full max-w-[850px]">

          {/* Franja gris detrás del card: ancho de pantalla, centrada en el card (solo celular/tablet) */}
          <div className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[62%] bg-[#e6e6e6] -z-10"></div>

          {/* Contenedor de la foto */}
          <div className="w-full rounded-[1.2rem] sm:rounded-[2rem] overflow-hidden shadow-2xl bg-white relative transition-all duration-500 border border-gray-100">
            <div className="w-full lg:h-[420px] relative flex items-center justify-center bg-gray-50">
              <img
                src={casos[currentCase].img}
                alt={`Caso de éxito ${currentCase + 1}`}
                className="block w-full h-auto lg:h-full lg:object-cover transition-opacity duration-500"
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full min-h-[240px] lg:h-full object-cover bg-[#d9d9d9]' }}
              />

              {/* Etiquetas ANTES y DESPUÉS */}
              <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-0 w-1/2 flex justify-center pointer-events-none">
                <span
                  className="text-white text-[clamp(13px,3vw,26px)] lg:text-3xl tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  style={{ fontFamily: 'Alta, serif' }}
                >
                  ANTES
                </span>
              </div>

              <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 right-0 w-1/2 flex justify-center pointer-events-none">
                <span
                  className="text-white text-[clamp(13px,3vw,26px)] lg:text-3xl tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  style={{ fontFamily: 'Alta, serif' }}
                >
                  DESPUÉS
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Puntitos */}
        <div className="flex gap-3 mt-7 sm:mt-10">
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