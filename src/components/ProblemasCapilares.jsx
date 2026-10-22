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
      // La imagen de Cloudinary ahora cubre TODA la sección de fondo
      className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[850px] py-16 md:py-28 font-principal flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792531283/03_-_cabello.png')" }}
    >
      
      {/* Capa de protección sutil para que el texto blanco resalte bien, especialmente en celular */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/10 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Mitad Izquierda: Contenido escalado al nuevo tamaño gigante */}
        <div className="flex flex-col text-white bg-[#7ba9b7]/60 md:bg-transparent p-8 md:p-0 rounded-[2rem] backdrop-blur-md md:backdrop-blur-none shadow-lg md:shadow-none">
          
          {/* Ícono de Problemas Capilares (Más grande) */}
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-6 md:mb-8">
            <img 
              src="/problemas-capilares.svg" 
              alt="Icono Problemas Capilares" 
              className="w-full h-full object-contain drop-shadow-md"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Título Principal */}
          <h2 
            className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] mb-6 md:mb-8 drop-shadow-md"
            style={{ fontFamily: 'Alta, serif' }}
          >
            PROBLEMAS<br className="hidden lg:block" /> CAPILARES
          </h2>

          {/* Párrafo */}
          <p className="font-light text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[550px] drop-shadow-sm">
            Tratamos distintos tipos de alopecias con tratamiento médico y la combinación de nuestras mesoterapias (dutasteride, exosomas y otros), plasma rico en plaquetas. Además, también utilizamos tecnologías como micropunción, Nanopore y láser.
          </p>

          {/* Lista */}
          <ul className="flex flex-col gap-4">
            {problemas.map((item, index) => (
              <li key={index} className="flex items-start gap-4 font-medium md:font-light text-base md:text-lg leading-snug drop-shadow-sm">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-white flex-shrink-0 shadow-sm"></span>
                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* Mitad Derecha: Completamente vacía para dejar lucir el fondo */}
        <div className="hidden md:block"></div>

      </div>
    </section>
  );
};

export default ProblemasCapilares;