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
    <section className="w-full bg-[#fbfbfb] font-principal flex flex-col md:flex-row items-stretch">
      
      {/* Mitad Izquierda: Imagen */}
      <div 
        className="w-full md:w-1/2 h-[400px] md:h-auto bg-cover bg-center" 
        style={{ backgroundImage: "url('/patologias-piel.jpg')" }} // Reemplaza con tu imagen
      ></div>

      {/* Mitad Derecha: Contenido */}
      <div className="w-full md:w-1/2 px-8 py-16 md:px-16 lg:px-24 flex flex-col justify-center">
        
        {/* Título Principal */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl text-[#053d57] leading-[1.1] mb-10"
          style={{ fontFamily: 'Alta, serif' }}
        >
          PATOLOGÍAS<br/>
          QUE TRATAMOS
        </h2>

        {/* Subtítulo con Ícono Personalizado */}
        <div className="flex flex-col items-start gap-4 mb-8">
          
          {/* Ícono de Enfermedades de la piel (Limpio) */}
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
            <img 
              src="/enfermedades-de-la-piel.svg" 
              alt="Icono Enfermedades de la piel" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          
          <h3 className="text-[#c59e93] text-lg md:text-xl font-light tracking-[0.15em] uppercase">
            Enfermedades de la piel
          </h3>
        </div>

        {/* Lista de Patologías */}
        <ul className="flex flex-col gap-3.5">
          {patologias.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-[#6b625c] font-light text-[15px] md:text-base leading-snug">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#6b625c] flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  );
};

export default PatologiasPiel;