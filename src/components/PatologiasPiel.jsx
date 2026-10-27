import React from 'react';

const PatologiasPiel = () => {
  const patologias = [
    "Psoriasis",
    "Dermatitis atópica o de otro tipo",
    "Dermatitis seborreica",
    "Cáncer de piel",
    "Tiñas",
    "Biopsia de piel para diagnóstico de cáncer de piel",
    "Otras condiciones dermatológicas"
  ];

  return (
    <section 
      className="relative w-full -mt-10 md:-mt-1 min-h-[600px] md:min-h-[750px] lg:min-h-[850px] pt-24 pb-16 md:pt-36 md:pb-28 font-principal flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793083400/cyqfycnv6uyynrgx7o41.jpg')" }}
    >
      
      {/* Capa de protección muy sutil solo para celular por legibilidad, invisible en PC */}
      <div className="absolute inset-0 bg-white/30 md:bg-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Mitad Izquierda: Completamente vacía para dejar lucir el fondo gigante */}
        <div className="hidden md:block"></div>

        {/* Mitad Derecha: Contenido SIN MARCO */}
        <div className="flex flex-col py-6">
          
          {/* Título Principal */}
          <h2 
            className="text-5xl md:text-6xl lg:text-[4.5rem] text-[#053d57] leading-[1.05] mb-10"
            style={{ fontFamily: 'Alta, serif' }}
          >
            PATOLOGÍAS<br/>
            QUE TRATAMOS
          </h2>

          {/* Subtítulo con Ícono Personalizado */}
          <div className="flex flex-col items-start gap-4 mb-8">
            
            {/* Ícono de Enfermedades de la piel */}
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
              <img 
                src="/enfermedades-de-la-piel.svg" 
                alt="Icono Enfermedades de la piel" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            
            {/* ENFERMEDADES DE LA PIEL */}
            <h3 
              className="text-[#c59e93] text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide uppercase"
              style={{ fontFamily: 'Alta, serif' }}
            >
              ENFERMEDADES DE LA PIEL
            </h3>
          </div>

          {/* Lista de Patologías */}
          <ul className="flex flex-col gap-2 md:gap-2.5">
            {patologias.map((item, index) => (
              // AUMENTAMOS LA LETRA A text-lg md:text-xl
              <li key={index} className="flex items-start gap-3 md:gap-4 text-[#504a46] font-medium md:font-light text-lg md:text-xl leading-tight">
                {/* MANTENEMOS LOS PUNTOS CHIQUITOS y centramos su altura con mt-2.5 */}
                <span className="mt-2.5 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#504a46] flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
          
        </div>

      </div>
    </section>
  );
};

export default PatologiasPiel;