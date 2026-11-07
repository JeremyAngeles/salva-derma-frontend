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
      className="relative w-full min-h-[86vw] lg:min-h-[850px] py-[8vw] lg:py-28 flex items-center bg-cover bg-[position:40%_center] lg:bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793083402/fssguvc8ef5bwqnf4by0.jpg')" }}
    >

      {/* Capa de protección sutil (solo PC) */}
      <div className="hidden lg:block absolute inset-0 bg-black/10 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full pl-[6vw] pr-4 lg:pr-0 lg:pl-[13.3vw] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        <div className="flex flex-col items-start text-left text-white max-w-[64%] lg:max-w-none">

          {/* Ícono */}
          <div className="w-[clamp(40px,8.6vw,90px)] h-[clamp(40px,8.6vw,90px)] lg:w-[clamp(64px,6.9vw,100px)] lg:h-[clamp(64px,6.9vw,100px)] flex items-center justify-center mb-[2.5vw] lg:mb-[clamp(24px,3vw,44px)]">
            <img
              src="/problemas-capilares.svg"
              alt="Icono Problemas Capilares"
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Título (una sola fila) */}
          <h2
            className="text-[clamp(20px,5.4vw,52px)] lg:text-[clamp(32px,3.4vw,52px)] leading-none font-light tracking-[0.02em] mb-[3vw] lg:mb-[clamp(20px,2.4vw,34px)] whitespace-nowrap"
            style={{ fontFamily: 'Alta, serif' }}
          >
            PROBLEMAS CAPILARES
          </h2>

          {/* Párrafo en Montserrat (celular y PC) */}
          <p 
            className="font-normal text-[clamp(11px,2.55vw,24px)] lg:text-[clamp(15px,1.45vw,21px)] leading-[1.22] mb-[7vw] lg:mb-[clamp(56px,8vw,115px)] text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Tratamos distintos tipos de alopecias con<br className="hidden lg:block" />
            {' '}tratamiento médico y la combinación de<br className="hidden lg:block" />
            {' '}nuestras mesoterapias (dutasteride, exosomas<br className="hidden lg:block" />
            {' '}y otros), plasma rico en plaquetas. Además,<br className="hidden lg:block" />
            {' '}también utilizamos tecnologías como<br className="hidden lg:block" />
            {' '}micropunción, Nanopore y láser.
          </p>

          {/* Lista en Montserrat (celular y PC) */}
          <ul className="flex flex-col gap-[0.8vw] lg:gap-[clamp(8px,0.85vw,12px)]">
            {problemas.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-[1.8vw] lg:gap-[clamp(10px,1.1vw,16px)] font-normal text-[clamp(11px,2.55vw,24px)] lg:text-[clamp(15px,1.45vw,21px)] leading-tight text-white"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>

        </div>

        <div className="hidden lg:block"></div>

      </div>
    </section>
  );
};

export default ProblemasCapilares;