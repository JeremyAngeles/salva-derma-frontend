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
      {/* Redujimos el padding general y lo dejamos configurado para empujar al hijo */}
      <div className="w-full md:w-1/2 px-8 py-16 md:pr-12 lg:pr-20 flex flex-col justify-center text-white">
        
        {/* NUEVO CONTENEDOR: ml-auto empuja todo el bloque hacia la derecha */}
        <div className="w-full max-w-[550px] ml-auto">
          
          {/* Ícono y Título */}
          <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mb-6">
            {/* Ícono representativo capilar */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
            style={{ fontFamily: 'Alta, serif' }}
          >
            PROBLEMAS CAPILARES
          </h2>

          {/* Párrafo descriptivo */}
          <p className="font-light text-[15px] md:text-base leading-relaxed mb-10">
            Tratamos distintos tipos de alopecias con tratamiento médico y la combinación de nuestras mesoterapias (dutasteride, exosomas y otros), plasma rico en plaquetas. Además, también utilizamos tecnologías como micropunción, Nanopore y láser.
          </p>

          {/* Lista de Problemas */}
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
        style={{ backgroundImage: "url('/problemas-capilares.jpg')" }} // Reemplaza con tu imagen
      ></div>

    </section>
  );
};

export default ProblemasCapilares;