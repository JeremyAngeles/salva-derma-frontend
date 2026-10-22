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
      // Agregamos margen superior (mt-16 md:mt-24) para separarlo del hero
      // Aumentamos min-h y paddings para que la sección sea notablemente más grande
      className="relative w-full mt-16 md:mt-24 min-h-[600px] md:min-h-[750px] lg:min-h-[850px] py-16 md:py-28 font-principal flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792614076/Primer_plano_de_piel_con_ros%C3%A1cea_en_cl%C3%ADnica.png')" }}
    >
      
      {/* Capa de protección muy sutil solo para celular por legibilidad, invisible en PC */}
      <div className="absolute inset-0 bg-white/30 md:bg-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Mitad Izquierda: Completamente vacía para dejar lucir el fondo gigante */}
        <div className="hidden md:block"></div>

        {/* Mitad Derecha: Contenido SIN MARCO (Escalado para que combine con el nuevo tamaño) */}
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
          <div className="flex flex-col items-start gap-5 mb-10">
            
            {/* Ícono de Enfermedades de la piel (Más grande) */}
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
              <img 
                src="/enfermedades-de-la-piel.svg" 
                alt="Icono Enfermedades de la piel" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            
            <h3 className="text-[#c59e93] text-xl md:text-2xl font-medium tracking-[0.15em] uppercase">
              Enfermedades de la piel
            </h3>
          </div>

          {/* Lista de Patologías */}
          <ul className="flex flex-col gap-4">
            {patologias.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-[#504a46] font-medium md:font-light text-base md:text-lg leading-snug">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-[#c59e93] flex-shrink-0"></span>
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