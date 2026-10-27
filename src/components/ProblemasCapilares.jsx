import React from 'react';

const ProblemasCapilares = () => {
  const problemas = [
    "Alopecia androgenética",
    "Alopecia areata",
    "Alopecias cicatriciales",
    "Efluvio telógeno",
    "Otras condiciones dermatológicas"
  ];

  return (
    <section 
      // La imagen de Cloudinary cubre toda la sección de fondo
      className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[850px] py-16 md:py-28 font-principal flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793083402/fssguvc8ef5bwqnf4by0.jpg')" }}
    >
      
      {/* Capa de protección sutil */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/10 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full px-6 md:px-0 md:pl-[13.3vw] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div className="flex flex-col items-start text-left text-white bg-[#7ba9b7]/60 md:bg-transparent p-8 md:p-0 rounded-[2rem] backdrop-blur-md md:backdrop-blur-none shadow-lg md:shadow-none">
          
          {/* Ícono: círculo de ~86px, separado ~38px del título */}
          <div className="w-14 h-14 md:w-[clamp(64px,6.9vw,100px)] md:h-[clamp(64px,6.9vw,100px)] flex items-center justify-center mb-4 md:mb-[clamp(24px,3vw,44px)]">
            <img 
              src="/problemas-capilares.svg" 
              alt="Icono Problemas Capilares" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Título Principal (en UNA SOLA FILA) */}
          <h2 
            className="text-3xl md:text-[clamp(32px,3.4vw,52px)] leading-none font-light tracking-[0.02em] mb-4 md:mb-[clamp(20px,2.4vw,34px)] whitespace-nowrap"
            style={{ fontFamily: 'Alta, serif' }}
          >
            PROBLEMAS CAPILARES
          </h2>

          {/* Párrafo */}
          <p className="font-light text-base md:text-[clamp(15px,1.45vw,21px)] leading-[1.22] mb-10 md:mb-[clamp(56px,8vw,115px)]">
            Tratamos distintos tipos de alopecias con<br className="hidden md:block" />
            tratamiento médico y la combinación de<br className="hidden md:block" />
            nuestras mesoterapias (dutasteride, exosomas<br className="hidden md:block" />
            y otros), plasma rico en plaquetas. Además,<br className="hidden md:block" />
            también utilizamos tecnologías como<br className="hidden md:block" />
            micropunción, Nanopore y láser.
          </p>

          {/* Lista */}
          <ul className="flex flex-col gap-2 md:gap-[clamp(8px,0.85vw,12px)]">
            {problemas.map((item, index) => (
              <li 
                key={index} 
                className="flex items-center gap-3 md:gap-[clamp(10px,1.1vw,16px)] font-light text-[15px] md:text-[clamp(15px,1.45vw,21px)] leading-tight"
              >
                <span className="w-1 h-1 md:w-[3px] md:h-[3px] rounded-full bg-white flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* Mitad Derecha: vacía para dejar lucir el fondo */}
        <div className="hidden md:block"></div>

      </div>
    </section>
  );
};

export default ProblemasCapilares;