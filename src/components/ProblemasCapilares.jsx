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
    <section className="w-full bg-[#7ba9b7] font-principal flex flex-col-reverse md:flex-row items-stretch">
      
      {/* Mitad Izquierda: Contenido */}
      <div className="w-full md:w-1/2 px-8 py-16 md:pr-12 lg:pr-20 flex flex-col justify-center text-white">
        
        <div className="w-full max-w-[550px] ml-auto">
          
          {/* Ícono de Problemas Capilares (Personalizado y limpio) */}
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-6">
            <img 
              src="/problemas-capilares.svg" 
              alt="Icono Problemas Capilares" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
            style={{ fontFamily: 'Alta, serif' }}
          >
            PROBLEMAS CAPILARES
          </h2>

          <p className="font-light text-[15px] md:text-base leading-relaxed mb-10">
            Tratamos distintos tipos de alopecias con tratamiento médico y la combinación de nuestras mesoterapias (dutasteride, exosomas y otros), plasma rico en plaquetas. Además, también utilizamos tecnologías como micropunción, Nanopore y láser.
          </p>

          <ul className="flex flex-col gap-3.5">
            {problemas.map((item, index) => (
              <li key={index} className="flex items-start gap-3 font-light text-[15px] md:text-base leading-snug">
                <span className="mt-2 w-1 h-1 rounded-full bg-white flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* Mitad Derecha: Imagen */}
      <div 
        className="w-full md:w-1/2 h-[400px] md:h-auto bg-cover bg-center" 
        style={{ backgroundImage: "url('/problemas-capilares.jpg')" }} 
      ></div>

    </section>
  );
};

export default ProblemasCapilares;